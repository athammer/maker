!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Loading"),require("../../utils/assert"),require("../../utils/get-contrast"),require("chroma-js"));else if("function"==typeof define&&define.amd)define(["../../components/Loading","../../utils/assert","../../utils/get-contrast","chroma-js"],t);else{var o="object"==typeof exports?t(require("../../components/Loading"),require("../../utils/assert"),require("../../utils/get-contrast"),require("chroma-js")):t(e["../../components/Loading"],e["../../utils/assert"],e["../../utils/get-contrast"],e["chroma-js"]);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,(function(e,t,o,n){return function(){"use strict";var r={175:function(t){t.exports=e},455:function(e){e.exports=t},174:function(e){e.exports=o},446:function(e){e.exports=n}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return function(){i.r(s),i.d(s,{MButton:function(){return m},MTextButton:function(){return _}});var e=i(446),t=i.n(e),o=i(175),n=i(174),r=i.n(n);function a(e){return e.alpha(.3)}function l(e){return t().mix(e,"#000",.05)}function c(e){return t().mix(e,"#000",.1)}const d={primary:function(e){const o=t()(e.color),n=l(o),i=c(o),s=e.textColor?t()(e.textColor):void 0,d=r()(o,s),u=l(d),p=c(d),f=a(o);return{"--small-padding":"8px 16px","--medium-padding":"12px 24px","--large-padding":"20px 32px","--color-main":o.hex(),"--color-main-hover":n.hex(),"--color-main-active":i.hex(),"--color-contrast":d.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":p.hex(),"--color-focus":f.hex()}},secondary:function(e){const o=t()(e.color),n=l(o),r=c(o),i=a(o);return{"--small-padding":"8px 16px","--medium-padding":"12px 24px","--large-padding":"20px 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":o.hex(),"--color-contrast-hover":n.hex(),"--color-contrast-active":r.hex(),"--color-focus":i.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(e){const o=t()(e.color),n=l(o),r=c(o),i=a(o);return{"--small-padding":"8px","--medium-padding":"12px","--large-padding":"20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":o.hex(),"--color-contrast-hover":n.hex(),"--color-contrast-active":r.hex(),"--color-focus":i.hex()}}};var u={components:{MLoading:o.MLoading},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},fullWidth:{type:Boolean,default:!1},color:{type:String,default:"#000",validator:e=>t().valid(e)},textColor:{type:String,default:void 0,validator:e=>t().valid(e)},variant:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary"].includes(e)},shape:{type:String,default:"rounded",validator:e=>["squared","rounded","pill"].includes(e)},disabled:{type:Boolean,default:!1},align:{type:String,default:"center",validator:e=>["center","stack","space-between"].includes(e)},loading:{type:Boolean,default:!1}},computed:{style(){return d[this.variant]({color:this.color,textColor:this.textColor})}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const e=(this.$slots.default||[]).filter((e=>e.tag||e.text.trim().length>0));return 1===e.length&&e[0].tag}}},p={Button:"📚0-0-0-semantic-releasevQBWk",shape_pill:"📚0-0-0-semantic-releaseaYEm0",shape_squared:"📚0-0-0-semantic-releaseIPrN0",iconButton:"📚0-0-0-semantic-releaseu2Q6y",size_small:"📚0-0-0-semantic-releasetMshx",size_medium:"📚0-0-0-semantic-releaseS6z9M",size_large:"📚0-0-0-semantic-releasept7y9",fullWidth:"📚0-0-0-semantic-releasevaDLi",align_center:"📚0-0-0-semantic-release_N8aS",align_stack:"📚0-0-0-semantic-releaseXfpCI","align_space-between":"📚0-0-0-semantic-releasecvBfb",loading:"📚0-0-0-semantic-releasef3zc7",Loading:"📚0-0-0-semantic-releaseLttwZ",MainText:"📚0-0-0-semantic-releaseDK0_A",InformationText:"📚0-0-0-semantic-releasedjO_J"};function f(e,t,o,n,r,a,i,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var m=f(u,(function(){var e,t=this,o=t.$createElement,n=t._self._c||o;return n("button",t._g(t._b({class:[t.$s.Button,t.$s["size_"+t.size],t.$s["shape_"+t.shape],t.$s["align_"+t.align],(e={},e[t.$s.fullWidth]=t.fullWidth,e[t.$s.iconButton]=t.isSingleChild(),e[t.$s.loading]=t.loading,e)],style:t.style,attrs:{type:t.type,disabled:t.disabled}},"button",t.$attrs,!1),t.$listeners),[t.loading?n("m-loading",{class:t.$s.Loading}):t._e(),t._v(" "),n("span",{class:t.$s.MainText},[t._t("default")],2),t._v(" "),t.$scopedSlots.information?n("span",{class:t.$s.InformationText},[t._t("information")],2):t._e()],1)}),[],!1,(function(e){this.$s=p.locals||p}),null,null).exports,g=i(455),h=i.n(g);var x={components:{MLoading:o.MLoading},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:e=>["medium","large"].includes(e)},color:{type:String,default:void 0,validator:e=>t().valid(e)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{style(){return function(e){const o=e.color?t()(e.color):void 0;return{"--color-main":"color","--color-contrast":o?o.hex():void 0}}({color:this.color})}},created(){h().warn(this.$slots.default,"TextButton should only be used with a label")}},v={Button:"📚0-0-0-semantic-releaseUfoQd",iconButton:"📚0-0-0-semantic-release_JrGg",size_medium:"📚0-0-0-semantic-releasef3QRI",size_large:"📚0-0-0-semantic-release_tIVh",loading:"📚0-0-0-semantic-releasemxjea",Loading:"📚0-0-0-semantic-releaseo7CJ2",MainText:"📚0-0-0-semantic-release_arHd"};var _=f(x,(function(){var e,t=this,o=t.$createElement,n=t._self._c||o;return n("button",t._g(t._b({class:[t.$s.Button,t.$s["size_"+t.size],(e={},e[t.$s.loading]=t.loading,e)],style:t.style,attrs:{type:t.type,disabled:t.disabled}},"button",t.$attrs,!1),t.$listeners),[t.loading?n("m-loading",{class:t.$s.Loading}):t._e(),t._v(" "),n("span",{class:t.$s.MainText},[t._t("default")],2)],1)}),[],!1,(function(e){this.$s=v.locals||v}),null,null).exports}(),s}()}));
//# sourceMappingURL=script.js.map