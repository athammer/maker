(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7268],{27268:(e,t,n)=>{"use strict";n.d(t,{F:()=>m});var s=n(69792),r=n.n(s),a=n(13555),i=n.n(a),o=n(79082),l=n(88667),d=n(37502);function h(){const e=new WeakMap,t=new IntersectionObserver((t=>{t.forEach((t=>e.get(t.target)(t)))}));return{watch(n,s){e.set(n,s),t.observe(n)},unwatch(n){t.unobserve(n),e.delete(n)}}}const c=new Set;let u;const f={components:{PseudoWindow:i(),MTransitionFadeIn:o.j,MSkeletonBlock:l.s},inject:{theme:{default:(0,d.uH)(),from:d.YH}},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0},sizes:{type:String,default:void 0},shape:{type:String,default:void 0,validator:e=>["original","square","circle","arch"].includes(e)},lazyload:{type:Boolean,default:!1}},data(){return{loaded:c.has(this.src+this.srcset),throttledResizeHandler:r()(this.getImageDimensions,200),height:0,width:0}},computed:{...(0,d.C9)("image",["shape"]),style(){return{"--image-height":"".concat(this.height,"px")}},isThumbnail(){return this.width<"150"}},watch:{src:"load",srcset:"load"},mounted(){this.lazyload?(u||(u=new h),u.watch(this.$el,(({isIntersecting:e})=>{e&&this.load()}))):this.load(),this.getImageDimensions()},beforeDestroy(){u&&u.unwatch(this.$el)},methods:{load(){if(this.loaded||!this.src&&!this.srcset)return;const e=new Image;this.src&&(e.src=this.src),this.srcset&&(e.srcset=this.srcset),this.sizes&&(e.sizes=this.sizes),e.addEventListener("load",(()=>{c.add(this.src+this.srcset),this.loaded=!0,this.getImageDimensions()}))},getImageDimensions(){var e,t;this.height=(null===(e=this.$el)||void 0===e?void 0:e.offsetHeight)||"0",this.width=(null===(t=this.$el)||void 0===t?void 0:t.offsetWidth)||"0"}}};var p=n(27548),g=n.n(p);const m=(0,n(51900).Z)(f,(function(){var e,t=this,n=t.$createElement,s=t._self._c||n;return s("div",{class:t.$s.ImageWrapper},[t.loaded?t._e():s("m-skeleton-block",{class:[t.$s.Image,t.$s["shape_"+t.resolvedShape]]}),t._v(" "),s("m-transition-fade-in",[s("img",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],class:(e={},e[t.$s.Image]=!0,e[t.$s["shape_"+t.resolvedShape]]=t.resolvedShape,e[t.$s.thumbnail]=t.isThumbnail,e),style:t.style,attrs:{src:t.src,srcset:t.srcset,sizes:t.sizes}},"img",t.$attrs,!1),t.$listeners))]),t._v(" "),s("pseudo-window",{on:{resize:t.throttledResizeHandler}})],1)}),[],!1,(function(e){this.$s=g().locals||g()}),null,null).exports},88667:(e,t,n)=>{"use strict";n.d(t,{s:()=>o,p:()=>k});const s={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(e){return this.$slots.default?this.$slots.default:e("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var r=n(72986),a=n.n(r),i=n(51900);const o=(0,i.Z)(s,undefined,undefined,!1,(function(e){this.$s=a().locals||a()}),null,null).exports;var l=Symbol();function d(e,t){e[l]||(e[l]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[l]||this.parentElement}}))}var h=function(e,t){var n=e.splice(0);t.append.apply(t,n),n.forEach((function(e){e[l]=void 0}))};function c(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[f]){var s=this[f].get(t);s&&(t=s[0])}t.before(e),d(e,this)}function u(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var n=this[f];if(n){var s=n.get(e);if(s)return h(s,e),n.delete(e),void(e[l]=void 0)}e.remove()}var f=Symbol(),p={insertBefore:c,removeChild:u},g=Symbol(),m={insertBefore:c,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[g],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[g]),n.forEach((function(e){return e.remove()}))},removeChild:u,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[g];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),d(e,this),this.frag.push(e)}};const _={directives:{frag:{inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,s=document.createComment("");e[g]=s,0===t.length&&t.push(s);var r=document.createDocumentFragment();r.append.apply(r,t),e.replaceWith(r),e.frag=t,function(e,t,n){e[f]||(e[f]=new Map,Object.assign(e,p)),e[f].set(t,n)}(n,e,t),d(e,n),t.forEach((function(t){return d(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var s=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,s))},get:function(){return""}}),Object.assign(e,m)},unbind:function(e){h(e.frag,e),e[g].remove()}}},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((e=>e.tag||e.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var v=n(32794),b=n.n(v);const k=(0,i.Z)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[e.loaded||e.children?[e._t("default")]:e._l(e.linesNum,(function(t){return n("div",e._g(e._b({key:"skeleton-text-"+t,class:e.$s.SkeletonText},"div",e.$attrs,!1),e.$listeners))}))],2)}),[],!1,(function(e){this.$s=b().locals||b()}),null,null).exports},79082:(e,t,n)=>{"use strict";n.d(t,{j:()=>i});var s=n(39211),r=n(45832);const a={components:{MTransition:s.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})};const i=(0,n(51900).Z)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition",e._g(e._b({attrs:{enter:e.fadeInFn,leave:e.fadeOutFn}},"m-transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},45227:(e,t,n)=>{var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n\tborder-radius: var(--maker-shape-image-border-radius, 0)\n}\n.Image_j_xX0.thumbnail__7QZj {\n\t\tborder-radius: var(--maker-shape-thumbnail-border-radius, 0);\n}\n.Image_j_xX0.shape_square_NojeF {\n\t\tborder-radius: 0;\n}\n.Image_j_xX0.shape_circle_N3kcV {\n\t\tborder-radius: var(--image-height, 100%);\n}\n.Image_j_xX0.shape_arch__3RYa {\n\t\tborder-top-left-radius: var(--image-height);\n\t\tborder-top-right-radius: var(--image-height);\n}\n",""]),s.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0",thumbnail:"thumbnail__7QZj",shape_square:"shape_square_NojeF",shape_circle:"shape_circle_N3kcV",shape_arch:"shape_arch__3RYa"},e.exports=s},8647:(e,t,n)=>{var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),s.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},e.exports=s},33418:(e,t,n)=>{var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),s.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},e.exports=s},27548:(e,t,n)=>{var s=n(45227);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("14393fff",s,!0,{})},72986:(e,t,n)=>{var s=n(8647);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("e53630ca",s,!0,{})},32794:(e,t,n)=>{var s=n(33418);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("54e85523",s,!0,{})}}]);