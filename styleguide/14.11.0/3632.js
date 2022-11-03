(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3632],{93632:(t,e,o)=>{"use strict";o.d(e,{x6:()=>p,nI:()=>f,Pj:()=>L,UJ:()=>n});const n=Symbol("modalApiKey");var a=o(69792),r=o.n(a),s=o(16765),i=o(16539);const l={name:"Modal",components:{MTouchCapture:o(28044).v},inject:{modalApi:n,theme:{default:(0,i.uH)(),from:i.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>(0,s.Vi)(t).isValid()},color:{type:String,default:void 0,validator:t=>(0,s.Vi)(t).isValid()}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:r()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,i.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){var t,e,o;const n=(null===(t=this.$refs)||void 0===t||null===(e=t.modal)||void 0===e||null===(o=e.$el)||void 0===o?void 0:o.scrollTop)||0;this.isScrolledToTop=n<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e="translateY(".concat(t.changeY,"px)");this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}};var d=o(75027),c=o.n(d),u=o(51900);const p=(0,u.Z)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports;var h=o(27818),v=o.n(h);const f=(0,u.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports;var m=o(21931),y=o(27062),_=o(13555),b=o.n(_),w=o(51552),g=o(31838),k=o(45832),M=o(16825);const x={inject:{currentLayer:{default:void 0,from:n}},provide(){const t=this,e={state:m.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,o={}){const n=e(t.$createElement);return this.state.vnode=n,this.state.options=o,()=>{this.state.vnode===n&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[n]:e}}},S={name:"ModalLayer",components:{V:y.Z,PseudoWindow:b(),MTransitionFadeIn:w.j,MTransitionResponsive:g.w},mixins:[x],inject:{popoverApi:{from:M.y,default:void 0}},inheritAttrs:!1,apiMixin:x,data(){let t=k.rG,e=k.cT;return this.currentLayer.state.isStacked&&(t=k.iM,e=k.cT),{transitions:[{minWidth:k.iu,enter:k.vn,leave:k.w0},{minWidth:k.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=k.OE,o=!e,n=!!t.modalApi.state.vnode,a=!n,r=this.$refs.baseModalLayer;r&&(e&&n?(0,k.vq)({element:r}):e&&a?(0,k.s4)({element:r}):o&&n?setTimeout((()=>{r.style.opacity="0%"}),k.AT):o&&a&&r.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:o}=this.$refs;o&&e&&!o.contains(t.target)&&this.modalApi.close()},closeOnEsc(){const{closeOnEsc:t}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&t&&this.modalApi.close()}}};var T=o(95189),C=o.n(T);const L=(0,u.Z)(S,(function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{class:e.$s.Layer},[n("m-transition-fade-in",[e.currentLayer.state.vnode?n("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),n("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?n("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[n("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),n("pseudo-window",{attrs:{document:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeOnEsc.apply(null,arguments)}}}),e._v(" "),n("div",{ref:"modal",class:e.$s.Container},[n("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?n("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=C().locals||C()}),null,null).exports},16825:(t,e,o)=>{"use strict";o.d(e,{f:()=>n,y:()=>a});const n=Symbol("PopoverConfig"),a=Symbol("PopoverLayer")},58856:(t,e,o)=>{var n=o(77705)((function(t){return t[1]}));n.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: auto;\n\tcolor: var(--color, var(--maker-color-body, inherit));\n\tbackground: var(--bg-color, var(--maker-color-background, #f5f6f7));\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),n.locals={Modal:"Modal_lWZo9"},t.exports=n},619:(t,e,o)=>{var n=o(77705)((function(t){return t[1]}));n.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),n.locals={ModalContent:"ModalContent_EYuNB"},t.exports=n},16851:(t,e,o)=>{var n=o(77705)((function(t){return t[1]}));n.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--maker-color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),n.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=n},75027:(t,e,o)=>{var n=o(58856);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,o(54023).Z)("092310f5",n,!0,{})},27818:(t,e,o)=>{var n=o(619);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,o(54023).Z)("179c170a",n,!0,{})},95189:(t,e,o)=>{var n=o(16851);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,o(54023).Z)("7fc46ffb",n,!0,{})}}]);