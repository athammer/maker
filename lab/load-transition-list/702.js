(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[702],{8486:function(t,e){"use strict";var n=Symbol();function o(t,e){t[n]||(t[n]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var r=function(t,e){var o=t.splice(0);e.append.apply(e,o),o.forEach((function(t){t[n]=void 0}))};function i(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[a]){var r=this[a].get(e);r&&(e=r[0])}e.before(t),o(t,this)}function s(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var o=this[a];if(o){var i=o.get(t);if(i)return r(i,t),o.delete(t),void(t[n]=void 0)}t.remove()}var a=Symbol(),l={insertBefore:i,removeChild:s},u=Symbol(),d={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[u],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[u]),n.forEach((function(t){return t.remove()}))},removeChild:s,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[u];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),o(t,this),this.frag.push(t)}},c={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,r=document.createComment("");t[u]=r,0===e.length&&e.push(r);var i=document.createDocumentFragment();i.append.apply(i,e),t.replaceWith(i),t.frag=e,function(t,e,n){t[a]||(t[a]=new Map,Object.assign(t,l)),t[a].set(e,n)}(n,t,e),o(t,n),e.forEach((function(e){return o(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var o=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,o))},get:function(){return""}}),Object.assign(t,d)},unbind:function(t){r(t.frag,t),t[u].remove()}};e.Z=c},1688:function(t,e,n){"use strict";n.d(e,{s:function(){return a},p:function(){return c}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r=n(2986),i=n.n(r),s=n(1900);var a=(0,s.Z)(o,undefined,undefined,!1,(function(t){this.$s=i().locals||i()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},u=n(2794),d=n.n(u);var c=(0,s.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},5832:function(t,e,n){"use strict";n.d(e,{iu:function(){return i},OE:function(){return s},AT:function(){return l},hJ:function(){return f},vP:function(){return p},Y7:function(){return m},dx:function(){return C},s4:function(){return P},vq:function(){return b},vn:function(){return y},w0:function(){return w},rG:function(){return $},iM:function(){return T},tq:function(){return S},cT:function(){return Z},uL:function(){return I},C9:function(){return W}});var o=n(9546),r=n(7069);const i=0,s=840,a="spring",l=200,u={type:a,stiffness:600,damping:60,mass:1},d={type:a,stiffness:200,damping:30,mass:1},c={type:a,stiffness:400,damping:30,mass:2},f={from:0,to:100},p={from:100,to:0};function m(t,e,n,o){return r=>function(t,e,n,o,r){return{[o]:`${t/100*(n-e)+e}${r}`}}(r,t,e,n,o)}const h=m(0,100,"opacity","%"),g=m(0,100,"y","%"),v=(m(0,100,"x","%"),m(40,0,"y","px")),_=m(20,0,"y","px"),x=t=>({...h(t),...v(t)}),k=t=>({...h(t),..._(t)});function C({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=h,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function P({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=h,s=f;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}),l)}function b({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=h,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...p,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function y({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=g,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function w({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=g,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function $({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=x,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function T({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=x,s=f;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}),l)}function S({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=k,s=f,a=50*t.dataset.loadIndex;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...d,onUpdate(t){n.set(i(t))},onComplete:e})}),a)}function Z({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=x,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...u,onUpdate(t){n.set(i(t))},onComplete:e})}function I({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=g,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(t){n.set(i(t))},onComplete:e})}function W({element:t,onComplete:e}){const n=(0,o.ZP)(t),i=g,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(t){n.set(i(t))},onComplete:e})}},6617:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ProductLoad_aw1fk {\n\tmargin: 0 auto;\n\tpadding: 24px\n}\n@media screen and (min-width: 840px) {\n.ProductLoad_aw1fk {\n\t\tpadding: 48px\n}\n}\n.ProductGrid_hIkFY {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.Product_AxRWW {\n\twidth: 100%;\n\tmargin: 0 auto 24px\n}\n@media screen and (min-width: 840px) {\n.Product_AxRWW {\n\t\twidth: calc(25% - 24px);\n\t\tmargin: 0 12px 24px\n}\n}\n.ProductImage_QqYIv {\n\twidth: 100%;\n\theight: 200px;\n\tmargin-bottom: 12px;\n}\n",""]),o.locals={ProductLoad:"ProductLoad_aw1fk",ProductGrid:"ProductGrid_hIkFY",Product:"Product_AxRWW",ProductImage:"ProductImage_QqYIv"},t.exports=o},8647:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},7702:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o=n(1688),r=n(5832);const i=[{minWidth:0,itemCount:1}];var s={props:{staggerItemCount:{type:Array,default:()=>i,validator:t=>0!==t.length&&(0===t[0].minWidth&&t.every((t=>(t.minWidth||0===t.minWidth)&&t.itemCount)))}},data:()=>({viewportWidth:0}),mounted(){this.viewportWidth=window.innerWidth},methods:{handleEnter(t,e){(0,r.tq)({element:t,onComplete:e})},handleLeave(t,e){(0,r.cT)({element:t,onComplete:e})},loadIndex(t){const{staggerItemCount:e,viewportWidth:n}=this;let o;if(e.forEach((t=>{t.minWidth<n&&(o=t.itemCount)})),o===i[0].itemCount)return t;const r=t%o;return r>0?r:o}}},a=n(1900),l=(0,a.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition-group",t._b({attrs:{tag:"div"},on:{enter:t.handleEnter,leave:t.handleLeave}},"transition-group",t.$attrs,!1),[t._t("default",null,{dataLoadIndex:t.loadIndex})],2)}),[],!1,null,null,null).exports,u={components:{MSkeletonBlock:o.s,MSkeletonText:o.p,MTransitionStaggered:l},data:()=>({reveal:!1,staggerItemCount:[{minWidth:0,itemCount:1},{minWidth:840,itemCount:4}]}),mounted(){setTimeout((()=>{this.reveal=!0}),1e3)}},d=n(2597),c=n.n(d);var f=(0,a.Z)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ProductLoad},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.reveal,expression:"!reveal"}],class:t.$s.ProductGrid},t._l(12,(function(e){return n("div",{key:e,class:t.$s.Product},[n("m-skeleton-block",{class:t.$s.ProductImage}),t._v(" "),n("m-skeleton-text")],1)})),0),t._v(" "),n("m-transition-staggered",{class:t.$s.ProductGrid,attrs:{"stagger-item-count":t.staggerItemCount},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.dataLoadIndex;return t._l(12,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.reveal,expression:"reveal"}],key:e,class:t.$s.Product,attrs:{"data-load-index":o(e)}},[n("img",{class:t.$s.ProductImage,attrs:{src:"https://picsum.photos/600/300?"+e,height:"200px"}}),t._v(" "),n("div",[t._v("This is item number "+t._s(e))])])}))}}])})],1)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},2597:function(t,e,n){var o=n(6617);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("e9cc9db6",o,!0,{})},2986:function(t,e,n){var o=n(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("e53630ca",o,!0,{})},2794:function(t,e,n){var o=n(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("54e85523",o,!0,{})}}]);