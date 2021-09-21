(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[242],{3185:function(t,n,e){"use strict";e.d(n,{x6:function(){return l},Pj:function(){return w},UJ:function(){return o}});var o=Symbol("modalApiKey"),a={name:"Modal",inject:{modalApi:o},props:{beforeClose:{type:Function,required:!1,default:void 0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},r=e(5027),s=e.n(r),i=e(1900);var l=(0,i.Z)(a,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Modal},[t._t("default")],2)}),[],!1,(function(t){this.$s=s().locals||s()}),null,null).exports,d=e(7818),c=e.n(d);(0,i.Z)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports;var u=e(1931),f=e(7062),p=e(3555),h=e.n(p),v=e(9082),m=e(1838),_=e(5832);const y={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,n={state:u.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(n,e={}){const o=n(t.$createElement);return this.state.vnode=o,this.state.options=e,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=n),{[o]:n}}};var M={name:"ModalLayer",components:{V:f.Z,PseudoWindow:h(),MTransitionFadeIn:v.j,MTransitionResponsive:m.w},mixins:[y],inheritAttrs:!1,apiMixin:y,data(){let t=_.rG,n=_.cT;return this.currentLayer.state.isStacked&&(t=_.iM,n=_.cT),{transitions:[{minWidth:_.iu,enter:_.vn,leave:_.w0},{minWidth:_.OE,enter:t,leave:n}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const n=window.innerWidth>=_.OE,e=!n,o=!!t.modalApi.state.vnode,a=!o,r=this.$refs.baseModalLayer;r&&(n&&o?(0,_.vq)({element:r}):n&&a?(0,_.s4)({element:r}):e&&o?setTimeout((()=>{r.style.opacity="0%"}),_.AT):e&&a&&r.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:n}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&n&&!e.contains(t.target)&&this.modalApi.close()}}},x=e(5189),b=e.n(x);var w=(0,i.Z)(M,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("div",{class:n.$s.Layer},[o("m-transition-fade-in",[n.currentLayer.state.vnode?o("div",{class:[n.$s.Translucent,(t={},t[n.$s.Transparent]=n.currentLayer.state.isStacked,t)]}):n._e()]),n._v(" "),o("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:n.$s.ModalLayer,on:{"!click":function(t){return n.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:n.$s.disableScroll,attrs:{body:""}}),n._v(" "),o("div",{ref:"modal",class:n.$s.Container},[o("v",{attrs:{nodes:n.currentLayer.state.vnode}})],1)],1):n._e()]),n._v(" "),n.currentLayer.state.vnode?o("modal-layer"):n._e()],1)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},9082:function(t,n,e){"use strict";e.d(n,{j:function(){return s}});var o=e(9211),a=e(5832),r={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:a.dx,fadeOutFn:a.vq})},s=(0,e(1900).Z)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},8242:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return s}});var o=e(6745),a=e(3185),r={components:{MActionBarLayer:o.$n,MModalLayer:a.Pj},mixins:[a.Pj.apiMixin]},s=(0,e(1900).Z)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-action-bar-layer",[e("router-view"),t._v(" "),e("m-modal-layer")],1)}),[],!1,null,null,null).exports},5027:function(t,n,e){var o=e(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("092310f5",o,!0,{})},7818:function(t,n,e){var o=e(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("179c170a",o,!0,{})},5189:function(t,n,e){var o=e(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("7fc46ffb",o,!0,{})}}]);