(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[5762,5686],{193:(t,e,n)=>{"use strict";n.d(e,{F:()=>u});var s=n(9082),r=n(6964);function o(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,s){t.set(n,s),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const a=new Set;let i;const l={components:{MTransitionFadeIn:s.j,MSkeletonBlock:r.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:a.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){i||(i=new o),i.watch(this.$el,this.onIntersection)},beforeDestroy(){i.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{a.add(this.src+this.srcset),this.loaded=!0}))}}};var c=n(7548),d=n.n(c);const u=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},8774:(t,e,n)=>{"use strict";n.d(e,{i:()=>l,X:()=>p});const s=Symbol("SegmentedControlKey"),r={inject:{controlState:s},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.currentValue===this.value}},methods:{selectSelf(){this.controlState.currentValue=this.value}}};var o=n(5891),a=n.n(o),i=n(1900);const l=(0,i.Z)(r,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("button",{class:[e.$s.Button,e.$s["shape_"+e.controlState.shapeInner],e.$s["size_"+e.controlState.sizeInner],(t={},t[e.$s.selected]=e.isSelected,t)],on:{click:e.selectSelf}},[e._t("default")],2)}),[],!1,(function(t){this.$s=a().locals||a()}),null,null).exports;const c={provide(){return{[s]:this.$data}},model:{prop:"selected",event:"segmented-control:update"},props:{selected:{type:void 0,required:!0},shape:{type:String,default:"rounded",validator:t=>["squared","rounded","pill"].includes(t)},size:{type:String,default:"medium",validator:t=>["small","medium"].includes(t)}},data(){return{currentValue:this.selected,shapeInner:this.shape,sizeInner:this.size}},watch:{currentValue(t){this.$emit("segmented-control:update",t)}}};var d=n(5154),u=n.n(d);const p=(0,i.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.$s.Container,t.$s["shape_"+t.shapeInner],t.$s["size_"+t.sizeInner]]},[t._t("default")],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},6964:(t,e,n)=>{"use strict";n.d(e,{s:()=>i,p:()=>u});const s={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var r=n(2986),o=n.n(r),a=n(1900);const i=(0,a.Z)(s,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports;const l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var c=n(2794),d=n.n(c);const u=(0,a.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},5227:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n",""]),s.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=s},7889:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Button_dVHkj {\n\tflex: 1 0 0;\n\tcolor: var(--neutral-90, black);\n\tfont-weight: 500;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 4px;\n\toutline: none;\n\tcursor: pointer;\n}\n.shape_pill_xOf5O {\n\tborder-radius: 32px;\n}\n.shape_squared_wGub5 {\n\tborder-radius: 0;\n}\n.selected_JxSKs {\n\tcolor: var(--neutral-90, black);\n\tbackground-color: var(--color-elevation, white);\n\tbox-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\n}\n",""]),s.locals={Button:"Button_dVHkj",shape_pill:"shape_pill_xOf5O",shape_squared:"shape_squared_wGub5",selected:"selected_JxSKs"},t.exports=s},124:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Container_LEIzv {\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\theight: 56px;\n\tpadding: 4px;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tbackground-color: var(--neutral-10, #f6f7f9);\n\tborder-radius: 4px;\n}\n.shape_pill_ssIJF {\n\tborder-radius: 32px;\n}\n.shape_squared_FwAaH {\n\tborder-radius: 0;\n}\n.size_small_QLXE_ {\n\theight: 40px;\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n",""]),s.locals={Container:"Container_LEIzv",shape_pill:"shape_pill_ssIJF",shape_squared:"shape_squared_FwAaH",size_small:"size_small_QLXE_"},t.exports=s},8647:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),s.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=s},3418:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--neutral-10, #ebedef);\n}\n100% { background-color: var(--neutral-20, #f5f6f7);\n}\n}\n",""]),s.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=s},7152:(t,e,n)=>{var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.cover-photo[data-v-31c45108] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-31c45108] {\n\twidth: 100%;\n}\n.icon[data-v-31c45108] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=s},5686:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var s=n(5239),r=n(7392),o=n(193),a=n(8774),i=n(9893),l=n.n(i);const c={components:{MModal:s.x6,MInlineActionBar:r.pE,MActionBarButton:r.n5,MSegmentedControl:a.X,MSegment:a.i,MImage:o.F,X:l()},inject:{modalApi:s.UJ},props:{showImage:{type:Boolean,default:!0}},data:()=>({selected:"short"})};n(2069);const d=(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[t.showImage?n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1):n("m-segmented-control",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("m-segment",{attrs:{value:"short"}},[t._v("\n\t\t\tLocal Delivery\n\t\t")]),t._v(" "),n("m-segment",{attrs:{value:"medium"}},[t._v("\n\t\t\tPickup\n\t\t")]),t._v(" "),n("m-segment",{attrs:{value:"long"}},[t._v("\n\t\t\tShip\n\t\t")])],1),t._v(" "),n("h1",[t._v("Cart modal content")]),t._v(" "),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\tLong text "+t._s(e)+"\n\t")])})),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(e){return t.modalApi.close()}}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t$10.00\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAdd to Cart\n\t\t\t")])],1)],2)}),[],!1,null,"31c45108",null).exports},5762:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var s=n(5239),r=n(7392),o=n(5686);const a={components:{MActionBar:r.MS,MActionBarButton:r.n5},inject:{modalApi:s.UJ},methods:{openCart(t){this.modalApi.open((e=>e(o.default,{props:{showImage:t}})))}}};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("root index")]),t._v(" "),n("button",{on:{click:function(e){return t.openCart(!1)}}},[t._v("\n\t\tOpen modal without image\n\t")]),t._v(" "),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\tLong text "+t._s(e)+"\n\t")])})),t._v(" "),n("m-action-bar",[n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.openCart(!0)}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t3 items\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView Cart\n\t\t\t")])],1)],2)}),[],!1,null,null,null).exports},7548:(t,e,n)=>{var s=n(5227);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("14393fff",s,!0,{})},5891:(t,e,n)=>{var s=n(7889);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("2714874e",s,!0,{})},5154:(t,e,n)=>{var s=n(124);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("b3262532",s,!0,{})},2986:(t,e,n)=>{var s=n(8647);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("e53630ca",s,!0,{})},2794:(t,e,n)=>{var s=n(3418);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("54e85523",s,!0,{})},2069:(t,e,n)=>{var s=n(7152);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("fd7be2a2",s,!0,{})}}]);