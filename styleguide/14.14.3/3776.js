(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3776],{3776:(t,e,n)=>{"use strict";n.d(e,{x6:()=>h,nI:()=>f,Pj:()=>E,UJ:()=>o});const o=Symbol("modalApiKey");var r=n(69792),s=n.n(r),a=n(27060),i=n(46010);const l={name:"Modal",components:{MTouchCapture:n(28044).v},inject:{modalApi:o,theme:{default:(0,i.uH)(),from:i.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:(0,a.Z)("color")},color:{type:String,default:void 0,validator:(0,a.Z)("color")}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:s()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,i.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){var t,e,n;const o=(null===(t=this.$refs)||void 0===t||null===(e=t.modal)||void 0===e||null===(n=e.$el)||void 0===n?void 0:n.scrollTop)||0;this.isScrolledToTop=o<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e="translateY(".concat(t.changeY,"px)");this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}};var c=n(75027),d=n.n(c),u=n(51900);const h=(0,u.Z)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports;var p=n(27818),m=n.n(p);const f=(0,u.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var v=n(21931),y=n(13555),g=n.n(y),S=n(51552),b=n(31838),w=n(45832),_=n(54868),T=n(16825);const C={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:v.Z.observable({renderFn:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(t,e={}){return this.state.renderFn=t,this.state.options=e,()=>{this.state.renderFn===t&&(this.state.renderFn=void 0)}},async close(){if(!this.state.renderFn&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.renderFn=void 0}))}}};return this.modalApi||(this.modalApi=e),{[o]:e}}},M={name:"ModalLayer",components:{RenderFn:_.Z,PseudoWindow:g(),MTransitionFadeIn:S.j,MTransitionResponsive:b.w},mixins:[C],inject:{popoverApi:{from:T.y,default:void 0}},inheritAttrs:!1,apiMixin:C,data(){let t=w.rG,e=w.cT;return this.currentLayer.state.isStacked&&(t=w.iM,e=w.cT),{transitions:[{minWidth:w.iu,enter:w.vn,leave:w.w0},{minWidth:w.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.renderFn),(()=>{const e=window.innerWidth>=w.OE,n=!e,o=!!t.modalApi.state.renderFn,r=!o,s=this.$refs.baseModalLayer;s&&(e&&o?(0,w.vq)({element:s}):e&&r?(0,w.s4)({element:s}):n&&o?setTimeout((()=>{s.style.opacity="0%"}),w.AT):n&&r&&s.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()},closeOnEsc(){const{closeOnEsc:t}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&t&&this.modalApi.close()}}};var k=n(95189),x=n.n(k);const E=(0,u.Z)(M,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.renderFn?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.renderFn?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("pseudo-window",{attrs:{document:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeOnEsc.apply(null,arguments)}}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("render-fn",{attrs:{"render-fn":e.currentLayer.state.renderFn}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.renderFn?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports},16825:(t,e,n)=>{"use strict";n.d(e,{f:()=>o,y:()=>r});const o=Symbol("PopoverConfig"),r=Symbol("PopoverLayer")},28044:(t,e,n)=>{"use strict";n.d(e,{v:()=>s});const o={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0},r={name:"TouchCapture",props:{preventDefault:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...o}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit("on-drag-".concat(this.direction),this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit("on-swipe-".concat(this.direction),this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(this.preventDefault&&t.preventDefault(),t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(o).forEach((([t,e])=>{this[t]=e}))}}};const s=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},58856:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: auto;\n\tcolor: var(--color, var(--maker-color-body, #000000));\n\tbackground: var(--bg-color, var(--maker-color-background, #ffffff));\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},16851:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--maker-color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},75027:(t,e,n)=>{var o=n(58856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("092310f5",o,!0,{})},27818:(t,e,n)=>{var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("179c170a",o,!0,{})},95189:(t,e,n)=>{var o=n(16851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("7fc46ffb",o,!0,{})}}]);