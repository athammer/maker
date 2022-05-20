(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7092],{9901:(t,e,r)=>{"use strict";r.d(e,{g:()=>a});const o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var n=r(7531),i=r.n(n);const a=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$s.Loading},[r("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},648:(t,e,r)=>{"use strict";r.d(e,{qo:()=>w,YH:()=>l,uH:()=>b,C9:()=>v});var o=r(5066),n=r.n(o),i=r(4299),a=r.n(i);const l=Symbol("ThemeKey");var s=r(643),c=r.n(s),f=r(2810),d=r.n(f),u=r(5692),h=r.n(u),m=r(2416);function p(t){return h()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function g(t){if(!h()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),r=c()(this,e);if(d()(r))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return r}function v(t,e){const r={};for(const n of e)"pattern"===n?r.resolvedPattern=function(){if(!d()(this.pattern))return this.pattern;let e;const r=this.theme[t].pattern;if(d()(r)||(e=r),d()(e))return;const o=this.theme.resolve(e),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n)m.Z.error(n(o),'Invalid value "'.concat(o,'" for prop "pattern" for component "').concat(t,'" in theme.'));else{var i;const e=null===(i=this.theme[t].patterns)||void 0===i?void 0:i[o];m.Z.error(e,'Invalid pattern "'.concat(o,'" for component "').concat(t,'" in theme.'))}return o}:r["resolved".concat((o=n,o[0].toUpperCase()+o.slice(1)))]=function(){if(!d()(this[n]))return this[n];let e;const r=this.theme[t][n];if(d()(r)||(e=r),!d()(this.resolvedPattern)){var o,i;const r=null===(o=this.theme[t].patterns)||void 0===o||null===(i=o[this.resolvedPattern])||void 0===i?void 0:i[n];d()(r)||(e=r)}if(d()(e))return;const a=this.theme.resolve(e),l=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return l&&m.Z.error(l(a),'Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(t,'" in theme.')),a};var o;return r}function b(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:p,getPath:g}}function y(t,e,r,o){a()(t,e,r),a()(t,n()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=p,t.getPath=g}const _={inject:{parentTheme:{default:b(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return y(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:e,shapes:r}=this;return{"--maker-color-neutral-0":t["neutral-0"],"--maker-color-neutral-10":t["neutral-10"],"--maker-color-neutral-20":t["neutral-20"],"--maker-color-neutral-80":t["neutral-80"],"--maker-color-neutral-90":t["neutral-90"],"--maker-color-neutral-100":t["neutral-100"],"--maker-color-primary":t.primary,"--maker-color-background":t.background,"--maker-color-heading":t.heading,"--maker-color-body":t.body,"--maker-color-elevation":t.elevation,"--maker-color-overlay":t.overlay,"--maker-font-heading-font-family":e.heading.fontFamily,"--maker-font-heading-font-weight":e.heading.fontWeight,"--maker-font-body-font-family":e.body.fontFamily,"--maker-font-body-font-weight":e.body.fontWeight,"--maker-font-label-font-family":e.label.fontFamily,"--maker-font-label-font-weight":e.label.fontWeight,"--maker-shape-default-border-radius":r.defaultBorderRadius,"--maker-shape-button-border-radius":r.buttonBorderRadius,"--maker-shape-image-border-radius":r.imageBorderRadius}}},beforeUpdate(){y(this.$data,this.parentTheme,this.theme,this.profile)}};var k=r(5004),x=r.n(k);const w=(0,r(1900).Z)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports},2416:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var o=r(4219);const n={warn(t,e,r){t||(0,o.K)(e,r)},error(t,e,r){t||(0,o._)(e,r)}}},4219:(t,e,r)=>{"use strict";r.d(e,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,n=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,e)=>{throw console.error(...n(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},a=(t,e)=>{o&&console.warn(...n(e),t)}},6475:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var o=r(771),n=r.n(o);const i=function(t,e){if(!e||n().contrast(t,e)<3){const e=.32,r=t.luminance()>e;return n()(r?"#000":"#fff")}return e}},9832:(t,e,r)=>{var o=r(7705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},5820:(t,e,r)=>{var o=r(7705)((function(t){return t[1]}));o.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},t.exports=o},7531:(t,e,r)=>{var o=r(9832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,r(4023).Z)("7ac45ae2",o,!0,{})},5004:(t,e,r)=>{var o=r(5820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,r(4023).Z)("12fe2849",o,!0,{})}}]);