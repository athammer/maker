(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7978],{69901:(t,e,n)=>{"use strict";n.d(e,{g:()=>a});const o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var r=n(17531),i=n.n(r);const a=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Loading},[n("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},67978:(t,e,n)=>{"use strict";n.d(e,{j:()=>u});var o=n(60771),r=n.n(o),i=n(69901),a=n(44185),s=n(32416);const l={components:{MLoading:i.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>r().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("textbutton",["size","color"]),style(){return function(t){const e=t.color?r()(t.color):void 0;return{color:e?e.hex():void 0}}({color:this.resolvedColor})},isDisabled(){return this.disabled||this.loading}},created(){s.Z.warn(this.$slots.default,"TextButton should be used with a label")}};var c=n(35713),d=n.n(c);const u=(0,n(51900).Z)(l,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",e._g(e._b({class:[e.$s.Button,e.$s["size_"+e.resolvedSize],(t={},t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?o("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),o("span",{class:e.$s.MainText},[e._t("default")],2)],1)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},44185:(t,e,n)=>{"use strict";n.d(e,{qo:()=>C,YH:()=>s,uH:()=>v,C9:()=>g});var o=n(85066),r=n.n(o),i=n(54299),a=n.n(i);const s=Symbol("ThemeKey");var l=n(20643),c=n.n(l),d=n(92810),u=n.n(d),f=n(75692),p=n.n(f),h=n(32416);function _(t){return p()(t)&&t.startsWith("@")?this.getPath(t):t}function m(t){if(!p()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),n=c()(this,e);if(u()(n))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return n}function g(t,e){const n={};for(const r of e)n["resolved".concat((o=r,o[0].toUpperCase()+o.slice(1)))]=function(){if(!u()(this[r]))return this[r];const e=this.theme[t][r];if(e){const n=e,o=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return i&&h.Z.error(i(o),'Invalid value "'.concat(o,'" for prop "').concat(r,'" for component "').concat(t,'" in theme.')),o}};var o;return n}function v(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:_,getPath:m}}function x(t,e,n,o){a()(t,e,n),a()(t,r()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=_,t.getPath=m}const b={inject:{parentTheme:{default:v(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return x(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-background":t.background,"--color-heading":t.heading,"--color-text":t.text,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"]}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}};var y=n(35004),w=n.n(y);const C=(0,n(51900).Z)(b,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=w().locals||w()}),null,null).exports},32416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(14219);const r={warn(t,e,n){t||(0,o.K)(e,n)},error(t,e,n){t||(0,o._)(e,n)}}},14219:(t,e,n)=>{"use strict";n.d(e,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,r=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,e)=>{throw console.error(...r(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},a=(t,e)=>{o&&console.warn(...r(e),t)}},39832:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},24298:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_aI_Cx {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--neutral-90);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_aI_Cx.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_aI_Cx.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.Button_aI_Cx.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.Button_aI_Cx:disabled {\n\t\tcursor: initial\n}\n.Button_aI_Cx:disabled > * {\n\t\t\topacity: 0.5;\n}\n.Button_aI_Cx.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--neutral-90);\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),o.locals={Button:"Button_aI_Cx",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",loading:"loading_bNQgE",Loading:"Loading_pd2rj",MainText:"MainText_qfj5z"},t.exports=o},35820:(t,e,n)=>{var o=n(77705)((function(t){return t[1]}));o.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},t.exports=o},17531:(t,e,n)=>{var o=n(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("7ac45ae2",o,!0,{})},35713:(t,e,n)=>{var o=n(24298);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("49bbe38a",o,!0,{})},35004:(t,e,n)=>{var o=n(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(54023).Z)("12fe2849",o,!0,{})}}]);