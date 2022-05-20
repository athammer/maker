(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1793],{19892:(n,d,o)=>{"use strict";o.d(d,{o:()=>i});var a=o(30648);const t={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{shape:{type:String,default:void 0,validator:n=>["squared","rounded","pill"].includes(n)}},computed:{...(0,a.C9)("card",["shape"])}};var r=o(38321),e=o.n(r);const i=(0,o(51900).Z)(t,(function(){var n=this,d=n.$createElement;return(n._self._c||d)("div",n._g(n._b({class:[n.$s.Card,n.$s["shape_"+n.resolvedShape]]},"div",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,(function(n){this.$s=e().locals||e()}),null,null).exports},30648:(n,d,o)=>{"use strict";o.d(d,{qo:()=>_,YH:()=>i,uH:()=>k,C9:()=>y});var a=o(85066),t=o.n(a),r=o(54299),e=o.n(r);const i=Symbol("ThemeKey");var l=o(20643),s=o.n(l),m=o(92810),c=o.n(m),b=o(75692),p=o.n(b),v=o(32416);function h(n){return p()(n)&&n.startsWith("@")?this.resolve(this.getPath(n)):n}function f(n){if(!p()(n))throw new Error("cannot resolve pointer ".concat(n," it is not a string"));if(!n.startsWith("@"))throw new Error("cannot resolve pointer ".concat(n," it is missed the @ prefix"));const d=n.slice(1),o=s()(this,d);if(c()(o))throw new Error("invalid pointer ".concat(n," does not point to a field that exists within the theme"));return o}function y(n,d){const o={};for(const t of d)"pattern"===t?o.resolvedPattern=function(){if(!c()(this.pattern))return this.pattern;let d;const o=this.theme[n].pattern;if(c()(o)||(d=o),c()(d))return;const a=this.theme.resolve(d),t=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(t)v.Z.error(t(a),'Invalid value "'.concat(a,'" for prop "pattern" for component "').concat(n,'" in theme.'));else{var r;const d=null===(r=this.theme[n].patterns)||void 0===r?void 0:r[a];v.Z.error(d,'Invalid pattern "'.concat(a,'" for component "').concat(n,'" in theme.'))}return a}:o["resolved".concat((a=t,a[0].toUpperCase()+a.slice(1)))]=function(){if(!c()(this[t]))return this[t];let d;const o=this.theme[n][t];if(c()(o)||(d=o),!c()(this.resolvedPattern)){var a,r;const o=null===(a=this.theme[n].patterns)||void 0===a||null===(r=a[this.resolvedPattern])||void 0===r?void 0:r[t];c()(o)||(d=o)}if(c()(d))return;const e=this.theme.resolve(d),i=this.$vnode.componentOptions.Ctor.extendOptions.props[t].validator;return i&&v.Z.error(i(e),'Invalid value "'.concat(e,'" for prop "').concat(t,'" for component "').concat(n,'" in theme.')),e};var a;return o}function k(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]',patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:h,getPath:f}}function w(n,d,o,a){e()(n,d,o),e()(n,t()(n.profiles,{id:a})),n.colors={...n.colors},n.resolve=h,n.getPath=f}const u={inject:{parentTheme:{default:k(),from:i}},provide(){return{[i]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return w(n,this.parentTheme,this.theme,this.profile),n},computed:{styles(){const{colors:n,fonts:d,shapes:o}=this;return{"--maker-color-neutral-0":n["neutral-0"],"--maker-color-neutral-10":n["neutral-10"],"--maker-color-neutral-20":n["neutral-20"],"--maker-color-neutral-80":n["neutral-80"],"--maker-color-neutral-90":n["neutral-90"],"--maker-color-neutral-100":n["neutral-100"],"--maker-color-primary":n.primary,"--maker-color-background":n.background,"--maker-color-heading":n.heading,"--maker-color-body":n.body,"--maker-color-elevation":n.elevation,"--maker-color-overlay":n.overlay,"--maker-font-heading-font-family":d.heading.fontFamily,"--maker-font-heading-font-weight":d.heading.fontWeight,"--maker-font-body-font-family":d.body.fontFamily,"--maker-font-body-font-weight":d.body.fontWeight,"--maker-font-label-font-family":d.label.fontFamily,"--maker-font-label-font-weight":d.label.fontWeight,"--maker-shape-default-border-radius":o.defaultBorderRadius,"--maker-shape-button-border-radius":o.buttonBorderRadius,"--maker-shape-image-border-radius":o.imageBorderRadius}}},beforeUpdate(){w(this.$data,this.parentTheme,this.theme,this.profile)}};var g=o(35004),x=o.n(g);const _=(0,o(51900).Z)(u,(function(){var n=this,d=n.$createElement;return(n._self._c||d)("div",{class:n.$s.Theme,style:n.styles},[n._t("default")],2)}),[],!1,(function(n){this.$s=x().locals||x()}),null,null).exports},32416:(n,d,o)=>{"use strict";o.d(d,{Z:()=>t});var a=o(14219);const t={warn(n,d,o){n||(0,a.K)(d,o)},error(n,d,o){n||(0,a._)(d,o)}}},14219:(n,d,o)=>{"use strict";o.d(d,{_:()=>r,K:()=>e});const a="object"==typeof process&&"object"==typeof process.env&&!0,t=n=>["%c @square/maker".concat(n),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(n,d)=>{throw console.error(...t(d),n),new Error("".concat((n=>"[@square/maker]".concat(n))(d)," ").concat(n))},e=(n,d)=>{a&&console.warn(...t(d),n)}},88692:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.Card_d7UkO {\n\t--radius-rounded-default: 4px;\n\t--radius-pill-default: 4px;\n\n\tpadding: 16px 24px;\n\tbackground-color: var(--maker-color-background, #fff);\n\tborder: 1px solid var(--maker-color-neutral-20, #eaeaea);\n\tborder-radius: var(--maker-shape-default-border-radius, var(--radius-rounded-default))\n}\n.Card_d7UkO.shape_squared_qTEdr {\n\t\tborder-radius: 0;\n}\n.Card_d7UkO.shape_rounded_OfLgX {\n\t\tborder-radius: var(--radius-rounded-default);\n}\n.Card_d7UkO.shape_pill_eULis {\n\t\tborder-radius: var(--radius-pill-default);\n}\n",""]),a.locals={Card:"Card_d7UkO",shape_squared:"shape_squared_qTEdr",shape_rounded:"shape_rounded_OfLgX",shape_pill:"shape_pill_eULis"},n.exports=a},35820:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),a.locals={Theme:"Theme_rI2oH"},n.exports=a},92912:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.spaceout > *[data-v-1e02c0ae] {\n\tmargin-bottom: 16px;\n}\n.spaceout > *[data-v-1e02c0ae]:last-child {\n\tmargin-bottom: 0;\n}\n.container[data-v-1e02c0ae] {\n\twidth: 300px;\n}\n",""]),n.exports=a},89822:(n,d,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-d34173d6] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-d34173d6] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-d34173d6]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-d34173d6],\n.markdown-body h2 .octicon-link[data-v-d34173d6],\n.markdown-body h3 .octicon-link[data-v-d34173d6],\n.markdown-body h4 .octicon-link[data-v-d34173d6],\n.markdown-body h5 .octicon-link[data-v-d34173d6],\n.markdown-body h6 .octicon-link[data-v-d34173d6] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-d34173d6],\n.markdown-body h2:hover .anchor[data-v-d34173d6],\n.markdown-body h3:hover .anchor[data-v-d34173d6],\n.markdown-body h4:hover .anchor[data-v-d34173d6],\n.markdown-body h5:hover .anchor[data-v-d34173d6],\n.markdown-body h6:hover .anchor[data-v-d34173d6] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-d34173d6],\n.markdown-body h2:hover .anchor .octicon-link[data-v-d34173d6],\n.markdown-body h3:hover .anchor .octicon-link[data-v-d34173d6],\n.markdown-body h4:hover .anchor .octicon-link[data-v-d34173d6],\n.markdown-body h5:hover .anchor .octicon-link[data-v-d34173d6],\n.markdown-body h6:hover .anchor .octicon-link[data-v-d34173d6] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-d34173d6]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-d34173d6]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-d34173d6]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-d34173d6]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-d34173d6]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-d34173d6]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-d34173d6] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-d34173d6] {\n  display: block;\n}\n.markdown-body summary[data-v-d34173d6] {\n  display: list-item;\n}\n.markdown-body a[data-v-d34173d6] {\n  background-color: initial;\n}\n.markdown-body a[data-v-d34173d6]:active,\n.markdown-body a[data-v-d34173d6]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-d34173d6] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-d34173d6] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-d34173d6] {\n  border-style: none;\n}\n.markdown-body code[data-v-d34173d6],\n.markdown-body kbd[data-v-d34173d6],\n.markdown-body pre[data-v-d34173d6] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-d34173d6] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-d34173d6] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-d34173d6] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-d34173d6] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-d34173d6] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-d34173d6] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-d34173d6] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-d34173d6]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-d34173d6] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-d34173d6] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-d34173d6]:after,\n.markdown-body hr[data-v-d34173d6]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-d34173d6]:after {\n  clear: both;\n}\n.markdown-body table[data-v-d34173d6] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-d34173d6],\n.markdown-body th[data-v-d34173d6] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-d34173d6] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-d34173d6] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-d34173d6],\n.markdown-body h2[data-v-d34173d6],\n.markdown-body h3[data-v-d34173d6],\n.markdown-body h4[data-v-d34173d6],\n.markdown-body h5[data-v-d34173d6],\n.markdown-body h6[data-v-d34173d6] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-d34173d6] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-d34173d6],\n.markdown-body h2[data-v-d34173d6] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-d34173d6] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-d34173d6] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-d34173d6],\n.markdown-body h4[data-v-d34173d6] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-d34173d6] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-d34173d6] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-d34173d6],\n.markdown-body h6[data-v-d34173d6] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-d34173d6] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-d34173d6] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-d34173d6] {\n  margin: 0;\n}\n.markdown-body ol[data-v-d34173d6],\n.markdown-body ul[data-v-d34173d6] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-d34173d6],\n.markdown-body ul ol[data-v-d34173d6] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-d34173d6],\n.markdown-body ol ul ol[data-v-d34173d6],\n.markdown-body ul ol ol[data-v-d34173d6],\n.markdown-body ul ul ol[data-v-d34173d6] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-d34173d6] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-d34173d6],\n.markdown-body pre[data-v-d34173d6] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-d34173d6] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-d34173d6]::-webkit-inner-spin-button,\n.markdown-body input[data-v-d34173d6]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-d34173d6] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-d34173d6] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-d34173d6] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-d34173d6] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-d34173d6] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-d34173d6] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-d34173d6] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-d34173d6] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-d34173d6] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-d34173d6] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-d34173d6] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-d34173d6] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-d34173d6] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-d34173d6] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-d34173d6] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-d34173d6],\n.markdown-body .px-3[data-v-d34173d6] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-d34173d6] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-d34173d6] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-d34173d6] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-d34173d6] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-d34173d6] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-d34173d6] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-d34173d6] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-d34173d6] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-d34173d6],\n.markdown-body .pl-s .pl-v[data-v-d34173d6] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-d34173d6],\n.markdown-body .pl-en[data-v-d34173d6] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-d34173d6],\n.markdown-body .pl-smi[data-v-d34173d6] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-d34173d6] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-d34173d6] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-d34173d6],\n.markdown-body .pl-s[data-v-d34173d6],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-d34173d6],\n.markdown-body .pl-sr[data-v-d34173d6],\n.markdown-body .pl-sr .pl-cce[data-v-d34173d6],\n.markdown-body .pl-sr .pl-sra[data-v-d34173d6],\n.markdown-body .pl-sr .pl-sre[data-v-d34173d6] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-d34173d6],\n.markdown-body .pl-v[data-v-d34173d6] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-d34173d6] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-d34173d6] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-d34173d6] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-d34173d6]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-d34173d6] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-d34173d6] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-d34173d6],\n.markdown-body .pl-mh .pl-en[data-v-d34173d6],\n.markdown-body .pl-ms[data-v-d34173d6] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-d34173d6] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-d34173d6] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-d34173d6] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-d34173d6] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-d34173d6] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-d34173d6] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-d34173d6] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-d34173d6] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-d34173d6] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-d34173d6] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-d34173d6] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-d34173d6] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-d34173d6] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-d34173d6] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-d34173d6] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-d34173d6] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-d34173d6] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-d34173d6] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-d34173d6] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-d34173d6] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-d34173d6] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-d34173d6] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-d34173d6] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-d34173d6] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-d34173d6] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-d34173d6] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-d34173d6] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-d34173d6] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-d34173d6] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-d34173d6] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-d34173d6]:after,\n.markdown-body[data-v-d34173d6]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-d34173d6]:after {\n  clear: both;\n}\n.markdown-body[data-v-d34173d6]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-d34173d6]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-d34173d6]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-d34173d6],\n.markdown-body details[data-v-d34173d6],\n.markdown-body dl[data-v-d34173d6],\n.markdown-body ol[data-v-d34173d6],\n.markdown-body p[data-v-d34173d6],\n.markdown-body pre[data-v-d34173d6],\n.markdown-body table[data-v-d34173d6],\n.markdown-body ul[data-v-d34173d6] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-d34173d6] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-d34173d6] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-d34173d6]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-d34173d6]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-d34173d6],\n.markdown-body h2[data-v-d34173d6],\n.markdown-body h3[data-v-d34173d6],\n.markdown-body h4[data-v-d34173d6],\n.markdown-body h5[data-v-d34173d6],\n.markdown-body h6[data-v-d34173d6] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-d34173d6] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-d34173d6],\n.markdown-body h2[data-v-d34173d6] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-d34173d6] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-d34173d6] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-d34173d6] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-d34173d6] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-d34173d6] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-d34173d6],\n.markdown-body ul[data-v-d34173d6] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-d34173d6],\n.markdown-body ol ul[data-v-d34173d6],\n.markdown-body ul ol[data-v-d34173d6],\n.markdown-body ul ul[data-v-d34173d6] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-d34173d6] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-d34173d6] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-d34173d6] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-d34173d6] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-d34173d6] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-d34173d6] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-d34173d6] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-d34173d6] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-d34173d6],\n.markdown-body table th[data-v-d34173d6] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-d34173d6] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-d34173d6]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-d34173d6] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-d34173d6] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-d34173d6] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-d34173d6] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-d34173d6] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-d34173d6] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-d34173d6] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-d34173d6] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-d34173d6],\n.markdown-body pre[data-v-d34173d6] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-d34173d6] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-d34173d6] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-d34173d6]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-d34173d6] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-d34173d6] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-d34173d6] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-d34173d6]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-d34173d6]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-d34173d6] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-d34173d6] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-d34173d6],\n.markdown-body .pl-token[data-v-d34173d6]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-d34173d6] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-d34173d6] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-d34173d6] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-d34173d6] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-d34173d6] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-d34173d6] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-d34173d6] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-d34173d6] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-d34173d6] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-d34173d6] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-d34173d6] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-d34173d6] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-d34173d6] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-d34173d6] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-d34173d6] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},31793:(n,d,o)=>{"use strict";o.r(d),o.d(d,{default:()=>l});const a={components:{MCard:o(19892).o}};o(26614);var t=o(51900);const r=(0,t.Z)(a,(function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("div",{staticClass:"spaceout"},[o("m-card",[n._v("\n\t\there is my card content\n\t")]),n._v(" "),o("div",{staticClass:"container"},[o("m-card",[n._v("\n\t\t\tthis is my card inside of a 300px wide container.\n\t\t\tthe card fits the width of the container, but there is no padding on the outside.\n\t\t")])],1),n._v(" "),o("div",{staticStyle:{width:"400px"}},[o("m-card",[n._v("\n\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t")])],1)],1)}),[],!1,null,"1e02c0ae",null).exports;var e=o(415);const i={components:{Demo0:r,DemoCollapse:e.DemoCollapse,SrcFile:e.SrcFile}};o(24171);const l=(0,t.Z)(i,(function(){var n=this,d=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("shape")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[o("code",[n._v("squared")]),n._v(", "),o("code",[n._v("rounded")]),n._v(", "),o("code",[n._v("pill")])]),n._v(" "),o("td",[n._v("card shape")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("card content")])])])])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,d=n.$createElement,o=n._self._c||d;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Card")]),n._v(" "),o("p",[n._v("Use Card to provide a stylized container of information.")]),n._v(" "),o("h2",[n._v("Examples")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div class="spaceout">\n\t\t<m-card>\n\t\t\there is my card content\n\t\t</m-card>\n\t\t<div class="container">\n\t\t\t<m-card>\n\t\t\t\tthis is my card inside of a 300px wide container.\n\t\t\t\tthe card fits the width of the container, but there is no padding on the outside.\n\t\t\t</m-card>\n\t\t</div>\n\t\t<div style="width:400px;">\n\t\t\t<m-card>\n\t\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t\t</m-card>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MCard } from \'@square/maker/components/Card\';\n\nexport default {\n\tcomponents: {\n\t\tMCard,\n\t},\n};\n<\/script>\n<style scoped>\n.spaceout > * {\n\tmargin-bottom: 16px;\n}\n.spaceout > *:last-child {\n\tmargin-bottom: 0;\n}\n.container {\n\twidth: 300px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(3)],1)}],!1,null,"d34173d6",null).exports},38321:(n,d,o)=>{var a=o(88692);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("1fddcba8",a,!0,{})},35004:(n,d,o)=>{var a=o(35820);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("12fe2849",a,!0,{})},26614:(n,d,o)=>{var a=o(92912);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("1a353e85",a,!0,{})},24171:(n,d,o)=>{var a=o(89822);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("eb163338",a,!0,{})}}]);