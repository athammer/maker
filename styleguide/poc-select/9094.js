(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9094],{39534:function(e){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=46)}({0:function(e,t,n){"use strict";function o(e,t,n,o,i,r,s,l){var u,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),r&&(a._scopeId="data-v-"+r),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=u):i&&(u=l?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(a.functional){a._injectStyles=u;var c=a.render;a.render=function(e,t){return u.call(t),c(e,t)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:a}}n.d(t,"a",(function(){return o}))},46:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[t("path",{pre:!0,attrs:{d:"M20 6L9 17l-5-5"}})])};o._withStripped=!0;var i=n(0),r=Object(i.a)({},o,[],!1,null,null,null);r.options.__file="node_modules/feather-icons/dist/icons/check.svg",t.default=r.exports}})},7120:function(e,t,n){var o=n(79856);e.exports=function(e,t){return o(e,t)}},99094:function(e,t,n){"use strict";n.d(t,{Jc:function(){return g},qB:function(){return b},Vl:function(){return v}});var o=n(7120),i=n.n(o),r=n(60771),s=n.n(r),l=n(39534),u=n.n(l);const a=Symbol("Menu"),c=Symbol("MenuOption");var p={name:"MenuOptionLabel",inject:{menuOption:c}},d=n(3142),f=n.n(d),h=n(51900);var v=(0,h.Z)(p,(function(){var e,t=this,n=t.$createElement;return(t._self._c||n)("div",{class:(e={},e[t.$s.MenuOptionLabel]=!0,e[t.$s.isDisabled]=t.menuOption.disabled(),e)},[t._t("default")],2)}),[],!1,(function(e){this.$s=f().locals||f()}),null,null).exports,_={name:"MenuOption",components:{CheckIcon:u(),MenuOptionLabel:v},provide(){return{[c]:{disabled:()=>this.disabled}}},inject:{menu:a},props:{option:{type:void 0,required:!0},disabled:{type:Boolean,default:!1}},computed:{isSelected(){return this.menu.isOptionSelected(this.option)}},methods:{selectOption(){this.disabled||this.menu.selectOption(this.option)}}},m=n(59321),M=n.n(m);var b=(0,h.Z)(_,(function(){var e,t,n=this,o=n.$createElement,i=n._self._c||o;return i("div",{class:(e={},e[n.$s.MenuOption]=!0,e[n.$s.isDisabled]=n.disabled,e),on:{click:function(e){return e.preventDefault(),n.selectOption.apply(null,arguments)}}},[i("div",{class:n.$s.MenuOptionIconContainer},[i("check-icon",{class:(t={},t[n.$s.MenuOptionIcon]=!0,t[n.$s.isShown]=n.isSelected,t)})],1),n._v(" "),i("div",{class:n.$s.MenuOptionIconContent},[n._t("default",(function(){return[i("menu-option-label",[n._v("\n\t\t\t\t"+n._s(n.option)+"\n\t\t\t")])]}))],2)])}),[],!1,(function(e){this.$s=M().locals||M()}),null,null).exports;var O={name:"Menu",components:{MMenuOption:b},provide(){return{[a]:this.menuAPI}},model:{event:"menu:update"},props:{value:{type:void 0,default:void 0},options:{type:Array,required:!0},isMultiselect:{type:Boolean,default:!1},color:{type:String,default:"#000",validator:e=>s().valid(e)},bgColor:{type:String,default:"#fff",validator:e=>s().valid(e)}},data(){return{menuAPI:{selectOption:this.selectOption,isOptionSelected:this.isOptionSelected}}},computed:{colorScale(){return s().scale([this.color,this.bgColor])},computedStyles(){return{"--menu-text":this.color,"--menu-text-disabled":this.colorScale(.5),"--menu-background":this.bgColor,"--menu-hover":this.colorScale(.85)}}},watch:{isMultiselect:{immediate:!0,handler(e,t){if(t!==e)if(e&&!Array.isArray(this.value))void 0===this.value?this.updateValue([]):this.updateValue([this.value]);else if(!e&&Array.isArray(this.value)){const[e]=this.value;this.updateValue(e)}}}},methods:{updateValue(e){this.$emit("menu:update",e)},selectOption(e){this.isMultiselect?this.updateMultiselectValue(e):this.updateValue(e)},updateMultiselectValue(e){const t=this.value.filter((t=>!i()(e,t))),n=t.length===this.value.length?[...this.value,e]:t;this.updateValue(n)},isOptionSelected(e){var t,n;return this.isMultiselect?null===(t=this.value)||void 0===t||null===(n=t.some)||void 0===n?void 0:n.call(t,(t=>i()(e,t))):i()(e,this.value)}}},y=n(61578),x=n.n(y);var g=(0,h.Z)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Menu,style:e.computedStyles},[e._l(e.options,(function(t,o){return e._t("default",(function(){return[n("m-menu-option",{key:o,attrs:{"is-selected":!1,option:t}})]}),null,t)}))],2)}),[],!1,(function(e){this.$s=x().locals||x()}),null,null).exports},4642:function(e,t,n){var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.Menu_DCgyO {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n",""]),o.locals={Menu:"Menu_DCgyO"},e.exports=o},60018:function(e,t,n){var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.MenuOption_x0t7Q {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 12px 24px 12px 12px;\n\tbackground-color: var(--menu-background);\n\tcursor: pointer;\n\ttransition: background-color 75ms linear;\n}\n.MenuOption_x0t7Q.isDisabled__d7lq {\n\tcursor: not-allowed;\n}\n.MenuOption_x0t7Q:not(.isDisabled__d7lq):hover {\n\tbackground-color: var(--menu-hover);\n}\n.MenuOptionIconContainer_MViW8 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 24px;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.MenuOptionIcon_MpvGU {\n\twidth: 16px;\n\theight: 16px;\n\tcolor: var(--menu-text);\n\topacity: 0;\n\ttransition: opacity 75ms linear;\n}\n.MenuOptionIcon_MpvGU.isShown__0M9W {\n\topacity: 1;\n}\n",""]),o.locals={MenuOption:"MenuOption_x0t7Q",isDisabled:"isDisabled__d7lq",MenuOptionIconContainer:"MenuOptionIconContainer_MViW8",MenuOptionIcon:"MenuOptionIcon_MpvGU",isShown:"isShown__0M9W"},e.exports=o},49513:function(e,t,n){var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.MenuOptionLabel_rWKr1 {\n\tcolor: var(--menu-text);\n}\n.isDisabled_hkGEq {\n\tcolor: var(--menu-text-disabled);\n}\n",""]),o.locals={MenuOptionLabel:"MenuOptionLabel_rWKr1",isDisabled:"isDisabled_hkGEq"},e.exports=o},61578:function(e,t,n){var o=n(4642);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("88958f4a",o,!0,{})},59321:function(e,t,n){var o=n(60018);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("fc8905f6",o,!0,{})},3142:function(e,t,n){var o=n(49513);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("5886e2a6",o,!0,{})}}]);