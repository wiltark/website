(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(618));const o={title:"$interactionModal",description:"Send an interaction modal."},i={unversionedId:"functions/interactionmodal",id:"functions/interactionmodal",isDocsHomePage:!1,title:"$interactionModal",description:"Send an interaction modal.",source:"@site/docs/functions/interactionmodal.md",slug:"/functions/interactionmodal",permalink:"/docs/functions/interactionmodal",version:"current",sidebar:"someSidebar",previous:{title:"$interactionFollowUp",permalink:"/docs/functions/interactionfollowup"},next:{title:"$interactionReply",permalink:"/docs/functions/interactionreply"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Components Options",id:"components-options",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"$interactionModal"),", sends a modal aka form to user fill it. "),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$interactionModal[title;customID;components]\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"title"),Object(r.b)("td",{parentName:"tr",align:"left"},"Title of modal"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"customID"),Object(r.b)("td",{parentName:"tr",align:"left"},"A custom ID for modal"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"components"),Object(r.b)("td",{parentName:"tr",align:"left"},"Adds components for modal"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(r.b)("h3",{id:"components-options"},"Components Options"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"{actionRow\n  :{textInput\n  :title\n  :type\n  :customid\n  :required?\n  :placeholder?\n  :minChar?\n  :maxChar?\n  :default?}\n}\n// ? : optional\n")),Object(r.b)("h4",{id:"components-types"},"Components Types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"title")," \u2014 The title of field."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," \u2014 The type of title field",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1")," \u2192 Single line answer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"2")," \u2192 Multi-lines answer")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"customid")," \u2014 Custom ID of the ",Object(r.b)("inlineCode",{parentName:"li"},"$textInputValue"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"required")," \u2014 The answer required or not."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"placeholder")," \u2014 The text that will show as default label on modal answer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minChar")," \u2014 Minimum character required for the answer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxChar")," \u2014 Maximum character required for the answer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"default")," \u2014 The default message will be on the answer field.")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"bot.interactionCommand({\n  name: \"profile\", \n  prototype: 'slash',\n  code: `\n  $interactionModal[Hello there!;profileModal;\n    {actionRow:\n      {textInput:What's your name?:1:nameInput:yes:$username:3:30:$username}\n    }\n    {actionRow:\n      {textInput:How old are you?:2:ageInput:no:13+:0:2}\n    }\n  ]\n  `\n});\n\nbot.interactionCommand({\n  name: \"profileModal\",\n  prototype: 'modal',\n  code: `\n  $interactionReply[Nice to meet you, **$textInputValue[nameInput]**. So you are $textInputValue[ageInput] years old.]\n  `\n});\n")))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.a.createElement(s,l(l({ref:t},p),{},{components:n})):r.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);