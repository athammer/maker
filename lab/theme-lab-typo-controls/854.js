(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[854],{8486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=Symbol();function r(e,t){e[o]||(e[o]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[o]||this.parentElement}}))}var s=function(e,t){var n=e.splice(0);t.append.apply(t,n),n.forEach((function(e){e[o]=void 0}))};function i(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[l]){var o=this[l].get(t);o&&(t=o[0])}t.before(e),r(e,this)}function a(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var n=this[l];if(n){var r=n.get(e);if(r)return s(r,e),n.delete(e),void(e[o]=void 0)}e.remove()}var l=Symbol(),d={insertBefore:i,removeChild:a},c=Symbol(),u={insertBefore:i,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[c],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[c]),n.forEach((function(e){return e.remove()}))},removeChild:a,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[c];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),r(e,this),this.frag.push(e)}};const f={inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,o=document.createComment("");e[c]=o,0===t.length&&t.push(o);var s=document.createDocumentFragment();s.append.apply(s,t),e.replaceWith(s),e.frag=t,function(e,t,n){e[l]||(e[l]=new Map,Object.assign(e,d)),e[l].set(t,n)}(n,e,t),r(e,n),t.forEach((function(t){return r(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var o=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,o))},get:function(){return""}}),Object.assign(e,u)},unbind:function(e){s(e.frag,e),e[c].remove()}}},6964:(e,t,n)=>{"use strict";n.d(t,{s:()=>a,p:()=>u});const o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(e){return this.$slots.default?this.$slots.default:e("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var r=n(2986),s=n.n(r),i=n(1900);const a=(0,i.Z)(o,undefined,undefined,!1,(function(e){this.$s=s().locals||s()}),null,null).exports;const l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((e=>e.tag||e.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var d=n(2794),c=n.n(d);const u=(0,i.Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[e.loaded||e.children?[e._t("default")]:e._l(e.linesNum,(function(t){return n("div",e._g(e._b({key:"skeleton-text-"+t,class:e.$s.SkeletonText},"div",e.$attrs,!1),e.$listeners))}))],2)}),[],!1,(function(e){this.$s=c().locals||c()}),null,null).exports},5832:(e,t,n)=>{"use strict";n.d(t,{iu:()=>s,OE:()=>i,AT:()=>l,hJ:()=>f,vP:()=>p,Y7:()=>m,dx:()=>k,s4:()=>b,vq:()=>P,vn:()=>w,w0:()=>C,rG:()=>y,iM:()=>T,tq:()=>$,cT:()=>Z,uL:()=>S,C9:()=>I});var o=n(9546),r=n(7069);const s=0,i=840,a="spring",l=200,d={type:a,stiffness:600,damping:60,mass:1},c={type:a,stiffness:400,damping:40,mass:1},u={type:a,stiffness:400,damping:30,mass:1.5},f={from:0,to:100},p={from:100,to:0};function m(e,t,n,o){return r=>function(e,t,n,o,r){return{[o]:"".concat(e/100*(n-t)+t).concat(r)}}(r,e,t,n,o)}const h=m(0,100,"opacity","%"),v=m(0,100,"y","%"),g=(m(0,100,"x","%"),m(40,0,"y","px")),_=e=>({...h(e),...g(e)}),x=(e,t)=>{const n=m(t,0,"y","px");return{...h(e),...n(e)}};function k({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=h,i=f;n.set(s(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function b({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=h,i=f;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}),l)}function P({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=h,i=p;n.set(s(i.from)),n.render(),(0,r.j)({...p,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function w({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=v,i=p;n.set(s(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function C({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=v,i=f;n.set(s(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function y({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=_,i=f;n.set(s(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function T({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=_,i=f;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}),l)}function $({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=x,i=f,a=20+5*e.dataset.loadIndex;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(e){n.set(s(e,a))},onComplete:t})}function Z({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=_,i=p;n.set(s(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(e){n.set(s(e))},onComplete:t})}function S({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=v,i=p;n.set(s(i.from)),n.render(),(0,r.j)({...i,...u,onUpdate(e){n.set(s(e))},onComplete:t})}function I({element:e,onComplete:t}){const n=(0,o.ZP)(e),s=v,i=f;n.set(s(i.from)),n.render(),(0,r.j)({...i,...u,onUpdate(e){n.set(s(e))},onComplete:t})}},6617:(e,t,n)=>{var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.ProductLoad_aw1fk {\n\tmargin: 0 auto;\n\tpadding: 24px\n}\n@media screen and (min-width: 840px) {\n.ProductLoad_aw1fk {\n\t\tpadding: 48px\n}\n}\n.ProductGrid_hIkFY {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.Product_AxRWW {\n\twidth: 100%;\n\tmargin: 0 auto 24px\n}\n@media screen and (min-width: 840px) {\n.Product_AxRWW {\n\t\twidth: calc(25% - 24px);\n\t\tmargin: 0 12px 24px\n}\n}\n.ProductImage_QqYIv {\n\twidth: 100%;\n\theight: 200px;\n\tmargin-bottom: 12px;\n}\n",""]),o.locals={ProductLoad:"ProductLoad_aw1fk",ProductGrid:"ProductGrid_hIkFY",Product:"Product_AxRWW",ProductImage:"ProductImage_QqYIv"},e.exports=o},8647:(e,t,n)=>{var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},e.exports=o},3418:(e,t,n)=>{var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},e.exports=o},2854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(6964),r=n(5832);const s={props:{itemsPerRowMobile:{type:Number,default:1},itemsPerRowTablet:{type:Number,default:1},itemIndex:{type:Number,default:1}},data:()=>({viewportWidth:0}),computed:{loadIndex(){const{itemIndex:e}=this,{itemsPerRowMobile:t,itemsPerRowTablet:n,viewportWidth:o}=this,s=o<r.OE?t:n;if(1===s)return e;return Math.ceil(e/s)*(e%s>0?e%s:s)}},mounted(){this.viewportWidth=window.innerWidth},methods:{handleEnter(e,t){e.dataset.loadIndex=this.loadIndex,(0,r.tq)({element:e,onComplete:t})},handleLeave(e,t){(0,r.cT)({element:e,onComplete:t})}}};var i=n(1900);const a=(0,i.Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._b({on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,null,null).exports,l={components:{MSkeletonBlock:o.s,MSkeletonText:o.p,MTransitionStaggered:a},data:()=>({reveal:!1}),mounted(){setTimeout((()=>{this.reveal=!0}),1e3)}};var d=n(2597),c=n.n(d);const u=(0,i.Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.ProductLoad},[n("div",{class:e.$s.ProductGrid},e._l(16,(function(t){return n("div",{key:t,class:e.$s.Product},[e.reveal?e._e():[n("m-skeleton-block",{class:e.$s.ProductImage}),e._v(" "),n("m-skeleton-text")],e._v(" "),n("m-transition-staggered",{attrs:{"items-per-row-mobile":1,"items-per-row-tablet":4,"item-index":t}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.reveal,expression:"reveal"}]},[n("img",{class:e.$s.ProductImage,attrs:{src:"https://picsum.photos/600/300?"+t,height:"200px"}}),e._v(" "),n("div",[e._v("This is item number "+e._s(t))])])])],2)})),0)])}),[],!1,(function(e){this.$s=c().locals||c()}),null,null).exports},2597:(e,t,n)=>{var o=n(6617);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("e9cc9db6",o,!0,{})},2986:(e,t,n)=>{var o=n(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("e53630ca",o,!0,{})},2794:(e,t,n)=>{var o=n(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("54e85523",o,!0,{})}}]);