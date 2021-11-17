(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[660],{193:function(t,e,n){"use strict";n.d(e,{F:function(){return u}});var o=n(9082),s=n(1688);function r(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,o){t.set(n,o),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const i=new Set;let a;var l={components:{MTransitionFadeIn:o.j,MSkeletonBlock:s.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:i.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new r),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{i.add(this.src+this.srcset),this.loaded=!0}))}}},c=n(7548),d=n.n(c);var u=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},2492:function(t,e,n){"use strict";n.d(e,{x6:function(){return u},Pj:function(){return $},UJ:function(){return o}});var o=Symbol("modalApiKey"),s=n(771),r=n.n(s),i=n(1098),a={name:"Modal",inject:{modalApi:o,theme:{default:(0,i.uH)(),from:i.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>r().valid(t)},color:{type:String,default:void 0,validator:t=>r().valid(t)}},computed:{...(0,i.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},l=n(5027),c=n.n(l),d=n(1900);var u=(0,d.Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Modal,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,f=n(7818),p=n.n(f);(0,d.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var h=n(1931),v=n(7062),m=n(3555),_=n.n(m),g=n(9082),y=n(1838),b=n(5832);const k={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:h.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[o]:e}}};var x={name:"ModalLayer",components:{V:v.Z,PseudoWindow:_(),MTransitionFadeIn:g.j,MTransitionResponsive:y.w},mixins:[k],inheritAttrs:!1,apiMixin:k,data(){let t=b.rG,e=b.cT;return this.currentLayer.state.isStacked&&(t=b.iM,e=b.cT),{transitions:[{minWidth:b.iu,enter:b.vn,leave:b.w0},{minWidth:b.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=b.OE,n=!e,o=!!t.modalApi.state.vnode,s=!o,r=this.$refs.baseModalLayer;r&&(e&&o?(0,b.vq)({element:r}):e&&s?(0,b.s4)({element:r}):n&&o?setTimeout((()=>{r.style.opacity="0%"}),b.AT):n&&s&&r.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},M=n(5189),w=n.n(M);var $=(0,d.Z)(x,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.vnode?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=w().locals||w()}),null,null).exports},1688:function(t,e,n){"use strict";n.d(e,{s:function(){return a},p:function(){return u}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},s=n(2986),r=n.n(s),i=n(1900);var a=(0,i.Z)(o,undefined,undefined,!1,(function(t){this.$s=r().locals||r()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=n(2794),d=n.n(c);var u=(0,i.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return i}});var o=n(9211),s=n(5832),r={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:s.dx,fadeOutFn:s.vq})},i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5227:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),o.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=o},8856:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},8647:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},2850:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.cover-photo[data-v-a8093446] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-a8093446] {\n\twidth: 100%;\n}\n.icon[data-v-a8093446] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},3660:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var o=n(2492),s=n(567),r=n(8566),i=n(193),a=n(9893),l=n.n(a),c={components:{MModal:o.x6,MActionBar:s.MS,MButton:r.G,MImage:i.F,X:l()}},d=(n(299),(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"}})],1),t._v(" "),n("div",[t._v("\n\t\tSecond modal\n\t\t"),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\t\tLong text "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("m-action-bar",[n("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index-first-modal"}}},[n("m-button",{attrs:{size:"large",shape:"pill"}},[n("x",{staticClass:"icon"})],1)],1),t._v(" "),n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""}},[t._v("\n\t\t\tAction B\n\t\t")])],1)],1)}),[],!1,null,"a8093446",null).exports)},7548:function(t,e,n){var o=n(5227);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("14393fff",o,!0,{})},5027:function(t,e,n){var o=n(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("092310f5",o,!0,{})},7818:function(t,e,n){var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("179c170a",o,!0,{})},5189:function(t,e,n){var o=n(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7fc46ffb",o,!0,{})},2986:function(t,e,n){var o=n(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("e53630ca",o,!0,{})},2794:function(t,e,n){var o=n(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("54e85523",o,!0,{})},299:function(t,e,n){var o=n(2850);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("727141e0",o,!0,{})}}]);