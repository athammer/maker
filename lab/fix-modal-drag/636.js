(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[636],{7356:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});const o="object"==typeof process&&"object"==typeof process.env&&!0,a=t=>[`%c @square/maker${t}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var r={warn(t,n,e){t||((t,n)=>{o&&console.warn(...a(n),t)})(n,e)},error(t,n,e){t||((t,n)=>{throw console.error(...a(n),t),new Error(`${(t=>`[@square/maker]${t}`)(n)} ${t}`)})(n,e)}}},700:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ActionBarWrapper_YYIEK {\n\t--regular-bottom-padding: 32px;\n\t--extra-bottom-padding-for-deadclick: 32px;\n\t--safe-area-inset-padding: env(safe-area-inset-bottom, 0);\n\t--actionbar-bottom-padding:\n\t\tcalc(\n\t\t\tvar(--regular-bottom-padding)\n\t\t\t+ var(--extra-bottom-padding-for-deadclick)\n\t\t\t+ var(--safe-area-inset-padding)\n\t\t);\n\t--actionbar-size: 64px;\n\t--actionbar-top-padding: 32px;\n\n\tpadding-bottom:\n\t\tcalc(\n\t\t\tvar(--actionbar-top-padding)\n\t\t\t+ var(--actionbar-size)\n\t\t\t+ var(--actionbar-bottom-padding)\n\t\t);\n}\n@media screen and (min-width: 840px) {\n.ActionBarWrapper_YYIEK {\n\t\t--actionbar-size: 48px;\n\t\t--actionbar-top-padding: 24px;\n\n\t\t/* no safe-area or deadclick issues on non-mobile resolutions */\n\t\t--actionbar-bottom-padding: var(--regular-bottom-padding);\n}\n}\n",""]),o.locals={ActionBarWrapper:"ActionBarWrapper_YYIEK"},t.exports=o},5054:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.cover-photo[data-v-51ed5d70] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-51ed5d70] {\n\twidth: 100%;\n}\n.icon[data-v-51ed5d70] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},9722:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return v}});var o=e(849),a=e(193),r=e(6951),i=e(7935),s=e(9211),p=e(9893),d=e.n(p),c=e(9546),l=e(7069),u=e(5832),f=e(7480),m={components:{MModal:o.x6,MActionBarButton:a.n5,MImage:i.F,MContainer:r.U,X:d(),MTransition:s.T,AtomicActionBar:f.Z},inject:{modalApi:o.UJ},inheritAttrs:!1,props:{enterDelay:{type:Number,default:void 0},springStiffness:{type:Number,default:void 0},springDamping:{type:Number,default:void 0},springMass:{type:Number,default:void 0}},data(){const t=(0,u.Y7)(0,100,"y","%");return{springUpFn:({element:n,onComplete:e})=>{const o=(0,c.ZP)(n),a=t,r=u.vP;o.set(a(r.from)),o.render(),(0,l.j)({...r,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){o.set(a(t))},onComplete:e})},springDownFn:({element:n,onComplete:e})=>{const o=(0,c.ZP)(n),a=t,r=u.hJ;o.set(a(r.from)),o.render(),(0,l.j)({...r,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){o.set(a(t))},onComplete:e})},loaded:!1}},mounted(){setTimeout((()=>{this.loaded=!0}),this.enterDelay)}},g=(e(7154),e(1805)),b=e.n(g);var v=(0,e(1900).Z)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("h1",[t._v("Modal with Inline Action Bar")])]},proxy:!0}])},[t._v(" "),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{class:t.$s.ActionBarWrapper},[e("m-transition",{attrs:{enter:t.springUpFn,leave:t.springDownFn}},[t.loaded?e("atomic-action-bar",t._g(t._b({},"atomic-action-bar",t.$attrs,!1),t.$listeners),[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(n){return t.modalApi.close()}}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(n){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t$10.00\n\t\t\t\t\t")]},proxy:!0}],null,!1,627294226)},[t._v("\n\t\t\t\t\tAdd to Cart\n\t\t\t\t\t")])],1):t._e()],1)],1)],1)}),[],!1,(function(t){this.$s=b().locals||b()}),"51ed5d70",null).exports},1805:function(t,n,e){var o=e(700);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("077e2eb2",o,!0,{})},7154:function(t,n,e){var o=e(5054);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("b9f00ffc",o,!0,{})}}]);