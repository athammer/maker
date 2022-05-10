(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2982],{69901:(t,e,n)=>{"use strict";n.d(e,{g:()=>a});const o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var r=n(17531),i=n.n(r);const a=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Loading},[n("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},12982:(t,e,n)=>{"use strict";n.d(e,{j:()=>f});var o=n(60771),r=n.n(o),i=n(69901),a=n(30648),l=n(32416);const s={components:{MLoading:i.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>r().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("textbutton",["pattern","size","color"]),style(){return function(t){const e=t.color?r()(t.color):void 0;return{color:e?e.hex():void 0}}({color:this.resolvedColor})},isDisabled(){return this.disabled||this.loading}},created(){l.Z.warn(this.$slots.default,"TextButton should be used with a label")}};var c=n(35713),d=n.n(c);const f=(0,n(51900).Z)(s,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",e._g(e._b({class:[e.$s.TextButton,e.$s["size_"+e.resolvedSize],(t={},t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?o("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),o("span",{class:e.$s.MainText},[e._t("default")],2)],1)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},30648:(t,e,n)=>{"use strict";n.d(e,{qo:()=>w,YH:()=>l,uH:()=>_,C9:()=>v});var o=n(85066),r=n.n(o),i=n(54299),a=n.n(i);const l=Symbol("ThemeKey");var s=n(20643),c=n.n(s),d=n(92810),f=n.n(d),u=n(75692),p=n.n(u),h=n(32416);function m(t){return p()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function g(t){if(!p()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=c()(this,e);if(f()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function v(t,e){const n={};for(const r of e)"pattern"===r?n.resolvedPattern=function(){if(!f()(this.pattern))return this.pattern;let e;const n=this.theme[t].pattern;if(f()(n)||(e=n),f()(e))return;const o=this.theme.resolve(e),r=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(r)h.Z.error(r(o),'Invalid value "'.concat(o,'" for prop "pattern" for component "').concat(t,'" in theme.'));else{var i;const e=null===(i=this.theme[t].patterns)||void 0===i?void 0:i[o];h.Z.error(e,'Invalid pattern "'.concat(o,'" for component "').concat(t,'" in theme.'))}return o}:n["resolved".concat((o=r,o[0].toUpperCase()+o.slice(1)))]=function(){if(!f()(this[r]))return this[r];let e;const n=this.theme[t][r];if(f()(n)||(e=n),!f()(this.resolvedPattern)){var o,i;const n=null===(o=this.theme[t].patterns)||void 0===o||null===(i=o[this.resolvedPattern])||void 0===i?void 0:i[r];f()(n)||(e=n)}if(f()(e))return;const a=this.theme.resolve(e),l=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return l&&h.Z.error(l(a),'Invalid value "'.concat(a,'" for prop "').concat(r,'" for component "').concat(t,'" in theme.')),a};var o;return n}function _(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:"#a82826",criticalBg:"#f6eceb",success:"#0a7a06",successBg:"#ebf1eb",warning:"#7e662a",warningBg:"#f9eecf"},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical"},success:{color:"@colors.success"},warning:{color:"@colors.warning"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{pattern:"info",patterns:{error:{type:"error",color:"@colors.critical",bgColor:"@colors.criticalBg"},success:{type:"success",color:"@colors.success",bgColor:"@colors.successBg"},warning:{type:"warning",color:"@colors.warning",bgColor:"@colors.warningBg"},info:{type:"info",color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:m,getPath:g}}function b(t,e,n,o){a()(t,e,n),a()(t,r()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=m,t.getPath=g}const x={inject:{parentTheme:{default:_(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return b(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:e,shapes:n}=this;return{"--maker-color-neutral-0":t["neutral-0"],"--maker-color-neutral-10":t["neutral-10"],"--maker-color-neutral-20":t["neutral-20"],"--maker-color-neutral-80":t["neutral-80"],"--maker-color-neutral-90":t["neutral-90"],"--maker-color-neutral-100":t["neutral-100"],"--maker-color-primary":t.primary,"--maker-color-background":t.background,"--maker-color-heading":t.heading,"--maker-color-body":t.body,"--maker-color-elevation":t.elevation,"--maker-color-overlay":t.overlay,"--maker-font-heading-font-family":e.heading.fontFamily,"--maker-font-heading-font-weight":e.heading.fontWeight,"--maker-font-body-font-family":e.body.fontFamily,"--maker-font-body-font-weight":e.body.fontWeight,"--maker-font-label-font-family":e.label.fontFamily,"--maker-font-label-font-weight":e.label.fontWeight,"--maker-shape-default-border-radius":n.defaultBorderRadius,"--maker-shape-button-border-radius":n.buttonBorderRadius,"--maker-shape-image-border-radius":n.imageBorderRadius}}},beforeUpdate(){b(this.$data,this.parentTheme,this.theme,this.profile)}};var y=n(35004),k=n.n(y);const w=(0,n(51900).Z)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=k().locals||k()}),null,null).exports},32416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(14219);const r={warn(t,e,n){t||(0,o.K)(e,n)},error(t,e,n){t||(0,o._)(e,n)}}},14219:(t,e,n)=>{"use strict";n.d(e,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,r=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,e)=>{throw console.error(...r(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},a=(t,e)=>{o&&console.warn(...r(e),t)}},39832:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},24298:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.TextButton__xxoX {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--maker-color-neutral-90);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\toutline-color: currentColor;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.TextButton__xxoX.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.TextButton__xxoX.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.TextButton__xxoX.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.TextButton__xxoX:active,\n\t.TextButton__xxoX:focus {\n\t\tbox-shadow: 0 0 0 1px currentColor;\n}\n.TextButton__xxoX:disabled {\n\t\tcursor: initial\n}\n.TextButton__xxoX:disabled > * {\n\t\t\topacity: 0.5;\n}\n.TextButton__xxoX.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--maker-color-neutral-90);\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1.5;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),o.locals={TextButton:"TextButton__xxoX",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",loading:"loading_bNQgE",Loading:"Loading_pd2rj",MainText:"MainText_qfj5z"},t.exports=o},35820:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},t.exports=o},17531:(t,e,n)=>{var o=n(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("7ac45ae2",o,!0,{})},35713:(t,e,n)=>{var o=n(24298);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("49bbe38a",o,!0,{})},35004:(t,e,n)=>{var o=n(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("12fe2849",o,!0,{})}}]);