(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(618));const i={title:"$emojiExists"},c={unversionedId:"functions/emojiexists",id:"functions/emojiexists",isDocsHomePage:!1,title:"$emojiExists",description:"This function will return true or false depending if given emoji ID is an existent emoji \\(Registered in one of the bot's servers\\) or not.",source:"@site/docs/functions/emojiexists.md",slug:"/functions/emojiexists",permalink:"/docs/functions/emojiexists",version:"current",sidebar:"someSidebar",previous:{title:"$emojiCount",permalink:"/docs/functions/emojicount"},next:{title:"$emojisFromMessage",permalink:"/docs/functions/emojisfrommessage"}},a=[],s={toc:a};function u(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function will return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," or ",Object(o.b)("inlineCode",{parentName:"p"},"false")," depending if given emoji ID is an existent emoji ","(","Registered in one of the bot's servers",")"," or not."),Object(o.b)("h4",{id:"fields"},"Fields"),Object(o.b)("p",null,"This function has 1 field"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Emoji ID ","(","Required",")")),Object(o.b)("p",null,"Raw usage: ",Object(o.b)("inlineCode",{parentName:"p"},"$emojiExists[emojiID]")),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Emoji ID - The ID of the emoji we're checking")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "emojiexists",\n    code: `The emoji with id $message exists?\n    $emojiExists[$message]\n    `\n});\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);