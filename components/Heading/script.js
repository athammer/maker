!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{MHeading:function(){return n}});var i={Heading:"📚0-0-0-semantic-releaser0EnL","size_minus-2":"📚0-0-0-semantic-releaseKswFt","size_minus-1":"📚0-0-0-semantic-releasexO_Xj",size_0:"📚0-0-0-semantic-releaseHZrve",size_1:"📚0-0-0-semantic-releaseM4r85",size_2:"📚0-0-0-semantic-releaseiY7Mq",size_3:"📚0-0-0-semantic-release_7qII",size_4:"📚0-0-0-semantic-releaseYaGjq",size_5:"📚0-0-0-semantic-releaseUnB9z",size_6:"📚0-0-0-semantic-releaseR48VB",size_7:"📚0-0-0-semantic-releasePvfiX"};var n=function(e,t,i,n,s,r,o,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}({inheritAttrs:!1,props:{size:{type:Number,default:0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},stringSize(){return this.size>=0?this.size.toString():`minus-${Math.abs(this.size)}`}},render(e){const{$s:t,stringSize:i,tag:n}=this;return e(n,{class:[t.Heading,t[`size_${i}`]],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}},undefined,undefined,!1,(function(e){this.$s=i.locals||i}),null,null).exports;return t}()}));
//# sourceMappingURL=script.js.map