(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[724],{9901:function(t,e,n){"use strict";n.d(e,{g:function(){return s}});var o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}},r=n(7531),i=n.n(r);var s=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Loading},[n("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},8378:function(t,e,n){"use strict";n.d(e,{qo:function(){return $},YH:function(){return l},uH:function(){return g},C9:function(){return _}});var o=n(5066),r=n.n(o),i=n(4299),s=n.n(i);var l=Symbol("ThemeKey"),a=n(643),c=n.n(a),u=n(2810),d=n.n(u),f=n(5692),p=n.n(f),h=n(2416);function m(t){return p()(t)&&t.startsWith("@")?this.getPath(t):t}function v(t){if(!p()(t))throw new Error(`cannot resolve pointer ${t} it is not a string`);if(!t.startsWith("@"))throw new Error(`cannot resolve pointer ${t} it is missed the @ prefix`);const e=t.slice(1),n=c()(this,e);if(d()(n))throw new Error(`invalid pointer ${t} does not point to a field that exists within the theme`);return n}function _(t,e){const n={};for(const r of e)n[`resolved${o=r,o[0].toUpperCase()+o.slice(1)}`]=function(){if(!d()(this[r]))return this[r];const e=this.theme[t][r];if(e){const n=e,o=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return i&&h.Z.error(i(o),`Invalid value "${o}" for prop "${r}" for component "${t}" in theme.`),o}};var o;return n}function g(){return{colors:{background:"#ffffff",primary:"#000000",text:"#636363",heading:"#303030","color-100":"#f1f1f1","color-300":"#d7d7d7","color-700":"#9e9e9e","color-800":"#636363","color-900":"#303030"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:void 0,size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{textColor:"@colors.text",fontFamily:"inherit",size:0},heading:{textColor:"@colors.heading",fontFamily:"inherit",size:2},choice:{selectedColor:void 0},stepper:{color:'@colors["color-100"]',textColor:'@colors["color-900"]'},resolve:m,getPath:v}}function x(t,e,n,o){s()(t,e,n),s()(t,r()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=m,t.getPath=v}var y={inject:{parentTheme:{default:g(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return x(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t}=this;return{color:t["color-800"],"--color-background":t.background,"--color-100":t["color-100"],"--color-300":t["color-300"],"--color-700":t["color-700"],"--color-800":t["color-800"],"--color-900":t["color-900"],"--color-elevation":t["color-elevation"]}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}},$=(0,n(1900).Z)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:t.styles},[t._t("default")],2)}),[],!1,null,null,null).exports},2416:function(t,e){"use strict";const n=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],o={warn(t,e){t||console.warn(...n,e)},error(t,e){if(!t)throw console.error(...n,e),new Error(`[@square/maker] ${e}`)}};e.Z=o},6475:function(t,e,n){"use strict";var o=n(771),r=n.n(o);e.Z=function(t,e){if(!e||r().contrast(t,e)<4.5){const e=.32,n=t.luminance()>e;return r()(n?"#000":"#fff")}return e}},2706:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.DemoBox_X4OKR {\n\tmargin: 16px;\n}\n\n",""]),o.locals={DemoBox:"DemoBox_X4OKR"},t.exports=o},9832:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},7962:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.tippy-box {\n\tfont-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n\t-webkit-user-select: none;\n\t        user-select: none;\n}\n\n",""]),t.exports=o},248:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.icon[data-v-3ef25674] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},8403:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var o=n(2220),r=n(9893),i=n.n(r),s=n(8649),l=n.n(s),a=n(7016),c=n.n(a),u=n(2603),d=(n(6598),{props:{tooltip:{type:void 0,required:!0}},data:()=>({boundingClientRect:void 0}),computed:{dimensions(){if(!this.boundingClientRect)return"";const t={maximumFractionDigits:1};return`${this.boundingClientRect.width.toLocaleString(void 0,t)}px x ${this.boundingClientRect.height.toLocaleString(void 0,t)}px`}},mounted(){(0,u.ZP)(this.$el,{content:this.$refs.tooltip}),this.boundingClientRect=this.$el.children[0].getBoundingClientRect()}}),f=(n(5459),n(8644)),p=n.n(f),h=n(1900);var m=(0,h.Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.DemoBox},[t._t("default"),t._v(" "),n("div",{ref:"tooltip"},[t._l(t.tooltip,(function(e,o){return n("div",{key:o},[t._v("\n\t\t\t"+t._s(o)+": "+t._s(e)+"\n\t\t")])})),t._v(" "),n("div",[t._v("\n\t\t\tDimensions: "+t._s(t.dimensions)+"\n\t\t")])],2)],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var v={components:{Combinations:{props:{component:{type:void 0},options:{type:void 0,required:!0}},computed:{permutations(){return l()(this.options)}},render(t){const{component:e}=this;return t("div",this.permutations.map((n=>{const o=(t=>{const e={};for(const n in t)c()(t,n)&&!n.startsWith("$")&&(e[n]=t[n]);return e})(n),r=((t,e)=>{const n=[];for(const o in e)c()(e,o)&&o.startsWith("$slots.")&&n.push(t("template",{slot:o.replace("$slots.","")},[e[o]]));return n})(t,n);return t(m,{props:{tooltip:o}},[t(e,{attrs:{...o}},r)])})))}},MButton:o.G},data(){const t=this.$createElement;return{options:{size:["small","medium","large"],shape:["squared","rounded","pill"],variant:["primary","secondary","tertiary"],align:["stack","center","space-between"],disabled:[!1,!0],fullWidth:[!1,!0],"$slots.default":[`Really long text${" long".repeat(30)}`,[t(i(),{class:"icon"}),`Really long text${" long".repeat(30)}`]],"$slots.information":["","Information label"]}}}},_=(n(2636),(0,h.Z)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("combinations",{attrs:{component:t.$options.components.MButton,options:t.options}})}),[],!1,null,"3ef25674",null).exports)},8644:function(t,e,n){var o=n(2706);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("df4bc024",o,!0,{})},7531:function(t,e,n){var o=n(9832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7ac45ae2",o,!0,{})},5459:function(t,e,n){var o=n(7962);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("44186eb6",o,!0,{})},2636:function(t,e,n){var o=n(248);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7e45bd8c",o,!0,{})}}]);