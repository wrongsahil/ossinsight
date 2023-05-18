"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"Step 4: Setup Dashboard with Vercel",sidebar_position:4},i=void 0,a={unversionedId:"workshop/ossinsight-lite/setup-vercel",id:"workshop/ossinsight-lite/setup-vercel",title:"Step 4: Setup Dashboard with Vercel",description:"1. With the data synced to TiDB Cloud, use your preferred SQL client to connect to the TiDB database using the connection information provided in Step 2.",source:"@site/docs/workshop/ossinsight-lite/setup-vercel.md",sourceDirName:"workshop/ossinsight-lite",slug:"/workshop/ossinsight-lite/setup-vercel",permalink:"/docs/workshop/ossinsight-lite/setup-vercel",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/ossinsight-lite/setup-vercel.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Step 4: Setup Dashboard with Vercel",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Step 3: Setup GitHub Action",permalink:"/docs/workshop/ossinsight-lite/setup-github-action"},next:{title:"Advanced Features",permalink:"/docs/workshop/ossinsight-lite/advanced-features"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"With the data synced to TiDB Cloud, use your preferred SQL client to connect to the TiDB database using the connection information provided in Step 2."),(0,o.kt)("li",{parentName:"ol"},"Start querying the data to get insights on repositories. Some sample SQL queries you might use to explore the data are:\nFor example, to calculate how many contributors for repo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  COUNT(DISTINCT `id`)\nFROM\n  `users`;\n")),(0,o.kt)("p",null,"To find out how many open issues: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT repos.owner, repos.name, COUNT(*) as open_issue_count\nFROM repos\nJOIN issues ON repos.id = issues.repo_id\nWHERE issues.closed = 0\nGROUP BY repos.owner, repos.name\nORDER BY open_issue_count DESC;\n")),(0,o.kt)("p",null,"To find out the average followers count of the users who starred in this repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  AVG(users.`followers_count`)\nFROM\n  `starred_repos`\n  JOIN `users` ON `starred_repos`.`user_id` = `users`.`id`;\n")))}u.isMDXComponent=!0}}]);