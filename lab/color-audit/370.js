(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[370],{9901:function(t,e,n){"use strict";n.d(e,{g:function(){return s}});var r={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}},o=n(7531),i=n.n(o);var s=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Loading},[n("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},1098:function(t,e,n){"use strict";n.d(e,{qo:function(){return C},YH:function(){return a},uH:function(){return g},C9:function(){return _}});var r=n(5066),o=n.n(r),i=n(4299),s=n.n(i);var a=Symbol("ThemeKey"),l=n(643),c=n.n(l),u=n(2810),f=n.n(u),d=n(5692),p=n.n(d),h=n(2416);function m(t){return p()(t)&&t.startsWith("@")?this.getPath(t):t}function v(t){if(!p()(t))throw new Error(`cannot resolve pointer ${t} it is not a string`);if(!t.startsWith("@"))throw new Error(`cannot resolve pointer ${t} it is missed the @ prefix`);const e=t.slice(1),n=c()(this,e);if(f()(n))throw new Error(`invalid pointer ${t} does not point to a field that exists within the theme`);return n}function _(t,e){const n={};for(const o of e)n[`resolved${r=o,r[0].toUpperCase()+r.slice(1)}`]=function(){if(!f()(this[o]))return this[o];const e=this.theme[t][o];if(e){const n=e,r=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[o].validator;return i&&h.Z.error(i(r),`Invalid value "${r}" for prop "${o}" for component "${t}" in theme.`),r}};var r;return n}function g(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0},heading:{fontFamily:"inherit",size:2},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:m,getPath:v}}function x(t,e,n,r){s()(t,e,n),s()(t,o()(t.profiles,{id:r})),t.colors={...t.colors},t.resolve=m,t.getPath=v}var b={inject:{parentTheme:{default:g(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return x(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-background":t.background,"--color-heading":t.heading,"--color-text":t.text,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"]}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}},y=n(5004),$=n.n(y);var C=(0,n(1900).Z)(b,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=$().locals||$()}),null,null).exports},2416:function(t,e){"use strict";const n=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r={warn(t,e){t||console.warn(...n,e)},error(t,e){if(!t)throw console.error(...n,e),new Error(`[@square/maker] ${e}`)}};e.Z=r},6475:function(t,e,n){"use strict";var r=n(771),o=n.n(r);e.Z=function(t,e){if(!e||o().contrast(t,e)<3){const e=.32,n=t.luminance()>e;return o()(n?"#000":"#fff")}return e}},2706:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.DemoBox_X4OKR {\n\tmargin: 16px;\n}\n\n",""]),r.locals={DemoBox:"DemoBox_X4OKR"},t.exports=r},9832:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),r.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=r},5820:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),r.locals={Theme:"Theme_rI2oH"},t.exports=r},7962:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.tippy-box {\n\tfont-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n\t-webkit-user-select: none;\n\t        user-select: none;\n}\n\n",""]),t.exports=r},248:function(t,e,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.icon[data-v-3ef25674] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=r},8403:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var r=n(2045),o=n(9893),i=n.n(o),s=n(8649),a=n.n(s),l=n(7016),c=n.n(l),u=n(2603),f=(n(6598),{props:{tooltip:{type:void 0,required:!0}},data:()=>({boundingClientRect:void 0}),computed:{dimensions(){if(!this.boundingClientRect)return"";const t={maximumFractionDigits:1};return`${this.boundingClientRect.width.toLocaleString(void 0,t)}px x ${this.boundingClientRect.height.toLocaleString(void 0,t)}px`}},mounted(){(0,u.ZP)(this.$el,{content:this.$refs.tooltip}),this.boundingClientRect=this.$el.children[0].getBoundingClientRect()}}),d=(n(5459),n(8644)),p=n.n(d),h=n(1900);var m=(0,h.Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.DemoBox},[t._t("default"),t._v(" "),n("div",{ref:"tooltip"},[t._l(t.tooltip,(function(e,r){return n("div",{key:r},[t._v("\n\t\t\t"+t._s(r)+": "+t._s(e)+"\n\t\t")])})),t._v(" "),n("div",[t._v("\n\t\t\tDimensions: "+t._s(t.dimensions)+"\n\t\t")])],2)],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var v={components:{Combinations:{props:{component:{type:void 0},options:{type:void 0,required:!0}},computed:{permutations(){return a()(this.options)}},render(t){const{component:e}=this;return t("div",this.permutations.map((n=>{const r=(t=>{const e={};for(const n in t)c()(t,n)&&!n.startsWith("$")&&(e[n]=t[n]);return e})(n),o=((t,e)=>{const n=[];for(const r in e)c()(e,r)&&r.startsWith("$slots.")&&n.push(t("template",{slot:r.replace("$slots.","")},[e[r]]));return n})(t,n);return t(m,{props:{tooltip:r}},[t(e,{attrs:{...r}},o)])})))}},MButton:r.G},data(){const t=this.$createElement;return{options:{size:["small","medium","large"],shape:["squared","rounded","pill"],variant:["primary","secondary","tertiary"],align:["stack","center","space-between"],disabled:[!1,!0],fullWidth:[!1,!0],"$slots.default":[`Really long text${" long".repeat(30)}`,[t(i(),{class:"icon"}),`Really long text${" long".repeat(30)}`]],"$slots.information":["","Information label"]}}}},_=(n(2636),(0,h.Z)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("combinations",{attrs:{component:t.$options.components.MButton,options:t.options}})}),[],!1,null,"3ef25674",null).exports)},8644:function(t,e,n){var r=n(2706);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("df4bc024",r,!0,{})},7531:function(t,e,n){var r=n(9832);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("7ac45ae2",r,!0,{})},5004:function(t,e,n){var r=n(5820);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("12fe2849",r,!0,{})},5459:function(t,e,n){var r=n(7962);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("44186eb6",r,!0,{})},2636:function(t,e,n){var r=n(248);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("7e45bd8c",r,!0,{})}}]);