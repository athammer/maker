(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[854],{8486:function(e,t){"use strict";var n=Symbol();function o(e,t){e[n]||(e[n]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var r=function(e,t){var o=e.splice(0);t.append.apply(t,o),o.forEach((function(e){e[n]=void 0}))};function i(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[a]){var r=this[a].get(t);r&&(t=r[0])}t.before(e),o(e,this)}function s(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var o=this[a];if(o){var i=o.get(e);if(i)return r(i,e),o.delete(e),void(e[n]=void 0)}e.remove()}var a=Symbol(),l={insertBefore:i,removeChild:s},u=Symbol(),d={insertBefore:i,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[u],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[u]),n.forEach((function(e){return e.remove()}))},removeChild:s,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[u];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),o(e,this),this.frag.push(e)}},c={inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,r=document.createComment("");e[u]=r,0===t.length&&t.push(r);var i=document.createDocumentFragment();i.append.apply(i,t),e.replaceWith(i),e.frag=t,function(e,t,n){e[a]||(e[a]=new Map,Object.assign(e,l)),e[a].set(t,n)}(n,e,t),o(e,n),t.forEach((function(t){return o(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var o=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,o))},get:function(){return""}}),Object.assign(e,d)},unbind:function(e){r(e.frag,e),e[u].remove()}};t.Z=c},1688:function(e,t,n){"use strict";n.d(t,{s:function(){return a},p:function(){return c}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(e){return this.$slots.default?this.$slots.default:e("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r=n(2986),i=n.n(r),s=n(1900);var a=(0,s.Z)(o,undefined,undefined,!1,(function(e){this.$s=i().locals||i()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((e=>e.tag||e.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},u=n(2794),d=n.n(u);var c=(0,s.Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[e.loaded||e.children?[e._t("default")]:e._l(e.linesNum,(function(t){return n("div",e._g(e._b({key:"skeleton-text-"+t,class:e.$s.SkeletonText},"div",e.$attrs,!1),e.$listeners))}))],2)}),[],!1,(function(e){this.$s=d().locals||d()}),null,null).exports},5832:function(e,t,n){"use strict";n.d(t,{iu:function(){return i},OE:function(){return s},AT:function(){return l},hJ:function(){return f},vP:function(){return p},Y7:function(){return m},dx:function(){return k},s4:function(){return b},vq:function(){return P},vn:function(){return w},w0:function(){return C},rG:function(){return y},iM:function(){return T},tq:function(){return $},cT:function(){return Z},uL:function(){return S},C9:function(){return I}});var o=n(9546),r=n(7069);const i=0,s=840,a="spring",l=200,u={type:a,stiffness:600,damping:60,mass:1},d={type:a,stiffness:400,damping:40,mass:1},c={type:a,stiffness:400,damping:30,mass:2},f={from:0,to:100},p={from:100,to:0};function m(e,t,n,o){return r=>function(e,t,n,o,r){return{[o]:`${e/100*(n-t)+t}${r}`}}(r,e,t,n,o)}const h=m(0,100,"opacity","%"),v=m(0,100,"y","%"),g=(m(0,100,"x","%"),m(40,0,"y","px")),_=e=>({...h(e),...g(e)}),x=(e,t)=>{const n=m(t,0,"y","px");return{...h(e),...n(e)}};function k({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function b({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=f;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}),l)}function P({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...p,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function w({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function C({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function y({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function T({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=f;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}),l)}function $({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=x,s=f,a=20+5*e.dataset.loadIndex;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e,a))},onComplete:t})}function Z({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(e){n.set(i(e))},onComplete:t})}function S({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function I({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}},6617:function(e,t,n){var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.ProductLoad_aw1fk {\n\tmargin: 0 auto;\n\tpadding: 24px\n}\n@media screen and (min-width: 840px) {\n.ProductLoad_aw1fk {\n\t\tpadding: 48px\n}\n}\n.ProductGrid_hIkFY {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.Product_AxRWW {\n\twidth: 100%;\n\tmargin: 0 auto 24px\n}\n@media screen and (min-width: 840px) {\n.Product_AxRWW {\n\t\twidth: calc(25% - 24px);\n\t\tmargin: 0 12px 24px\n}\n}\n.ProductImage_QqYIv {\n\twidth: 100%;\n\theight: 200px;\n\tmargin-bottom: 12px;\n}\n",""]),o.locals={ProductLoad:"ProductLoad_aw1fk",ProductGrid:"ProductGrid_hIkFY",Product:"Product_AxRWW",ProductImage:"ProductImage_QqYIv"},e.exports=o},8647:function(e,t,n){var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},e.exports=o},3418:function(e,t,n){var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},e.exports=o},2854:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(1688),r=n(5832);var i={props:{itemsPerRowMobile:{type:Number,default:1},itemsPerRowTablet:{type:Number,default:1},itemIndex:{type:Number,default:1}},data:()=>({viewportWidth:0}),computed:{loadIndex(){const{itemIndex:e}=this,{itemsPerRowMobile:t,itemsPerRowTablet:n,viewportWidth:o}=this,i=o<r.OE?t:n;if(1===i)return e;return Math.ceil(e/i)*(e%i>0?e%i:i)}},mounted(){this.viewportWidth=window.innerWidth},methods:{handleEnter(e,t){e.dataset.loadIndex=this.loadIndex,(0,r.tq)({element:e,onComplete:t})},handleLeave(e,t){(0,r.cT)({element:e,onComplete:t})}}},s=n(1900),a=(0,s.Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._b({on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,null,null).exports,l={components:{MSkeletonBlock:o.s,MSkeletonText:o.p,MTransitionStaggered:a},data:()=>({reveal:!1}),mounted(){setTimeout((()=>{this.reveal=!0}),1e3)}},u=n(2597),d=n.n(u);var c=(0,s.Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.ProductLoad},[n("div",{class:e.$s.ProductGrid},e._l(16,(function(t){return n("div",{key:t,class:e.$s.Product},[e.reveal?e._e():[n("m-skeleton-block",{class:e.$s.ProductImage}),e._v(" "),n("m-skeleton-text")],e._v(" "),n("m-transition-staggered",{attrs:{"items-per-row-mobile":1,"items-per-row-tablet":4,"item-index":t}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.reveal,expression:"reveal"}]},[n("img",{class:e.$s.ProductImage,attrs:{src:"https://picsum.photos/600/300?"+t,height:"200px"}}),e._v(" "),n("div",[e._v("This is item number "+e._s(t))])])])],2)})),0)])}),[],!1,(function(e){this.$s=d().locals||d()}),null,null).exports},2597:function(e,t,n){var o=n(6617);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("e9cc9db6",o,!0,{})},2986:function(e,t,n){var o=n(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("e53630ca",o,!0,{})},2794:function(e,t,n){var o=n(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("54e85523",o,!0,{})}}]);