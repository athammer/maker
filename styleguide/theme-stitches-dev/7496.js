(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7496],{70990:(n,a,o)=>{"use strict";o.d(a,{H:()=>i});var d=o(2851);const t={inject:{theme:{default:(0,d.uH)(),from:d.YH}},inheritAttrs:!1,props:{element:{type:String,default:"p",validator:n=>["p","span","div","li"].includes(n)},size:{type:Number,default:void 0,validator:n=>n>=-2&&n<=7},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:n=>n>=100&&n<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:n=>!o.g.CSS||o.g.CSS.supports("color",n)},fontStyle:{type:String,default:"inherit",validator:n=>["inherit","normal","italic"].includes(n)},textTransform:{type:String,default:"inherit",validator:n=>["inherit","none","uppercase"].includes(n)},textAlign:{type:String,default:"inherit",validator:n=>["inherit","left","right","center"].includes(n)}},computed:{sizeClass(){return this.size>=0?"maker-step-".concat(this.size.toString()):"maker-step-minus".concat(this.size)},inlineStyles(){return{fontFamily:this.fontFamily,fontWeight:this.fontWeight,color:this.color,fontSize:this.fontSize,lineHeight:this.lineHeight}}},render(n){const{$s:a,sizeClass:o,inlineStyles:d,fontStyle:t,textTransform:e,textAlign:r}=this,i=this.$slots.default;return n(this.element||"p",{class:[a.Paragraph,o,{[a["fontstyle_".concat(t)]]:"inherit"!==t,[a["texttransform_".concat(e)]]:"inherit"!==e,[a["textalign_".concat(r)]]:"inherit"!==r}],attrs:this.$attrs,style:d,on:this.$listeners},i)}};var e=o(7493),r=o.n(e);const i=(0,o(51900).Z)(t,undefined,undefined,!1,(function(n){this.$s=r().locals||r()}),null,null).exports},2851:(n,a,o)=>{"use strict";o.d(a,{qo:()=>z,YH:()=>l,uH:()=>w,C9:()=>k});var d=o(85066),t=o.n(d),e=o(54299),r=o.n(e),i=o(67839);const l=Symbol("ThemeKey");var m=o(20643),v=o.n(m),b=o(92810),s=o.n(b),c=o(75692),p=o.n(c),h=o(32416);function y(n){return p()(n)&&n.startsWith("@")?this.getPath(n):n}function f(n){if(!p()(n))throw new Error("cannot resolve pointer ".concat(n," it is not a string"));if(!n.startsWith("@"))throw new Error("cannot resolve pointer ".concat(n," it is missed the @ prefix"));const a=n.slice(1),o=v()(this,a);if(s()(o))throw new Error("invalid pointer ".concat(n," does not point to a field that exists within the theme"));return o}function k(n,a){const o={};for(const t of a)o["resolved".concat((d=t,d[0].toUpperCase()+d.slice(1)))]=function(){if(!s()(this[t]))return this[t];const a=this.theme[n][t];if(a){const o=a,d=this.theme.resolve(o),e=this.$vnode.componentOptions.Ctor.extendOptions.props[t].validator;return e&&h.Z.error(e(d),'Invalid value "'.concat(d,'" for prop "').concat(t,'" for component "').concat(n,'" in theme.')),d}};var d;return o}function w(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:y,getPath:f}}function g(n,a,o,d){r()(n,a,o),r()(n,t()(n.profiles,{id:d})),n.colors={...n.colors},n.resolve=y,n.getPath=f}const _={inject:{parentTheme:{default:w(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return g(n,this.parentTheme,this.theme,this.profile),n},beforeUpdate(){g(this.$data,this.parentTheme,this.theme,this.profile),this.applyTheme()},beforeMount(){this.applyTheme()},methods:{applyTheme(){const{theme:n}=(0,i.Th)({theme:this.theme,prefix:"maker"});this.defaultTheme=n}},render(n){const{$s:a}=this,o=this.$slots.default;return n("div",{class:[a.Theme],attrs:this.$attrs,on:this.$listeners},o)}};var u=o(35004),x=o.n(u);const z=(0,o(51900).Z)(_,undefined,undefined,!1,(function(n){this.$s=x().locals||x()}),null,null).exports},32416:(n,a,o)=>{"use strict";o.d(a,{Z:()=>t});var d=o(14219);const t={warn(n,a,o){n||(0,d.K)(a,o)},error(n,a,o){n||(0,d._)(a,o)}}},14219:(n,a,o)=>{"use strict";o.d(a,{_:()=>e,K:()=>r});const d="object"==typeof process&&"object"==typeof process.env&&!0,t=n=>["%c @square/maker".concat(n),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],e=(n,a)=>{throw console.error(...t(a),n),new Error("".concat((n=>"[@square/maker]".concat(n))(a)," ").concat(n))},r=(n,a)=>{d&&console.warn(...t(a),n)}},62716:(n,a,o)=>{var d=o(77705)((function(n){return n[1]}));d.push([n.id,"\n.fontstyle_normal_iP1T1 {\n\tfont-style: normal;\n}\n.fontstyle_italic_SXlyN {\n\tfont-style: italic;\n}\n.texttransform_none_Oy5pc {\n\ttext-transform: none;\n}\n.texttransform_uppercase_bTyzJ {\n\ttext-transform: uppercase;\n}\n.textalign_left_Ijj1T {\n\ttext-align: left;\n}\n.textalign_right__rrDl {\n\ttext-align: right;\n}\n.textalign_center_c6Xty {\n\ttext-align: center;\n}\n\n",""]),d.locals={fontstyle_normal:"fontstyle_normal_iP1T1",fontstyle_italic:"fontstyle_italic_SXlyN",texttransform_none:"texttransform_none_Oy5pc",texttransform_uppercase:"texttransform_uppercase_bTyzJ",textalign_left:"textalign_left_Ijj1T",textalign_right:"textalign_right__rrDl",textalign_center:"textalign_center_c6Xty"},n.exports=d},35820:(n,a,o)=>{var d=o(77705)((function(n){return n[1]}));d.push([n.id,"\n:root {\n\t--theme-font-weight: var(--maker-text-fontWeight, normal);\n\t--theme-font-size: calc(var(--maker-fonts-baseSize, 16) * 1px);\n\t--theme-font-family: var(--maker-text-fontFamily, --system-font);\n}\n.Theme_rI2oH {\n\tcolor: var(--maker-colors-text, #000);\n\tfont-weight: var(--theme-font-weight);\n\tfont-size: var(--theme-font-size);\n\tfont-family: var(--theme-font-family);\n\tbackground-color: var(--maker-colors-background, #fff);\n}\n",""]),d.locals={Theme:"Theme_rI2oH"},n.exports=d},82630:(n,a,o)=>{var d=o(77705)((function(n){return n[1]}));d.push([n.id,'\n.markdown-body .octicon[data-v-054d05a7] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-054d05a7] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-054d05a7]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-054d05a7],\n.markdown-body h2 .octicon-link[data-v-054d05a7],\n.markdown-body h3 .octicon-link[data-v-054d05a7],\n.markdown-body h4 .octicon-link[data-v-054d05a7],\n.markdown-body h5 .octicon-link[data-v-054d05a7],\n.markdown-body h6 .octicon-link[data-v-054d05a7] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-054d05a7],\n.markdown-body h2:hover .anchor[data-v-054d05a7],\n.markdown-body h3:hover .anchor[data-v-054d05a7],\n.markdown-body h4:hover .anchor[data-v-054d05a7],\n.markdown-body h5:hover .anchor[data-v-054d05a7],\n.markdown-body h6:hover .anchor[data-v-054d05a7] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-054d05a7],\n.markdown-body h2:hover .anchor .octicon-link[data-v-054d05a7],\n.markdown-body h3:hover .anchor .octicon-link[data-v-054d05a7],\n.markdown-body h4:hover .anchor .octicon-link[data-v-054d05a7],\n.markdown-body h5:hover .anchor .octicon-link[data-v-054d05a7],\n.markdown-body h6:hover .anchor .octicon-link[data-v-054d05a7] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-054d05a7]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-054d05a7]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-054d05a7]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-054d05a7]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-054d05a7]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-054d05a7]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-054d05a7] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-054d05a7] {\n  display: block;\n}\n.markdown-body summary[data-v-054d05a7] {\n  display: list-item;\n}\n.markdown-body a[data-v-054d05a7] {\n  background-color: initial;\n}\n.markdown-body a[data-v-054d05a7]:active,\n.markdown-body a[data-v-054d05a7]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-054d05a7] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-054d05a7] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-054d05a7] {\n  border-style: none;\n}\n.markdown-body code[data-v-054d05a7],\n.markdown-body kbd[data-v-054d05a7],\n.markdown-body pre[data-v-054d05a7] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-054d05a7] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-054d05a7] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-054d05a7] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-054d05a7] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-054d05a7] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-054d05a7] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-054d05a7] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-054d05a7]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-054d05a7] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-054d05a7] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-054d05a7]:after,\n.markdown-body hr[data-v-054d05a7]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-054d05a7]:after {\n  clear: both;\n}\n.markdown-body table[data-v-054d05a7] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-054d05a7],\n.markdown-body th[data-v-054d05a7] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-054d05a7] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-054d05a7] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-054d05a7],\n.markdown-body h2[data-v-054d05a7],\n.markdown-body h3[data-v-054d05a7],\n.markdown-body h4[data-v-054d05a7],\n.markdown-body h5[data-v-054d05a7],\n.markdown-body h6[data-v-054d05a7] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-054d05a7] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-054d05a7],\n.markdown-body h2[data-v-054d05a7] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-054d05a7] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-054d05a7] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-054d05a7],\n.markdown-body h4[data-v-054d05a7] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-054d05a7] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-054d05a7] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-054d05a7],\n.markdown-body h6[data-v-054d05a7] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-054d05a7] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-054d05a7] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-054d05a7] {\n  margin: 0;\n}\n.markdown-body ol[data-v-054d05a7],\n.markdown-body ul[data-v-054d05a7] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-054d05a7],\n.markdown-body ul ol[data-v-054d05a7] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-054d05a7],\n.markdown-body ol ul ol[data-v-054d05a7],\n.markdown-body ul ol ol[data-v-054d05a7],\n.markdown-body ul ul ol[data-v-054d05a7] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-054d05a7] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-054d05a7],\n.markdown-body pre[data-v-054d05a7] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-054d05a7] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-054d05a7]::-webkit-inner-spin-button,\n.markdown-body input[data-v-054d05a7]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-054d05a7] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-054d05a7] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-054d05a7] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-054d05a7] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-054d05a7] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-054d05a7] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-054d05a7] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-054d05a7] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-054d05a7] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-054d05a7] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-054d05a7] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-054d05a7] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-054d05a7] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-054d05a7] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-054d05a7] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-054d05a7],\n.markdown-body .px-3[data-v-054d05a7] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-054d05a7] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-054d05a7] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-054d05a7] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-054d05a7] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-054d05a7] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-054d05a7] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-054d05a7] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-054d05a7] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-054d05a7],\n.markdown-body .pl-s .pl-v[data-v-054d05a7] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-054d05a7],\n.markdown-body .pl-en[data-v-054d05a7] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-054d05a7],\n.markdown-body .pl-smi[data-v-054d05a7] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-054d05a7] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-054d05a7] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-054d05a7],\n.markdown-body .pl-s[data-v-054d05a7],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-054d05a7],\n.markdown-body .pl-sr[data-v-054d05a7],\n.markdown-body .pl-sr .pl-cce[data-v-054d05a7],\n.markdown-body .pl-sr .pl-sra[data-v-054d05a7],\n.markdown-body .pl-sr .pl-sre[data-v-054d05a7] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-054d05a7],\n.markdown-body .pl-v[data-v-054d05a7] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-054d05a7] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-054d05a7] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-054d05a7] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-054d05a7]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-054d05a7] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-054d05a7] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-054d05a7],\n.markdown-body .pl-mh .pl-en[data-v-054d05a7],\n.markdown-body .pl-ms[data-v-054d05a7] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-054d05a7] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-054d05a7] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-054d05a7] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-054d05a7] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-054d05a7] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-054d05a7] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-054d05a7] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-054d05a7] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-054d05a7] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-054d05a7] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-054d05a7] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-054d05a7] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-054d05a7] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-054d05a7] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-054d05a7] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-054d05a7] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-054d05a7] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-054d05a7] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-054d05a7] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-054d05a7] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-054d05a7] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-054d05a7] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-054d05a7] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-054d05a7] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-054d05a7] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-054d05a7] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-054d05a7] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-054d05a7] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-054d05a7] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-054d05a7] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-054d05a7]:after,\n.markdown-body[data-v-054d05a7]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-054d05a7]:after {\n  clear: both;\n}\n.markdown-body[data-v-054d05a7]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-054d05a7]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-054d05a7]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-054d05a7],\n.markdown-body details[data-v-054d05a7],\n.markdown-body dl[data-v-054d05a7],\n.markdown-body ol[data-v-054d05a7],\n.markdown-body p[data-v-054d05a7],\n.markdown-body pre[data-v-054d05a7],\n.markdown-body table[data-v-054d05a7],\n.markdown-body ul[data-v-054d05a7] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-054d05a7] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-054d05a7] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-054d05a7]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-054d05a7]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-054d05a7],\n.markdown-body h2[data-v-054d05a7],\n.markdown-body h3[data-v-054d05a7],\n.markdown-body h4[data-v-054d05a7],\n.markdown-body h5[data-v-054d05a7],\n.markdown-body h6[data-v-054d05a7] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-054d05a7] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-054d05a7],\n.markdown-body h2[data-v-054d05a7] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-054d05a7] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-054d05a7] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-054d05a7] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-054d05a7] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-054d05a7] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-054d05a7],\n.markdown-body ul[data-v-054d05a7] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-054d05a7],\n.markdown-body ol ul[data-v-054d05a7],\n.markdown-body ul ol[data-v-054d05a7],\n.markdown-body ul ul[data-v-054d05a7] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-054d05a7] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-054d05a7] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-054d05a7] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-054d05a7] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-054d05a7] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-054d05a7] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-054d05a7] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-054d05a7] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-054d05a7],\n.markdown-body table th[data-v-054d05a7] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-054d05a7] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-054d05a7]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-054d05a7] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-054d05a7] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-054d05a7] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-054d05a7] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-054d05a7] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-054d05a7] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-054d05a7] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-054d05a7] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-054d05a7],\n.markdown-body pre[data-v-054d05a7] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-054d05a7] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-054d05a7] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-054d05a7]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-054d05a7] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-054d05a7] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-054d05a7] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-054d05a7]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-054d05a7]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-054d05a7] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-054d05a7] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-054d05a7],\n.markdown-body .pl-token[data-v-054d05a7]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-054d05a7] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-054d05a7] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-054d05a7] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-054d05a7] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-054d05a7] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-054d05a7] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-054d05a7] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-054d05a7] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-054d05a7] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-054d05a7] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-054d05a7] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-054d05a7] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-054d05a7] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-054d05a7] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-054d05a7] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=d},87496:(n,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>l});const d={components:{MText:o(70990).H}};var t=o(51900);const e=(0,t.Z)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",n._l([1,0,-1,-2],(function(a){return o("m-text",{key:a,attrs:{size:a}},[n._v("\n\t\tText (Size "+n._s(a)+")\n\t")])})),1)}),[],!1,null,null,null).exports;var r=o(415);const i={components:{Demo0:e,DemoCollapse:r.DemoCollapse,SrcFile:r.SrcFile}};o(62844);const l=(0,t.Z)(i,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(3)}),[function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"}},[o("code",[n._v("<p>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("element")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'p'")])]),n._v(" "),o("td",[o("code",[n._v("p")]),n._v(", "),o("code",[n._v("span")]),n._v(", "),o("code",[n._v("div")]),n._v(", "),o("code",[n._v("li")])]),n._v(" "),o("td",[n._v("HTML Element wrapper")])]),n._v(" "),o("tr",[o("td",[n._v("size")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[o("code",[n._v("7")]),n._v(", "),o("code",[n._v("6")]),n._v(", "),o("code",[n._v("5")]),n._v(", "),o("code",[n._v("4")]),n._v(", "),o("code",[n._v("3")]),n._v(", "),o("code",[n._v("2")]),n._v(", "),o("code",[n._v("1")]),n._v(", "),o("code",[n._v("0")]),n._v(", "),o("code",[n._v("-1")]),n._v(", "),o("code",[n._v("-2")])]),n._v(" "),o("td",[n._v("Size of text")])]),n._v(" "),o("tr",[o("td",[n._v("font-family")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Font family")])]),n._v(" "),o("tr",[o("td",[n._v("font-weight")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[o("code",[n._v("100")]),n._v(", "),o("code",[n._v("200")]),n._v(", "),o("code",[n._v("300")]),n._v(", "),o("code",[n._v("400")]),n._v(", "),o("code",[n._v("500")]),n._v(", "),o("code",[n._v("600")]),n._v(", "),o("code",[n._v("700")]),n._v(", "),o("code",[n._v("800")]),n._v(", "),o("code",[n._v("900")])]),n._v(" "),o("td",[n._v("Font weight with standard numeric keyword values")])]),n._v(" "),o("tr",[o("td",[n._v("font-size")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Font size, as a valid CSS value. This overrides the ‘size’ prop, and disables type scaling.")])]),n._v(" "),o("tr",[o("td",[n._v("line-height")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Line Height, as a valid CSS value. This overrides the internally calculated line-height.")])]),n._v(" "),o("tr",[o("td",[n._v("color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Color")])]),n._v(" "),o("tr",[o("td",[n._v("font-style")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'inherit'")])]),n._v(" "),o("td",[o("code",[n._v("inherit")]),n._v(", "),o("code",[n._v("normal")]),n._v(", "),o("code",[n._v("italic")])]),n._v(" "),o("td",[n._v("font style")])]),n._v(" "),o("tr",[o("td",[n._v("text-transform")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'inherit'")])]),n._v(" "),o("td",[o("code",[n._v("inherit")]),n._v(", "),o("code",[n._v("none")]),n._v(", "),o("code",[n._v("uppercase")])]),n._v(" "),o("td",[n._v("text transform")])]),n._v(" "),o("tr",[o("td",[n._v("text-align")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'inherit'")])]),n._v(" "),o("td",[o("code",[n._v("inherit")]),n._v(", "),o("code",[n._v("left")]),n._v(", "),o("code",[n._v("right")]),n._v(", "),o("code",[n._v("center")])]),n._v(" "),o("td",[n._v("text align")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("text content")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Text")]),n._v(" "),o("p",[n._v("Use the Text component for regular body text. There are 10 text sizes: -2 to 7. The font family, font weight, and text color are customizable.")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-text\n\t\t\tv-for="size in [1, 0, -1, -2]"\n\t\t\t:key="size"\n\t\t\t:size="size"\n\t\t>\n\t\t\tText (Size {{ size }})\n\t\t</m-text>\n\t</div>\n</template>\n\n<script>\nimport { MText } from \'@square/maker/components/Text\';\n\nexport default {\n\tcomponents: {\n\t\tMText,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(2)],1)}],!1,null,"054d05a7",null).exports},7493:(n,a,o)=>{var d=o(62716);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[n.id,d,""]]),d.locals&&(n.exports=d.locals);(0,o(54023).Z)("8cb0142e",d,!0,{})},35004:(n,a,o)=>{var d=o(35820);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[n.id,d,""]]),d.locals&&(n.exports=d.locals);(0,o(54023).Z)("12fe2849",d,!0,{})},62844:(n,a,o)=>{var d=o(82630);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[n.id,d,""]]),d.locals&&(n.exports=d.locals);(0,o(54023).Z)("94009d92",d,!0,{})}}]);