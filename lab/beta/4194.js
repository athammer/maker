(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4194],{9893:t=>{t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,a,i,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},281:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};o._withStripped=!0;var r=n(0),a=Object(r.a)({},o,[],!1,null,null,null);a.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=a.exports}})},8486:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var o=Symbol();function r(t,e){t[o]||(t[o]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[o]||this.parentElement}}))}var a=function(t,e){var n=t.splice(0);e.append.apply(e,n),n.forEach((function(t){t[o]=void 0}))};function i(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[l]){var o=this[l].get(e);o&&(e=o[0])}e.before(t),r(t,this)}function s(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var n=this[l];if(n){var r=n.get(t);if(r)return a(r,t),n.delete(t),void(t[o]=void 0)}t.remove()}var l=Symbol(),c={insertBefore:i,removeChild:s},d=Symbol(),u={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[d],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[d]),n.forEach((function(t){return t.remove()}))},removeChild:s,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[d];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),r(t,this),this.frag.push(t)}};const v={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,o=document.createComment("");t[d]=o,0===e.length&&e.push(o);var a=document.createDocumentFragment();a.append.apply(a,e),t.replaceWith(a),t.frag=e,function(t,e,n){t[l]||(t[l]=new Map,Object.assign(t,c)),t[l].set(e,n)}(n,t,e),r(t,n),e.forEach((function(e){return r(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var o=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,o))},get:function(){return""}}),Object.assign(t,u)},unbind:function(t){a(t.frag,t),t[d].remove()}}},9082:(t,e,n)=>{"use strict";n.d(e,{j:()=>i});var o=n(9211),r=n(5832);const a={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},9211:(t,e,n)=>{"use strict";n.d(e,{T:()=>i});var o=n(1838),r=n(5832);const a={components:{MTransitionResponsive:o.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition-responsive",t._g(t._b({attrs:{transitions:t.transitions}},"m-transition-responsive",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},1838:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});const o={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:t=>{if(0===t.length)return!1;return 0===t[0].minWidth&&t.every((t=>(t.minWidth||0===t.minWidth)&&t.enter&&t.leave))}}},methods:{handleEnter(t,e){this.getResponsiveTransition().enter({element:t,onComplete:e})},handleLeave(t,e){this.getResponsiveTransition().leave({element:t,onComplete:e})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const t=window.innerWidth;let e;return this.transitions.forEach((n=>{t>=n.minWidth&&(e=n)})),e}}};const r=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",t._g(t._b({attrs:{css:!1},on:{enter:t.handleEnter,leave:t.handleLeave}},"transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5832:(t,e,n)=>{"use strict";n.d(e,{iu:()=>a,OE:()=>i,AT:()=>l,hJ:()=>v,vP:()=>p,Y7:()=>g,dx:()=>x,s4:()=>C,vq:()=>k,vn:()=>y,w0:()=>T,rG:()=>w,iM:()=>O,tq:()=>S,cT:()=>I,uL:()=>$,C9:()=>M});var o=n(3233),r=n(5274);const a=0,i=840,s="spring",l=200,c={type:s,stiffness:600,damping:60,mass:1},d={type:s,stiffness:400,damping:40,mass:1},u={type:s,stiffness:400,damping:30,mass:1.5},v={from:0,to:100},p={from:100,to:0};function g(t,e,n,o){return r=>function(t,e,n,o,r){return{[o]:"".concat(t/100*(n-e)+e).concat(r)}}(r,t,e,n,o)}const _=g(0,100,"opacity","%"),f=g(0,100,"y","%"),m=(g(0,100,"x","%"),g(40,0,"y","px")),b=t=>({..._(t),...m(t)}),h=(t,e)=>{const n=g(e,0,"y","px");return{..._(t),...n(t)}};function x({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=_,i=v;n.set(a(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function C({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=_,i=v;n.set(a(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}),l)}function k({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=_,i=p;n.set(a(i.from)),n.render(),(0,r.j)({...p,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function y({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=f,i=p;n.set(a(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function T({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=f,i=v;n.set(a(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function w({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=b,i=v;n.set(a(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function O({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=b,i=v;n.set(a(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}),l)}function S({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=h,i=v,s=20+5*t.dataset.loadIndex;n.set(a(i.from)),n.render(),(0,r.j)({...i,...d,onUpdate(t){n.set(a(t,s))},onComplete:e})}function I({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=b,i=p;n.set(a(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(a(t))},onComplete:e})}function $({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=f,i=p;n.set(a(i.from)),n.render(),(0,r.j)({...i,...u,onUpdate(t){n.set(a(t))},onComplete:e})}function M({element:t,onComplete:e}){const n=(0,o.ZP)(t),a=f,i=v;n.set(a(i.from)),n.render(),(0,r.j)({...i,...u,onUpdate(t){n.set(a(t))},onComplete:e})}},7126:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.ToggleContainer_meheH {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* general vars */\n\t--color-black-90: rgba(0, 0, 0, 0.9);\n\t--color-black-30: rgba(0, 0, 0, 0.3);\n\t--color-black-15: rgba(0, 0, 0, 0.15);\n\t--color-black-05: rgba(0, 0, 0, 0.05);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--color-white: #fff;\n\t--transition: 0.2s ease;\n\n\t/* toggle vars */\n\t--t-height: 20px;\n\t--t-width: calc(2 * var(--t-height));\n\t--t-border: 1px;\n\n\t/* toggle ball vars */\n\t--tb-dim: 14px;\n\t--tb-inset: 3px;\n\t--tb-top: calc(var(--tb-inset) - var(--t-border));\n\t--tb-left-unchecked: var(--tb-inset);\n\t--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));\n\t--tb-background-color: var(--color-black-05);\n}\n.Checkbox_IDCi3 {\n\tposition: absolute;\n\topacity: 0;\n}\n.ToggleBall__gU1T {\n\tposition: absolute;\n\ttop: var(--tb-top);\n\tleft: var(--tb-left-unchecked);\n\tbox-sizing: border-box;\n\twidth: var(--tb-dim);\n\theight: var(--tb-dim);\n\tborder-radius: inherit;\n\ttransition:\n\t\tleft var(--transition),\n\t\tbackground-color var(--transition)\n}\n.ToggleBall__gU1T::after {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--tb-background-color);\n\t\tborder-radius: inherit;\n\t\ttransition:\n\t\t\ttransform var(--transition),\n\t\t\tbackground-color var(--transition);\n\t\tcontent: "";\n}\n.Toggle_gK4Ca {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\twidth: var(--t-width);\n\theight: var(--t-height);\n\tvertical-align: middle;\n\tborder: var(--t-border) solid;\n\tborder-radius: calc(var(--t-width) / 2);\n\ttransition:\n\t\tbackground-color var(--transition)\n\t\tborder-color var(--transition);\n}\n.Checkbox_IDCi3:focus + .Toggle_gK4Ca {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n.Checkbox_IDCi3:checked + .Toggle_gK4Ca .ToggleBall__gU1T {\n\tleft: var(--tb-left-checked);\n\n\t--tb-background-color: var(--color-white);\n}\n.Checkbox_IDCi3:disabled + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-05);\n}\n.Checkbox_IDCi3:disabled:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-05);\n\n\t\t--tb-background-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:disabled:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:invalid + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-error);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid) + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-30);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-black-30)\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:hover,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:active,\n\t\t.Checkbox_IDCi3:not(:disabled, :invalid):not(:checked) + .Toggle_gK4Ca:focus {\n\t\t\tborder-color: var(--color-black-90);\n\n\t\t\t--tb-background-color: var(--color-black-90);\n}\n.Checkbox_IDCi3:not(:disabled, :invalid):checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-90);\n\t\tborder-color: var(--color-black-90);\n}\n',""]),o.locals={ToggleContainer:"ToggleContainer_meheH",Checkbox:"Checkbox_IDCi3",ToggleBall:"ToggleBall__gU1T",Toggle:"Toggle_gK4Ca"},t.exports=o},83:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.page[data-v-129df388] {\n\tpadding: 16px;\n}\n.section[data-v-129df388] {\n\tmargin-top: 64px;\n}\n.square[data-v-129df388] {\n\twidth: 200px;\n\theight: 200px;\n}\n.icon[data-v-129df388] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},8232:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>S});var o=n(118),r=n(2907),a=n(900),i=n(193),s=n(1070),l=n(9901),c=n(8425),d=n(5045),u=n(1180),v=n(5795),p=n(9234),g=n(987),_=n(588),f=n(8259);const m={inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"},props:{toggled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1}},computed:{toggleValue:{get(){return this.toggled},set(t){this.$emit("toggle:update",t)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}};var b=n(3501),h=n.n(b),x=n(1900);const C={components:{ToggleControl:(0,x.Z)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ToggleContainer},[n("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.toggleValue,expression:"toggleValue"}],ref:"checkbox",class:t.$s.Checkbox,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.toggleValue)?t._i(t.toggleValue,null)>-1:t.toggleValue},on:{change:function(e){var n=t.toggleValue,o=e.target,r=!!o.checked;if(Array.isArray(n)){var a=t._i(n,null);o.checked?a<0&&(t.toggleValue=n.concat([null])):a>-1&&(t.toggleValue=n.slice(0,a).concat(n.slice(a+1)))}else t.toggleValue=r}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),n("div",{class:t.$s.Toggle},[n("div",{class:t.$s.ToggleBall})])])}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports,MInlineFormControlLayout:f.r},inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"}};const k=(0,x.Z)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-inline-form-control-layout",{scopedSlots:t._u([{key:"control",fn:function(){return[n("toggle-control",t._g(t._b({},"toggle-control",t.$attrs,!1),t.$listeners))]},proxy:!0},{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[t._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports;var y=n(9893),T=n.n(y),w=n(7858);const O={components:{Plus:n.n(w)(),X:T(),MButton:o.G,MCheckbox:r._,MDivider:a.j,MImage:i.F,MInput:s.z,MLoading:l.g,MNotice:c.w,MRadio:d.H,MSelect:u.W,MSkeletonBlock:v.s,MSkeletonText:v.p,MStepper:p.f,MText:g.H,MTextarea:_.p,MToggle:k},data:()=>({number:1,currentOption:"1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})};n(6951);const S=(0,x.Z)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("m-text",{attrs:{pattern:"title",size:4}},[t._v("\n\t\tKitchen Sink\n\t")]),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"secondary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tCheckbox\n\t\t")]),t._v(" "),n("m-checkbox",[t._v("\n\t\t\tcheckbox\n\t\t")]),t._v(" "),n("m-checkbox",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled checkbox\n\t\t")]),t._v(" "),n("m-checkbox",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid checkbox\n\t\t")]),t._v(" "),n("m-checkbox",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tcheckbox with a label\n\t\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tDivider\n\t\t")]),t._v(" "),n("m-divider")],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-2,-1,0,1,2,3,4,5,6,7],(function(e){return n("m-text",{key:e,attrs:{size:e}},[t._v("\n\t\t\tText Size "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tImage\n\t\t")]),t._v(" "),n("m-image",{staticClass:"square",attrs:{src:"https://source.unsplash.com/random/200x200"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tInput\n\t\t")]),t._v(" "),n("m-input",{attrs:{placeholder:"placeholder"}}),t._v(" "),n("m-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),n("m-input",{attrs:{placeholder:"invalid",invalid:""}}),t._v(" "),n("m-input",{attrs:{placeholder:"align right",align:"right"}}),t._v(" "),n("m-input",{attrs:{placeholder:"prefix text"},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("\n\t\t\t\t$\n\t\t\t")]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"suffix text",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("\n\t\t\t\tpounds\n\t\t\t")]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"prefix icon"},scopedSlots:t._u([{key:"prefix",fn:function(){return[n("plus",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"suffix icon",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[n("x",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"with error message"},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-loading")],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tNotice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\tI am an error notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"error",variant:"block"}},[t._v("\n\t\t\tI am a block error notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"success"}},[t._v("\n\t\t\tI am an success notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"success",variant:"block"}},[t._v("\n\t\t\tI am a block success notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"warning"}},[t._v("\n\t\t\tI am an warning notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"warning",variant:"block"}},[t._v("\n\t\t\tI am a block warning notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"info"}},[t._v("\n\t\t\tI am an info notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"info",variant:"block"}},[t._v("\n\t\t\tI am a block info notice\n\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tRadio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1"}},[t._v("\n\t\t\tradio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1",disabled:""}},[t._v("\n\t\t\tdisabled radio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1",invalid:""}},[t._v("\n\t\t\tinvalid radio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1"},scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tradio with label\n\t\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tSelect\n\t\t")]),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options,disabled:""},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options,invalid:""},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}]),model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tSkeleton\n\t\t")]),t._v(" "),n("m-skeleton-block",{staticClass:"square"}),t._v(" "),n("m-skeleton-text",{attrs:{lines:3}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tStepper\n\t\t")]),t._v(" "),n("m-stepper",{model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-1,0,1],(function(e){return n("m-text",{key:"text-"+e,attrs:{size:e}},[t._v("\n\t\t\tSize "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tTextarea\n\t\t")]),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder"}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",disabled:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",invalid:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",resizable:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder"},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tToggle\n\t\t")]),t._v(" "),n("m-toggle",[t._v("\n\t\t\ttoggle\n\t\t")]),t._v(" "),n("m-toggle",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled toggle\n\t\t")]),t._v(" "),n("m-toggle",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid toggle\n\t\t")]),t._v(" "),n("m-toggle",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\ttoggle sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\ttoggle label\n\t\t\t")])],1)],1)}),[],!1,null,"129df388",null).exports},3501:(t,e,n)=>{var o=n(7126);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("14c13242",o,!0,{})},6951:(t,e,n)=>{var o=n(83);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("01da21f3",o,!0,{})}}]);