(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{618:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||s[d]||c;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(618));const c={title:"$channelCategoryID",description:"Returns the channel category ID"},o={unversionedId:"functions/channelcategoryid",id:"functions/channelcategoryid",isDocsHomePage:!1,title:"$channelCategoryID",description:"Returns the channel category ID",source:"@site/docs/functions/channelcategoryid.md",slug:"/functions/channelcategoryid",permalink:"/docs/functions/channelcategoryid",version:"current",sidebar:"someSidebar",previous:{title:"$channel",permalink:"/docs/functions/channel"},next:{title:"$channelCooldown",permalink:"/docs/functions/channelcooldown"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],i={toc:l};function u(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function will display the category ID the current/specified channel is in"),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$channelCategoryID[channel ID?]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"channel ID"),Object(a.b)("td",{parentName:"tr",align:"left"},"The channel we're getting the category id from"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"With optional fields")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "categoryID",\n    code: `$channelCategoryID[$mentionedChannels[1]]` //Returns category ID of the category from where mentioned channel belongs\n})\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Without optional fields")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "categoryID",\n    code: `$channelCategoryID` //Returns category ID of the category from where current channel belongs\n})\n')))}u.isMDXComponent=!0}}]);