(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4365],{44365:(t,e,n)=>{"use strict";n.d(e,{x6:()=>p,nI:()=>f,Pj:()=>L,UJ:()=>o});const o=Symbol("modalApiKey");var s=n(69792),a=n.n(s),r=n(16765),i=n(16539);const l={name:"Modal",components:{MTouchCapture:n(28044).v},inject:{modalApi:o,theme:{default:(0,i.uH)(),from:i.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>(0,r.Vi)(t).isValid()},color:{type:String,default:void 0,validator:t=>(0,r.Vi)(t).isValid()}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:a()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,i.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){var t,e,n;const o=(null===(t=this.$refs)||void 0===t||null===(e=t.modal)||void 0===e||null===(n=e.$el)||void 0===n?void 0:n.scrollTop)||0;this.isScrolledToTop=o<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e="translateY(".concat(t.changeY,"px)");this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}};var d=n(75027),c=n.n(d),u=n(51900);const p=(0,u.Z)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports;var h=n(27818),v=n.n(h);const f=(0,u.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports;var m=n(21931),y=n(27062),_=n(13555),b=n.n(_),w=n(51552),g=n(31838),M=n(45832),x=n(16825);const k={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:m.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[o]:e}}},S={name:"ModalLayer",components:{V:y.Z,PseudoWindow:b(),MTransitionFadeIn:w.j,MTransitionResponsive:g.w},mixins:[k],inject:{popoverApi:{from:x.y,default:void 0}},inheritAttrs:!1,apiMixin:k,data(){let t=M.rG,e=M.cT;return this.currentLayer.state.isStacked&&(t=M.iM,e=M.cT),{transitions:[{minWidth:M.iu,enter:M.vn,leave:M.w0},{minWidth:M.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=M.OE,n=!e,o=!!t.modalApi.state.vnode,s=!o,a=this.$refs.baseModalLayer;a&&(e&&o?(0,M.vq)({element:a}):e&&s?(0,M.s4)({element:a}):n&&o?setTimeout((()=>{a.style.opacity="0%"}),M.AT):n&&s&&a.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()},closeOnEsc(){const{closeOnEsc:t}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&t&&this.modalApi.close()}}};var T=n(95189),C=n.n(T);const L=(0,u.Z)(S,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.vnode?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("pseudo-window",{attrs:{document:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeOnEsc.apply(null,arguments)}}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=C().locals||C()}),null,null).exports},16825:(t,e,n)=>{"use strict";n.d(e,{f:()=>o,y:()=>s});const o=Symbol("PopoverConfig"),s=Symbol("PopoverLayer")},58856:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: auto;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},16851:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--maker-color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},75027:(t,e,n)=>{var o=n(58856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("092310f5",o,!0,{})},27818:(t,e,n)=>{var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("179c170a",o,!0,{})},95189:(t,e,n)=>{var o=n(16851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("7fc46ffb",o,!0,{})}}]);