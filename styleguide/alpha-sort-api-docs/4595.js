(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4595],{19077:t=>{t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=288)}({0:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a,u){var s,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,n){return s.call(n),f(t,n)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}e.d(n,"a",(function(){return r}))},288:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{pre:!0,attrs:{viewBox:"0 0 24 24"}},[n("path",{pre:!0,attrs:{"fill-rule":"evenodd",d:"M12.772 1.021c-.159.04-.319.127-.447.244-.181.165-10.156 12.161-10.229 12.301-.049.095-.07.198-.08.387-.012.233-.005.277.068.439.097.216.305.429.511.524l.15.069 4.057.008c2.232.004 4.058.015 4.058.023 0 .009-.196 1.585-.437 3.502-.304 2.43-.43 3.528-.417 3.622.03.207.149.428.314.582.215.201.382.268.675.27a.927.927 0 00.68-.256c.185-.17 10.157-12.164 10.229-12.302.049-.095.07-.198.08-.387.012-.233.005-.277-.068-.439a1.13 1.13 0 00-.511-.524l-.15-.069-4.061-.008-4.062-.008.017-.112c.01-.062.209-1.652.444-3.533l.427-3.422-.065-.214a1.004 1.004 0 00-.883-.713 1.19 1.19 0 00-.3.016M8.364 9.132l-3.201 3.843 3.531.015 3.531.015.169.079c.219.103.384.254.491.452.15.274.143.387-.176 2.919a234.786 234.786 0 00-.279 2.254c.003.003 1.445-1.725 3.206-3.84l3.2-3.844-3.53-.015-3.531-.015-.169-.079a1.046 1.046 0 01-.491-.452c-.15-.274-.143-.387.176-2.919.156-1.237.282-2.252.279-2.253a935.589 935.589 0 00-3.206 3.84"}})])};r._withStripped=!0;var o=e(0),i=Object(o.a)({},r,[],!1,null,null,null);i.options.__file="traced/zap.svg",n.default=i.exports}})},71432:(t,n,e)=>{var r=e(19751),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},19751:t=>{var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},50569:(t,n,e)=>{var r=e(70071),o=e(55989),i=e(56705),a=Math.max,u=Math.min;t.exports=function(t,n,e){var s,c,f,l,p,d,v=0,y=!1,m=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=s,r=c;return s=c=void 0,v=n,l=t.apply(r,e)}function g(t){return v=t,p=setTimeout(O,n),y?b(t):l}function _(t){var e=t-d;return void 0===d||e>=n||e<0||m&&t-v>=f}function O(){var t=o();if(_(t))return w(t);p=setTimeout(O,function(t){var e=n-(t-d);return m?u(e,f-(t-v)):e}(t))}function w(t){return p=void 0,h&&s?b(t):(s=c=void 0,l)}function x(){var t=o(),e=_(t);if(s=arguments,c=this,d=t,e){if(void 0===p)return g(d);if(m)return clearTimeout(p),p=setTimeout(O,n),b(d)}return void 0===p&&(p=setTimeout(O,n)),l}return n=i(n)||0,r(e)&&(y=!!e.leading,f=(m="maxWait"in e)?a(i(e.maxWait)||0,n):f,h="trailing"in e?!!e.trailing:h),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},x.flush=function(){return void 0===p?l:w(o())},x}},34655:(t,n,e)=>{var r=e(1185),o=e(44939);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},55989:(t,n,e)=>{var r=e(44362);t.exports=function(){return r.Date.now()}},69792:(t,n,e)=>{var r=e(50569),o=e(70071);t.exports=function(t,n,e){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),r(t,n,{leading:i,maxWait:n,trailing:a})}},56705:(t,n,e)=>{var r=e(71432),o=e(70071),i=e(34655),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=u.test(t);return e||s.test(t)?c(t.slice(2),e?2:8):a.test(t)?NaN:+t}},13555:function(t){t.exports=function(){"use strict";var t=function(t){var n=t.props,e=t.data,r=t.parent,o=function t(n){return Array.isArray(n)?(e=n=>t(n),n.reduce(((t,n)=>t.concat(e(n))),[])):null!==(r=n)&&"object"==typeof r?function(t){let n=[];for(const e in t)t[e]&&n.push(e);return n}(n):"string"==typeof n&&n?[n]:[];var e,r}([e.staticClass,e.class]);if(o){var i,a,u,s=(a=(i=n).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(s){var c=function(t,n){if(!n.length)return;const{classList:e}=t;return n.filter((t=>{if(!e.contains(t))return e.add(t),!0}))}(s,o),f=function(){!function(t,n){if(!n||!n.length)return;let e;for(;e=n.shift();)t.classList.remove(e);t.classList.length||t.removeAttribute("class")}(s,c)};r.$once("hook:beforeUpdate",f),r.$once("hook:destroyed",f)}}},n=Object.prototype.hasOwnProperty,e=function(t,n,e){var r="&"===n[0],o="~"===(n=r?n.slice(1):n)[0],i="!"===(n=o?n.slice(1):n)[0];return{o:t,t:n=i?n.slice(1):n,i:e,u:{once:o,capture:i,passive:r}}},r=function(t){var r,o,i,a=t.props,u=t.listeners,s=t.parent,c=function(t,r){var o,i,a=[];for(var u in r)if(o=r,i=u,n.call(o,i)){var s=r[u],c=e(t,u,s);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),u),f=function(){!function(t){for(var n;n=t.shift();)n.o.removeEventListener(n.t,n.i,n.u)}(c)};s.$once("hook:beforeUpdate",f),s.$once("hook:destroyed",f)},o=function(n){r(n),t(n)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,n){return n.parent._isMounted?o(n):n.parent.$once("hook:mounted",(function(){o(n)})),n.slots().default}}}()},27062:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=function(t){return t&&t.data&&(t.data.slot=void 0),t};const o={functional:!0,render:function(t,n){var e=n.props;return Array.isArray(e.nodes)?e.nodes.map(r):r(e.nodes)}}},63883:(t,n,e)=>{"use strict";e.d(n,{Z:()=>y});var r,o={"!":1,"&":2},i=/\B([A-Z])/g,a=/-(\w)/g;function u(t){return t.replace(a,(function(t,n){return n?n.toUpperCase():""}))}function s(t,n,e){if(e){var r=e.value,o=e.modifier,i=t[n];null==i||1===o?t[n]=r:2===o&&(Array.isArray(i)?Array.isArray(r)?i.push.apply(i,r):i.push(r):"object"==typeof i&&"object"==typeof r?Object.assign(i,r):"function"==typeof i&&"function"==typeof r?t[n]=function(){Reflect.apply(i,this,arguments),Reflect.apply(r,this,arguments)}:t[n]+=r)}}function c(t,n,e){t[n]||(t[n]={});var r=t[n];for(var o in e)s(r,o,e[o])}function f(t,n){if(n in t)return n;var e=n.replace(i,"-$1").toLowerCase();return e in t&&e}function l(t){var n={};for(var e in t){var r=t[e],i=o[e.slice(-1)];i?e=e.slice(0,-1):i=0,n[e]={value:r,modifier:i}}return n}function p(t,n){var e=u("static-"+n),r=[t[e],t[n]].filter(Boolean).flat(1/0);if(0!==r.length)return delete t[e],r}function d(t,n){var e=t[n];if(e)return delete t[n],e}function v(t){return t&&{value:t,modifier:0}}const y={functional:!0,render:function(t,n){var e=n.children,o=n.data;if(!e||function(t){for(var n in t)return!1;return!0}(o))return e;var i,a=l(o.attrs),y=l(o.on),m=l(o.nativeOn),h=d(a,"class")||v(p(o,"class")),b=d(a,"style")||v(p(o,"style")),g=d(a,"key")||v(o.key);return b&&"string"==typeof b.value&&(b.value=(i=b.value,Object.fromEntries(i.split(";").map((function(t){var n=t.split(":"),e=n[0],r=n[1];return e&&r&&[u(e.trim()),r.trim()]})).filter(Boolean)))),e.map((function(t){if((t=function(t){r||(r=Object.getPrototypeOf(t).constructor);var n=new r;return Object.assign(n,t),n.componentOptions&&(n.componentOptions=Object.assign({},n.componentOptions),n.componentOptions.propsData=Object.assign({},n.componentOptions.propsData)),n}(t)).tag){t.data||(t.data={});var n=Object.assign({},a),e=t,o=e.data,i=e.componentOptions;i?(c(i,"propsData",function(t,n){var e=t.Ctor.options.props,r={};if(e)for(var o in e){var i=f(n,o);i&&(r[o]=n[i],delete n[i])}return r}(i,n)),c(i,"listeners",y),c(o,"nativeOn",m),o.on=o.nativeOn):c(o,"on",y),c(o,"attrs",n),o.class=p(o,"class"),o.style=p(o,"style"),s(o,"class",h),s(o,"style",b),s(t,"key",g)}return t}))}}}}]);