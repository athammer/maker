(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2781],{71432:(n,o,t)=>{var a=t(19751),d=/^\s+/;n.exports=function(n){return n?n.slice(0,a(n)+1).replace(d,""):n}},19751:n=>{var o=/\s/;n.exports=function(n){for(var t=n.length;t--&&o.test(n.charAt(t)););return t}},50569:(n,o,t)=>{var a=t(70071),d=t(55989),e=t(56705),r=Math.max,i=Math.min;n.exports=function(n,o,t){var l,m,s,f,p,b,v=0,c=!1,h=!1,w=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(o){var t=l,a=m;return l=m=void 0,v=o,f=n.apply(a,t)}function k(n){return v=n,p=setTimeout(g,o),c?y(n):f}function u(n){var t=n-b;return void 0===b||t>=o||t<0||h&&n-v>=s}function g(){var n=d();if(u(n))return x(n);p=setTimeout(g,function(n){var t=o-(n-b);return h?i(t,s-(n-v)):t}(n))}function x(n){return p=void 0,w&&l?y(n):(l=m=void 0,f)}function _(){var n=d(),t=u(n);if(l=arguments,m=this,b=n,t){if(void 0===p)return k(b);if(h)return clearTimeout(p),p=setTimeout(g,o),y(b)}return void 0===p&&(p=setTimeout(g,o)),f}return o=e(o)||0,a(t)&&(c=!!t.leading,s=(h="maxWait"in t)?r(e(t.maxWait)||0,o):s,w="trailing"in t?!!t.trailing:w),_.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=b=m=p=void 0},_.flush=function(){return void 0===p?f:x(d())},_}},55989:(n,o,t)=>{var a=t(44362);n.exports=function(){return a.Date.now()}},69792:(n,o,t)=>{var a=t(50569),d=t(70071);n.exports=function(n,o,t){var e=!0,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return d(t)&&(e="leading"in t?!!t.leading:e,r="trailing"in t?!!t.trailing:r),a(n,o,{leading:e,maxWait:o,trailing:r})}},56705:(n,o,t)=>{var a=t(71432),d=t(70071),e=t(34655),r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(e(n))return NaN;if(d(n)){var o="function"==typeof n.valueOf?n.valueOf():n;n=d(o)?o+"":o}if("string"!=typeof n)return 0===n?n:+n;n=a(n);var t=i.test(n);return t||l.test(n)?m(n.slice(2),t?2:8):r.test(n)?NaN:+n}},13555:function(n){n.exports=function(){"use strict";var n=function(n){var o=n.props,t=n.data,a=n.parent,d=function n(o){return Array.isArray(o)?(t=o=>n(o),o.reduce(((n,o)=>n.concat(t(o))),[])):null!==(a=o)&&"object"==typeof a?function(n){let o=[];for(const t in n)n[t]&&o.push(t);return o}(o):"string"==typeof o&&o?[o]:[];var t,a}([t.staticClass,t.class]);if(d){var e,r,i,l=(r=(e=o).body,i=e.document,r?window.document.body:!!i&&window.document.documentElement);if(l){var m=function(n,o){if(!o.length)return;const{classList:t}=n;return o.filter((n=>{if(!t.contains(n))return t.add(n),!0}))}(l,d),s=function(){!function(n,o){if(!o||!o.length)return;let t;for(;t=o.shift();)n.classList.remove(t);n.classList.length||n.removeAttribute("class")}(l,m)};a.$once("hook:beforeUpdate",s),a.$once("hook:destroyed",s)}}},o=Object.prototype.hasOwnProperty,t=function(n,o,t){var a="&"===o[0],d="~"===(o=a?o.slice(1):o)[0],e="!"===(o=d?o.slice(1):o)[0];return{o:n,t:o=e?o.slice(1):o,i:t,u:{once:d,capture:e,passive:a}}},a=function(n){var a,d,e,r=n.props,i=n.listeners,l=n.parent,m=function(n,a){var d,e,r=[];for(var i in a)if(d=a,e=i,o.call(d,e)){var l=a[i],m=t(n,i,l);m.o.addEventListener(m.t,m.i,m.u),r.push(m)}return r}((d=(a=r).body,e=a.document,d?window.document.body:e?window.document:window),i),s=function(){!function(n){for(var o;o=n.shift();)o.o.removeEventListener(o.t,o.i,o.u)}(m)};l.$once("hook:beforeUpdate",s),l.$once("hook:destroyed",s)},d=function(o){a(o),n(o)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,o){return o.parent._isMounted?d(o):o.parent.$once("hook:mounted",(function(){d(o)})),o.slots().default}}}()},39211:(n,o,t)=>{"use strict";t.d(o,{T:()=>r});var a=t(31838),d=t(45832);const e={components:{MTransitionResponsive:a.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:d.iu,enter:this.enter,leave:this.leave}]}}};const r=(0,t(51900).Z)(e,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},31838:(n,o,t)=>{"use strict";t.d(o,{w:()=>d});const a={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,o){this.getResponsiveTransition().enter({element:n,onComplete:o})},handleLeave(n,o){this.getResponsiveTransition().leave({element:n,onComplete:o})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let o;return this.transitions.forEach((t=>{n>=t.minWidth&&(o=t)})),o}}};const d=(0,t(51900).Z)(a,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:(n,o,t)=>{"use strict";t.d(o,{iu:()=>e,OE:()=>r,AT:()=>l,ST:()=>m,hJ:()=>p,Y7:()=>v,dx:()=>g,s4:()=>x,vq:()=>_,vn:()=>z,w0:()=>C,I0:()=>M,$y:()=>E,rG:()=>S,iM:()=>$,tq:()=>T,cT:()=>j,uL:()=>q,C9:()=>P});var a=t(19546),d=t(47069);const e=0,r=840,i="spring",l=200,m={type:i,stiffness:600,damping:60,mass:1},s={type:i,stiffness:400,damping:40,mass:1},f={type:i,stiffness:400,damping:30,mass:1.5},p={from:0,to:100},b={from:100,to:0};function v(n,o,t,a){return d=>function(n,o,t,a,d){return{[a]:"".concat(n/100*(t-o)+o).concat(d)}}(d,n,o,t,a)}const c=v(0,100,"opacity","%"),h=v(0,100,"y","%"),w=v(0,100,"x","%"),y=v(40,0,"y","px"),k=n=>({...c(n),...y(n)}),u=(n,o)=>{const t=v(o,0,"y","px");return{...c(n),...t(n)}};function g({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=c,r=p;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function x({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=c,r=p;t.set(e(r.from)),t.render(),setTimeout((()=>{(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}),l)}function _({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=c,r=b;t.set(e(r.from)),t.render(),(0,d.j)({...b,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function z({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=h,r=b;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function C({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=h,r=p;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function M({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=w,r=b;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function E({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=w,r=p;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function S({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=k,r=p;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function $({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=k,r=p;t.set(e(r.from)),t.render(),setTimeout((()=>{(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}),l)}function T({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=u,r=p,i=20+5*n.dataset.loadIndex;t.set(e(r.from)),t.render(),(0,d.j)({...r,...s,onUpdate(n){t.set(e(n,i))},onComplete:o})}function j({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=k,r=b;t.set(e(r.from)),t.render(),(0,d.j)({...r,...m,onUpdate(n){t.set(e(n))},onComplete:o})}function q({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=h,r=b;t.set(e(r.from)),t.render(),(0,d.j)({...r,...f,onUpdate(n){t.set(e(n))},onComplete:o})}function P({element:n,onComplete:o}){const t=(0,a.ZP)(n),e=h,r=p;t.set(e(r.from)),t.render(),(0,d.j)({...r,...f,onUpdate(n){t.set(e(n))},onComplete:o})}},45072:(n,o,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-5d0fe414] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-5d0fe414] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-5d0fe414]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-5d0fe414],\n.markdown-body h2 .octicon-link[data-v-5d0fe414],\n.markdown-body h3 .octicon-link[data-v-5d0fe414],\n.markdown-body h4 .octicon-link[data-v-5d0fe414],\n.markdown-body h5 .octicon-link[data-v-5d0fe414],\n.markdown-body h6 .octicon-link[data-v-5d0fe414] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-5d0fe414],\n.markdown-body h2:hover .anchor[data-v-5d0fe414],\n.markdown-body h3:hover .anchor[data-v-5d0fe414],\n.markdown-body h4:hover .anchor[data-v-5d0fe414],\n.markdown-body h5:hover .anchor[data-v-5d0fe414],\n.markdown-body h6:hover .anchor[data-v-5d0fe414] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-5d0fe414],\n.markdown-body h2:hover .anchor .octicon-link[data-v-5d0fe414],\n.markdown-body h3:hover .anchor .octicon-link[data-v-5d0fe414],\n.markdown-body h4:hover .anchor .octicon-link[data-v-5d0fe414],\n.markdown-body h5:hover .anchor .octicon-link[data-v-5d0fe414],\n.markdown-body h6:hover .anchor .octicon-link[data-v-5d0fe414] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-5d0fe414]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-5d0fe414]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-5d0fe414]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-5d0fe414]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-5d0fe414]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-5d0fe414]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-5d0fe414] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-5d0fe414] {\n  display: block;\n}\n.markdown-body summary[data-v-5d0fe414] {\n  display: list-item;\n}\n.markdown-body a[data-v-5d0fe414] {\n  background-color: initial;\n}\n.markdown-body a[data-v-5d0fe414]:active,\n.markdown-body a[data-v-5d0fe414]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-5d0fe414] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-5d0fe414] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-5d0fe414] {\n  border-style: none;\n}\n.markdown-body code[data-v-5d0fe414],\n.markdown-body kbd[data-v-5d0fe414],\n.markdown-body pre[data-v-5d0fe414] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-5d0fe414] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-5d0fe414] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-5d0fe414] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-5d0fe414] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-5d0fe414] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-5d0fe414] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-5d0fe414] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-5d0fe414]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-5d0fe414] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-5d0fe414] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-5d0fe414]:after,\n.markdown-body hr[data-v-5d0fe414]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-5d0fe414]:after {\n  clear: both;\n}\n.markdown-body table[data-v-5d0fe414] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-5d0fe414],\n.markdown-body th[data-v-5d0fe414] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-5d0fe414] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-5d0fe414] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-5d0fe414],\n.markdown-body h2[data-v-5d0fe414],\n.markdown-body h3[data-v-5d0fe414],\n.markdown-body h4[data-v-5d0fe414],\n.markdown-body h5[data-v-5d0fe414],\n.markdown-body h6[data-v-5d0fe414] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-5d0fe414] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-5d0fe414],\n.markdown-body h2[data-v-5d0fe414] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-5d0fe414] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-5d0fe414] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-5d0fe414],\n.markdown-body h4[data-v-5d0fe414] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-5d0fe414] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-5d0fe414] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-5d0fe414],\n.markdown-body h6[data-v-5d0fe414] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-5d0fe414] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-5d0fe414] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-5d0fe414] {\n  margin: 0;\n}\n.markdown-body ol[data-v-5d0fe414],\n.markdown-body ul[data-v-5d0fe414] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-5d0fe414],\n.markdown-body ul ol[data-v-5d0fe414] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-5d0fe414],\n.markdown-body ol ul ol[data-v-5d0fe414],\n.markdown-body ul ol ol[data-v-5d0fe414],\n.markdown-body ul ul ol[data-v-5d0fe414] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-5d0fe414] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-5d0fe414],\n.markdown-body pre[data-v-5d0fe414] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-5d0fe414] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-5d0fe414]::-webkit-inner-spin-button,\n.markdown-body input[data-v-5d0fe414]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-5d0fe414] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-5d0fe414] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-5d0fe414] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-5d0fe414] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-5d0fe414] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-5d0fe414] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-5d0fe414] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-5d0fe414] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-5d0fe414] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-5d0fe414] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-5d0fe414] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-5d0fe414] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-5d0fe414] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-5d0fe414] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-5d0fe414] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-5d0fe414],\n.markdown-body .px-3[data-v-5d0fe414] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-5d0fe414] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-5d0fe414] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-5d0fe414] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-5d0fe414] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-5d0fe414] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-5d0fe414] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-5d0fe414] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-5d0fe414] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-5d0fe414],\n.markdown-body .pl-s .pl-v[data-v-5d0fe414] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-5d0fe414],\n.markdown-body .pl-en[data-v-5d0fe414] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-5d0fe414],\n.markdown-body .pl-smi[data-v-5d0fe414] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-5d0fe414] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-5d0fe414] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-5d0fe414],\n.markdown-body .pl-s[data-v-5d0fe414],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-5d0fe414],\n.markdown-body .pl-sr[data-v-5d0fe414],\n.markdown-body .pl-sr .pl-cce[data-v-5d0fe414],\n.markdown-body .pl-sr .pl-sra[data-v-5d0fe414],\n.markdown-body .pl-sr .pl-sre[data-v-5d0fe414] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-5d0fe414],\n.markdown-body .pl-v[data-v-5d0fe414] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-5d0fe414] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-5d0fe414] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-5d0fe414] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-5d0fe414]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-5d0fe414] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-5d0fe414] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-5d0fe414],\n.markdown-body .pl-mh .pl-en[data-v-5d0fe414],\n.markdown-body .pl-ms[data-v-5d0fe414] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-5d0fe414] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-5d0fe414] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-5d0fe414] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-5d0fe414] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-5d0fe414] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-5d0fe414] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-5d0fe414] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-5d0fe414] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-5d0fe414] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-5d0fe414] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-5d0fe414] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-5d0fe414] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-5d0fe414] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-5d0fe414] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-5d0fe414] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-5d0fe414] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-5d0fe414] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-5d0fe414] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-5d0fe414] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-5d0fe414] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-5d0fe414] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-5d0fe414] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-5d0fe414] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-5d0fe414] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-5d0fe414] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-5d0fe414] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-5d0fe414] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-5d0fe414] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-5d0fe414] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-5d0fe414] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-5d0fe414]:after,\n.markdown-body[data-v-5d0fe414]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-5d0fe414]:after {\n  clear: both;\n}\n.markdown-body[data-v-5d0fe414]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-5d0fe414]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-5d0fe414]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-5d0fe414],\n.markdown-body details[data-v-5d0fe414],\n.markdown-body dl[data-v-5d0fe414],\n.markdown-body ol[data-v-5d0fe414],\n.markdown-body p[data-v-5d0fe414],\n.markdown-body pre[data-v-5d0fe414],\n.markdown-body table[data-v-5d0fe414],\n.markdown-body ul[data-v-5d0fe414] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-5d0fe414] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-5d0fe414] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-5d0fe414]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-5d0fe414]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-5d0fe414],\n.markdown-body h2[data-v-5d0fe414],\n.markdown-body h3[data-v-5d0fe414],\n.markdown-body h4[data-v-5d0fe414],\n.markdown-body h5[data-v-5d0fe414],\n.markdown-body h6[data-v-5d0fe414] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-5d0fe414] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-5d0fe414],\n.markdown-body h2[data-v-5d0fe414] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-5d0fe414] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-5d0fe414] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-5d0fe414] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-5d0fe414] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-5d0fe414] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-5d0fe414],\n.markdown-body ul[data-v-5d0fe414] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-5d0fe414],\n.markdown-body ol ul[data-v-5d0fe414],\n.markdown-body ul ol[data-v-5d0fe414],\n.markdown-body ul ul[data-v-5d0fe414] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-5d0fe414] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-5d0fe414] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-5d0fe414] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-5d0fe414] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-5d0fe414] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-5d0fe414] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-5d0fe414] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-5d0fe414] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-5d0fe414],\n.markdown-body table th[data-v-5d0fe414] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-5d0fe414] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-5d0fe414]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-5d0fe414] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-5d0fe414] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-5d0fe414] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-5d0fe414] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-5d0fe414] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-5d0fe414] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-5d0fe414] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-5d0fe414] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-5d0fe414],\n.markdown-body pre[data-v-5d0fe414] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-5d0fe414] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-5d0fe414] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-5d0fe414]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-5d0fe414] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-5d0fe414] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-5d0fe414] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-5d0fe414]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-5d0fe414]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-5d0fe414] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-5d0fe414] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-5d0fe414],\n.markdown-body .pl-token[data-v-5d0fe414]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-5d0fe414] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-5d0fe414] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-5d0fe414] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-5d0fe414] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-5d0fe414] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-5d0fe414] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-5d0fe414] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-5d0fe414] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-5d0fe414] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-5d0fe414] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-5d0fe414] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-5d0fe414] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-5d0fe414] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-5d0fe414] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-5d0fe414] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},79397:(n,o,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n.image[data-v-9b3fd848] {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 400px;\n\tmargin-right: 25px;\n}\n.image-tall[data-v-9b3fd848] {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 500px;\n}\n.image-wide[data-v-9b3fd848] {\n\tdisplay: inline-block;\n\twidth: 600px;\n\theight: 400px;\n}\n",""]),n.exports=a},18876:(n,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>l});const a={components:{MImage:t(39186).F},data:()=>({shape:"square",shapeOptions:["square","circle","arch"]})};t(88904);var d=t(51900);const e=(0,d.Z)(a,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("h4",[n._v("image")]),n._v(" "),t("m-image",{staticClass:"image",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape}}),n._v(" "),t("m-image",{staticClass:"image image-tall",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape}}),n._v(" "),t("m-image",{staticClass:"image image-wide",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape}}),n._v(" "),t("br"),n._v(" "),t("label",[n._v("\n\t\tShape\n\t\t"),t("select",{directives:[{name:"model",rawName:"v-model",value:n.shape,expression:"shape"}],on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(n){return n.selected})).map((function(n){return"_value"in n?n._value:n.value}));n.shape=o.target.multiple?t:t[0]}}},n._l(n.shapeOptions,(function(o,a){return t("option",{key:a,domProps:{value:o}},[n._v("\n\t\t\t\t"+n._s(o)+"\n\t\t\t")])})),0)])],1)}),[],!1,null,"9b3fd848",null).exports;var r=t(415);const i={components:{Demo0:e,DemoCollapse:r.DemoCollapse,SrcFile:r.SrcFile}};t(18066);const l=(0,d.Z)(i,(function(){var n=this,o=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("Supports all "),t("code",[n._v("<img>")]),n._v(" attributes")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("Supports attributes from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[t("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("src")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")])]),n._v(" "),t("tr",[t("td",[n._v("srcset")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")])]),n._v(" "),t("tr",[t("td",[n._v("shape")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[t("code",[n._v("original")]),n._v(", "),t("code",[n._v("square")]),n._v(", "),t("code",[n._v("circle")]),n._v(", "),t("code",[n._v("arch")])]),n._v(" "),t("td",[n._v("Original applies theme’s border radius, square applies border radius of 0")])]),n._v(" "),t("tr",[t("td",[n._v("lazyload")]),n._v(" "),t("td",[t("code",[n._v("boolean")])]),n._v(" "),t("td",[t("code",[n._v("false")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")])])])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("Supports events from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[t("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Image")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>image</h4>\n\t\t<m-image\n\t\t\tclass="image"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t/>\n\t\t<m-image\n\t\t\tclass="image image-tall"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t/>\n\t\t<m-image\n\t\t\tclass="image image-wide"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t/>\n\t\t<br>\n\t\t<label>\n\t\t\tShape\n\t\t\t<select\n\t\t\t\tv-model="shape"\n\t\t\t>\n\t\t\t\t<option\n\t\t\t\t\tv-for="(value, index) in shapeOptions"\n\t\t\t\t\t:key="index"\n\t\t\t\t\t:value="value"\n\t\t\t\t>\n\t\t\t\t\t{{ value }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</label>\n\t</div>\n</template>\n\n<script>\nimport { MImage } from \'@square/maker/components/Image\';\n\nexport default {\n\tcomponents: {\n\t\tMImage,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tshape: \'square\',\n\t\t\tshapeOptions: [\n\t\t\t\t\'square\',\n\t\t\t\t\'circle\',\n\t\t\t\t\'arch\',\n\t\t\t],\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.image {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 400px;\n\tmargin-right: 25px;\n}\n\n.image-tall {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 500px;\n}\n\n.image-wide {\n\tdisplay: inline-block;\n\twidth: 600px;\n\theight: 400px;\n}\n</style>\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),t("h2",[n._v("Events")]),n._v(" "),n._m(3)],1)}],!1,null,"5d0fe414",null).exports},18066:(n,o,t)=>{var a=t(45072);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("45edc85a",a,!0,{})},88904:(n,o,t)=>{var a=t(79397);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("1a5bec29",a,!0,{})}}]);