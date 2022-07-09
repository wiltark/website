(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{450:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(618));const a={title:"$setRoleColor",description:"Changes the color of the specified role's ID"},c={unversionedId:"functions/setrolecolor",id:"functions/setrolecolor",isDocsHomePage:!1,title:"$setRoleColor",description:"Changes the color of the specified role's ID",source:"@site/docs/functions/setrolecolor.md",slug:"/functions/setrolecolor",permalink:"/docs/functions/setrolecolor",version:"current",sidebar:"someSidebar",previous:{title:"$setMessageVar",permalink:"/docs/functions/setmessagevar"},next:{title:"$setRoles",permalink:"/docs/functions/setroles"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],i={toc:l};function s(e){let{components:t,...r}=e;return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function changes the color of a role"),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$setRoleColor[roleID;hex/int_color]\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Field"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"role ID"),Object(o.b)("td",{parentName:"tr",align:"left"},"The id of the role whose colour is to be changed"),Object(o.b)("td",{parentName:"tr",align:"left"},"number"),Object(o.b)("td",{parentName:"tr",align:"left"},"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"color"),Object(o.b)("td",{parentName:"tr",align:"left"},"The color we're changing to"),Object(o.b)("td",{parentName:"tr",align:"left"},"hex/int color"),Object(o.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "crole",\ncode: `Changed the role\'s color to #FF0000\n$setRoleColor[$mentionedRoles;FF0000]`\n})\n')))}s.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||a;return r?o.a.createElement(d,l(l({ref:t},s),{},{components:r})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);