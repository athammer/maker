(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6586],{9893:t=>{t.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=281)}({0:function(t,n,e){"use strict";function o(t,n,e,o,r,a,i,l){var s,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=s):r&&(s=l?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(c.functional){c._injectStyles=s;var d=c.render;c.render=function(t,n){return s.call(n),d(t,n)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:c}}e.d(n,"a",(function(){return o}))},281:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};o._withStripped=!0;var r=e(0),a=Object(r.a)({},o,[],!1,null,null,null);a.options.__file="node_modules/feather-icons/dist/icons/x.svg",n.default=a.exports}})},8486:(t,n,e)=>{"use strict";e.d(n,{Z:()=>v});var o=Symbol();function r(t,n){t[o]||(t[o]=n,Object.defineProperty(t,"parentNode",{get:function(){return this[o]||this.parentElement}}))}var a=function(t,n){var e=t.splice(0);n.append.apply(n,e),e.forEach((function(t){t[o]=void 0}))};function i(t,n){if(this.frag){var e=this.frag.indexOf(n);e>-1&&this.frag.splice(e,0,t)}if(this[s]){var o=this[s].get(n);o&&(n=o[0])}n.before(t),r(t,this)}function l(t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,1)}var e=this[s];if(e){var r=e.get(t);if(r)return a(r,t),e.delete(t),void(t[o]=void 0)}t.remove()}var s=Symbol(),c={insertBefore:i,removeChild:l},d=Symbol(),u={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[d],n=this.frag,e=n.splice(0,n.length,t);e[0].before(this[d]),e.forEach((function(t){return t.remove()}))},removeChild:l,appendChild:function(t){var n=this.frag.length;this.frag[n-1].after(t);var e=this[d];this.frag[0]===e&&(this.frag.splice(0,1),e.remove()),r(t,this),this.frag.push(t)}};const v={inserted:function(t){var n=Array.from(t.childNodes),e=t.parentNode,o=document.createComment("");t[d]=o,0===n.length&&n.push(o);var a=document.createDocumentFragment();a.append.apply(a,n),t.replaceWith(a),t.frag=n,function(t,n,e){t[s]||(t[s]=new Map,Object.assign(t,c)),t[s].set(n,e)}(e,t,n),r(t,e),n.forEach((function(n){return r(n,t)})),Object.defineProperty(t,"innerHTML",{set:function(n){var e=document.createElement("div");e.innerHTML=n;var o=t.frag.length;Array.from(e.childNodes).forEach((function(n){return t.appendChild(n)})),e.append.apply(e,t.frag.splice(0,o))},get:function(){return""}}),Object.assign(t,u)},unbind:function(t){a(t.frag,t),t[d].remove()}}},3216:(t,n,e)=>{"use strict";e.d(n,{b:()=>l});var o=e(2851);const r={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:t=>!e.g.CSS||e.g.CSS.supports("color",t)},fontStyle:{type:String,default:"inherit",validator:t=>["inherit","normal","italic"].includes(t)},textTransform:{type:String,default:"inherit",validator:t=>["inherit","none","uppercase"].includes(t)},textAlign:{type:String,default:"inherit",validator:t=>["inherit","left","right","center"].includes(t)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},sizeClass(){return this.size>=0?"maker-step-".concat(this.size.toString()):"maker-step-minus".concat(this.size)},inlineStyles(){return{fontFamily:this.fontFamily,fontWeight:this.fontWeight,color:this.color,fontSize:this.fontSize,lineHeight:this.lineHeight}}},render(t){const{$s:n,sizeClass:e,tag:o,inlineStyles:r,fontStyle:a,textTransform:i,textAlign:l}=this,s=this.$slots.default;return t(o,{class:[n.Heading,e,{[n["fontstyle_".concat(a)]]:"inherit"!==a,[n["texttransform_".concat(i)]]:"inherit"!==i,[n["textalign_".concat(l)]]:"inherit"!==l}],style:r,attrs:this.$attrs,on:this.$listeners},s)}};var a=e(1491),i=e.n(a);const l=(0,e(1900).Z)(r,undefined,undefined,!1,(function(t){this.$s=i().locals||i()}),null,null).exports},9082:(t,n,e)=>{"use strict";e.d(n,{j:()=>i});var o=e(9211),r=e(5832);const a={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})};const i=(0,e(1900).Z)(a,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},2630:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--maker-colors-heading, #000);\n\tfont-weight: var(--maker-fontWeights-heading, 600);\n\tfont-family: var(--maker-fonts-heading, --system-font);\n}\n.fontstyle_normal_TopyV {\n\tfont-style: normal;\n}\n.fontstyle_italic_hY9C3 {\n\tfont-style: italic;\n}\n.texttransform_none_Ep8oi {\n\ttext-transform: none;\n}\n.texttransform_uppercase_kW7HE {\n\ttext-transform: uppercase;\n}\n.textalign_left_mxEQR {\n\ttext-align: left;\n}\n.textalign_right__uM8B {\n\ttext-align: right;\n}\n.textalign_center_QlcAw {\n\ttext-align: center;\n}\n",""]),o.locals={Heading:"Heading__6G7M",fontstyle_normal:"fontstyle_normal_TopyV",fontstyle_italic:"fontstyle_italic_hY9C3",texttransform_none:"texttransform_none_Ep8oi",texttransform_uppercase:"texttransform_uppercase_kW7HE",textalign_left:"textalign_left_mxEQR",textalign_right:"textalign_right__uM8B",textalign_center:"textalign_center_QlcAw"},t.exports=o},7126:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.ToggleContainer_meheH {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* general vars */\n\t--color-black-90: rgba(0, 0, 0, 0.9);\n\t--color-black-30: rgba(0, 0, 0, 0.3);\n\t--color-black-15: rgba(0, 0, 0, 0.15);\n\t--color-black-05: rgba(0, 0, 0, 0.05);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--color-white: #fff;\n\t--transition: 0.2s ease;\n\n\t/* toggle vars */\n\t--t-height: 20px;\n\t--t-width: calc(2 * var(--t-height));\n\t--t-border: 1px;\n\n\t/* toggle ball vars */\n\t--tb-dim: 14px;\n\t--tb-inset: 3px;\n\t--tb-top: calc(var(--tb-inset) - var(--t-border));\n\t--tb-left-unchecked: var(--tb-inset);\n\t--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));\n\t--tb-background-color: var(--color-black-05);\n}\n.Checkbox_IDCi3 {\n\tposition: absolute;\n\topacity: 0;\n}\n.ToggleBall__gU1T {\n\tposition: absolute;\n\ttop: var(--tb-top);\n\tleft: var(--tb-left-unchecked);\n\tbox-sizing: border-box;\n\twidth: var(--tb-dim);\n\theight: var(--tb-dim);\n\tborder-radius: inherit;\n\ttransition:\n\t\tleft var(--transition),\n\t\tbackground-color var(--transition)\n}\n.ToggleBall__gU1T::after {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--tb-background-color);\n\t\tborder-radius: inherit;\n\t\ttransition:\n\t\t\ttransform var(--transition),\n\t\t\tbackground-color var(--transition);\n\t\tcontent: "";\n}\n.Toggle_gK4Ca {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\twidth: var(--t-width);\n\theight: var(--t-height);\n\tvertical-align: middle;\n\tborder: var(--t-border) solid;\n\tborder-radius: calc(var(--t-width) / 2);\n\ttransition:\n\t\tbackground-color var(--transition)\n\t\tborder-color var(--transition);\n}\n.Checkbox_IDCi3:focus + .Toggle_gK4Ca {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n.Checkbox_IDCi3:checked + .Toggle_gK4Ca .ToggleBall__gU1T {\n\tleft: var(--tb-left-checked);\n\n\t--tb-background-color: var(--color-white);\n}\n.Checkbox_IDCi3:disabled + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-05);\n}\n.Checkbox_IDCi3:disabled:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-05);\n\n\t\t--tb-background-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:disabled:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:invalid + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-error);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid) + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-30);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-black-30)\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:hover,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:active,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:focus {\n\t\t\tborder-color: var(--color-black-90);\n\n\t\t\t--tb-background-color: var(--color-black-90);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-90);\n\t\tborder-color: var(--color-black-90);\n}\n',""]),o.locals={ToggleContainer:"ToggleContainer_meheH",Checkbox:"Checkbox_IDCi3",ToggleBall:"ToggleBall__gU1T",Toggle:"Toggle_gK4Ca"},t.exports=o},5516:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.page[data-v-6e0debc8] {\n\tpadding: 16px;\n}\n.section[data-v-6e0debc8] {\n\tmargin-top: 64px;\n}\n.square[data-v-6e0debc8] {\n\twidth: 200px;\n\theight: 200px;\n}\n.icon[data-v-6e0debc8] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},2374:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>M});var o=e(5586),r=e(5552),a=e(8832),i=e(3216),l=e(193),s=e(111),c=e(9901),d=e(2151),u=e(3368),v=e(3641),g=e(6964),_=e(388),p=e(990),h=e(2535),f=e(9318);const b={inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"},props:{toggled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1}},computed:{toggleValue:{get(){return this.toggled},set(t){this.$emit("toggle:update",t)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}};var m=e(3501),x=e.n(m),k=e(1900);const y={components:{ToggleControl:(0,k.Z)(b,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ToggleContainer},[e("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.toggleValue,expression:"toggleValue"}],ref:"checkbox",class:t.$s.Checkbox,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.toggleValue)?t._i(t.toggleValue,null)>-1:t.toggleValue},on:{change:function(n){var e=t.toggleValue,o=n.target,r=!!o.checked;if(Array.isArray(e)){var a=t._i(e,null);o.checked?a<0&&(t.toggleValue=e.concat([null])):a>-1&&(t.toggleValue=e.slice(0,a).concat(e.slice(a+1)))}else t.toggleValue=r}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),e("div",{class:t.$s.Toggle},[e("div",{class:t.$s.ToggleBall})])])}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports,MInlineFormControlLayout:f.r},inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"}};const C=(0,k.Z)(y,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-inline-form-control-layout",{scopedSlots:t._u([{key:"control",fn:function(){return[e("toggle-control",t._g(t._b({},"toggle-control",t.$attrs,!1),t.$listeners))]},proxy:!0},{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[t._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports;var S=e(9893),T=e.n(S),z=e(7858);const w={components:{Plus:e.n(z)(),X:T(),MButton:o.G,MCheckbox:r._,MDivider:a.j,MHeading:i.b,MImage:l.F,MInput:s.z,MLoading:c.g,MNotice:d.w,MRadio:u.H,MSelect:v.W,MSkeletonBlock:g.s,MSkeletonText:g.p,MStepper:_.f,MText:p.H,MTextarea:h.p,MToggle:C},data:()=>({number:1,currentOption:"1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})};e(2420);const M=(0,k.Z)(w,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("m-heading",{attrs:{size:4}},[t._v("\n\t\tKitchen Sink\n\t")]),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tCheckbox\n\t\t")]),t._v(" "),e("m-checkbox",[t._v("\n\t\t\tcheckbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tcheckbox with a label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tDivider\n\t\t")]),t._v(" "),e("m-divider")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tHeading\n\t\t")]),t._v(" "),t._l([-2,-1,0,1,2,3,4,5,6,7],(function(n){return e("m-heading",{key:"heading-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tImage\n\t\t")]),t._v(" "),e("m-image",{staticClass:"square",attrs:{src:"https://source.unsplash.com/random/200x200"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tInput\n\t\t")]),t._v(" "),e("m-input",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"invalid",invalid:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"align right",align:"right"}}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix text"},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("\n\t\t\t\t$\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix text",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("\n\t\t\t\tpounds\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix icon"},scopedSlots:t._u([{key:"prefix",fn:function(){return[e("plus",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix icon",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[e("x",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"with error message"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-loading")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tNotice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\tI am an error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error",variant:"block"}},[t._v("\n\t\t\tI am a block error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success"}},[t._v("\n\t\t\tI am an success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success",variant:"block"}},[t._v("\n\t\t\tI am a block success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning"}},[t._v("\n\t\t\tI am an warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning",variant:"block"}},[t._v("\n\t\t\tI am a block warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info"}},[t._v("\n\t\t\tI am an info notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info",variant:"block"}},[t._v("\n\t\t\tI am a block info notice\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tRadio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"}},[t._v("\n\t\t\tradio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",disabled:""}},[t._v("\n\t\t\tdisabled radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",invalid:""}},[t._v("\n\t\t\tinvalid radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"},scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tradio with label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSelect\n\t\t")]),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,disabled:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,invalid:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}]),model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSkeleton\n\t\t")]),t._v(" "),e("m-skeleton-block",{staticClass:"square"}),t._v(" "),e("m-skeleton-text",{attrs:{lines:3}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tStepper\n\t\t")]),t._v(" "),e("m-stepper",{model:{value:t.number,callback:function(n){t.number=n},expression:"number"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-1,0,1],(function(n){return e("m-text",{key:"text-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tTextarea\n\t\t")]),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",disabled:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",invalid:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",resizable:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tToggle\n\t\t")]),t._v(" "),e("m-toggle",[t._v("\n\t\t\ttoggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled toggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid toggle\n\t\t")]),t._v(" "),e("m-toggle",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\ttoggle sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\ttoggle label\n\t\t\t")])],1)],1)}),[],!1,null,"6e0debc8",null).exports},1491:(t,n,e)=>{var o=e(2630);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("ceb27898",o,!0,{})},3501:(t,n,e)=>{var o=e(7126);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("14c13242",o,!0,{})},2420:(t,n,e)=>{var o=e(5516);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("3b54f1ef",o,!0,{})}}]);