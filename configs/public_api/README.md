# OSSInsight Public API

Here are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.

## Usage

The OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.

### Base URL

All API requests are based on the following URL:

```shell
https://api.ossinsight.io/public
```

### Authentication

No authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.

> Note:
> We will add authentication way for larger API requests in future releases.

### Rate Limit

For each IP address, the rate limit allows for up to **600 requests per hour**.

### Example

For example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:

```shell
curl https://api.ossinsight.io/public/repos/pingcap/tidb/stargazer/locations
```

<details>

<summary>Example Response</summary>

```json
{
  "type": "sql_endpoint",
  "data": {
    "columns": [
      {
        "col": "country_or_area",
        "data_type": "CHAR",
        "nullable": true
      },
      {
        "col": "count",
        "data_type": "BIGINT",
        "nullable": true
      },
      {
        "col": "percentage",
        "data_type": "DECIMAL",
        "nullable": true
      }
    ],
    "rows": [
      {
        "count": "9183",
        "country_or_area": "CN",
        "percentage": "0.5936"
      },
      {
        "count": "1542",
        "country_or_area": "US",
        "percentage": "0.0997"
      },
      {
        "count": "471",
        "country_or_area": "JP",
        "percentage": "0.0304"
      }
    ],
    "result": {
      "code": 200,
      "message": "Query OK!",
      "start_ms": 1690351487809,
      "end_ms": 1690351487930,
      "latency": "121ms",
      "row_count": 132,
      "row_affect": 0,
      "limit": 300,
      "databases": [
        "gharchive_dev"
      ]
    }
  }
}
```

</details>

## Categories

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {
    // Exclude Introduction and Showcase pages
    return item.docId !== 'api/showcase' && item.docId !== 'api/ossinsight-public-api';
})}/>
```

## Request New API 

If the API in the documentation does not meet your query requirements, please contact us as follows:

- Email us at ossinsight@pingcap.com
- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)
