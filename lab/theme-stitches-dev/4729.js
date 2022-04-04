(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4729],{3216:(t,e,n)=>{"use strict";n.d(e,{b:()=>s});var r=n(2851);const o={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:t=>!n.g.CSS||n.g.CSS.supports("color",t)},fontStyle:{type:String,default:"inherit",validator:t=>["inherit","normal","italic"].includes(t)},textTransform:{type:String,default:"inherit",validator:t=>["inherit","none","uppercase"].includes(t)},textAlign:{type:String,default:"inherit",validator:t=>["inherit","left","right","center"].includes(t)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},sizeClass(){return this.size>=0?"maker-step-".concat(this.size.toString()):"maker-step-minus".concat(this.size)},inlineStyles(){return{fontFamily:this.fontFamily,fontWeight:this.fontWeight,color:this.color,fontSize:this.fontSize,lineHeight:this.lineHeight}}},render(t){const{$s:e,sizeClass:n,tag:r,inlineStyles:o,fontStyle:i,textTransform:a,textAlign:s}=this,l=this.$slots.default;return t(r,{class:[e.Heading,n,{[e["fontstyle_".concat(i)]]:"inherit"!==i,[e["texttransform_".concat(a)]]:"inherit"!==a,[e["textalign_".concat(s)]]:"inherit"!==s}],style:o,attrs:this.$attrs,on:this.$listeners},l)}};var i=n(1491),a=n.n(i);const s=(0,n(1900).Z)(o,undefined,undefined,!1,(function(t){this.$s=a().locals||a()}),null,null).exports},2851:(t,e,n)=>{"use strict";n.d(e,{qo:()=>S,YH:()=>l,uH:()=>x,C9:()=>_});var r=n(5066),o=n.n(r),i=n(4299),a=n.n(i),s=n(7839);const l=Symbol("ThemeKey");var c=n(643),f=n.n(c),h=n(2810),d=n.n(h),u=n(5692),p=n.n(u),m=n(7356);function g(t){return p()(t)&&t.startsWith("@")?this.getPath(t):t}function v(t){if(!p()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=f()(this,e);if(d()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function _(t,e){const n={};for(const o of e)n["resolved".concat((r=o,r[0].toUpperCase()+r.slice(1)))]=function(){if(!d()(this[o]))return this[o];const e=this.theme[t][o];if(e){const n=e,r=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[o].validator;return i&&m.Z.error(i(r),'Invalid value "'.concat(r,'" for prop "').concat(o,'" for component "').concat(t,'" in theme.')),r}};var r;return n}function x(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:g,getPath:v}}function y(t,e,n,r){a()(t,e,n),a()(t,o()(t.profiles,{id:r})),t.colors={...t.colors},t.resolve=g,t.getPath=v}const b={inject:{parentTheme:{default:x(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return y(t,this.parentTheme,this.theme,this.profile),t},beforeUpdate(){y(this.$data,this.parentTheme,this.theme,this.profile),this.applyTheme()},beforeMount(){this.applyTheme()},methods:{applyTheme(){(0,s.Th)({theme:this.theme,prefix:"maker"})}},render(t){const{$s:e}=this,n=this.$slots.default;return t("div",{class:[e.Theme],attrs:this.$attrs,on:this.$listeners},n)}};var k=n(5004),z=n.n(k);const S=(0,n(1900).Z)(b,undefined,undefined,!1,(function(t){this.$s=z().locals||z()}),null,null).exports},7356:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const r="object"==typeof process&&"object"==typeof process.env&&!0,o=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i={warn(t,e,n){t||((t,e)=>{r&&console.warn(...o(e),t)})(e,n)},error(t,e,n){t||((t,e)=>{throw console.error(...o(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))})(e,n)}}},8938:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Page_hD_dX {\n\tpadding: 32px;\n}\n.Nav_TyMTe {\n\tmargin-top: 32px;\n}\n.NavLink_Dfv6D {\n\tcolor: inherit;\n\tfont-size: 20px;\n\ttext-decoration: none\n}\n.NavLink_Dfv6D:hover {\n\t\ttext-decoration: underline;\n}\n",""]),r.locals={Page:"Page_hD_dX",Nav:"Nav_TyMTe",NavLink:"NavLink_Dfv6D"},t.exports=r},2630:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--maker-colors-heading, #000);\n\tfont-weight: var(--maker-fontWeights-heading, 600);\n\tfont-family: var(--maker-fonts-heading, --system-font);\n}\n.fontstyle_normal_TopyV {\n\tfont-style: normal;\n}\n.fontstyle_italic_hY9C3 {\n\tfont-style: italic;\n}\n.texttransform_none_Ep8oi {\n\ttext-transform: none;\n}\n.texttransform_uppercase_kW7HE {\n\ttext-transform: uppercase;\n}\n.textalign_left_mxEQR {\n\ttext-align: left;\n}\n.textalign_right__uM8B {\n\ttext-align: right;\n}\n.textalign_center_QlcAw {\n\ttext-align: center;\n}\n",""]),r.locals={Heading:"Heading__6G7M",fontstyle_normal:"fontstyle_normal_TopyV",fontstyle_italic:"fontstyle_italic_hY9C3",texttransform_none:"texttransform_none_Ep8oi",texttransform_uppercase:"texttransform_uppercase_kW7HE",textalign_left:"textalign_left_mxEQR",textalign_right:"textalign_right__uM8B",textalign_center:"textalign_center_QlcAw"},t.exports=r},5820:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n:root {\n\t--theme-font-weight: var(--maker-text-fontWeight, normal);\n\t--theme-font-size: calc(var(--maker-fonts-baseSize, 16) * 1px);\n\t--theme-font-family: var(--maker-text-fontFamily, --system-font);\n}\n.Theme_rI2oH {\n\tcolor: var(--maker-colors-text, #000);\n\tfont-weight: var(--theme-font-weight);\n\tfont-size: var(--theme-font-size);\n\tfont-family: var(--theme-font-family);\n\tbackground-color: var(--maker-colors-background, #fff);\n}\n",""]),r.locals={Theme:"Theme_rI2oH"},t.exports=r},4729:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const r={components:{MHeading:n(3216).b},data(){return{experiments:this.getExperiments()}},methods:{getExperiments(){return this.$router.options.routes.map((t=>{const e=t.name?t:t.children.find((t=>!t.path));return{label:t.rawName.replace(/\.vue$/,""),name:e.name}})).filter((t=>"index"!==t.name))}}};var o=n(2182),i=n.n(o);const a=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Page},[n("m-heading",{attrs:{size:4}},[t._v("\n\t\tLab experiments\n\t")]),t._v(" "),n("nav",{class:t.$s.Nav},t._l(t.experiments,(function(e){return n("li",{key:e.name},[n("router-link",{class:t.$s.NavLink,attrs:{to:{name:e.name}}},[t._v("\n\t\t\t\t"+t._s(e.label)+"\n\t\t\t")])],1)})),0)],1)}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},2182:(t,e,n)=>{var r=n(8938);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("304aafff",r,!0,{})},1491:(t,e,n)=>{var r=n(2630);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("ceb27898",r,!0,{})},5004:(t,e,n)=>{var r=n(5820);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("12fe2849",r,!0,{})}}]);
