(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2381],{569:(n,t,e)=>{var r=e(71),o=e(5989),i=e(6705),a=Math.max,u=Math.min;n.exports=function(n,t,e){var c,s,f,l,p,d,v=0,m=!1,y=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=c,r=s;return c=s=void 0,v=t,l=n.apply(r,e)}function w(n){return v=n,p=setTimeout(O,t),m?g(n):l}function b(n){var e=n-d;return void 0===d||e>=t||e<0||y&&n-v>=f}function O(){var n=o();if(b(n))return k(n);p=setTimeout(O,function(n){var e=t-(n-d);return y?u(e,f-(n-v)):e}(n))}function k(n){return p=void 0,h&&c?g(n):(c=s=void 0,l)}function j(){var n=o(),e=b(n);if(c=arguments,s=this,d=n,e){if(void 0===p)return w(d);if(y)return clearTimeout(p),p=setTimeout(O,t),g(d)}return void 0===p&&(p=setTimeout(O,t)),l}return t=i(t)||0,r(e)&&(m=!!e.leading,f=(y="maxWait"in e)?a(i(e.maxWait)||0,t):f,h="trailing"in e?!!e.trailing:h),j.cancel=function(){void 0!==p&&clearTimeout(p),v=0,c=d=s=p=void 0},j.flush=function(){return void 0===p?l:k(o())},j}},5989:(n,t,e)=>{var r=e(4362);n.exports=function(){return r.Date.now()}},9792:(n,t,e)=>{var r=e(569),o=e(71);n.exports=function(n,t,e){var i=!0,a=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),r(n,t,{leading:i,maxWait:t,trailing:a})}},3555:function(n){n.exports=function(){"use strict";var n=function(n){var t=n.props,e=n.data,r=n.parent,o=function n(t){return Array.isArray(t)?(e=t=>n(t),t.reduce(((n,t)=>n.concat(e(t))),[])):null!==(r=t)&&"object"==typeof r?function(n){let t=[];for(const e in n)n[e]&&t.push(e);return t}(t):"string"==typeof t&&t?[t]:[];var e,r}([e.staticClass,e.class]);if(o){var i,a,u,c=(a=(i=t).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(c){var s=function(n,t){if(!t.length)return;const{classList:e}=n;return t.filter((n=>{if(!e.contains(n))return e.add(n),!0}))}(c,o),f=function(){!function(n,t){if(!t||!t.length)return;let e;for(;e=t.shift();)n.classList.remove(e);n.classList.length||n.removeAttribute("class")}(c,s)};r.$once("hook:beforeUpdate",f),r.$once("hook:destroyed",f)}}},t=Object.prototype.hasOwnProperty,e=function(n,t,e){var r="&"===t[0],o="~"===(t=r?t.slice(1):t)[0],i="!"===(t=o?t.slice(1):t)[0];return{o:n,t:t=i?t.slice(1):t,i:e,u:{once:o,capture:i,passive:r}}},r=function(n){var r,o,i,a=n.props,u=n.listeners,c=n.parent,s=function(n,r){var o,i,a=[];for(var u in r)if(o=r,i=u,t.call(o,i)){var c=r[u],s=e(n,u,c);s.o.addEventListener(s.t,s.i,s.u),a.push(s)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),u),f=function(){!function(n){for(var t;t=n.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(s)};c.$once("hook:beforeUpdate",f),c.$once("hook:destroyed",f)},o=function(t){r(t),n(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,t){return t.parent._isMounted?o(t):t.parent.$once("hook:mounted",(function(){o(t)})),t.slots().default}}}()},7062:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=function(n){return n&&n.data&&(n.data.slot=void 0),n};const o={functional:!0,render:function(n,t){var e=t.props;return Array.isArray(e.nodes)?e.nodes.map(r):r(e.nodes)}}},3883:(n,t,e)=>{"use strict";e.d(t,{Z:()=>m});var r,o={"!":1,"&":2},i=/\B([A-Z])/g,a=/-(\w)/g;function u(n){return n.replace(a,(function(n,t){return t?t.toUpperCase():""}))}function c(n,t,e){if(e){var r=e.value,o=e.modifier,i=n[t];null==i||1===o?n[t]=r:2===o&&(Array.isArray(i)?Array.isArray(r)?i.push.apply(i,r):i.push(r):"object"==typeof i&&"object"==typeof r?Object.assign(i,r):"function"==typeof i&&"function"==typeof r?n[t]=function(){Reflect.apply(i,this,arguments),Reflect.apply(r,this,arguments)}:n[t]+=r)}}function s(n,t,e){n[t]||(n[t]={});var r=n[t];for(var o in e)c(r,o,e[o])}function f(n,t){if(t in n)return t;var e=t.replace(i,"-$1").toLowerCase();return e in n&&e}function l(n){var t={};for(var e in n){var r=n[e],i=o[e.slice(-1)];i?e=e.slice(0,-1):i=0,t[e]={value:r,modifier:i}}return t}function p(n,t){var e=u("static-"+t),r=[n[e],n[t]].filter(Boolean).flat(1/0);if(0!==r.length)return delete n[e],r}function d(n,t){var e=n[t];if(e)return delete n[t],e}function v(n){return n&&{value:n,modifier:0}}const m={functional:!0,render:function(n,t){var e=t.children,o=t.data;if(!e||function(n){for(var t in n)return!1;return!0}(o))return e;var i,a=l(o.attrs),m=l(o.on),y=l(o.nativeOn),h=d(a,"class")||v(p(o,"class")),g=d(a,"style")||v(p(o,"style")),w=d(a,"key")||v(o.key);return g&&"string"==typeof g.value&&(g.value=(i=g.value,Object.fromEntries(i.split(";").map((function(n){var t=n.split(":"),e=t[0],r=t[1];return e&&r&&[u(e.trim()),r.trim()]})).filter(Boolean)))),e.map((function(n){if((n=function(n){r||(r=Object.getPrototypeOf(n).constructor);var t=new r;return Object.assign(t,n),t.componentOptions&&(t.componentOptions=Object.assign({},t.componentOptions),t.componentOptions.propsData=Object.assign({},t.componentOptions.propsData)),t}(n)).tag){n.data||(n.data={});var t=Object.assign({},a),e=n,o=e.data,i=e.componentOptions;i?(s(i,"propsData",function(n,t){var e=n.Ctor.options.props,r={};if(e)for(var o in e){var i=f(t,o);i&&(r[o]=t[i],delete t[i])}return r}(i,t)),s(i,"listeners",m),s(o,"nativeOn",y),o.on=o.nativeOn):s(o,"on",m),s(o,"attrs",t),o.class=p(o,"class"),o.style=p(o,"style"),c(o,"class",h),c(o,"style",g),c(n,"key",w)}return n}))}}},1450:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>a});var r=e(8344),o=e(5239);const i={components:{MActionBarLayer:r.$n,MModalLayer:o.Pj},mixins:[o.Pj.apiMixin]};const a=(0,e(1900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("m-action-bar-layer",[e("router-view"),n._v(" "),e("m-modal-layer")],1)}),[],!1,null,null,null).exports}}]);