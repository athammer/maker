(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6586],{9893:t=>{t.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=281)}({0:function(t,n,e){"use strict";function a(t,n,e,a,r,i,o,s){var l,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var v=c.render;c.render=function(t,n){return l.call(n),v(t,n)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}e.d(n,"a",(function(){return a}))},281:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};a._withStripped=!0;var r=e(0),i=Object(r.a)({},a,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",n.default=i.exports}})},8486:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var a=Symbol();function r(t,n){t[a]||(t[a]=n,Object.defineProperty(t,"parentNode",{get:function(){return this[a]||this.parentElement}}))}var i=function(t,n){var e=t.splice(0);n.append.apply(n,e),e.forEach((function(t){t[a]=void 0}))};function o(t,n){if(this.frag){var e=this.frag.indexOf(n);e>-1&&this.frag.splice(e,0,t)}if(this[l]){var a=this[l].get(n);a&&(n=a[0])}n.before(t),r(t,this)}function s(t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,1)}var e=this[l];if(e){var r=e.get(t);if(r)return i(r,t),e.delete(t),void(t[a]=void 0)}t.remove()}var l=Symbol(),c={insertBefore:o,removeChild:s},v=Symbol(),d={insertBefore:o,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[v],n=this.frag,e=n.splice(0,n.length,t);e[0].before(this[v]),e.forEach((function(t){return t.remove()}))},removeChild:s,appendChild:function(t){var n=this.frag.length;this.frag[n-1].after(t);var e=this[v];this.frag[0]===e&&(this.frag.splice(0,1),e.remove()),r(t,this),this.frag.push(t)}};const u={inserted:function(t){var n=Array.from(t.childNodes),e=t.parentNode,a=document.createComment("");t[v]=a,0===n.length&&n.push(a);var i=document.createDocumentFragment();i.append.apply(i,n),t.replaceWith(i),t.frag=n,function(t,n,e){t[l]||(t[l]=new Map,Object.assign(t,c)),t[l].set(n,e)}(e,t,n),r(t,e),n.forEach((function(n){return r(n,t)})),Object.defineProperty(t,"innerHTML",{set:function(n){var e=document.createElement("div");e.innerHTML=n;var a=t.frag.length;Array.from(e.childNodes).forEach((function(n){return t.appendChild(n)})),e.append.apply(e,t.frag.splice(0,a))},get:function(){return""}}),Object.assign(t,d)},unbind:function(t){i(t.frag,t),t[v].remove()}}},3216:(t,n,e)=>{"use strict";e.d(n,{b:()=>s});var a=e(2603);const r={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{size:{type:Number,default:4,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:t=>!e.g.CSS||e.g.CSS.supports("color",t)},fontStyle:{type:String,default:"inherit",validator:t=>["inherit","normal","italic"].includes(t)},textTransform:{type:String,default:"inherit",validator:t=>["inherit","none","uppercase"].includes(t)},textAlign:{type:String,default:"inherit",validator:t=>["inherit","left","right","center"].includes(t)}},computed:{...(0,a.C9)("heading",["size","color"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){return{fontFamily:this.fontFamily,fontWeight:this.fontWeight,color:this.resolvedColor,lineHeight:this.lineHeight}}},render(t){const{$s:n,sizeClass:e,tag:a,inlineStyles:r,fontStyle:i,textTransform:o,textAlign:s}=this,l=this.$slots.default;return t(a,{class:[n.Heading,n["size_".concat(e)],{[n["fontstyle_".concat(i)]]:"inherit"!==i,[n["texttransform_".concat(o)]]:"inherit"!==o,[n["textalign_".concat(s)]]:"inherit"!==s}],style:r,attrs:this.$attrs,on:this.$listeners},l)}};var i=e(1491),o=e.n(i);const s=(0,e(1900).Z)(r,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports},9082:(t,n,e)=>{"use strict";e.d(n,{j:()=>o});var a=e(9211),r=e(5832);const i={components:{MTransition:a.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})};const o=(0,e(1900).Z)(i,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},2630:(t,n,e)=>{var a=e(7705)((function(t){return t[1]}));a.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tfont-weight: var(--fontWeights-body, 700);\n\tfont-family: var(--fonts-heading, sans-serif);\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--fonts-baseSize);\n\t--min-font-size-scale: var(--fonts-sizeScale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n.fontstyle_normal_TopyV {\n\tfont-style: normal;\n}\n.fontstyle_italic_hY9C3 {\n\tfont-style: italic;\n}\n.texttransform_none_Ep8oi {\n\ttext-transform: none;\n}\n.texttransform_uppercase_kW7HE {\n\ttext-transform: uppercase;\n}\n.textalign_left_mxEQR {\n\ttext-align: left;\n}\n.textalign_right__uM8B {\n\ttext-align: right;\n}\n.textalign_center_QlcAw {\n\ttext-align: center;\n}\n@media (min-width: 1200px) {\n.Heading__6G7M {\n\t\t--resolution: 1200px;\n}\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Heading:"Heading__6G7M",fontstyle_normal:"fontstyle_normal_TopyV",fontstyle_italic:"fontstyle_italic_hY9C3",texttransform_none:"texttransform_none_Ep8oi",texttransform_uppercase:"texttransform_uppercase_kW7HE",textalign_left:"textalign_left_mxEQR",textalign_right:"textalign_right__uM8B",textalign_center:"textalign_center_QlcAw","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=a},7126:(t,n,e)=>{var a=e(7705)((function(t){return t[1]}));a.push([t.id,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.ToggleContainer_meheH {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* general vars */\n\t--color-black-90: rgba(0, 0, 0, 0.9);\n\t--color-black-30: rgba(0, 0, 0, 0.3);\n\t--color-black-15: rgba(0, 0, 0, 0.15);\n\t--color-black-05: rgba(0, 0, 0, 0.05);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--color-white: #fff;\n\t--transition: 0.2s ease;\n\n\t/* toggle vars */\n\t--t-height: 20px;\n\t--t-width: calc(2 * var(--t-height));\n\t--t-border: 1px;\n\n\t/* toggle ball vars */\n\t--tb-dim: 14px;\n\t--tb-inset: 3px;\n\t--tb-top: calc(var(--tb-inset) - var(--t-border));\n\t--tb-left-unchecked: var(--tb-inset);\n\t--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));\n\t--tb-background-color: var(--color-black-05);\n}\n.Checkbox_IDCi3 {\n\tposition: absolute;\n\topacity: 0;\n}\n.ToggleBall__gU1T {\n\tposition: absolute;\n\ttop: var(--tb-top);\n\tleft: var(--tb-left-unchecked);\n\tbox-sizing: border-box;\n\twidth: var(--tb-dim);\n\theight: var(--tb-dim);\n\tborder-radius: inherit;\n\ttransition:\n\t\tleft var(--transition),\n\t\tbackground-color var(--transition)\n}\n.ToggleBall__gU1T::after {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--tb-background-color);\n\t\tborder-radius: inherit;\n\t\ttransition:\n\t\t\ttransform var(--transition),\n\t\t\tbackground-color var(--transition);\n\t\tcontent: "";\n}\n.Toggle_gK4Ca {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\twidth: var(--t-width);\n\theight: var(--t-height);\n\tvertical-align: middle;\n\tborder: var(--t-border) solid;\n\tborder-radius: calc(var(--t-width) / 2);\n\ttransition:\n\t\tbackground-color var(--transition)\n\t\tborder-color var(--transition);\n}\n.Checkbox_IDCi3:focus + .Toggle_gK4Ca {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n.Checkbox_IDCi3:checked + .Toggle_gK4Ca .ToggleBall__gU1T {\n\tleft: var(--tb-left-checked);\n\n\t--tb-background-color: var(--color-white);\n}\n.Checkbox_IDCi3:disabled + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-05);\n}\n.Checkbox_IDCi3:disabled:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-05);\n\n\t\t--tb-background-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:disabled:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:invalid + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-error);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid) + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-30);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-black-30)\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:hover,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:active,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:focus {\n\t\t\tborder-color: var(--color-black-90);\n\n\t\t\t--tb-background-color: var(--color-black-90);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-90);\n\t\tborder-color: var(--color-black-90);\n}\n',""]),a.locals={ToggleContainer:"ToggleContainer_meheH",Checkbox:"Checkbox_IDCi3",ToggleBall:"ToggleBall__gU1T",Toggle:"Toggle_gK4Ca"},t.exports=a},5516:(t,n,e)=>{var a=e(7705)((function(t){return t[1]}));a.push([t.id,"\n.page[data-v-6e0debc8] {\n\tpadding: 16px;\n}\n.section[data-v-6e0debc8] {\n\tmargin-top: 64px;\n}\n.square[data-v-6e0debc8] {\n\twidth: 200px;\n\theight: 200px;\n}\n.icon[data-v-6e0debc8] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=a},2374:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>w});var a=e(3004),r=e(5552),i=e(8832),o=e(3216),s=e(193),l=e(9907),c=e(9901),v=e(9488),d=e(3368),u=e(7653),f=e(6964),g=e(7229),_=e(990),h=e(4295),p=e(2503);const m={inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"},props:{toggled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1}},computed:{toggleValue:{get(){return this.toggled},set(t){this.$emit("toggle:update",t)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}};var b=e(3501),x=e.n(b),y=e(1900);const k={components:{ToggleControl:(0,y.Z)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ToggleContainer},[e("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.toggleValue,expression:"toggleValue"}],ref:"checkbox",class:t.$s.Checkbox,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.toggleValue)?t._i(t.toggleValue,null)>-1:t.toggleValue},on:{change:function(n){var e=t.toggleValue,a=n.target,r=!!a.checked;if(Array.isArray(e)){var i=t._i(e,null);a.checked?i<0&&(t.toggleValue=e.concat([null])):i>-1&&(t.toggleValue=e.slice(0,i).concat(e.slice(i+1)))}else t.toggleValue=r}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),e("div",{class:t.$s.Toggle},[e("div",{class:t.$s.ToggleBall})])])}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports,MInlineFormControlLayout:p.r},inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"}};const C=(0,y.Z)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-inline-form-control-layout",{scopedSlots:t._u([{key:"control",fn:function(){return[e("toggle-control",t._g(t._b({},"toggle-control",t.$attrs,!1),t.$listeners))]},proxy:!0},{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[t._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports;var z=e(9893),S=e.n(z),T=e(7858);const M={components:{Plus:e.n(T)(),X:S(),MButton:a.G,MCheckbox:r._,MDivider:i.j,MHeading:o.b,MImage:s.F,MInput:l.z,MLoading:c.g,MNotice:v.w,MRadio:d.H,MSelect:u.W,MSkeletonBlock:f.s,MSkeletonText:f.p,MStepper:g.f,MText:_.H,MTextarea:h.p,MToggle:C},data:()=>({number:1,currentOption:"1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})};e(2420);const w=(0,y.Z)(M,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("m-heading",{attrs:{size:4}},[t._v("\n\t\tKitchen Sink\n\t")]),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tCheckbox\n\t\t")]),t._v(" "),e("m-checkbox",[t._v("\n\t\t\tcheckbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tcheckbox with a label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tDivider\n\t\t")]),t._v(" "),e("m-divider")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tHeading\n\t\t")]),t._v(" "),t._l([-2,-1,0,1,2,3,4,5,6,7],(function(n){return e("m-heading",{key:"heading-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tImage\n\t\t")]),t._v(" "),e("m-image",{staticClass:"square",attrs:{src:"https://source.unsplash.com/random/200x200"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tInput\n\t\t")]),t._v(" "),e("m-input",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"invalid",invalid:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"align right",align:"right"}}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix text"},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("\n\t\t\t\t$\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix text",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("\n\t\t\t\tpounds\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix icon"},scopedSlots:t._u([{key:"prefix",fn:function(){return[e("plus",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix icon",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[e("x",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"with error message"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-loading")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tNotice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\tI am an error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error",variant:"block"}},[t._v("\n\t\t\tI am a block error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success"}},[t._v("\n\t\t\tI am an success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success",variant:"block"}},[t._v("\n\t\t\tI am a block success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning"}},[t._v("\n\t\t\tI am an warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning",variant:"block"}},[t._v("\n\t\t\tI am a block warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info"}},[t._v("\n\t\t\tI am an info notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info",variant:"block"}},[t._v("\n\t\t\tI am a block info notice\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tRadio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"}},[t._v("\n\t\t\tradio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",disabled:""}},[t._v("\n\t\t\tdisabled radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",invalid:""}},[t._v("\n\t\t\tinvalid radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"},scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tradio with label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSelect\n\t\t")]),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,disabled:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,invalid:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}]),model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSkeleton\n\t\t")]),t._v(" "),e("m-skeleton-block",{staticClass:"square"}),t._v(" "),e("m-skeleton-text",{attrs:{lines:3}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tStepper\n\t\t")]),t._v(" "),e("m-stepper",{model:{value:t.number,callback:function(n){t.number=n},expression:"number"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-1,0,1],(function(n){return e("m-text",{key:"text-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tTextarea\n\t\t")]),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",disabled:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",invalid:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",resizable:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tToggle\n\t\t")]),t._v(" "),e("m-toggle",[t._v("\n\t\t\ttoggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled toggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid toggle\n\t\t")]),t._v(" "),e("m-toggle",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\ttoggle sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\ttoggle label\n\t\t\t")])],1)],1)}),[],!1,null,"6e0debc8",null).exports},1491:(t,n,e)=>{var a=e(2630);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(4023).Z)("ceb27898",a,!0,{})},3501:(t,n,e)=>{var a=e(7126);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(4023).Z)("14c13242",a,!0,{})},2420:(t,n,e)=>{var a=e(5516);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(4023).Z)("3b54f1ef",a,!0,{})}}]);
