(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[987],{80987:(t,e,n)=>{"use strict";n.d(e,{H:()=>l});var a=n(78437);const r=function(t){return function(e){return!n.g.CSS||n.g.CSS.supports(t,e)}},i={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{variant:{type:String,default:void 0},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0,validator:r("font-family")},fontWeight:{type:String,default:void 0,validator:r("font-weight")},fontSize:{type:String,default:void 0,validator:r("font-size")},lineHeight:{type:String,default:void 0,validator:r("line-height")},color:{type:String,default:void 0,validator:r("color")},fontStyle:{type:String,default:void 0,validator:r("font-style")},textTransform:{type:String,default:void 0,validator:r("text-transform")},textAlign:{type:String,default:void 0,validator:r("text-align")}},computed:{...(0,a.C9)("text",["variant","element","size","fontFamily","fontWeight","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme,e={fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale};return"inherit"!==this.resolvedFontFamily&&(e.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(e.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(e.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(e.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(e.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(e.textAlign=this.resolvedTextAlign),e}},render(t){const{$s:e,tag:n,sizeClass:a,inlineStyles:r}=this,i=this.$slots.default;return t(n,{class:[e.Text,e["size_".concat(a)]],attrs:this.$attrs,style:r,on:this.$listeners},i)}};var o=n(7493),s=n.n(o);const l=(0,n(51900).Z)(i,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports},78437:(t,e,n)=>{"use strict";n.d(e,{qo:()=>S,YH:()=>s,uH:()=>x,C9:()=>g});var a=n(85066),r=n.n(a),i=n(54299),o=n.n(i);const s=Symbol("ThemeKey");var l=n(20643),f=n.n(l),c=n(92810),v=n.n(c),h=n(75692),m=n.n(h),u=n(32416);function p(t){return m()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function d(t){if(!m()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=f()(this,e);if(v()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function g(t,e){const n={};for(const r of e)"variant"===r?n.resolvedVariant=function(){if(!v()(this.variant))return this.variant;let e;const n=this.theme[t].variant;if(v()(n)||(e=n),v()(e))return;const a=this.theme.resolve(e),r=this.$vnode.componentOptions.Ctor.extendOptions.props.variant.validator;if(r)u.Z.error(r(a),'Invalid value "'.concat(a,'" for prop "variant" for component "').concat(t,'" in theme.'));else{var i;const e=null===(i=this.theme[t].variants)||void 0===i?void 0:i[a];u.Z.error(e,'Invalid variant "'.concat(a,'" for component "').concat(t,'" in theme.'))}return a}:n["resolved".concat((a=r,a[0].toUpperCase()+a.slice(1)))]=function(){if(!v()(this[r]))return this[r];let e;const n=this.theme[t][r];if(v()(n)||(e=n),!v()(this.resolvedVariant)){var a,i;const n=null===(a=this.theme[t].variants)||void 0===a||null===(i=a[this.resolvedVariant])||void 0===i?void 0:i[r];v()(n)||(e=n)}if(v()(e))return;const o=this.theme.resolve(e),s=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return s&&u.Z.error(s(o),'Invalid value "'.concat(o,'" for prop "').concat(r,'" for component "').concat(t,'" in theme.')),o};var a;return n}function x(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",title:"inherit",paragraph:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17,title:{fontFamily:"inherit",fontWeight:"500"},paragraph:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",variants:{primary:{},secondary:{},tertiary:{}}},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{size:0,fontFamily:"@fonts.paragraph.fontFamily",color:"@colors.paragraph",element:"p",fontWeight:"@fonts.paragraph.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",variants:{headline:{size:7,fontFamily:"@fonts.title.fontFamily",fontWeight:"700",element:"h1",color:"@colors.title"},title:{size:3,fontFamily:"@fonts.title.fontFamily",fontWeight:"@fonts.title.fontWeight",element:"h2",color:"@colors.title"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:p,getPath:d}}function z(t,e,n,a){o()(t,e,n),o()(t,r()(t.profiles,{id:a})),t.colors={...t.colors},t.resolve=p,t.getPath=d}const y={inject:{parentTheme:{default:x(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return z(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:e}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-primary":t.primary,"--color-background":t.background,"--color-title":t.title,"--color-paragraph":t.paragraph,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"],"--font-family-title":e.title.fontFamily,"--font-weight-title":e.title.fontWeight,"--font-family-paragraph":e.paragraph.fontFamily,"--font-weight-paragraph":e.paragraph.fontWeight,"--font-family-label":e.label.fontFamily,"--font-weight-label":e.label.fontWeight}}},beforeUpdate(){z(this.$data,this.parentTheme,this.theme,this.profile)}};var _=n(35004),b=n.n(_);const S=(0,n(51900).Z)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},32416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var a=n(14219);const r={warn(t,e,n){t||(0,a.K)(e,n)},error(t,e,n){t||(0,a._)(e,n)}}},14219:(t,e,n)=>{"use strict";n.d(e,{_:()=>i,K:()=>o});const a="object"==typeof process&&"object"==typeof process.env&&!0,r=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,e)=>{throw console.error(...r(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},o=(t,e)=>{a&&console.warn(...r(e),t)}},62716:(t,e,n)=>{var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=a},35820:(t,e,n)=>{var a=n(77705)((function(t){return t[1]}));a.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-paragraph);\n\tbackground-color: var(--color-background);\n}\n",""]),a.locals={Theme:"Theme_rI2oH"},t.exports=a},7493:(t,e,n)=>{var a=n(62716);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("8cb0142e",a,!0,{})},35004:(t,e,n)=>{var a=n(35820);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(54023).Z)("12fe2849",a,!0,{})}}]);