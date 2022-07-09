(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=(n(0),n(618));const a={title:"Invite System"},o={unversionedId:"guides/variables/advanced-guides/invite-system",id:"guides/variables/advanced-guides/invite-system",isDocsHomePage:!1,title:"Invite System",description:"Introduction",source:"@site/docs/guides/variables/advanced-guides/invite-system.md",slug:"/guides/variables/advanced-guides/invite-system",permalink:"/docs/guides/variables/advanced-guides/invite-system",version:"current",sidebar:"someSidebar",previous:{title:"Advanced Guides",permalink:"/docs/guides/variables/advanced-guides/README"},next:{title:"Music",permalink:"/docs/guides/variables/advanced-guides/music"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"How to enable",id:"how-to-enable",children:[]},{value:"Functions",id:"functions",children:[{value:"$userInfo",id:"userinfo",children:[]},{value:"$resetInvites",id:"resetinvites",children:[]}]}],c={toc:s};function u(e){let{components:t,...a}=e;return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"A feature everyone has been asking for. An invite tracker system to track invites by users."),Object(i.b)("h2",{id:"how-to-enable"},"How to enable"),Object(i.b)("p",null,"To enable the system, simply write in"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'const Aoijs = require(\'aoi.js\')\nconst bot = new Aoijs.Bot({\ntoken: "token",\nprefix: "!",\nfetchInvites: true\n})\n')),Object(i.b)("p",null,"Make sure you enable ",Object(i.b)("inlineCode",{parentName:"p"},"SERVER MEMBERS")," intents"),Object(i.b)("p",null,Object(i.b)("img",{src:n(720).default})),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("p",null,"With the invite tracker system, of course there's the functions!"),Object(i.b)("h3",{id:"userinfo"},"$userInfo"),Object(i.b)("p",null,"This function gets the user's invite information"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"$userInfo[option;userID (optional)]\n")),Object(i.b)("h4",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"inviter - The user who invited the author/specified user"),Object(i.b)("li",{parentName:"ul"},"code - The invite code the inviter used"),Object(i.b)("li",{parentName:"ul"},"real - The count of users the author/specified user invited that are still in the server"),Object(i.b)("li",{parentName:"ul"},"fake - The count of alt accounts (Discord Age 10 Minutes and below) the author/specified user invited (Alt Account also must leave the server to be counted)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "invites",\ncode: `\n$title[$username\'s invite info]\n$thumbnail[$authorAvatar]\n$description[\nTotal: $sum[$userInfo[real];$userInfo[fake]]\nReal: $userInfo[real]\nFake: $userInfo[fake]\n---------------------\nInvited By: $userTag[$userInfo[inviter]] (\\`$userInfo[code]\\`)]\n`\n})\n')),Object(i.b)("h3",{id:"resetinvites"},"$resetInvites"),Object(i.b)("p",null,"This function resets the invites the specified user has OR the whole guild (if no user specified)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"$resetInvites[guildID;userID (optional)]\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "resetInvites",\ncode: `\nSuccessfully reset invites for $username[$mentioned[1]]\n$resetInvites[$guildID;$mentioned[1]]\n`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||a;return n?i.a.createElement(f,s(s({ref:t},u),{},{components:n})):i.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},720:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image (44)-58f5ec20dd9190425cde19d582a9f31b.png"}}]);