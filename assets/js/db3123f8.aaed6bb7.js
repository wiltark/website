"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"$addFilter",description:"Adds filter(s) to playing track(s)."},i=void 0,o={unversionedId:"functions/addfilter",id:"functions/addfilter",title:"$addFilter",description:"Adds filter(s) to playing track(s).",source:"@site/docs/functions/addfilter.md",sourceDirName:"functions",slug:"/functions/addfilter",permalink:"/docs/functions/addfilter",draft:!1,tags:[],version:"current",frontMatter:{title:"$addFilter",description:"Adds filter(s) to playing track(s)."},sidebar:"someSidebar",previous:{title:"$addFields",permalink:"/docs/functions/addfields"},next:{title:"$addMessageReactions",permalink:"/docs/functions/addmessagereactions"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addFilter")," adds the given filter(s) to track, removes the settled filters."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Requires ",(0,a.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$addFilter[filters]\n\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The filters will be added to track"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h6",{id:"footnotes"},"Footnotes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"To know other filters as well, please check ",(0,a.kt)("a",{parentName:"em",href:"https://ffmpeg.org/ffmpeg-filters.html"},"FFmpeg filters"),"."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'We already made a "nightcore" filter for you, so there is the example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "filter-nightcore",\n  code: `\n  $let[filter;$addFilter[{"nightcore": 1.10}]]\n  `\n//It will make your track like a nightcore, don\'t use it on a Nightcore Mix :)\n});\n')),(0,a.kt)("p",null,"And here it goes for a custom filter from we checked on FFmpeg:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "filter-custom",\n  code: `\n  8D audio: on!\n  $let[filter;$addFilter[{"aecho": "1.0:0.8:50:0.5"}]]\n  `\n//This will make the track like 8D!\n});\n')),(0,a.kt)("p",null,"We used ",(0,a.kt)("inlineCode",{parentName:"p"},"$let")," function on there, cause ",(0,a.kt)("inlineCode",{parentName:"p"},"$addFilter")," function returns as a message. ",(0,a.kt)("inlineCode",{parentName:"p"},"$let")," function can be tricky kind of those situtations :)"))}p.isMDXComponent=!0}}]);