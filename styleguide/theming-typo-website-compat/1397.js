(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1397],{31397:function(t,n,e){"use strict";e.d(n,{G:function(){return g},j:function(){return z}});var o=e(60771),i=e.n(o),r=e(69901),a=e(78923),l=e(46475);function s(t){return t.alpha(.3)}function c(t){return i().mix(t,"#000",.05)}function d(t){return i().mix(t,"#000",.1)}const u={primary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=t.textColor?i()(t.textColor):void 0,a=(0,l.Z)(n,r),u=c(a),f=d(a),p=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":n.hex(),"--color-main-hover":e.hex(),"--color-main-active":o.hex(),"--color-contrast":a.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":f.hex(),"--color-focus":p.hex()}},secondary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=s(n);return{"--small-padding":"0 8px","--medium-padding":"0 12px","--large-padding":"0 20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex()}}};var f={components:{MLoading:r.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>i().valid(t)},textColor:{type:String,default:void 0,validator:t=>i().valid(t)},variant:{type:String,default:void 0,validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("button",["color","size","textColor","variant","shape","align","fullWidth"]),style(){return u[this.resolvedVariant]({color:this.resolvedColor,textColor:this.resolvedTextColor})}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}},p=e(3441),h=e.n(p),v=e(51900);var g=(0,v.Z)(f,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild(),t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?o("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports,_=e(32416);var m={components:{MLoading:r.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>i().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("textbutton",["size","color"]),style(){return function(t){const n=t.color?i()(t.color):void 0;return{color:n?n.hex():void 0}}({color:this.resolvedColor})}},created(){_.Z.warn(this.$slots.default,"TextButton should be used with a label")}},x=e(73012),b=e.n(x);var z=(0,v.Z)(m,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.resolvedSize],(t={},t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("span",{class:n.$s.MainText},[n._t("default")],2)],1)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},69901:function(t,n,e){"use strict";e.d(n,{g:function(){return a}});var o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}},i=e(17531),r=e.n(i);var a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.Loading},[e("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=r().locals||r()}),null,null).exports},78923:function(t,n,e){"use strict";e.d(n,{qo:function(){return y},YH:function(){return l},uH:function(){return m},C9:function(){return _}});var o=e(85066),i=e.n(o),r=e(54299),a=e.n(r);var l=Symbol("ThemeKey"),s=e(20643),c=e.n(s),d=e(92810),u=e.n(d),f=e(75692),p=e.n(f),h=e(32416);function v(t){return p()(t)&&t.startsWith("@")?this.getPath(t):t}function g(t){if(!p()(t))throw new Error(`cannot resolve pointer ${t} it is not a string`);if(!t.startsWith("@"))throw new Error(`cannot resolve pointer ${t} it is missed the @ prefix`);const n=t.slice(1),e=c()(this,n);if(u()(e))throw new Error(`invalid pointer ${t} does not point to a field that exists within the theme`);return e}function _(t,n){const e={};for(const i of n)e[`resolved${o=i,o[0].toUpperCase()+o.slice(1)}`]=function(){if(!u()(this[i]))return this[i];const n=this.theme[t][i];if(n){const e=n,o=this.theme.resolve(e),r=this.$vnode.componentOptions.Ctor.extendOptions.props[i].validator;return r&&h.Z.error(r(o),`Invalid value "${o}" for prop "${i}" for component "${t}" in theme.`),o}};var o;return e}function m(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{mobileBaseSize:"16px",mobileSizeScale:1.17,mobileBaseLineHeight:"1.5em",mobileLineHeightScale:.95,desktopBaseSize:"16px",desktopSizeScale:1.28,desktopBaseLineHeight:"1.5em",desktopLineHeightScale:.95},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,textColor:"@colors.text",weight:300},heading:{fontFamily:"inherit",size:2,textColor:"@colors.heading",weight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:v,getPath:g}}function x(t,n,e,o){a()(t,n,e),a()(t,i()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=v,t.getPath=g}var b={inject:{parentTheme:{default:m(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return x(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:n}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-background":t.background,"--color-heading":t.heading,"--color-text":t.text,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"],"--mobile-base-font-size":n.mobileBaseSize,"--mobile-font-size-scale":n.mobileSizeScale,"--mobile-base-line-height":n.mobileBaseLineHeight,"--mobile-line-height-scale":n.mobileLineHeightScale,"--desktop-base-font-size":n.desktopBaseSize,"--desktop-font-size-scale":n.desktopSizeScale,"--desktop-base-line-height":n.desktopBaseLineHeight,"--desktop-line-height-scale":n.desktopLineHeightScale}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}},z=e(35004),B=e.n(z);var y=(0,e(51900).Z)(b,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=B().locals||B()}),null,null).exports},32416:function(t,n,e){"use strict";var o=e(14219);const i={warn(t,n,e){t||(0,o.K)(n,e)},error(t,n,e){t||(0,o._)(n,e)}};n.Z=i},14219:function(t,n,e){"use strict";e.d(n,{_:function(){return r},K:function(){return a}});const o="object"==typeof process&&"object"==typeof process.env&&!0,i=t=>[`%c @square/maker${t}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(t,n)=>{throw console.error(...i(n),t),new Error(`${(t=>`[@square/maker]${t}`)(n)} ${t}`)},a=(t,n)=>{o&&console.warn(...i(n),t)}},46475:function(t,n,e){"use strict";var o=e(60771),i=e.n(o);n.Z=function(t,n){if(!n||i().contrast(t,n)<3){const n=.32,e=t.luminance()>n;return i()(e?"#000":"#fff")}return n}},20758:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_vQBWk {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: 32px;\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),o.locals={Button:"Button_vQBWk",shape_pill:"shape_pill_aYEm0",shape_squared:"shape_squared_IPrN0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=o},28171:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_UfoQd {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--neutral-90);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_UfoQd.iconButton__JrGg {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_UfoQd.size_medium_f3QRI {\n\t\tfont-size: 14px;\n}\n.Button_UfoQd.size_large__tIVh {\n\t\tfont-size: 16px;\n}\n.Button_UfoQd:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_UfoQd:disabled > * {\n\t\t\topacity: 0.5;\n}\n.Button_UfoQd.loading_mxjea {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_o7CJ2 {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--neutral-90);\n\tbackground-color: transparent;\n}\n.MainText__arHd {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),o.locals={Button:"Button_UfoQd",iconButton:"iconButton__JrGg",size_medium:"size_medium_f3QRI",size_large:"size_large__tIVh",loading:"loading_mxjea",Loading:"Loading_o7CJ2",MainText:"MainText__arHd"},t.exports=o},39832:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},35820:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n\n\t--font-size: var(--mobile-base-font-size);\n\t--font-size-scale: var(--mobile-font-size-scale);\n\t--line-height: var(--mobile-base-line-height);\n\t--line-height-scale: var(--mobile-line-height-scale);\n\n\t/* derived minus sizes */\n\t--font-step-minus-2-size: max(12px, calc(var(--font-step-minus-1-size) / var(--font-size-scale)));\n\t--font-step-minus-2-line-height:\n\t\tcalc(\n\t\t\tvar(--font-step-mins-1-line-height) / var(--line-height-scale)\n\t\t);\n\t--font-step-minus-1-size: max(14px, calc(var(--font-step-0-size) / var(--font-size-scale)));\n\t--font-step-minus-1-line-height:\n\t\tcalc(\n\t\t\tvar(--font-step-0-line-height) / var(--line-height-scale)\n\t\t);\n\n\t/* base sizes */\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\n\t/* derived larger sizes */\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n}\n@media (min-width: 600px) {\n.Theme_rI2oH {\n\t\t--font-size: var(--desktop-base-font-size);\n\t\t--font-size-scale: var(--desktop-font-size-scale);\n\t\t--line-height: var(--desktop-base-line-height);\n\t\t--line-height-scale: var(--desktop-line-height-scale);\n}\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},t.exports=o},3441:function(t,n,e){var o=e(20758);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("180e274e",o,!0,{})},73012:function(t,n,e){var o=e(28171);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("69aa5930",o,!0,{})},17531:function(t,n,e){var o=e(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("7ac45ae2",o,!0,{})},35004:function(t,n,e){var o=e(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("12fe2849",o,!0,{})}}]);