(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[470],{33216:function(t,e,n){"use strict";n.d(e,{b:function(){return c}});var a=n(60771),i=n.n(a),s=n(44185);var r={inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},color:{type:String,default:void 0,validator:t=>i().valid(t)}},computed:{...(0,s.C9)("heading",["size","fontFamily","fontWeight","color"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){const{fonts:t}=this.theme;return{fontFamily:this.resolvedFontFamily,fontWeight:this.resolvedFontWeight,color:this.resolvedColor,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale}}},render(t){const{$s:e,sizeClass:n,tag:a,inlineStyles:i}=this,s=this.$slots.default;return t(a,{class:[e.Heading,e[`size_${n}`]],style:i,attrs:this.$attrs,on:this.$listeners},s)}},o=n(71491),l=n.n(o);var c=(0,n(51900).Z)(r,undefined,undefined,!1,(function(t){this.$s=l().locals||l()}),null,null).exports},33960:function(t,e,n){"use strict";n.d(e,{x6:function(){return m},nI:function(){return _},Pj:function(){return D},UJ:function(){return a}});var a=Symbol("modalApiKey"),i=n(69792),s=n.n(i),r=n(60771),o=n.n(r),l=n(44185);const c={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0};var h={name:"TouchCapture",props:{preventDefault:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...c}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(this.preventDefault&&t.preventDefault(),t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(c).forEach((([t,e])=>{this[t]=e}))}}},f=n(51900),d={name:"Modal",components:{MTouchCapture:(0,f.Z)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:a,theme:{default:(0,l.uH)(),from:l.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>o().valid(t)},color:{type:String,default:void 0,validator:t=>o().valid(t)}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:s()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,l.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}},scrollTop(){return this.$refs.modal&&this.$refs.modal.$el?this.$refs.modal.$el.scrollTop:0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.isScrolledToTop=this.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e=`translateY(${t.changeY}px)`;this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}},u=n(75027),v=n.n(u);var m=(0,f.Z)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports,p=n(27818),g=n.n(p);var _=(0,f.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=g().locals||g()}),null,null).exports,x=n(21931),y=n(27062),z=n(13555),b=n.n(z),S=n(79082),M=n(31838),w=n(45832),T=n(16825);const C={inject:{currentLayer:{default:void 0,from:a}},provide(){const t=this,e={state:x.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const a=e(t.$createElement);return this.state.vnode=a,this.state.options=n,()=>{this.state.vnode===a&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[a]:e}}};var $={name:"ModalLayer",components:{V:y.Z,PseudoWindow:b(),MTransitionFadeIn:S.j,MTransitionResponsive:M.w},mixins:[C],inject:{popoverApi:{from:T.y,default:void 0}},inheritAttrs:!1,apiMixin:C,data(){let t=w.rG,e=w.cT;return this.currentLayer.state.isStacked&&(t=w.iM,e=w.cT),{transitions:[{minWidth:w.iu,enter:w.vn,leave:w.w0},{minWidth:w.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=w.OE,n=!e,a=!!t.modalApi.state.vnode,i=!a,s=this.$refs.baseModalLayer;s&&(e&&a?(0,w.vq)({element:s}):e&&i?(0,w.s4)({element:s}):n&&a?setTimeout((()=>{s.style.opacity="0%"}),w.AT):n&&i&&s.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},k=n(95189),G=n.n(k);var D=(0,f.Z)($,(function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{class:e.$s.Layer},[a("m-transition-fade-in",[e.currentLayer.state.vnode?a("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),a("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?a("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[a("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),a("div",{ref:"modal",class:e.$s.Container},[a("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?a("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=G().locals||G()}),null,null).exports},16825:function(t,e,n){"use strict";n.d(e,{f:function(){return a},y:function(){return i}});const a=Symbol("PopoverConfig"),i=Symbol("PopoverLayer")},79082:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var a=n(39211),i=n(45832),s={components:{MTransition:a.T},inheritAttrs:!1,data:()=>({fadeInFn:i.dx,fadeOutFn:i.vq})},r=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},72630:function(t,e,n){var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Heading__6G7M {\n\t\t--resolution: 1200px;\n}\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=a},58856:function(t,e,n){var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),a.locals={Modal:"Modal_lWZo9"},t.exports=a},619:function(t,e,n){var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),a.locals={ModalContent:"ModalContent_EYuNB"},t.exports=a},16851:function(t,e,n){var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),a.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=a},71491:function(t,e,n){var a=n(72630);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("ceb27898",a,!0,{})},75027:function(t,e,n){var a=n(58856);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("092310f5",a,!0,{})},27818:function(t,e,n){var a=n(619);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("179c170a",a,!0,{})},95189:function(t,e,n){var a=n(16851);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("7fc46ffb",a,!0,{})}}]);