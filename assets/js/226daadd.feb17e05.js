"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8316],{26428:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),s=["components"],a={title:"Difference Between MySQL Compatible Databaases ..."},l=void 0,c={permalink:"/blog/difference-between-mysql-compatible-databases",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/difference-between-mysql-compatible-databases.md",source:"@site/blog/difference-between-mysql-compatible-databases.md",title:"Difference Between MySQL Compatible Databaases ...",description:"Contributors",date:"2022-04-22T03:59:25.581Z",formattedDate:"April 22, 2022",tags:[],readingTime:.81,truncated:!1,authors:[],prevItem:{title:"Changelog",permalink:"/blog/changelog"},nextItem:{title:"Data Preparation for Analytics",permalink:"/blog/how-it-works"}},p={authorsImageUrls:[]},u=[{value:"Contributors",id:"contributors",children:[],level:2},{value:"Contributions",id:"contributions",children:[],level:2},{value:"Code",id:"code",children:[{value:"The top 10 pull request code additions+deletions of <code>percona/percona-server</code>",id:"the-top-10-pull-request-code-additionsdeletions-of-perconapercona-server",children:[],level:3}],level:2},{value:"Pull Requests",id:"pull-requests",children:[],level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Contributors open pull requests, issues and comment in pr body & issue body")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-contributor.html?theme=vintage&v=3"}),(0,i.kt)("h2",{id:"contributions"},"Contributions"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Total Number of Pull Request + Issue + Comment + Review")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-contribution.html?theme=vintage&v=3"}),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"lines of modified code: additions + deletions")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-code.html?theme=vintage&v=3"}),(0,i.kt)("h3",{id:"the-top-10-pull-request-code-additionsdeletions-of-perconapercona-server"},"The top 10 pull request code additions+deletions of ",(0,i.kt)("inlineCode",{parentName:"h3"},"percona/percona-server")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"gharchive_dev> select (additions+deletions) as lines_modified, concat('https://github.com/percona/percona-server/pull/', number) from github_ev\n            -> ents where repo_name = 'percona/percona-server' order by lines_modified desc limit 10;\n+----------------+-------------------------------------------------------------------+\n| lines_modified | concat('https://github.com/percona/percona-server/pull/', number) |\n+----------------+-------------------------------------------------------------------+\n| 1847591        | https://github.com/percona/percona-server/pull/3474               |\n| 1847131        | https://github.com/percona/percona-server/pull/3474               |\n| 1611523        | https://github.com/percona/percona-server/pull/3978               |\n| 1611239        | https://github.com/percona/percona-server/pull/3978               |\n| 1526190        | https://github.com/percona/percona-server/pull/4204               |\n| 1525900        | https://github.com/percona/percona-server/pull/4235               |\n| 1525495        | https://github.com/percona/percona-server/pull/4235               |\n| 1436855        | https://github.com/percona/percona-server/pull/4204               |\n| 919569         | https://github.com/percona/percona-server/pull/4407               |\n| 831538         | https://github.com/percona/percona-server/pull/3604               |\n+----------------+-------------------------------------------------------------------+\n10 rows in set\nTime: 0.168s\ngharchive_dev>\n")),(0,i.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pull requests trend")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-pull-request.html?theme=vintage&v=3"}))}h.isMDXComponent=!0}}]);