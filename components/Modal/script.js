!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/TouchCapture"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("lodash/throttle"),require("vue"));else if("function"==typeof define&&define.amd)define(["../../components/TouchCapture","../../components/TransitionFadeIn","../../utils/TransitionResponsive","../../utils/transitions","lodash/throttle","vue"],t);else{var n="object"==typeof exports?t(require("../../components/TouchCapture"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("lodash/throttle"),require("vue")):t(e["../../components/TouchCapture"],e["../../components/TransitionFadeIn"],e["../../utils/TransitionResponsive"],e["../../utils/transitions"],e["lodash/throttle"],e.vue);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(e,t,n,o,r,s){return function(){var i={89:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,n=e.data,o=e.parent,r=function e(t){return Array.isArray(t)?(n=t=>e(t),t.reduce(((e,t)=>e.concat(n(t))),[])):null!==(o=t)&&"object"==typeof o?function(e){let t=[];for(const n in e)e[n]&&t.push(n);return t}(t):"string"==typeof t&&t?[t]:[];var n,o}([n.staticClass,n.class]);if(r){var s,i,a,l=(i=(s=t).body,a=s.document,i?window.document.body:!!a&&window.document.documentElement);if(l){var c=function(e,t){if(!t.length)return;const{classList:n}=e;return t.filter((e=>{if(!n.contains(e))return n.add(e),!0}))}(l,r),d=function(){!function(e,t){if(!t||!t.length)return;let n;for(;n=t.shift();)e.classList.remove(n);e.classList.length||e.removeAttribute("class")}(l,c)};o.$once("hook:beforeUpdate",d),o.$once("hook:destroyed",d)}}},t=Object.prototype.hasOwnProperty,n=function(e,t,n){var o="&"===t[0],r="~"===(t=o?t.slice(1):t)[0],s="!"===(t=r?t.slice(1):t)[0];return{o:e,t:t=s?t.slice(1):t,i:n,u:{once:r,capture:s,passive:o}}},o=function(e){var o,r,s,i=e.props,a=e.listeners,l=e.parent,c=function(e,o){var r,s,i=[];for(var a in o)if(r=o,s=a,t.call(r,s)){var l=o[a],c=n(e,a,l);c.o.addEventListener(c.t,c.i,c.u),i.push(c)}return i}((r=(o=i).body,s=o.document,r?window.document.body:s?window.document:window),a),d=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(c)};l.$once("hook:beforeUpdate",d),l.$once("hook:destroyed",d)},r=function(t){o(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?r(t):t.parent.$once("hook:mounted",(function(){r(t)})),t.slots().default}}}()},138:function(t){"use strict";t.exports=e},403:function(e){"use strict";e.exports=t},515:function(e){"use strict";e.exports=n},387:function(e){"use strict";e.exports=o},400:function(e){"use strict";e.exports=r},103:function(e){"use strict";e.exports=s}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e].call(n.exports,n,n.exports,l),n.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){"use strict";l.r(c),l.d(c,{MModal:function(){return i},MModalContent:function(){return d},MModalLayer:function(){return M},modalApi:function(){return e}});var e=Symbol("modalApiKey"),t=l(400),n=l.n(t),o={name:"Modal",components:{MTouchCapture:l(138).MTouchCapture},inject:{modalApi:e},props:{beforeClose:{type:Function,required:!1,default:void 0}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:n()(this.setScrollTop,800),preventDefault:!1}},computed:{scrollTop(){return this.$refs.modal&&this.$refs.modal.$el?this.$refs.modal.$el.scrollTop:0}},watch:{beforeClose:{immediate:!0,handler(e){this.modalApi.state.options.beforeCloseHook=e}}},methods:{setScrollTop(){this.isScrolledToTop=this.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(e){if(this.isScrolledToTop){this.preventDefault=!0;const t=`translateY(${e.changeY}px)`;this.modalStyles={transform:t,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(e){const t=.3*window.innerHeight;this.isScrolledToTop&&e.changeY>t?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}},r={Modal:"📚0-0-0-semantic-releaselWZo9"};function s(e,t,n,o,r,s,i,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var i=s(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-touch-capture",{ref:"modal",class:e.$s.Modal,style:e.modalStyles,attrs:{"prevent-default":e.preventDefault},on:{"on-drag-down":e.onDragDown,"on-drag-end":e.onDragEnd,"on-swipe-down":e.onSwipeDown},nativeOn:{scroll:function(t){return e.onScroll.apply(null,arguments)}}},[e._t("default")],2)}),[],!1,(function(e){this.$s=r.locals||r}),null,null).exports,a={ModalContent:"📚0-0-0-semantic-releaseEYuNB"};var d=s({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.ModalContent},[e._t("default")],2)}),[],!1,(function(e){this.$s=a.locals||a}),null,null).exports,u=l(103),p=l.n(u),f=function(e){return e&&e.data&&(e.data.slot=void 0),e},h={functional:!0,render:function(e,t){var n=t.props;return Array.isArray(n.nodes)?n.nodes.map(f):f(n.nodes)}},v=l(89),m=l.n(v),y=l(403),T=l(515),b=l(387);Symbol("PopoverConfig");const w=Symbol("PopoverLayer"),S={inject:{currentLayer:{default:void 0,from:e}},provide(){const t=this,n={state:p().observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=n),{[e]:n}}};var _={name:"ModalLayer",components:{V:h,PseudoWindow:m(),MTransitionFadeIn:y.MTransitionFadeIn,MTransitionResponsive:T.MTransitionResponsive},mixins:[S],inject:{popoverApi:{from:w,default:void 0}},inheritAttrs:!1,apiMixin:S,data(){let e=b.floatUpFn,t=b.floatDownFn;return this.currentLayer.state.isStacked&&(e=b.delayedFloatUpFn,t=b.floatDownFn),{transitions:[{minWidth:b.mobileMinWidth,enter:b.springUpFn,leave:b.springDownFn},{minWidth:b.tabletMinWidth,enter:e,leave:t}],modalLayerStyles:{}}},mounted(){const e=this;this.unwatchStackedModal=this.$watch((()=>e.modalApi.state.vnode),(()=>{const t=window.innerWidth>=b.tabletMinWidth,n=!t,o=!!e.modalApi.state.vnode,r=!o,s=this.$refs.baseModalLayer;s&&(t&&o?(0,b.fadeOutFn)({element:s}):t&&r?(0,b.delayedFadeInFn)({element:s}):n&&o?setTimeout((()=>{s.style.opacity="0%"}),b.springDelay):n&&r&&s.style.removeProperty("opacity"))})),this.modalLayerStyles={height:`${window.innerHeight}px`},console.log("this.modalLayerStyles",this.modalLayerStyles)},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(e){const{closeOnClickOutside:t}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&t&&!n.contains(e.target)&&this.modalApi.close()}}},$={Layer:"📚0-0-0-semantic-release_MzTS",ModalLayer:"📚0-0-0-semantic-releaseKtxAY",Translucent:"📚0-0-0-semantic-releaseXItK4",Transparent:"📚0-0-0-semantic-releasePPufJ",disableScroll:"📚0-0-0-semantic-releaseQb9Nw",Container:"📚0-0-0-semantic-releaseAm6mM"};var M=s(_,(function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("div",{class:t.$s.Layer},[o("m-transition-fade-in",[t.currentLayer.state.vnode?o("div",{class:[t.$s.Translucent,(e={},e[t.$s.Transparent]=t.currentLayer.state.isStacked,e)]}):t._e()]),t._v(" "),o("m-transition-responsive",{attrs:{transitions:t.transitions}},[t.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",staticClass:"modal-layer-test",class:t.$s.ModalLayer,style:t.modalLayerStyles,on:{"!click":function(e){return t.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:t.$s.disableScroll,attrs:{body:""}}),t._v(" "),o("div",{ref:"modal",class:t.$s.Container},[o("v",{attrs:{nodes:t.currentLayer.state.vnode}})],1)],1):t._e()]),t._v(" "),t.currentLayer.state.vnode?o("modal-layer",{staticClass:"modal-layer-test2"}):t._e()],1)}),[],!1,(function(e){this.$s=$.locals||$}),null,null).exports}(),c}()}));
//# sourceMappingURL=script.js.map