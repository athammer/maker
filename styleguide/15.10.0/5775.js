(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[5775,3607],{19258:t=>{t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},21205:t=>{t.exports=function(t,n,e,r){var o=-1,u=null==t?0:t.length;for(r&&u&&(e=t[++o]);++o<u;)e=n(e,t[o],o,t);return e}},88263:t=>{var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},642:t=>{t.exports=function(t){return function(n){return null==t?void 0:t[n]}}},38257:(t,n,e)=>{var r=e(52773),o=e(19258),u=e(43670),i=e(34655),a=r?r.prototype:void 0,f=a?a.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(u(n))return o(n,t)+"";if(i(n))return f?f.call(n):"";var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e}},71432:(t,n,e)=>{var r=e(19751),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},48014:(t,n,e)=>{var r=e(21205),o=e(64383),u=e(15208),i=RegExp("['’]","g");t.exports=function(t){return function(n){return r(u(o(n).replace(i,"")),t,"")}}},8303:(t,n,e)=>{var r=e(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});t.exports=r},49952:t=>{var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},19751:t=>{var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},46083:t=>{var n="\\u2700-\\u27bf",e="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+o+"]",i="\\d+",a="[\\u2700-\\u27bf]",f="["+e+"]",c="[^\\ud800-\\udfff"+o+i+n+e+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+f+"|"+c+")",v="(?:"+p+"|"+c+")",x="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",h=g+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,l].join("|")+")"+g+m+")*"),b="(?:"+[a,s,l].join("|")+")"+h,O=RegExp([p+"?"+f+"+"+x+"(?="+[u,p,"$"].join("|")+")",v+"+"+y+"(?="+[u,p+d,"$"].join("|")+")",p+"?"+d+"+"+x,p+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,b].join("|"),"g");t.exports=function(t){return t.match(O)||[]}},50569:(t,n,e)=>{var r=e(70071),o=e(55989),u=e(56705),i=Math.max,a=Math.min;t.exports=function(t,n,e){var f,c,s,l,p,d,v=0,x=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=f,r=c;return f=c=void 0,v=n,l=t.apply(r,e)}function h(t){return v=t,p=setTimeout(O,n),x?g(t):l}function b(t){var e=t-d;return void 0===d||e>=n||e<0||y&&t-v>=s}function O(){var t=o();if(b(t))return A(t);p=setTimeout(O,function(t){var e=n-(t-d);return y?a(e,s-(t-v)):e}(t))}function A(t){return p=void 0,m&&f?g(t):(f=c=void 0,l)}function w(){var t=o(),e=b(t);if(f=arguments,c=this,d=t,e){if(void 0===p)return h(d);if(y)return clearTimeout(p),p=setTimeout(O,n),g(d)}return void 0===p&&(p=setTimeout(O,n)),l}return n=u(n)||0,r(e)&&(x=!!e.leading,s=(y="maxWait"in e)?i(u(e.maxWait)||0,n):s,m="trailing"in e?!!e.trailing:m),w.cancel=function(){void 0!==p&&clearTimeout(p),v=0,f=d=c=p=void 0},w.flush=function(){return void 0===p?l:A(o())},w}},64383:(t,n,e)=>{var r=e(8303),o=e(72049),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(u,r).replace(i,"")}},34655:(t,n,e)=>{var r=e(1185),o=e(44939);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},95573:(t,n,e)=>{var r=e(48014)((function(t,n,e){return t+(e?"-":"")+n.toLowerCase()}));t.exports=r},55989:(t,n,e)=>{var r=e(44362);t.exports=function(){return r.Date.now()}},69792:(t,n,e)=>{var r=e(50569),o=e(70071);t.exports=function(t,n,e){var u=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(e)&&(u="leading"in e?!!e.leading:u,i="trailing"in e?!!e.trailing:i),r(t,n,{leading:u,maxWait:n,trailing:i})}},56705:(t,n,e)=>{var r=e(71432),o=e(70071),u=e(34655),i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(u(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=a.test(t);return e||f.test(t)?c(t.slice(2),e?2:8):i.test(t)?NaN:+t}},72049:(t,n,e)=>{var r=e(38257);t.exports=function(t){return null==t?"":r(t)}},15208:(t,n,e)=>{var r=e(88263),o=e(49952),u=e(72049),i=e(46083);t.exports=function(t,n,e){return t=u(t),void 0===(n=e?void 0:n)?o(t)?i(t):r(t):t.match(n)||[]}},13555:function(t){t.exports=function(){"use strict";var t=function(t){var n=t.props,e=t.data,r=t.parent,o=function t(n){return Array.isArray(n)?(e=n=>t(n),n.reduce(((t,n)=>t.concat(e(n))),[])):null!==(r=n)&&"object"==typeof r?function(t){let n=[];for(const e in t)t[e]&&n.push(e);return n}(n):"string"==typeof n&&n?[n]:[];var e,r}([e.staticClass,e.class]);if(o){var u,i,a,f=(i=(u=n).body,a=u.document,i?window.document.body:!!a&&window.document.documentElement);if(f){var c=function(t,n){if(!n.length)return;const{classList:e}=t;return n.filter((t=>{if(!e.contains(t))return e.add(t),!0}))}(f,o),s=function(){!function(t,n){if(!n||!n.length)return;let e;for(;e=n.shift();)t.classList.remove(e);t.classList.length||t.removeAttribute("class")}(f,c)};r.$once("hook:beforeUpdate",s),r.$once("hook:destroyed",s)}}},n=Object.prototype.hasOwnProperty,e=function(t,n,e){var r="&"===n[0],o="~"===(n=r?n.slice(1):n)[0],u="!"===(n=o?n.slice(1):n)[0];return{o:t,t:n=u?n.slice(1):n,i:e,u:{once:o,capture:u,passive:r}}},r=function(t){var r,o,u,i=t.props,a=t.listeners,f=t.parent,c=function(t,r){var o,u,i=[];for(var a in r)if(o=r,u=a,n.call(o,u)){var f=r[a],c=e(t,a,f);c.o.addEventListener(c.t,c.i,c.u),i.push(c)}return i}((o=(r=i).body,u=r.document,o?window.document.body:u?window.document:window),a),s=function(){!function(t){for(var n;n=t.shift();)n.o.removeEventListener(n.t,n.i,n.u)}(c)};f.$once("hook:beforeUpdate",s),f.$once("hook:destroyed",s)},o=function(n){r(n),t(n)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,n){return n.parent._isMounted?o(n):n.parent.$once("hook:mounted",(function(){o(n)})),n.slots().default}}}()},27062:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=function(t){return t&&t.data&&(t.data.slot=void 0),t};const o={functional:!0,render:function(t,n){var e=n.props;return Array.isArray(e.nodes)?e.nodes.map(r):r(e.nodes)}}},63883:(t,n,e)=>{"use strict";e.d(n,{Z:()=>x});var r,o={"!":1,"&":2},u=/\B([A-Z])/g,i=/-(\w)/g;function a(t){return t.replace(i,(function(t,n){return n?n.toUpperCase():""}))}function f(t,n,e){if(e){var r=e.value,o=e.modifier,u=t[n];null==u||1===o?t[n]=r:2===o&&(Array.isArray(u)?Array.isArray(r)?u.push.apply(u,r):u.push(r):"object"==typeof u&&"object"==typeof r?Object.assign(u,r):"function"==typeof u&&"function"==typeof r?t[n]=function(){Reflect.apply(u,this,arguments),Reflect.apply(r,this,arguments)}:t[n]+=r)}}function c(t,n,e){t[n]||(t[n]={});var r=t[n];for(var o in e)f(r,o,e[o])}function s(t,n){if(n in t)return n;var e=n.replace(u,"-$1").toLowerCase();return e in t&&e}function l(t){var n={};for(var e in t){var r=t[e],u=o[e.slice(-1)];u?e=e.slice(0,-1):u=0,n[e]={value:r,modifier:u}}return n}function p(t,n){var e=a("static-"+n),r=[t[e],t[n]].filter(Boolean).flat(1/0);if(0!==r.length)return delete t[e],r}function d(t,n){var e=t[n];if(e)return delete t[n],e}function v(t){return t&&{value:t,modifier:0}}const x={functional:!0,render:function(t,n){var e=n.children,o=n.data;if(!e||function(t){for(var n in t)return!1;return!0}(o))return e;var u,i=l(o.attrs),x=l(o.on),y=l(o.nativeOn),m=d(i,"class")||v(p(o,"class")),g=d(i,"style")||v(p(o,"style")),h=d(i,"key")||v(o.key);return g&&"string"==typeof g.value&&(g.value=(u=g.value,Object.fromEntries(u.split(";").map((function(t){var n=t.split(":"),e=n[0],r=n[1];return e&&r&&[a(e.trim()),r.trim()]})).filter(Boolean)))),e.map((function(t){if((t=function(t){r||(r=Object.getPrototypeOf(t).constructor);var n=new r;return Object.assign(n,t),n.componentOptions&&(n.componentOptions=Object.assign({},n.componentOptions),n.componentOptions.propsData=Object.assign({},n.componentOptions.propsData)),n}(t)).tag){t.data||(t.data={});var n=Object.assign({},i),e=t,o=e.data,u=e.componentOptions;u?(c(u,"propsData",function(t,n){var e=t.Ctor.options.props,r={};if(e)for(var o in e){var u=s(n,o);u&&(r[o]=n[u],delete n[u])}return r}(u,n)),c(u,"listeners",x),c(o,"nativeOn",y),o.on=o.nativeOn):c(o,"on",x),c(o,"attrs",n),o.class=p(o,"class"),o.style=p(o,"style"),f(o,"class",m),f(o,"style",g),f(t,"key",h)}return t}))}}}}]);