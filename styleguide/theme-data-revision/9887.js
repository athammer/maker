(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9887],{55869:e=>{e.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=104)}({0:function(e,t,r){"use strict";function o(e,t,r,o,n,i,a,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):n&&(s=l?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(e,t){return s.call(t),f(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}r.d(t,"a",(function(){return o}))},104:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[t("path",{pre:!0,attrs:{d:"M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"}})])};o._withStripped=!0;var n=r(0),i=Object(n.a)({},o,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/feather.svg",t.default=i.exports}})},68765:(e,t,r)=>{"use strict";r.d(t,{qo:()=>C,YH:()=>l,uH:()=>g,C9:()=>b});var o=r(85066),n=r.n(o),i=r(54299),a=r.n(i);const l=Symbol("ThemeKey");var s=r(20643),c=r.n(s),f=r(92810),d=r.n(f),u=r(75692),h=r.n(u),p=r(32416);function m(e){return h()(e)&&e.startsWith("@")?this.resolve(this.getPath(e)):e}function v(e){if(!h()(e))throw new Error("cannot resolve pointer ".concat(e," it is not a string"));if(!e.startsWith("@"))throw new Error("cannot resolve pointer ".concat(e," it is missed the @ prefix"));const t=e.slice(1),r=c()(this,t);if(d()(r))throw new Error("invalid pointer ".concat(e," does not point to a field that exists within the theme"));return r}function b(e,t){const r={};for(const n of t)"pattern"===n?r.resolvedPattern=function(){if(!d()(this.pattern))return this.pattern;let t;const r=this.theme[e].pattern;if(d()(r)||(t=r),d()(t))return;const o=this.theme.resolve(t),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n)p.Z.error(n(o),'Invalid value "'.concat(o,'" for prop "pattern" for component "').concat(e,'" in theme.'));else{var i;const t=null===(i=this.theme[e].patterns)||void 0===i?void 0:i[o];p.Z.error(t,'Invalid pattern "'.concat(o,'" for component "').concat(e,'" in theme.'))}return o}:r["resolved".concat((o=n,o[0].toUpperCase()+o.slice(1)))]=function(){if(!d()(this[n]))return this[n];let t;const r=this.theme[e][n];if(d()(r)||(t=r),!d()(this.resolvedPattern)){var o,i;const r=null===(o=this.theme[e].patterns)||void 0===o||null===(i=o[this.resolvedPattern])||void 0===i?void 0:i[n];d()(r)||(t=r)}if(d()(t))return;const a=this.theme.resolve(t),l=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return l&&p.Z.error(l(a),'Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(e,'" in theme.')),a};var o;return r}function g(){return{colors:{background:"#ffffff",heading:"#000000",text:"#000000",primary:"#000000",secondary:"#000000","neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)"},fonts:{baseSize:16,sizeScale:1.17,body:"inherit",heading:"inherit",headline:"inherit",label:"inherit"},fontWeights:{body:400,heading:600,headline:400,label:500},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary",color:"@colors.primary"},secondary:{variant:"secondary",color:"@colors.secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{size:0,fontFamily:"@fonts.body",color:"@colors.text",element:"p",fontWeight:"@fontWeights.body",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.headline",fontWeight:"@fontWeights.headline",element:"h1",color:"@colors.heading"},heading:{size:3,fontFamily:"@fonts.heading",fontWeight:"@fontWeights.heading",element:"h2",color:"@colors.heading"},text:{},label:{fontFamily:"@fonts.label",fontWeight:"@fontWeights.label"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:m,getPath:v}}function y(e,t,r,o){a()(e,t,r),a()(e,n()(e.profiles,{id:o})),e.colors={...e.colors},e.resolve=m,e.getPath=v}const _={inject:{parentTheme:{default:g(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return y(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e,fonts:t,fontWeights:r}=this;return{"--maker-color-neutral-0":e["neutral-0"],"--maker-color-neutral-10":e["neutral-10"],"--maker-color-neutral-20":e["neutral-20"],"--maker-color-neutral-80":e["neutral-80"],"--maker-color-neutral-90":e["neutral-90"],"--maker-color-neutral-100":e["neutral-100"],"--maker-color-primary":e.primary,"--maker-color-background":e.background,"--maker-color-text":e.text,"--maker-color-heading":e.heading,"--maker-color-elevation":e.elevation,"--maker-color-overlay":e.overlay,"--maker-font-body":t.body,"--maker-font-weight-body":r.body,"--maker-font-heading":t.heading,"--maker-font-weight-heading":r.heading,"--maker-font-label":t.label,"--maker-font-weight-label":r.label}}},beforeUpdate(){y(this.$data,this.parentTheme,this.theme,this.profile)}};var k=r(35004),x=r.n(k);const C=(0,r(51900).Z)(_,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=x().locals||x()}),null,null).exports},57346:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var o=r(43941),n=r.n(o);const i=(0,r(51900).Z)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$s.Container},[e._t("control"),e._v(" "),e.$slots.error?r("span",{class:e.$s.Error},[e._t("error")],2):e._e()],2)}),[],!1,(function(e){this.$s=n().locals||n()}),null,null).exports},32416:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(14219);const n={warn(e,t,r){e||(0,o.K)(t,r)},error(e,t,r){e||(0,o._)(t,r)}}},14219:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,n=e=>["%c @square/maker".concat(e),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(e,t)=>{throw console.error(...n(t),e),new Error("".concat((e=>"[@square/maker]".concat(e))(t)," ").concat(e))},a=(e,t)=>{o&&console.warn(...n(t),e)}},35820:(e,t,r)=>{var o=r(77705)((function(e){return e[1]}));o.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-text);\n\tfont-weight: var(--maker-font-weight-body);\n\tfont-family: var(--maker-font-body);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},e.exports=o},30263:(e,t,r)=>{var o=r(77705)((function(e){return e[1]}));o.push([e.id,"\n.Container_rLuTK {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.Error__kSnm {\n\t/* provided by theme eventually */\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: inline-block;\n\tmargin-top: 8px;\n\tcolor: var(--color-error);\n}\n",""]),o.locals={Container:"Container_rLuTK",Error:"Error__kSnm"},e.exports=o},35004:(e,t,r)=>{var o=r(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,r(54023).Z)("12fe2849",o,!0,{})},43941:(e,t,r)=>{var o=r(30263);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,r(54023).Z)("6db595db",o,!0,{})}}]);