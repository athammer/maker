(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[374],{8486:function(t,n){"use strict";var e=Symbol();function o(t,n){t[e]||(t[e]=n,Object.defineProperty(t,"parentNode",{get:function(){return this[e]||this.parentElement}}))}var r=function(t,n){var o=t.splice(0);n.append.apply(n,o),o.forEach((function(t){t[e]=void 0}))};function a(t,n){if(this.frag){var e=this.frag.indexOf(n);e>-1&&this.frag.splice(e,0,t)}if(this[s]){var r=this[s].get(n);r&&(n=r[0])}n.before(t),o(t,this)}function i(t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,1)}var o=this[s];if(o){var a=o.get(t);if(a)return r(a,t),o.delete(t),void(t[e]=void 0)}t.remove()}var s=Symbol(),l={insertBefore:a,removeChild:i},c=Symbol(),d={insertBefore:a,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[c],n=this.frag,e=n.splice(0,n.length,t);e[0].before(this[c]),e.forEach((function(t){return t.remove()}))},removeChild:i,appendChild:function(t){var n=this.frag.length;this.frag[n-1].after(t);var e=this[c];this.frag[0]===e&&(this.frag.splice(0,1),e.remove()),o(t,this),this.frag.push(t)}},u={inserted:function(t){var n=Array.from(t.childNodes),e=t.parentNode,r=document.createComment("");t[c]=r,0===n.length&&n.push(r);var a=document.createDocumentFragment();a.append.apply(a,n),t.replaceWith(a),t.frag=n,function(t,n,e){t[s]||(t[s]=new Map,Object.assign(t,l)),t[s].set(n,e)}(e,t,n),o(t,e),n.forEach((function(n){return o(n,t)})),Object.defineProperty(t,"innerHTML",{set:function(n){var e=document.createElement("div");e.innerHTML=n;var o=t.frag.length;Array.from(e.childNodes).forEach((function(n){return t.appendChild(n)})),e.append.apply(e,t.frag.splice(0,o))},get:function(){return""}}),Object.assign(t,d)},unbind:function(t){r(t.frag,t),t[c].remove()}};n.Z=u},193:function(t,n,e){"use strict";e.d(n,{F:function(){return u}});var o=e(9082),r=e(1688);function a(){const t=new WeakMap,n=new IntersectionObserver((n=>{n.forEach((n=>t.get(n.target)(n)))}));return{watch(e,o){t.set(e,o),n.observe(e)},unwatch(e){n.unobserve(e),t.delete(e)}}}const i=new Set;let s;var l={components:{MTransitionFadeIn:o.j,MSkeletonBlock:r.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:i.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){s||(s=new a),s.watch(this.$el,this.onIntersection)},beforeDestroy(){s.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{i.add(this.src+this.srcset),this.loaded=!0}))}}},c=e(7548),d=e.n(c);var u=(0,e(1900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[e("m-transition-fade-in",[t.loaded?e("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):e("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},1688:function(t,n,e){"use strict";e.d(n,{s:function(){return s},p:function(){return u}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r=e(2986),a=e.n(r),i=e(1900);var s=(0,i.Z)(o,undefined,undefined,!1,(function(t){this.$s=a().locals||a()}),null,null).exports,l={directives:{frag:e(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=e(2794),d=e.n(c);var u=(0,i.Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(n){return e("div",t._g(t._b({key:"skeleton-text-"+n,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},9082:function(t,n,e){"use strict";e.d(n,{j:function(){return i}});var o=e(9211),r=e(5832),a={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})},i=(0,e(1900).Z)(a,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5227:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),o.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=o},8647:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},7126:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.ToggleContainer_meheH {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* general vars */\n\t--color-black-90: rgba(0, 0, 0, 0.9);\n\t--color-black-30: rgba(0, 0, 0, 0.3);\n\t--color-black-15: rgba(0, 0, 0, 0.15);\n\t--color-black-05: rgba(0, 0, 0, 0.05);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--color-white: #fff;\n\t--transition: 0.2s ease;\n\n\t/* toggle vars */\n\t--t-height: 20px;\n\t--t-width: calc(2 * var(--t-height));\n\t--t-border: 1px;\n\n\t/* toggle ball vars */\n\t--tb-dim: 14px;\n\t--tb-inset: 3px;\n\t--tb-top: calc(var(--tb-inset) - var(--t-border));\n\t--tb-left-unchecked: var(--tb-inset);\n\t--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));\n\t--tb-background-color: var(--color-black-05);\n}\n.Checkbox_IDCi3 {\n\tposition: absolute;\n\topacity: 0;\n}\n.ToggleBall__gU1T {\n\tposition: absolute;\n\ttop: var(--tb-top);\n\tleft: var(--tb-left-unchecked);\n\tbox-sizing: border-box;\n\twidth: var(--tb-dim);\n\theight: var(--tb-dim);\n\tborder-radius: inherit;\n\ttransition:\n\t\tleft var(--transition),\n\t\tbackground-color var(--transition)\n}\n.ToggleBall__gU1T::after {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--tb-background-color);\n\t\tborder-radius: inherit;\n\t\ttransition:\n\t\t\ttransform var(--transition),\n\t\t\tbackground-color var(--transition);\n\t\tcontent: "";\n}\n.Toggle_gK4Ca {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\twidth: var(--t-width);\n\theight: var(--t-height);\n\tvertical-align: middle;\n\tborder: var(--t-border) solid;\n\tborder-radius: calc(var(--t-width) / 2);\n\ttransition:\n\t\tbackground-color var(--transition)\n\t\tborder-color var(--transition);\n}\n.Checkbox_IDCi3:focus + .Toggle_gK4Ca {\n\toutline: 1px dotted #212121;\n\toutline: 5px auto -webkit-focus-ring-color;\n}\n.Checkbox_IDCi3:checked + .Toggle_gK4Ca .ToggleBall__gU1T {\n\tleft: var(--tb-left-checked);\n\n\t--tb-background-color: var(--color-white);\n}\n.Checkbox_IDCi3:disabled + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-05);\n}\n.Checkbox_IDCi3:disabled:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-05);\n\n\t\t--tb-background-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:disabled:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-15);\n}\n.Checkbox_IDCi3:invalid + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-error);\n}\n.Checkbox_IDCi3:invalid:checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-error);\n}\n.Checkbox_IDCi3:not(:disabled):not(:invalid) + .Toggle_gK4Ca {\n\t\tborder-color: var(--color-black-30);\n}\n.Checkbox_IDCi3:not(:disabled):not(:invalid):not(:checked) + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-white);\n\n\t\t--tb-background-color: var(--color-black-30)\n}\n.Checkbox_IDCi3:not(:disabled):not(:invalid):not(:checked) + .Toggle_gK4Ca:hover,\n\t\t.Checkbox_IDCi3:not(:disabled):not(:invalid):not(:checked) + .Toggle_gK4Ca:active,\n\t\t.Checkbox_IDCi3:not(:disabled):not(:invalid):not(:checked) + .Toggle_gK4Ca:focus {\n\t\t\tborder-color: var(--color-black-90);\n\n\t\t\t--tb-background-color: var(--color-black-90);\n}\n.Checkbox_IDCi3:not(:disabled):not(:invalid):checked + .Toggle_gK4Ca {\n\t\tbackground-color: var(--color-black-90);\n\t\tborder-color: var(--color-black-90);\n}\n',""]),o.locals={ToggleContainer:"ToggleContainer_meheH",Checkbox:"Checkbox_IDCi3",ToggleBall:"ToggleBall__gU1T",Toggle:"Toggle_gK4Ca"},t.exports=o},5516:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.page[data-v-6e0debc8] {\n\tpadding: 16px;\n}\n.section[data-v-6e0debc8] {\n\tmargin-top: 64px;\n}\n.square[data-v-6e0debc8] {\n\twidth: 200px;\n\theight: 200px;\n}\n.icon[data-v-6e0debc8] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},2374:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return $}});var o=e(2220),r=e(5139),a=e(8811),i=e(3216),s=e(193),l=e(6010),c=e(9901),d=e(6605),u=e(3745),v=e(1229),g=e(1688),p=e(5975),_=e(990),h=e(7274),b=e(6177),f={inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"},props:{toggled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1}},computed:{toggleValue:{get(){return this.toggled},set(t){this.$emit("toggle:update",t)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}},m=e(3501),k=e.n(m),x=e(1900);var C={components:{ToggleControl:(0,x.Z)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ToggleContainer},[e("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.toggleValue,expression:"toggleValue"}],ref:"checkbox",class:t.$s.Checkbox,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.toggleValue)?t._i(t.toggleValue,null)>-1:t.toggleValue},on:{change:function(n){var e=t.toggleValue,o=n.target,r=!!o.checked;if(Array.isArray(e)){var a=t._i(e,null);o.checked?a<0&&(t.toggleValue=e.concat([null])):a>-1&&(t.toggleValue=e.slice(0,a).concat(e.slice(a+1)))}else t.toggleValue=r}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),e("div",{class:t.$s.Toggle},[e("div",{class:t.$s.ToggleBall})])])}),[],!1,(function(t){this.$s=k().locals||k()}),null,null).exports,MInlineFormControlLayout:b.r},inheritAttrs:!1,model:{prop:"toggled",event:"toggle:update"}},y=(0,x.Z)(C,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-inline-form-control-layout",{scopedSlots:t._u([{key:"control",fn:function(){return[e("toggle-control",t._g(t._b({},"toggle-control",t.$attrs,!1),t.$listeners))]},proxy:!0},{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[t._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,T=e(9893),I=e.n(T),w=e(7858),S={components:{Plus:e.n(w)(),X:I(),MButton:o.G,MCheckbox:r._,MDivider:a.j,MHeading:i.b,MImage:s.F,MInput:l.z,MLoading:c.g,MNotice:d.w,MRadio:u.H,MSelect:v.W,MSkeletonBlock:g.s,MSkeletonText:g.p,MStepper:p.f,MText:_.H,MTextarea:h.p,MToggle:y},data:()=>({number:1,currentOption:"1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})},$=(e(2420),(0,x.Z)(S,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("m-heading",{attrs:{size:4}},[t._v("\n\t\tKitchen Sink\n\t")]),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"secondary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t\t"),e("plus",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary"}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-button",{attrs:{variant:"tertiary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),e("m-button",{attrs:{variant:"tertiary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tCheckbox\n\t\t")]),t._v(" "),e("m-checkbox",[t._v("\n\t\t\tcheckbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid checkbox\n\t\t")]),t._v(" "),e("m-checkbox",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tcheckbox with a label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tDivider\n\t\t")]),t._v(" "),e("m-divider")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tHeading\n\t\t")]),t._v(" "),t._l([-2,-1,0,1,2,3,4,5,6,7],(function(n){return e("m-heading",{key:"heading-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tImage\n\t\t")]),t._v(" "),e("m-image",{staticClass:"square",attrs:{src:"https://source.unsplash.com/random/200x200"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tInput\n\t\t")]),t._v(" "),e("m-input",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"invalid",invalid:""}}),t._v(" "),e("m-input",{attrs:{placeholder:"align right",align:"right"}}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix text"},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("\n\t\t\t\t$\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix text",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("\n\t\t\t\tpounds\n\t\t\t")]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"prefix icon"},scopedSlots:t._u([{key:"prefix",fn:function(){return[e("plus",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"suffix icon",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[e("x",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),e("m-input",{attrs:{placeholder:"with error message"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),e("m-loading")],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tNotice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\tI am an error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"error",variant:"block"}},[t._v("\n\t\t\tI am a block error notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success"}},[t._v("\n\t\t\tI am an success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"success",variant:"block"}},[t._v("\n\t\t\tI am a block success notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning"}},[t._v("\n\t\t\tI am an warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"warning",variant:"block"}},[t._v("\n\t\t\tI am a block warning notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info"}},[t._v("\n\t\t\tI am an info notice\n\t\t")]),t._v(" "),e("m-notice",{attrs:{type:"info",variant:"block"}},[t._v("\n\t\t\tI am a block info notice\n\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tRadio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"}},[t._v("\n\t\t\tradio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",disabled:""}},[t._v("\n\t\t\tdisabled radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1",invalid:""}},[t._v("\n\t\t\tinvalid radio\n\t\t")]),t._v(" "),e("m-radio",{attrs:{value:"1"},scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tradio with label\n\t\t\t")])],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSelect\n\t\t")]),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,disabled:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options,invalid:""},model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}}),t._v(" "),e("m-select",{attrs:{placeholder:"placeholder",options:t.options},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}]),model:{value:t.currentOption,callback:function(n){t.currentOption=n},expression:"currentOption"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tSkeleton\n\t\t")]),t._v(" "),e("m-skeleton-block",{staticClass:"square"}),t._v(" "),e("m-skeleton-text",{attrs:{lines:3}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tStepper\n\t\t")]),t._v(" "),e("m-stepper",{model:{value:t.number,callback:function(n){t.number=n},expression:"number"}})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-1,0,1],(function(n){return e("m-text",{key:"text-"+n,attrs:{size:n}},[t._v("\n\t\t\tSize "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tTextarea\n\t\t")]),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",disabled:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",invalid:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder",resizable:""}}),t._v(" "),e("m-textarea",{attrs:{placeholder:"placeholder"},scopedSlots:t._u([{key:"error",fn:function(){return[e("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"section"},[e("m-heading",{attrs:{size:2}},[t._v("\n\t\t\tToggle\n\t\t")]),t._v(" "),e("m-toggle",[t._v("\n\t\t\ttoggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled toggle\n\t\t")]),t._v(" "),e("m-toggle",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid toggle\n\t\t")]),t._v(" "),e("m-toggle",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\ttoggle sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\ttoggle label\n\t\t\t")])],1)],1)}),[],!1,null,"6e0debc8",null).exports)},7548:function(t,n,e){var o=e(5227);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("14393fff",o,!0,{})},2986:function(t,n,e){var o=e(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("e53630ca",o,!0,{})},2794:function(t,n,e){var o=e(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("54e85523",o,!0,{})},3501:function(t,n,e){var o=e(7126);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("14c13242",o,!0,{})},2420:function(t,n,e){var o=e(5516);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("3b54f1ef",o,!0,{})}}]);