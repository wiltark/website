(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{488:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(618));const l={title:"$deleteRoles",description:"Deletes the specified role/roles"},c={unversionedId:"functions/deleteroles",id:"functions/deleteroles",isDocsHomePage:!1,title:"$deleteRoles",description:"Deletes the specified role/roles",source:"@site/docs/functions/deleteroles.md",slug:"/functions/deleteroles",permalink:"/docs/functions/deleteroles",version:"current",sidebar:"someSidebar",previous:{title:"$deleteMessageVar",permalink:"/docs/functions/deletemessagevar"},next:{title:"$deleteServerVar",permalink:"/docs/functions/deleteservervar"}},a=[],i={toc:a};function s(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function deletes the specified role","(","s",")"),Object(o.b)("p",null,"Fields"),Object(o.b)("p",null,"This function has 1 required field"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Role ID ","(","Required",")"),Object(o.b)("li",{parentName:"ol"},"Role ID 2 ","(","Optional",")"),Object(o.b)("li",{parentName:"ol"},"Etc")),Object(o.b)("p",null,"Raw Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"$deleteRoles[roleID;roleID;etc]")),Object(o.b)("p",null,"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Role ID","(","s",")"," - The role","(","s",")"," the bot is deleting")),Object(o.b)("p",null,"Usage"),Object(o.b)("p",null,"Deleting the mentioned role"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1]]`\n})\n')),Object(o.b)("p",null,"Deleting multiple mentioned roles"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1];$mentionedRoles[2];$mentionedRoles[3]]`\n})\n')))}s.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||l;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=b;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<l;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);