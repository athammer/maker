(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[660],{9893:function(t){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},281:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var i=n(0),o=Object(i.a)({},r,[],!1,null,null,null);o.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=o.exports}})},8486:function(t,e){"use strict";var n=Symbol();function r(t,e){t[n]||(t[n]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var i=function(t,e){var r=t.splice(0);e.append.apply(e,r),r.forEach((function(t){t[n]=void 0}))};function o(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[a]){var i=this[a].get(e);i&&(e=i[0])}e.before(t),r(t,this)}function s(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var r=this[a];if(r){var o=r.get(t);if(o)return i(o,t),r.delete(t),void(t[n]=void 0)}t.remove()}var a=Symbol(),l={insertBefore:o,removeChild:s},c=Symbol(),u={insertBefore:o,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[c],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[c]),n.forEach((function(t){return t.remove()}))},removeChild:s,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[c];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),r(t,this),this.frag.push(t)}},d={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,i=document.createComment("");t[c]=i,0===e.length&&e.push(i);var o=document.createDocumentFragment();o.append.apply(o,e),t.replaceWith(o),t.frag=e,function(t,e,n){t[a]||(t[a]=new Map,Object.assign(t,l)),t[a].set(e,n)}(n,t,e),r(t,n),e.forEach((function(e){return r(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var r=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,r))},get:function(){return""}}),Object.assign(t,u)},unbind:function(t){i(t.frag,t),t[c].remove()}};e.Z=d},7935:function(t,e,n){"use strict";n.d(e,{F:function(){return d}});var r=n(9082),i=n(1688);function o(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,r){t.set(n,r),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const s=new Set;let a;var l={components:{MTransitionFadeIn:r.j,MSkeletonBlock:i.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:s.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new o),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{s.add(this.src+this.srcset),this.loaded=!0}))}}},c=n(7548),u=n.n(c);var d=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},1688:function(t,e,n){"use strict";n.d(e,{s:function(){return a},p:function(){return d}});var r={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},i=n(2986),o=n.n(i),s=n(1900);var a=(0,s.Z)(r,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=n(2794),u=n.n(c);var d=(0,s.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},5227:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),r.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=r},8647:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),r.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=r},3418:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),r.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=r},2850:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.cover-photo[data-v-a8093446] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-a8093446] {\n\twidth: 100%;\n}\n.icon[data-v-a8093446] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=r},3660:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(5002),i=n(193),o=n(1943),s=n(7935),a=n(9893),l=n.n(a),c={components:{MModal:r.x6,MActionBar:i.MS,MButton:o.G,MImage:s.F,X:l()}},u=(n(299),(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"}})],1),t._v(" "),n("div",[t._v("\n\t\tSecond modal\n\t\t"),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\t\tLong text "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("m-action-bar",[n("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index-first-modal"}}},[n("m-button",{attrs:{size:"large",shape:"pill"}},[n("x",{staticClass:"icon"})],1)],1),t._v(" "),n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""}},[t._v("\n\t\t\tAction B\n\t\t")])],1)],1)}),[],!1,null,"a8093446",null).exports)},7548:function(t,e,n){var r=n(5227);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("14393fff",r,!0,{})},2986:function(t,e,n){var r=n(8647);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("e53630ca",r,!0,{})},2794:function(t,e,n){var r=n(3418);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("54e85523",r,!0,{})},299:function(t,e,n){var r=n(2850);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("727141e0",r,!0,{})}}]);