(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[459],{55869:e=>{e.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=104)}({0:function(e,t,r){"use strict";function o(e,t,r,o,n,i,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:c}}r.d(t,"a",(function(){return o}))},104:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[t("path",{pre:!0,attrs:{d:"M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"}})])};o._withStripped=!0;var n=r(0),i=Object(n.a)({},o,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/feather.svg",t.default=i.exports}})},44185:(e,t,r)=>{"use strict";r.d(t,{qo:()=>k,YH:()=>s,uH:()=>b,C9:()=>_});var o=r(85066),n=r.n(o),i=r(54299),a=r.n(i);const s=Symbol("ThemeKey");var l=r(20643),c=r.n(l),u=r(92810),f=r.n(u),d=r(75692),p=r.n(d),h=r(32416);function v(e){return p()(e)&&e.startsWith("@")?this.resolve(this.getPath(e)):e}function m(e){if(!p()(e))throw new Error("cannot resolve pointer ".concat(e," it is not a string"));if(!e.startsWith("@"))throw new Error("cannot resolve pointer ".concat(e," it is missed the @ prefix"));const t=e.slice(1),r=c()(this,t);if(f()(r))throw new Error("invalid pointer ".concat(e," does not point to a field that exists within the theme"));return r}function _(e,t){const r={};for(const n of t)"variant"===n?r.resolvedVariant=function(){if(!f()(this.variant))return this.variant;let t;const r=this.theme[e].variant;if(r&&(t=r),!t)return;const o=this.theme.resolve(t),n=this.$vnode.componentOptions.Ctor.extendOptions.props.variant.validator;if(n)h.Z.error(n(o),'Invalid value "'.concat(o,'" for prop "variant" for component "').concat(e,'" in theme.'));else{var i;const t=null===(i=this.theme[e].variants)||void 0===i?void 0:i[o];h.Z.error(t,'Invalid variant "'.concat(o,'" for component "').concat(e,'" in theme.'))}return o}:r["resolved".concat((o=n,o[0].toUpperCase()+o.slice(1)))]=function(){if(!f()(this[n]))return this[n];let t;const r=this.theme[e][n];if(r&&(t=r),this.resolvedVariant){var o,i;const r=null===(o=this.theme[e].variants)||void 0===o||null===(i=o[this.resolvedVariant])||void 0===i?void 0:i[n];r&&(t=r)}if(!t)return;const a=this.theme.resolve(t),s=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return s&&h.Z.error(s(a),'Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(e,'" in theme.')),a};var o;return r}function b(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{size:0,fontFamily:"inherit",color:"@colors.text",element:"p",fontWeight:"inherit",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",variants:{headline:{size:4,fontWeight:"700",element:"h1",color:"@colors.heading"},title:{size:2,fontWeight:"700",element:"h2",color:"@colors.heading"},body:{size:0,fontWeight:"400",element:"p"},label:{size:-1,fontWeight:"700",element:"h6",textTransform:"uppercase"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:v,getPath:m}}function g(e,t,r,o){a()(e,t,r),a()(e,n()(e.profiles,{id:o})),e.colors={...e.colors},e.resolve=v,e.getPath=m}const x={inject:{parentTheme:{default:b(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return g(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"]}}},beforeUpdate(){g(this.$data,this.parentTheme,this.theme,this.profile)}};var y=r(35004),C=r.n(y);const k=(0,r(51900).Z)(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=C().locals||C()}),null,null).exports},57346:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var o=r(43941),n=r.n(o);const i=(0,r(51900).Z)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$s.Container},[e._t("control"),e._v(" "),e.$slots.error?r("span",{class:e.$s.Error},[e._t("error")],2):e._e()],2)}),[],!1,(function(e){this.$s=n().locals||n()}),null,null).exports},32416:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(14219);const n={warn(e,t,r){e||(0,o.K)(t,r)},error(e,t,r){e||(0,o._)(t,r)}}},14219:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,n=e=>["%c @square/maker".concat(e),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(e,t)=>{throw console.error(...n(t),e),new Error("".concat((e=>"[@square/maker]".concat(e))(t)," ").concat(e))},a=(e,t)=>{o&&console.warn(...n(t),e)}},35820:(e,t,r)=>{var o=r(77705)((function(e){return e[1]}));o.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},e.exports=o},30263:(e,t,r)=>{var o=r(77705)((function(e){return e[1]}));o.push([e.id,"\n.Container_rLuTK {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.Error__kSnm {\n\t/* provided by theme eventually */\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: inline-block;\n\tmargin-top: 8px;\n\tcolor: var(--color-error);\n}\n",""]),o.locals={Container:"Container_rLuTK",Error:"Error__kSnm"},e.exports=o},35004:(e,t,r)=>{var o=r(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,r(54023).Z)("12fe2849",o,!0,{})},43941:(e,t,r)=>{var o=r(30263);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,r(54023).Z)("6db595db",o,!0,{})}}]);