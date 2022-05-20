(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[86],{990:(t,e,n)=>{"use strict";n.d(e,{H:()=>l});var r=n(648),o=n(7060);const a={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0,validator:(0,o.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,o.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,o.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,o.Z)("line-height")},color:{type:String,default:void 0,validator:(0,o.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,o.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,o.Z)("text-transform")},textAlign:{type:String,default:void 0,validator:(0,o.Z)("text-align")}},computed:{...(0,r.C9)("text",["pattern","element","size","fontFamily","fontWeight","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme,e={fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale};return"inherit"!==this.resolvedFontFamily&&(e.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(e.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(e.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(e.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(e.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(e.textAlign=this.resolvedTextAlign),e}},render(t){const{$s:e,tag:n,sizeClass:r,inlineStyles:o}=this,a=this.$slots.default;return t(n,{class:[e.Text,e["size_".concat(r)]],attrs:this.$attrs,style:o,on:this.$listeners},a)}};var i=n(7493),s=n.n(i);const l=(0,n(1900).Z)(a,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports},648:(t,e,n)=>{"use strict";n.d(e,{qo:()=>C,YH:()=>s,uH:()=>x,C9:()=>p});var r=n(5066),o=n.n(r),a=n(4299),i=n.n(a);const s=Symbol("ThemeKey");var l=n(643),c=n.n(l),f=n(2810),v=n.n(f),h=n(5692),m=n.n(h),u=n(2416);function d(t){return m()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function g(t){if(!m()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=c()(this,e);if(v()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function p(t,e){const n={};for(const o of e)"pattern"===o?n.resolvedPattern=function(){if(!v()(this.pattern))return this.pattern;let e;const n=this.theme[t].pattern;if(v()(n)||(e=n),v()(e))return;const r=this.theme.resolve(e),o=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(o)u.Z.error(o(r),'Invalid value "'.concat(r,'" for prop "pattern" for component "').concat(t,'" in theme.'));else{var a;const e=null===(a=this.theme[t].patterns)||void 0===a?void 0:a[r];u.Z.error(e,'Invalid pattern "'.concat(r,'" for component "').concat(t,'" in theme.'))}return r}:n["resolved".concat((r=o,r[0].toUpperCase()+r.slice(1)))]=function(){if(!v()(this[o]))return this[o];let e;const n=this.theme[t][o];if(v()(n)||(e=n),!v()(this.resolvedPattern)){var r,a;const n=null===(r=this.theme[t].patterns)||void 0===r||null===(a=r[this.resolvedPattern])||void 0===a?void 0:a[o];v()(n)||(e=n)}if(v()(e))return;const i=this.theme.resolve(e),s=this.$vnode.componentOptions.Ctor.extendOptions.props[o].validator;return s&&u.Z.error(s(i),'Invalid value "'.concat(i,'" for prop "').concat(o,'" for component "').concat(t,'" in theme.')),i};var r;return n}function x(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]',patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:d,getPath:g}}function b(t,e,n,r){i()(t,e,n),i()(t,o()(t.profiles,{id:r})),t.colors={...t.colors},t.resolve=d,t.getPath=g}const y={inject:{parentTheme:{default:x(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return b(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:e,shapes:n}=this;return{"--maker-color-neutral-0":t["neutral-0"],"--maker-color-neutral-10":t["neutral-10"],"--maker-color-neutral-20":t["neutral-20"],"--maker-color-neutral-80":t["neutral-80"],"--maker-color-neutral-90":t["neutral-90"],"--maker-color-neutral-100":t["neutral-100"],"--maker-color-primary":t.primary,"--maker-color-background":t.background,"--maker-color-heading":t.heading,"--maker-color-body":t.body,"--maker-color-elevation":t.elevation,"--maker-color-overlay":t.overlay,"--maker-font-heading-font-family":e.heading.fontFamily,"--maker-font-heading-font-weight":e.heading.fontWeight,"--maker-font-body-font-family":e.body.fontFamily,"--maker-font-body-font-weight":e.body.fontWeight,"--maker-font-label-font-family":e.label.fontFamily,"--maker-font-label-font-weight":e.label.fontWeight,"--maker-shape-default-border-radius":n.defaultBorderRadius,"--maker-shape-button-border-radius":n.buttonBorderRadius,"--maker-shape-image-border-radius":n.imageBorderRadius}}},beforeUpdate(){b(this.$data,this.parentTheme,this.theme,this.profile)}};var _=n(5004),z=n.n(_);const C=(0,n(1900).Z)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=z().locals||z()}),null,null).exports},2416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(4219);const o={warn(t,e,n){t||(0,r.K)(e,n)},error(t,e,n){t||(0,r._)(e,n)}}},7060:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=function(t){return function(e){return!n.g.CSS||n.g.CSS.supports(t,e)}}},4219:(t,e,n)=>{"use strict";n.d(e,{_:()=>a,K:()=>i});const r="object"==typeof process&&"object"==typeof process.env&&!0,o=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],a=(t,e)=>{throw console.error(...o(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},i=(t,e)=>{r&&console.warn(...o(e),t)}},8938:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Page_hD_dX {\n\tpadding: 32px;\n}\n.Nav_TyMTe {\n\tmargin-top: 32px;\n}\n.NavLink_Dfv6D {\n\tcolor: inherit;\n\tfont-size: 20px;\n\ttext-decoration: none\n}\n.NavLink_Dfv6D:hover {\n\t\ttext-decoration: underline;\n}\n",""]),r.locals={Page:"Page_hD_dX",Nav:"Nav_TyMTe",NavLink:"NavLink_Dfv6D"},t.exports=r},2716:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),r.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=r},5820:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),r.locals={Theme:"Theme_rI2oH"},t.exports=r},86:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});const r={components:{MText:n(990).H},data(){return{experiments:this.getExperiments()}},methods:{getExperiments(){return this.$router.options.routes.map((t=>{const e=t.name?t:t.children.find((t=>!t.path));return{label:t.rawName.replace(/\.vue$/,""),name:e.name}})).filter((t=>"index"!==t.name))}}};var o=n(2182),a=n.n(o);const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Page},[n("m-text",{attrs:{pattern:"title",size:4}},[t._v("\n\t\tLab experiments\n\t")]),t._v(" "),n("nav",{class:t.$s.Nav},t._l(t.experiments,(function(e){return n("li",{key:e.name},[n("router-link",{class:t.$s.NavLink,attrs:{to:{name:e.name}}},[t._v("\n\t\t\t\t"+t._s(e.label)+"\n\t\t\t")])],1)})),0)],1)}),[],!1,(function(t){this.$s=a().locals||a()}),null,null).exports},2182:(t,e,n)=>{var r=n(8938);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("304aafff",r,!0,{})},7493:(t,e,n)=>{var r=n(2716);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("8cb0142e",r,!0,{})},5004:(t,e,n)=>{var r=n(5820);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("12fe2849",r,!0,{})}}]);