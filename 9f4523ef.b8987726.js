(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{408:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(618));const o={title:"$jsonRequest",description:"Retrieve a JSON format (api)"},i={unversionedId:"functions/jsonrequest",id:"functions/jsonrequest",isDocsHomePage:!1,title:"$jsonRequest",description:"Retrieve a JSON format (api)",source:"@site/docs/functions/jsonrequest.md",slug:"/functions/jsonrequest",permalink:"/docs/functions/jsonrequest",version:"current",sidebar:"someSidebar",previous:{title:"$joinVC",permalink:"/docs/functions/joinvc"},next:{title:"$kick",permalink:"/docs/functions/kick"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function returns a property from a JSON formatted api."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$jsonRequest[api;property?;error?;headerName:headerValue?...]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"api"),Object(a.b)("td",{parentName:"tr",align:"left"},"The api from which the specified property is to be retrieved"),Object(a.b)("td",{parentName:"tr",align:"left"},"link"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"property"),Object(a.b)("td",{parentName:"tr",align:"left"},"The property that is to be retrieved from the api"),Object(a.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"error"),Object(a.b)("td",{parentName:"tr",align:"left"},"The error to be displayed if the property wasn't found"),Object(a.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"header"),Object(a.b)("td",{parentName:"tr",align:"left"},"The header that is to be retrieved from the api"),Object(a.b)("td",{parentName:"tr",align:"left"},"headerName:headerValue"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")))),Object(a.b)("h4",{id:"types-of-header"},"Types of Header"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"normal: ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"A:hi;B:Bye\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"json: ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'{ "A" : "hi", "B" : "bye" }\n')),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "api", \ncode: `$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n})\n/*\n\nAPI Breakdown:\nIn this api given, if you go to the link it will give you\n{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}\nSo in \'property\', you\'d put "fact", because it\'s the only property there to get\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n\n\nBut what if the api was like this:\n{"dog": {"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."} }\nThen in property, first you\'d\nneed to get "dog", so you\'d put \'dog\', then to get the fact\nadd fact after it, like this: \'dog.fact\'\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog.fact;Could not fnd a dog fact!]`\n\n\nBut let\'s say the api has brackets around the thing you\nwant to get:\n{"dog": [{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}] }\nSo in property, you will still have \'dog\' first,\nthen you\'d add brackets as follows: \'dog[0]\' \nthen simply add on fact. \'dog[0].fact\'\nWARNING: For DBD.js instead of [] we use #RIGHT# for [ and #LEFT# for ]\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog#RIGHT#0#LEFT#.fact;Could not fnd a dog fact!]`\n\n\n*/\n')))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);