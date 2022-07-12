(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[141],{9141:(t,e,n)=>{"use strict";n.d(e,{x6:()=>m,Pj:()=>D,UJ:()=>o});const o=Symbol("modalApiKey");var r=n(9792),i=n.n(r),s=n(6765),a=n(3931);const l={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0},c={name:"TouchCapture",props:{preventDefault:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...l}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit("on-drag-".concat(this.direction),this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit("on-swipe-".concat(this.direction),this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(this.preventDefault&&t.preventDefault(),t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(l).forEach((([t,e])=>{this[t]=e}))}}};var d=n(1900);const h={name:"Modal",components:{MTouchCapture:(0,d.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:o,theme:{default:(0,a.uH)(),from:a.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>(0,s.Vi)(t).isValid()},color:{type:String,default:void 0,validator:t=>(0,s.Vi)(t).isValid()}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:i()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,a.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}},scrollTop(){return this.$refs.modal&&this.$refs.modal.$el?this.$refs.modal.$el.scrollTop:0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.isScrolledToTop=this.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e="translateY(".concat(t.changeY,"px)");this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}};var u=n(5027),p=n.n(u);const m=(0,d.Z)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var f=n(7818),v=n.n(f);(0,d.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports;var g=n(1931),y=n(7062),S=n(3555),b=n.n(S),w=n(9082),_=n(1838),T=n(5832);Symbol("PopoverConfig");const C=Symbol("PopoverLayer"),M={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:g.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[o]:e}}},x={name:"ModalLayer",components:{V:y.Z,PseudoWindow:b(),MTransitionFadeIn:w.j,MTransitionResponsive:_.w},mixins:[M],inject:{popoverApi:{from:C,default:void 0}},inheritAttrs:!1,apiMixin:M,data(){let t=T.rG,e=T.cT;return this.currentLayer.state.isStacked&&(t=T.iM,e=T.cT),{transitions:[{minWidth:T.iu,enter:T.vn,leave:T.w0},{minWidth:T.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=T.OE,n=!e,o=!!t.modalApi.state.vnode,r=!o,i=this.$refs.baseModalLayer;i&&(e&&o?(0,T.vq)({element:i}):e&&r?(0,T.s4)({element:i}):n&&o?setTimeout((()=>{i.style.opacity="0%"}),T.AT):n&&r&&i.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}};var k=n(5189),$=n.n(k);const D=(0,d.Z)(x,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.vnode?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=$().locals||$()}),null,null).exports},8856:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: auto;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--maker-color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},5027:(t,e,n)=>{var o=n(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("092310f5",o,!0,{})},7818:(t,e,n)=>{var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("179c170a",o,!0,{})},5189:(t,e,n)=>{var o=n(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7fc46ffb",o,!0,{})}}]);