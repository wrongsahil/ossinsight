import mustache from "mustache";
import {Logger} from "pino";
import CacheBuilder from "../../cache/CacheBuilder";
import { CachedData } from "../../cache/Cache";
import { DateTime } from "luxon";
import { QueryLoader } from "./QueryLoader";
import {Pool, QueryOptions} from "mysql2/promise";
import { QueryParser } from "./QueryParser";
import {PersistConfig, QuerySchema} from "../../../types/query.schema";
import { TiDBQueryExecutor } from "../../executor/query-executor/TiDBQueryExecutor";
import {presetQueryTimer, measure, presetQueryCounter} from "../../../metrics";

export const enum QueryType {
  QUERY = 'query',
  EXPLAIN = 'explain',
}

export interface Options {
  refreshCache?: boolean;
  ignoreOnlyFromCache?: boolean;
  queryOptions?: Partial<QueryOptions>;
}

export class QueryRunner {

    constructor(
      private readonly logger: Logger,
      private readonly queryLoader: QueryLoader,
      private readonly queryParser: QueryParser,
      private readonly cacheBuilder: CacheBuilder,
      private readonly queryExecutor: TiDBQueryExecutor,
      private readonly tidb: Pool
    ) {}

    async query <T> (
      queryName: string,
      params: Record<string, any>,
      options?: Options
    ): Promise<CachedData<T>> {
      return this.run(QueryType.QUERY, queryName, params, options);
    }
  
    async explain <T> (
      queryName: string,
      params: Record<string, any>,
      options?: Options
    ): Promise<CachedData<T>> {
      return this.run(QueryType.EXPLAIN, queryName, params, {
        ...options,
        ignoreOnlyFromCache: true
      });
    }

    async run(
      type: QueryType,
      queryName: string,
      params: Record<string, any>,
      options: Options = {}
    ) {
        const { ignoreOnlyFromCache = false, refreshCache = false, queryOptions } = options;
        const [queryConfig, templateSQL] = await this.queryLoader.load(queryName);
        if (!queryConfig || !templateSQL) {
          throw new Error(`Query config ${queryName} not found.`);
        }

        presetQueryCounter.inc();

        const { cacheHours = -1, onlyFromCache = false, cacheProvider } = queryConfig;
        const queryKey = this.buildQueryKey(type, queryName);
        const cacheKey = this.buildCacheKey(type, queryName, queryConfig, params);
        const cache = this.cacheBuilder.build(
          cacheProvider,
          cacheKey,
          cacheHours,
          ignoreOnlyFromCache ? false : onlyFromCache,
          refreshCache
        );
    
        return cache.load(async () => {
          return await measure(presetQueryTimer, async () => {
            const sql = await this.queryParser.parse(templateSQL, queryConfig, params);

            // Execute query.
            const start = DateTime.now();
            const [rows, fields] = await this.queryExecutor.execute<any[]>(queryKey, {
              sql: sql,
              ...queryOptions
            });
            const end = DateTime.now();

            // Persist the query result.
            if (type === QueryType.QUERY && queryConfig.persist) {
              await this.persistResult(`persist:${queryKey}`, queryConfig.persist, params, rows);
            }

            return {
              params: params,
              requestedAt: start,
              finishedAt: end,
              spent: end.diff(start).as('seconds'),
              sql,
              fields: fields,
              data: rows,
            };
          })
        });
    }

    async persistResult(key: string, cfg: PersistConfig, params: Record<string, any>, rows: any[]) {
      const { series = [], fields = [] } = cfg;
      const commonCtx: Record<string, any> = {
        $params: params,
        $now: function () {
          return function (format: string, render: any) {
            return render(DateTime.now().toFormat(format))
          }
        }
      };
      const columns = [
        ...series,
        ...fields
      ];
      const values = rows.map((row) => {
        const ctx = {
          ...commonCtx,
          $row: row,
        };
        return columns
          .filter((s) => Boolean(s.name))
          .map(s => {
            return s.expression ?
              mustache.render(s.expression, ctx) :
              ctx.$row[s.name]
          })
      });
      const insertSQL = `
        INSERT INTO ${cfg.tableName} (${columns.map(s => s.name).join(',')}) VALUES ?
        ON DUPLICATE KEY UPDATE ${columns.map(c => `${c.name} = VALUES(${c.name})`).join(',')};
      `;
      await this.tidb.query(insertSQL, [values]);
      this.logger.info(`Persisted query result <${key}> to table <${cfg.tableName}>.`);
    }

    private buildQueryKey (type: QueryType, queryName: string): string {
        return `${type}:${queryName}`;
    }
    
    private buildCacheKey (type: QueryType, queryName: string, queryConfig: QuerySchema, params: Record<string, any>): string {
        return `${this.buildQueryKey(type, queryName)}:${this.serializeParams(queryConfig, params)}`;
    }
    
    private serializeParams (queryConfig: QuerySchema, params: Record<string, any>): string {
        return queryConfig.params.map(p => params[p.name]).join('_');
    }

}