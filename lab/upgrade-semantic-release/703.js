(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[703],{7062:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=function(e){return e&&e.data&&(e.data.slot=void 0),e};const i={functional:!0,render:function(e,t){var n=t.props;return Array.isArray(n.nodes)?n.nodes.map(a):a(n.nodes)}}},3883:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a,i={"!":1,"&":2},r=/\B([A-Z])/g,s=/-(\w)/g;function l(e){return e.replace(s,(function(e,t){return t?t.toUpperCase():""}))}function o(e,t,n){if(n){var a=n.value,i=n.modifier,r=e[t];null==r||1===i?e[t]=a:2===i&&(Array.isArray(r)?Array.isArray(a)?r.push.apply(r,a):r.push(a):"object"==typeof r&&"object"==typeof a?Object.assign(r,a):"function"==typeof r&&"function"==typeof a?e[t]=function(){Reflect.apply(r,this,arguments),Reflect.apply(a,this,arguments)}:e[t]+=a)}}function c(e,t,n){e[t]||(e[t]={});var a=e[t];for(var i in n)o(a,i,n[i])}function f(e,t){if(t in e)return t;var n=t.replace(r,"-$1").toLowerCase();return n in e&&n}function v(e){var t={};for(var n in e){var a=e[n],r=i[n.slice(-1)];r?n=n.slice(0,-1):r=0,t[n]={value:a,modifier:r}}return t}function m(e,t){var n=l("static-"+t),a=[e[n],e[t]].filter(Boolean).flat(1/0);if(0!==a.length)return delete e[n],a}function u(e,t){var n=e[t];if(n)return delete e[t],n}function h(e){return e&&{value:e,modifier:0}}const p={functional:!0,render:function(e,t){var n=t.children,i=t.data;if(!n||function(e){for(var t in e)return!1;return!0}(i))return n;var r,s=v(i.attrs),p=v(i.on),d=v(i.nativeOn),g=u(s,"class")||h(m(i,"class")),_=u(s,"style")||h(m(i,"style")),x=u(s,"key")||h(i.key);return _&&"string"==typeof _.value&&(_.value=(r=_.value,Object.fromEntries(r.split(";").map((function(e){var t=e.split(":"),n=t[0],a=t[1];return n&&a&&[l(n.trim()),a.trim()]})).filter(Boolean)))),n.map((function(e){if((e=function(e){a||(a=Object.getPrototypeOf(e).constructor);var t=new a;return Object.assign(t,e),t.componentOptions&&(t.componentOptions=Object.assign({},t.componentOptions),t.componentOptions.propsData=Object.assign({},t.componentOptions.propsData)),t}(e)).tag){e.data||(e.data={});var t=Object.assign({},s),n=e,i=n.data,r=n.componentOptions;r?(c(r,"propsData",function(e,t){var n=e.Ctor.options.props,a={};if(n)for(var i in n){var r=f(t,i);r&&(a[i]=t[r],delete t[r])}return a}(r,t)),c(r,"listeners",p),c(i,"nativeOn",d),i.on=i.nativeOn):c(i,"on",p),c(i,"attrs",t),i.class=m(i,"class"),i.style=m(i,"style"),o(i,"class",g),o(i,"style",_),o(e,"key",x)}return e}))}}},9901:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});const a={props:{size:{type:String,default:"normal",validator:e=>["normal","large"].includes(e)}}};var i=n(7531),r=n.n(i);const s=(0,n(1900).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Loading},[n("svg",{class:[e.$s.Spinner,e.$s["size_"+e.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[e.$s.Circle,e.$s["size_"+e.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(e){this.$s=r().locals||r()}),null,null).exports},990:(e,t,n)=>{"use strict";n.d(t,{H:()=>o});var a=n(6010),i=n(7060);const r={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(e)},size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},fontFamily:{type:String,default:void 0,validator:(0,i.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,i.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,i.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,i.Z)("line-height")},color:{type:String,default:void 0,validator:(0,i.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,i.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,i.Z)("text-transform")},textAlign:{type:String,default:void 0,validator:(0,i.Z)("text-align")}},computed:{...(0,a.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:e}=this.theme,t={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":e.baseSize,"--mobile-font-size-scale":e.sizeScale};return"inherit"!==this.resolvedFontFamily&&(t.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(t.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(t.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(t.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(t.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(t.textAlign=this.resolvedTextAlign),t}},render(e){const{$s:t,tag:n,sizeClass:a,inlineStyles:i}=this,r=this.$slots.default;return e(n,{class:[t.Text,t["size_".concat(a)]],attrs:this.$attrs,style:i,on:this.$listeners},r)}};var s=n(7493),l=n.n(s);const o=(0,n(1900).Z)(r,undefined,undefined,!1,(function(e){this.$s=l().locals||l()}),null,null).exports},9832:(e,t,n)=>{var a=n(7705)((function(e){return e[1]}));a.push([e.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),a.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},e.exports=a},2716:(e,t,n)=>{var a=n(7705)((function(e){return e[1]}));a.push([e.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},e.exports=a},9801:(e,t,n)=>{var a=n(7705)((function(e){return e[1]}));a.push([e.id,"\n.reactive-layer-props-lab[data-v-41ca392d] {\n\tfont-family: -apple-system, 'Helvetica Neue', sans-serif;\n}\n",""]),e.exports=a},6762:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(6385),i=n(5027),r=n(7459),s=n(8914),l=n(9235),o=n(4574);const c={components:{MBladeLayer:a.TX,MDialogLayer:r.Hv,MModalLayer:i.Pj},mixins:[a.TX.apiMixin,r.Hv.apiMixin,i.Pj.apiMixin],data:()=>({count:0}),mounted(){setInterval((()=>{this.count+=1}),1e3)},methods:{openModal(){const e=this.$createElement;this.modalApi.open((()=>e(l.Z,{attrs:{count:this.count}})))},openDialog(){const e=this.$createElement;this.dialogApi.open((()=>e(o.Z,{attrs:{count:this.count}})))},openBlade(){const e=this.$createElement;this.bladeApi.open((()=>e(s.Z,{attrs:{count:this.count}})))}}};n(8476);const f=(0,n(1900).Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reactive-layer-props-lab"},[n("button",{on:{click:e.openBlade}},[e._v("\n\t\topen blade\n\t")]),e._v(" "),n("button",{on:{click:e.openModal}},[e._v("\n\t\topen modal\n\t")]),e._v(" "),n("button",{on:{click:e.openDialog}},[e._v("\n\t\topen dialog\n\t")]),e._v(" "),n("br"),e._v("\n\tcount is "+e._s(e.count)+"\n\t"),n("m-blade-layer"),e._v(" "),n("m-modal-layer"),e._v(" "),n("m-dialog-layer")],1)}),[],!1,null,"41ca392d",null).exports},7531:(e,t,n)=>{var a=n(9832);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(4023).Z)("7ac45ae2",a,!0,{})},7493:(e,t,n)=>{var a=n(2716);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(4023).Z)("8cb0142e",a,!0,{})},8476:(e,t,n)=>{var a=n(9801);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(4023).Z)("b7dc9f62",a,!0,{})}}]);