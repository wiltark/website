(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(618));const o={title:"Welcome",cover:".gitbook/assets/cdd2be42-4bfb-40ea-aa19-b046eff15378.jpeg",coverY:-4.149292149292149,slug:"/"},i={unversionedId:"guides/home",id:"guides/home",isDocsHomePage:!1,title:"Welcome",description:"aoi.js",source:"@site/docs/guides/home.md",slug:"/",permalink:"/docs/",version:"current",sidebar:"someSidebar",next:{title:"Setup",permalink:"/docs/guides/setup"}},c=[{value:"aoi.js",id:"aoijs",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Setting up",id:"setting-up",children:[]},{value:"Links",id:"links",children:[]}],s={toc:c};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"aoijs"},"aoi.js"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Welcome to the page of aoi.js Documentation")),Object(a.b)("h3",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://aoi.js.org/assets/images/aoijs-new.png",alt:null})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://aoi.js.org/invite"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/discord/773352845738115102?color=5865F2%5C&logo=discord%5C&logoColor=white",alt:"Discord Server"}))," ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/aoi.js"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/aoi.js.svg?maxAge=3600",alt:"NPM Version"}))," ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/aoi.js"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/npm/dt/aoi.js.svg?maxAge=3600",alt:"NPM Downloads"}))),Object(a.b)("h4",{id:"quick-about"},"Quick About"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Aoi.JS is a package with simplified and ready-to-use functions for Discord Bot Developers to develop their own Discord Bots."))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Aiming to be the easiest package to learn"))," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"It's swift and flexible using functions."))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Open Source for the Community \u2766"))),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Node.JS 16.6.0 or newer is required.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh-session"},"npm install aoi.js\n")),Object(a.b)("h3",{id:"setting-up"},"Setting up"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.Bot({\ntoken: "DISCORD BOT TOKEN",\nprefix: "DISCORD BOT PREFIX",\nintents: ["GUILDS", "GUILD_MESSAGES"]\n})\n\n//Events\nbot.onMessage()\n\n//Command Example (ping)\nbot.command({\nname: "ping",\ncode: `Pong! $pingms`\n})\n\n//Ready Event\nbot.readyCommand({\n    channel: "",\n    code: `$log[Ready on $userTag[$clientID]]`\n})\n')),Object(a.b)("h3",{id:"links"},"Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://aoi.js.org"},"Website")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/aoi.js"},"NPM")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/AkaruiDevelopment/aoi.js"},"Github")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://discord.gg/HMUfMXDQsV"},"Discord Server")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://akarui.leref.ga/v/aoi.js/"},"Documentation"))))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);