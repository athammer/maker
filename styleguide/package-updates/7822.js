(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7822],{66769:(n,t,o)=>{"use strict";o.d(t,{s:()=>i,p:()=>E});const a={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(n){return this.$slots.default?this.$slots.default:n("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var e=o(72986),d=o.n(e),r=o(51900);const i=(0,r.Z)(a,undefined,undefined,!1,(function(n){this.$s=d().locals||d()}),null,null).exports;var l,b=Symbol(),s=Symbol(),m=Symbol(),p=Symbol(),c=function(n){return"frag"in n};function v(n,t){s in n||(n[s]=t,Object.defineProperty(n,"parentNode",{get:function(){return this[s]||this.parentElement}}))}function h(n){m in n||(n[m]=!0,Object.defineProperty(n,"nextSibling",{get:function(){var n=this.parentNode.childNodes,t=n.indexOf(this);return t>-1&&n[t+1]||null}}))}function f(n){if(!l){var t=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes");l=t.get}var o=l.apply(n),a=Array.from(o).map((function(t){return function(n,t){for(;n.parentNode!==t;){var o=n.parentNode;o&&(n=o)}return n}(t,n)}));return a.filter((function(n,t){return n!==a[t-1]}))}function k(n){p in n||(n[p]=!0,Object.defineProperties(n,{childNodes:{get:function(){return this.frag||f(this)}},firstChild:{get:function(){return this.childNodes[0]||null}}}),n.hasChildNodes=function(){return this.childNodes.length>0})}function y(){var n;(n=this.frag[0]).before.apply(n,arguments)}function w(){var n=this.frag;n.splice(0,n.length).forEach((function(n){n.remove()}))}var g=function n(t){var o;return(o=Array.prototype).concat.apply(o,t.map((function(t){return c(t)?n(t.frag):t})))};function u(n){if(c(this)){var t=this.frag.indexOf(n);if(t>-1){var o=this.frag.splice(t,1)[0];0===this.frag.length&&function(n,t){var o=n[b];t.before(o),v(o,n),n.frag.unshift(o)}(this,o),n.remove()}}else{f(this).indexOf(n)>-1&&n.remove()}return n}function x(n,t){var o=this,a=n.frag||[n];if(c(this)){var e=this.frag;if(t){var d=e.indexOf(t);d>-1&&(e.splice.apply(e,[d,0].concat(a)),t.before.apply(t,a))}else{var r=e[e.length-1];e.push.apply(e,a),r.after.apply(r,a)}z(this)}else t?this.childNodes.includes(t)&&t.before.apply(t,a):this.append.apply(this,a);return a.forEach((function(n){v(n,o)})),h(a[a.length-1]),n}function _(n){var t=this.frag;return t[t.length-1].after(n),v(n,this),z(this),t.push(n),n}function z(n){var t=n[b];n.frag[0]===t&&(n.frag.shift(),t.remove())}var C={inserted:function(n){var t=n.parentNode,o=n.nextSibling,a=n.previousSibling,e=Array.from(n.childNodes),d=document.createComment("");0===e.length&&e.push(d),n.frag=e,n[b]=d;var r=document.createDocumentFragment();r.append.apply(r,g(e)),n.replaceWith(r),e.forEach((function(t){v(t,n),h(t)})),k(n),Object.assign(n,{remove:w,appendChild:_,insertBefore:x,removeChild:u,before:y}),Object.defineProperty(n,"innerHTML",{set:function(n){var t=this,o=document.createElement("div");o.innerHTML=n;var a=this.frag.length;Array.from(o.childNodes).forEach((function(n){t.appendChild(n)})),o.append.apply(o,this.frag.splice(0,a))},get:function(){return""}}),t&&(Object.assign(t,{removeChild:u,insertBefore:x}),v(n,t),k(t)),o&&h(n),a&&h(a)},unbind:function(n){n.remove()}};const S={directives:{frag:C},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((n=>n.tag||n.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var M=o(32794),$=o.n(M);const E=(0,r.Z)(S,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{directives:[{name:"frag",rawName:"v-frag"}]},[n.loaded||n.children?[n._t("default")]:n._l(n.linesNum,(function(t){return o("div",n._g(n._b({key:"skeleton-text-"+t,class:n.$s.SkeletonText},"div",n.$attrs,!1),n.$listeners))}))],2)}),[],!1,(function(n){this.$s=$().locals||$()}),null,null).exports},79082:(n,t,o)=>{"use strict";o.d(t,{j:()=>r});var a=o(39211),e=o(45832);const d={components:{MTransition:a.T},inheritAttrs:!1,data:()=>({fadeInFn:e.dx,fadeOutFn:e.vq})};const r=(0,o(51900).Z)(d,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("m-transition",n._g(n._b({attrs:{enter:n.fadeInFn,leave:n.fadeOutFn}},"m-transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},39211:(n,t,o)=>{"use strict";o.d(t,{T:()=>r});var a=o(31838),e=o(45832);const d={components:{MTransitionResponsive:a.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:e.iu,enter:this.enter,leave:this.leave}]}}};const r=(0,o(51900).Z)(d,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},31838:(n,t,o)=>{"use strict";o.d(t,{w:()=>e});const a={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,t){this.getResponsiveTransition().enter({element:n,onComplete:t})},handleLeave(n,t){this.getResponsiveTransition().leave({element:n,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let t;return this.transitions.forEach((o=>{n>=o.minWidth&&(t=o)})),t}}};const e=(0,o(51900).Z)(a,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:(n,t,o)=>{"use strict";o.d(t,{$y:()=>M,AT:()=>l,C9:()=>P,I0:()=>S,OE:()=>r,ST:()=>b,Y7:()=>v,cT:()=>I,dx:()=>u,hJ:()=>p,iM:()=>E,iu:()=>d,rG:()=>$,s4:()=>x,tq:()=>Z,uL:()=>j,vn:()=>z,vq:()=>_,w0:()=>C});var a=o(73233),e=o(55274);const d=0,r=840,i="spring",l=200,b={type:i,stiffness:600,damping:60,mass:1},s={type:i,stiffness:400,damping:40,mass:1},m={type:i,stiffness:400,damping:30,mass:1.5},p={from:0,to:100},c={from:100,to:0};function v(n,t,o,a){return e=>function(n,t,o,a,e){return{[a]:"".concat(n/100*(o-t)+t).concat(e)}}(e,n,t,o,a)}const h=v(0,100,"opacity","%"),f=v(0,100,"y","%"),k=v(0,100,"x","%"),y=v(40,0,"y","px"),w=n=>({...h(n),...y(n)}),g=(n,t)=>{const o=v(t,0,"y","px");return{...h(n),...o(n)}};function u(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=h,i=p;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function x(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=h,i=p;d.set(r(i.from)),d.render(),setTimeout((()=>{(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}),l)}function _(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=h,i=c;d.set(r(i.from)),d.render(),(0,e.j)({...c,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function z(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=f,i=c;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function C(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=f,i=p;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function S(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=k,i=c;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function M(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=k,i=p;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function $(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=w,i=p;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function E(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=w,i=p;d.set(r(i.from)),d.render(),setTimeout((()=>{(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}),l)}function Z(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=g,i=p,l=20+5*t.dataset.loadIndex;d.set(r(i.from)),d.render(),(0,e.j)({...i,...s,onUpdate(n){d.set(r(n,l))},onComplete:o})}function I(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=w,i=c;d.set(r(i.from)),d.render(),(0,e.j)({...i,...b,onUpdate(n){d.set(r(n))},onComplete:o})}function j(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=f,i=c;d.set(r(i.from)),d.render(),(0,e.j)({...i,...m,onUpdate(n){d.set(r(n))},onComplete:o})}function P(n){let{element:t,onComplete:o}=n;const d=(0,a.ZP)(t),r=f,i=p;d.set(r(i.from)),d.render(),(0,e.j)({...i,...m,onUpdate(n){d.set(r(n))},onComplete:o})}},45227:(n,t,o)=>{var a=o(6738),e=o(77705)(a);e.push([n.id,"\n.ImageWrapper_KhACZ {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_ttsu0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n",""]),e.locals={ImageWrapper:"ImageWrapper_KhACZ",Image:"Image_ttsu0"},n.exports=e},8647:(n,t,o)=>{var a=o(6738),e=o(77705)(a);e.push([n.id,"\n.SkeletonBlock_YwYU8 {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock_YwYU8.loading_NoS57 {\n\t\tanimation: pulsing_xvHZX 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_xvHZX {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),e.locals={SkeletonBlock:"SkeletonBlock_YwYU8",loading:"loading_NoS57",pulsing:"pulsing_xvHZX"},n.exports=e},33418:(n,t,o)=>{var a=o(6738),e=o(77705)(a);e.push([n.id,"\n.SkeletonText_htzSs {\n\tposition: relative\n}\n.SkeletonText_htzSs:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText_htzSs::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText_htzSs::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_UPaPU 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_UPaPU {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),e.locals={SkeletonText:"SkeletonText_htzSs",pulsing:"pulsing_UPaPU"},n.exports=e},16865:(n,t,o)=>{var a=o(6738),e=o(77705)(a);e.push([n.id,'\n.markdown-body .octicon[data-v-743b9435] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-743b9435] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-743b9435]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-743b9435],\n.markdown-body h2 .octicon-link[data-v-743b9435],\n.markdown-body h3 .octicon-link[data-v-743b9435],\n.markdown-body h4 .octicon-link[data-v-743b9435],\n.markdown-body h5 .octicon-link[data-v-743b9435],\n.markdown-body h6 .octicon-link[data-v-743b9435] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-743b9435],\n.markdown-body h2:hover .anchor[data-v-743b9435],\n.markdown-body h3:hover .anchor[data-v-743b9435],\n.markdown-body h4:hover .anchor[data-v-743b9435],\n.markdown-body h5:hover .anchor[data-v-743b9435],\n.markdown-body h6:hover .anchor[data-v-743b9435] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-743b9435],\n.markdown-body h2:hover .anchor .octicon-link[data-v-743b9435],\n.markdown-body h3:hover .anchor .octicon-link[data-v-743b9435],\n.markdown-body h4:hover .anchor .octicon-link[data-v-743b9435],\n.markdown-body h5:hover .anchor .octicon-link[data-v-743b9435],\n.markdown-body h6:hover .anchor .octicon-link[data-v-743b9435] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-743b9435]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-743b9435]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-743b9435]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-743b9435]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-743b9435]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-743b9435]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-743b9435] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-743b9435] {\n  display: block;\n}\n.markdown-body summary[data-v-743b9435] {\n  display: list-item;\n}\n.markdown-body a[data-v-743b9435] {\n  background-color: initial;\n}\n.markdown-body a[data-v-743b9435]:active,\n.markdown-body a[data-v-743b9435]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-743b9435] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-743b9435] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-743b9435] {\n  border-style: none;\n}\n.markdown-body code[data-v-743b9435],\n.markdown-body kbd[data-v-743b9435],\n.markdown-body pre[data-v-743b9435] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-743b9435] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-743b9435] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-743b9435] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-743b9435] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-743b9435] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-743b9435] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-743b9435] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-743b9435]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-743b9435] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-743b9435] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-743b9435]:after,\n.markdown-body hr[data-v-743b9435]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-743b9435]:after {\n  clear: both;\n}\n.markdown-body table[data-v-743b9435] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-743b9435],\n.markdown-body th[data-v-743b9435] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-743b9435] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-743b9435] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-743b9435],\n.markdown-body h2[data-v-743b9435],\n.markdown-body h3[data-v-743b9435],\n.markdown-body h4[data-v-743b9435],\n.markdown-body h5[data-v-743b9435],\n.markdown-body h6[data-v-743b9435] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-743b9435] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-743b9435],\n.markdown-body h2[data-v-743b9435] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-743b9435] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-743b9435] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-743b9435],\n.markdown-body h4[data-v-743b9435] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-743b9435] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-743b9435] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-743b9435],\n.markdown-body h6[data-v-743b9435] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-743b9435] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-743b9435] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-743b9435] {\n  margin: 0;\n}\n.markdown-body ol[data-v-743b9435],\n.markdown-body ul[data-v-743b9435] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-743b9435],\n.markdown-body ul ol[data-v-743b9435] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-743b9435],\n.markdown-body ol ul ol[data-v-743b9435],\n.markdown-body ul ol ol[data-v-743b9435],\n.markdown-body ul ul ol[data-v-743b9435] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-743b9435] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-743b9435],\n.markdown-body pre[data-v-743b9435] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-743b9435] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-743b9435]::-webkit-inner-spin-button,\n.markdown-body input[data-v-743b9435]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-743b9435] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-743b9435] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-743b9435] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-743b9435] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-743b9435] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-743b9435] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-743b9435] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-743b9435] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-743b9435] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-743b9435] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-743b9435] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-743b9435] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-743b9435] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-743b9435] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-743b9435] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-743b9435],\n.markdown-body .px-3[data-v-743b9435] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-743b9435] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-743b9435] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-743b9435] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-743b9435] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-743b9435] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-743b9435] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-743b9435] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-743b9435] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-743b9435],\n.markdown-body .pl-s .pl-v[data-v-743b9435] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-743b9435],\n.markdown-body .pl-en[data-v-743b9435] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-743b9435],\n.markdown-body .pl-smi[data-v-743b9435] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-743b9435] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-743b9435] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-743b9435],\n.markdown-body .pl-s[data-v-743b9435],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-743b9435],\n.markdown-body .pl-sr[data-v-743b9435],\n.markdown-body .pl-sr .pl-cce[data-v-743b9435],\n.markdown-body .pl-sr .pl-sra[data-v-743b9435],\n.markdown-body .pl-sr .pl-sre[data-v-743b9435] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-743b9435],\n.markdown-body .pl-v[data-v-743b9435] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-743b9435] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-743b9435] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-743b9435] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-743b9435]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-743b9435] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-743b9435] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-743b9435],\n.markdown-body .pl-mh .pl-en[data-v-743b9435],\n.markdown-body .pl-ms[data-v-743b9435] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-743b9435] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-743b9435] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-743b9435] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-743b9435] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-743b9435] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-743b9435] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-743b9435] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-743b9435] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-743b9435] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-743b9435] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-743b9435] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-743b9435] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-743b9435] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-743b9435] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-743b9435] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-743b9435] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-743b9435] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-743b9435] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-743b9435] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-743b9435] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-743b9435] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-743b9435] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-743b9435] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-743b9435] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-743b9435] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-743b9435] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-743b9435] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-743b9435] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-743b9435] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-743b9435] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-743b9435]:after,\n.markdown-body[data-v-743b9435]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-743b9435]:after {\n  clear: both;\n}\n.markdown-body[data-v-743b9435]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-743b9435]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-743b9435]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-743b9435],\n.markdown-body details[data-v-743b9435],\n.markdown-body dl[data-v-743b9435],\n.markdown-body ol[data-v-743b9435],\n.markdown-body p[data-v-743b9435],\n.markdown-body pre[data-v-743b9435],\n.markdown-body table[data-v-743b9435],\n.markdown-body ul[data-v-743b9435] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-743b9435] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-743b9435] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-743b9435]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-743b9435]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-743b9435],\n.markdown-body h2[data-v-743b9435],\n.markdown-body h3[data-v-743b9435],\n.markdown-body h4[data-v-743b9435],\n.markdown-body h5[data-v-743b9435],\n.markdown-body h6[data-v-743b9435] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-743b9435] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-743b9435],\n.markdown-body h2[data-v-743b9435] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-743b9435] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-743b9435] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-743b9435] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-743b9435] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-743b9435] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-743b9435],\n.markdown-body ul[data-v-743b9435] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-743b9435],\n.markdown-body ol ul[data-v-743b9435],\n.markdown-body ul ol[data-v-743b9435],\n.markdown-body ul ul[data-v-743b9435] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-743b9435] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-743b9435] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-743b9435] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-743b9435] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-743b9435] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-743b9435] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-743b9435] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-743b9435] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-743b9435],\n.markdown-body table th[data-v-743b9435] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-743b9435] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-743b9435]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-743b9435] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-743b9435] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-743b9435] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-743b9435] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-743b9435] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-743b9435] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-743b9435] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-743b9435] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-743b9435],\n.markdown-body pre[data-v-743b9435] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-743b9435] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-743b9435] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-743b9435]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-743b9435] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-743b9435] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-743b9435] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-743b9435]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-743b9435]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-743b9435] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-743b9435] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-743b9435],\n.markdown-body .pl-token[data-v-743b9435]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-743b9435] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-743b9435] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-743b9435] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-743b9435] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-743b9435] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-743b9435] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-743b9435] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-743b9435] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-743b9435] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-743b9435] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-743b9435] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-743b9435] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-743b9435] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-743b9435] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-743b9435] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=e},4305:(n,t,o)=>{var a=o(6738),e=o(77705)(a);e.push([n.id,"\n.image[data-v-e4ae99e0] {\n\twidth: 400px;\n\theight: 400px;\n}\n",""]),n.exports=e},77822:(n,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var a=o(79082),e=o(66769);function d(){const n=new WeakMap,t=new IntersectionObserver((t=>{t.forEach((t=>n.get(t.target)(t)))}));return{watch(o,a){n.set(o,a),t.observe(o)},unwatch(o){t.unobserve(o),n.delete(o)}}}const r=new Set;let i;const l={components:{MTransitionFadeIn:a.j,MSkeletonBlock:e.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:r.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){i||(i=new d),i.watch(this.$el,this.onIntersection)},beforeDestroy(){i.unwatch(this.$el)},methods:{onIntersection(n){let{isIntersecting:t}=n;this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const n=new Image;this.src&&(n.src=this.src),this.srcset&&(n.srcset=this.srcset),n.addEventListener("load",(()=>{r.add(this.src+this.srcset),this.loaded=!0}))}}};var b=o(27548),s=o.n(b),m=o(51900);const p={components:{MImage:(0,m.Z)(l,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{class:n.$s.ImageWrapper},[n.isIntersecting?[o("m-transition-fade-in",[n.loaded?o("img",n._g(n._b({class:n.$s.Image,attrs:{src:n.src,srcset:n.srcset}},"img",n.$attrs,!1),n.$listeners)):o("m-skeleton-block")],1)]:n._e()],2)}),[],!1,(function(n){this.$s=s().locals||s()}),null,null).exports}};o(56504);const c=(0,m.Z)(p,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h4",[n._v("image")]),n._v(" "),o("m-image",{staticClass:"image",attrs:{src:"https://source.unsplash.com/random/400x400"}})],1)}),[],!1,null,"e4ae99e0",null).exports;var v=o(415);const h={components:{Demo0:c,DemoCollapse:v.DemoCollapse,SrcFile:v.SrcFile}};o(81831);const f=(0,m.Z)(h,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports all "),o("code",[n._v("<img>")]),n._v(" attributes")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[o("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("src")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("srcset")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[o("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Image")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>image</h4>\n\t\t<m-image\n\t\t\tclass="image"\n\t\t\tsrc="https://source.unsplash.com/random/400x400"\n\t\t/>\n\t</div>\n</template>\n\n<script>\nimport { MImage } from \'@square/maker/components/Image\';\n\nexport default {\n\tcomponents: {\n\t\tMImage,\n\t},\n};\n<\/script>\n\n<style scoped>\n.image {\n\twidth: 400px;\n\theight: 400px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(3)],1)}],!1,null,"743b9435",null).exports},27548:(n,t,o)=>{var a=o(45227);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("14393fff",a,!0,{})},72986:(n,t,o)=>{var a=o(8647);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("e53630ca",a,!0,{})},32794:(n,t,o)=>{var a=o(33418);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("54e85523",a,!0,{})},81831:(n,t,o)=>{var a=o(16865);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("baf43870",a,!0,{})},56504:(n,t,o)=>{var a=o(4305);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("2d4b0d7f",a,!0,{})}}]);