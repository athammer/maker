(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7424],{3216:(t,e,n)=>{"use strict";n.d(e,{b:()=>f});var a=n(771),i=n.n(a),s=n(4185);const r={inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:t=>"inherit"===t||i().valid(t)},fontStyle:{type:String,default:"inherit",validator:t=>["inherit","normal","italic"].includes(t)},textTransform:{type:String,default:"inherit",validator:t=>["inherit","none","uppercase"].includes(t)},textAlign:{type:String,default:"inherit",validator:t=>["inherit","left","right","center"].includes(t)}},computed:{...(0,s.C9)("heading",["size","fontFamily","fontWeight","color"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme;return{fontFamily:this.resolvedFontFamily,fontWeight:this.resolvedFontWeight,color:this.resolvedColor,fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale}}},render(t){const{$s:e,sizeClass:n,tag:a,inlineStyles:i,fontStyle:s,textTransform:r,textAlign:l}=this,o=this.$slots.default;return t(a,{class:[e.Heading,e["size_".concat(n)],{[e["fontstyle_".concat(s)]]:"inherit"!==s,[e["texttransform_".concat(r)]]:"inherit"!==r,[e["textalign_".concat(l)]]:"inherit"!==l}],style:i,attrs:this.$attrs,on:this.$listeners},o)}};var l=n(1491),o=n.n(l);const f=(0,n(1900).Z)(r,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports},990:(t,e,n)=>{"use strict";n.d(e,{H:()=>f});var a=n(771),i=n.n(a),s=n(4185);const r={inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{element:{type:String,default:"p",validator:t=>["p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:t=>"inherit"===t||i().valid(t)},fontStyle:{type:String,default:"inherit",validator:t=>["inherit","normal","italic"].includes(t)},textTransform:{type:String,default:"inherit",validator:t=>["inherit","none","uppercase"].includes(t)},textAlign:{type:String,default:"inherit",validator:t=>["inherit","left","right","center"].includes(t)}},computed:{...(0,s.C9)("text",["size","fontFamily","fontWeight","color"]),sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme;return{fontFamily:this.resolvedFontFamily,fontWeight:this.resolvedFontWeight,color:this.resolvedColor,fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale}}},render(t){const{$s:e,sizeClass:n,inlineStyles:a,fontStyle:i,textTransform:s,textAlign:r}=this,l=this.$slots.default;return t(this.element||"p",{class:[e.Paragraph,e["size_".concat(n)],{[e["fontstyle_".concat(i)]]:"inherit"!==i,[e["texttransform_".concat(s)]]:"inherit"!==s,[e["textalign_".concat(r)]]:"inherit"!==r}],attrs:this.$attrs,style:a,on:this.$listeners},l)}};var l=n(7493),o=n.n(l);const f=(0,n(1900).Z)(r,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports},4185:(t,e,n)=>{"use strict";n.d(e,{qo:()=>S,YH:()=>l,uH:()=>z,C9:()=>u});var a=n(5066),i=n.n(a),s=n(4299),r=n.n(s);const l=Symbol("ThemeKey");var o=n(643),f=n.n(o),c=n(2810),v=n.n(c),h=n(5692),m=n.n(h),p=n(7356);function g(t){return m()(t)&&t.startsWith("@")?this.getPath(t):t}function _(t){if(!m()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=f()(this,e);if(v()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function u(t,e){const n={};for(const i of e)n["resolved".concat((a=i,a[0].toUpperCase()+a.slice(1)))]=function(){if(!v()(this[i]))return this[i];const e=this.theme[t][i];if(e){const n=e,a=this.theme.resolve(n),s=this.$vnode.componentOptions.Ctor.extendOptions.props[i].validator;return s&&p.Z.error(s(a),'Invalid value "'.concat(a,'" for prop "').concat(i,'" for component "').concat(t,'" in theme.')),a}};var a;return n}function z(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:g,getPath:_}}function d(t,e,n,a){r()(t,e,n),r()(t,i()(t.profiles,{id:a})),t.colors={...t.colors},t.resolve=g,t.getPath=_}const x={inject:{parentTheme:{default:z(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return d(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-background":t.background,"--color-heading":t.heading,"--color-text":t.text,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"]}}},beforeUpdate(){d(this.$data,this.parentTheme,this.theme,this.profile)}};var y=n(5004),b=n.n(y);const S=(0,n(1900).Z)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},7356:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const a="object"==typeof process&&"object"==typeof process.env&&!0,i=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],s={warn(t,e,n){t||((t,e)=>{a&&console.warn(...i(e),t)})(e,n)},error(t,e,n){t||((t,e)=>{throw console.error(...i(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))})(e,n)}}},2630:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n.fontstyle_normal_TopyV {\n\tfont-style: normal;\n}\n.fontstyle_italic_hY9C3 {\n\tfont-style: italic;\n}\n.texttransform_none_Ep8oi {\n\ttext-transform: none;\n}\n.texttransform_uppercase_kW7HE {\n\ttext-transform: uppercase;\n}\n.textalign_left_mxEQR {\n\ttext-align: left;\n}\n.textalign_right__uM8B {\n\ttext-align: right;\n}\n.textalign_center_QlcAw {\n\ttext-align: center;\n}\n@media (min-width: 1200px) {\n.Heading__6G7M {\n\t\t--resolution: 1200px;\n}\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Heading:"Heading__6G7M",fontstyle_normal:"fontstyle_normal_TopyV",fontstyle_italic:"fontstyle_italic_hY9C3",texttransform_none:"texttransform_none_Ep8oi",texttransform_uppercase:"texttransform_uppercase_kW7HE",textalign_left:"textalign_left_mxEQR",textalign_right:"textalign_right__uM8B",textalign_center:"textalign_center_QlcAw","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=a},2716:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.Paragraph_zo1hq {\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n.fontstyle_normal_iP1T1 {\n\tfont-style: normal;\n}\n.fontstyle_italic_SXlyN {\n\tfont-style: italic;\n}\n.texttransform_none_Oy5pc {\n\ttext-transform: none;\n}\n.texttransform_uppercase_bTyzJ {\n\ttext-transform: uppercase;\n}\n.textalign_left_Ijj1T {\n\ttext-align: left;\n}\n.textalign_right__rrDl {\n\ttext-align: right;\n}\n.textalign_center_c6Xty {\n\ttext-align: center;\n}\n@media (min-width: 1200px) {\n.Paragraph_zo1hq {\n\t\t--resolution: 1200px;\n}\n}\n.Paragraph_zo1hq.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Paragraph_zo1hq.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Paragraph_zo1hq.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Paragraph_zo1hq.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Paragraph_zo1hq.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Paragraph_zo1hq.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Paragraph_zo1hq.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Paragraph_zo1hq.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Paragraph_zo1hq.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Paragraph_zo1hq.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Paragraph:"Paragraph_zo1hq",fontstyle_normal:"fontstyle_normal_iP1T1",fontstyle_italic:"fontstyle_italic_SXlyN",texttransform_none:"texttransform_none_Oy5pc",texttransform_uppercase:"texttransform_uppercase_bTyzJ",textalign_left:"textalign_left_Ijj1T",textalign_right:"textalign_right__rrDl",textalign_center:"textalign_center_c6Xty","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=a},5820:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),a.locals={Theme:"Theme_rI2oH"},t.exports=a},9239:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n",""]),t.exports=a},1895:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.page[data-v-a049e67c] {\n\tpadding: 16px;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;\n}\n.flush[data-v-a049e67c] {\n\tmargin: 0;\n}\n.step_-2[data-v-a049e67c] {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.step_-1[data-v-a049e67c] {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.step_0[data-v-a049e67c] {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.step_1[data-v-a049e67c] {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.step_2[data-v-a049e67c] {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.step_3[data-v-a049e67c] {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.step_4[data-v-a049e67c] {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.step_5[data-v-a049e67c] {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.step_6[data-v-a049e67c] {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.step_7[data-v-a049e67c] {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),t.exports=a},7424:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(3216),i=n(990);const s={components:{MHeading:a.b,MText:i.H}};n(2360),n(2605);const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h1",[t._v("Current Default")]),t._v(" "),t._l([7,6,5,4,3,2,1,0,-1,-2],(function(e){return n("h1",{key:"step-"+e,class:"step_"+e+" flush"},[t._v("\n\t\tStep "+t._s(e)+"\n\t")])})),t._v(" "),n("h1",[t._v("Maker output")]),t._v(" "),t._l([7,6,5,4,3,2,1],(function(e){return n("m-heading",{key:"heading-"+e,attrs:{size:e}},[t._v("\n\t\tHeading "+t._s(e)+"\n\t")])})),t._v(" "),t._l([1,0,-1,-2],(function(e){return n("m-text",{key:"text-"+e,attrs:{size:e}},[t._v("\n\t\tText "+t._s(e)+"\n\t")])}))],2)}),[],!1,null,"a049e67c",null).exports},1491:(t,e,n)=>{var a=n(2630);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("ceb27898",a,!0,{})},7493:(t,e,n)=>{var a=n(2716);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("8cb0142e",a,!0,{})},5004:(t,e,n)=>{var a=n(5820);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("12fe2849",a,!0,{})},2360:(t,e,n)=>{var a=n(9239);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("52bbb083",a,!0,{})},2605:(t,e,n)=>{var a=n(1895);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("3fcce580",a,!0,{})}}]);