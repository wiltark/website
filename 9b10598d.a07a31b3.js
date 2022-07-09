(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),a=(t(0),t(618));const o={title:"$djsEval",description:"Eval command using discord.js"},c={unversionedId:"functions/djseval",id:"functions/djseval",isDocsHomePage:!1,title:"$djsEval",description:"Eval command using discord.js",source:"@site/docs/functions/djseval.md",slug:"/functions/djseval",permalink:"/docs/functions/djseval",version:"current",sidebar:"someSidebar",previous:{title:"$divide",permalink:"/docs/functions/divide"},next:{title:"$dm",permalink:"/docs/functions/dm"}},i=[],l={toc:i};function s(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function evals the given discord.js code"),Object(a.b)("p",null,'{% hint style="danger" %}\nYou should restrict the use of this function to yourself\n{% endhint %}'),Object(a.b)("h4",{id:"fields"},"Fields"),Object(a.b)("p",null,"This function has 1 required field"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Code ","(","Required",")"),Object(a.b)("li",{parentName:"ol"},"Return Code ","(","Optional",")")),Object(a.b)("p",null,"Raw Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"$djsEval[code;return code (yes/no) (optional)]")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Code - The discord.js code we're evaling"),Object(a.b)("li",{parentName:"ul"},"Return Code - Returns the output of the code without message.channel.send","(","...",")")),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("p",null,"Evaling a pre-written code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"eval\",\ncode: `\n$djsEval[\nfor(let i=0;i<10;i++) {\nmessage.channel.send('hello')\n}\n]\n`\n})\n")),Object(a.b)("p",null,"Evaling the user's message"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\ncode: `\n$djsEval[$message]\n`\n})\n')),Object(a.b)("p",null,"With the optional field"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"eval\",\ncode: `\n$djsEval[let a = 'apple'\na;yes]\n`\n//Will return 'apple' without m.channel.send(...)\n})\n")))}s.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);