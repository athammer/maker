(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[713],{2606:(o,r,t)=>{"use strict";t.d(r,{qo:()=>w,YH:()=>c,uH:()=>u(),C9:()=>f.resolveThemeableProps});var e=t(7727),l=t.n(e),n=t(4299),i=t.n(n),a=t(4219);const c=Symbol("ThemeKey");var s=t(3540),u=t.n(s),f=t(1425),d=t(2857),h=t.n(d);function p(o){var r;return null==o||null===(r=o[0])||void 0===r?void 0:r.id}function m(o){const r={};for(const t of o)r[t.id]=t;return r}function g(o,r){const t=m(o),e=m(r);return function(o){const r=[];for(const[t,e]of Object.entries(o))e.id=t,r.push(e);return r}(i()(t,e))}function b(o,r){return function(o){return o&&o.render}(r)?r:p(o)&&p(r)?g(o,r):void 0}function x(o,r,t,e){if(l()(o,r,t,b),e){const r=o.profiles[e];if(r)l()(o,r,b);else{const r=Object.keys(o.profiles);(0,a.K)("profile ".concat(e," doesn't exist within theme, only found: ").concat(r),"Theme")}}o.resolve=f.resolve,o.getPath=f.getPath}const v={inject:{parentTheme:{default:u()(),from:c}},provide(){return{[c]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:void 0}},data(){const o={};return x(o,this.parentTheme,this.theme,this.profile),o},computed:{styles(){return h()(this)}},watch:{parentTheme:{handler(){x(this.$data,this.parentTheme,this.theme,this.profile)},deep:!0,immediate:!0}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}};var y=t(5004),C=t.n(y);const w=(0,t(1900).Z)(v,(function(){var o=this,r=o.$createElement;return(o._self._c||r)("div",{class:o.$s.Theme,style:o.styles},[o._t("default")],2)}),[],!1,(function(o){this.$s=C().locals||C()}),null,null).exports},7060:(o,r,t)=>{"use strict";t.d(r,{Z:()=>e});const e=function(o){return function(r){return!t.g.CSS||t.g.CSS.supports(o,r)}}},4219:(o,r,t)=>{"use strict";t.d(r,{_:()=>l,K:()=>n});const e=o=>["%c @square/maker/M".concat(o),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],l=(o,r)=>{throw console.error(...e(r),o),new Error("".concat((o=>"[@square/maker/M".concat(o,"]"))(r)," ").concat(o))},n=(o,r)=>{console.warn(...e(r),o)}},5820:(o,r,t)=>{var e=t(7705)((function(o){return o[1]}));e.push([o.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body, #000000);\n\tfont-weight: var(--maker-font-body-font-weight, 400);\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tbackground-color: var(--maker-color-background, #ffffff);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},o.exports=e},5004:(o,r,t)=>{var e=t(5820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);(0,t(4023).Z)("12fe2849",e,!0,{})},5681:o=>{o.exports=function(){return{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",body:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.32)",primary:"#006aff",contextualPrimary:{fill:"#006aff",onFill:"#ffffff",subtle:"#eff2f5",text:"#1c54c7"},critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}}}},3819:o=>{o.exports=function(){return{button:{size:"medium",variant:"fill",shape:void 0,textPattern:"buttonLabel",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",colorHover:void 0,textColorHover:void 0,borderRadius:void 0,borderRadiusHover:void 0,borderWidth:void 0,borderWidthHover:void 0,borderColor:void 0,borderColorHover:void 0,boxShadow:void 0,boxShadowHover:void 0,pattern:void 0,patterns:{primaryFill:{color:"@colors.contextualPrimary.fill",textColor:"@colors.contextualPrimary.onFill"},errorFill:{color:"@colors.critical.fill",textColor:"@colors.critical.onFill"},successFill:{color:"@colors.success.fill",textColor:"@colors.success.onFill"},warningFill:{color:"@colors.warning.fill",textColor:"@colors.warning.onFill"},infoFill:{color:'@colors["neutral-90"]',textColor:'@colors["neutral-10"]'},primaryOutline:{variant:"outline",color:"@colors.contextualPrimary.text"},errorOutline:{variant:"outline",color:"@colors.critical.text"},successOutline:{variant:"outline",color:"@colors.success.text"},warningOutline:{variant:"outline",color:"@colors.warning.text"},infoOutline:{variant:"outline",color:'@colors["neutral-90"]'},primarySubtle:{textColor:"@colors.contextualPrimary.text",color:"@colors.contextualPrimary.subtle"},errorSubtle:{textColor:"@colors.critical.text",color:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",color:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",color:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',color:'@colors["neutral-10"]'},primaryGhost:{variant:"ghost",color:"@colors.contextualPrimary.text"},errorGhost:{variant:"ghost",color:"@colors.critical.text"},successGhost:{variant:"ghost",color:"@colors.success.text"},warningGhost:{variant:"ghost",color:"@colors.warning.text"},infoGhost:{variant:"ghost",color:'@colors["neutral-90"]'}}},link:{color:"@colors.primary"},textbutton:{color:"@colors.primary",size:"medium",pattern:void 0,patterns:{primary:{color:"@colors.contextualPrimary.text"},error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",pattern:"paragraph",fontSize:void 0,textDecoration:void 0,patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"},buttonLabel:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight",fontSize:"inherit"}}},choice:{selectedColor:"@colors.primary"},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:void 0},notice:{type:"info",iconName:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]',pattern:"info",patterns:{primary:{iconColor:"@colors.contextualPrimary.fill",color:"@colors.contextualPrimary.text",bgColor:"@colors.contextualPrimary.subtle"},error:{type:"error",iconName:"critical",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconName:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconName:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',pattern:"info",patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},primaryOutline:{textColor:"@colors.contextualPrimary.text",bgColor:"transparent"},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},primarySubtle:{textColor:"@colors.contextualPrimary.text",bgColor:"@colors.contextualPrimary.subtle"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},badge:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',pattern:"info",patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{}}},toast:{persistent:!1,dismissAfter:5e3,iconName:"info",showIcon:!1,bgColor:"@colors.background",color:"@colors.body",accentColor:"@colors.body",pattern:"info",patterns:{info:{},success:{iconName:"success",showIcon:!0,accentColor:"@colors.success.fill"},warning:{iconName:"warning",showIcon:!0,accentColor:"@colors.warning.fill"},error:{iconName:"critical",showIcon:!0,accentColor:"@colors.critical.fill"},primary:{accentColor:"@colors.contextualPrimary.fill"}}},starrating:{color:"@colors.warning.fill"},progresscircle:{color:'@colors["neutral-100"]',iconColor:'@colors["neutral-100"]',iconName:void 0,pattern:void 0},progressbar:{color:'@colors["neutral-100"]',size:"medium",shape:void 0,pattern:void 0},modal:{color:"@colors.body",bgColor:"@colors.background"},dialog:{color:"@colors.body",bgColor:"@colors.background"},blade:{color:"@colors.body",bgColor:"@colors.background"},container:{color:void 0,bgColor:void 0},divider:{color:'@colors["neutral-20"]',size:"1px",pattern:void 0,patterns:{"gap-8":{color:'@colors["neutral-10"]',size:"8px"},"gap-16":{color:'@colors["neutral-10"]',size:"16px"}}}}}},8466:o=>{o.exports=function(){return{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}}}},8529:(o,r,t)=>{const e=t(2032).default,l=t(6963).default,n=t(6613).default,i=t(6155).default,a=t(7556).default,c=t(8300).default,s=t(6975).default,u=t(6641).default,f=t(9893).default,d=t(7858).default,h=t(7389).default;o.exports=function(){return{critical:l,warning:e,success:n,info:i,chevronUp:a,chevronDown:c,chevronLeft:s,chevronRight:u,close:f,plus:d,arrowUp:h}}},8196:o=>{o.exports=function(){return{defaultBorderRadius:"4px",cardBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"}}},3540:(o,r,t)=>{const e=t(8529),{resolve:l,getPath:n}=t(1425),i=t(5681),a=t(8466),c=t(8196),s=t(3819);o.exports=function(){return{resolve:l,getPath:n,colors:i(),fonts:a(),icons:e(),shapes:c(),profiles:{},...s()}}},2857:o=>{o.exports=function(o){const{colors:r,fonts:t,shapes:e}=o;return{"--maker-color-neutral-0":r["neutral-0"],"--maker-color-neutral-10":r["neutral-10"],"--maker-color-neutral-20":r["neutral-20"],"--maker-color-neutral-80":r["neutral-80"],"--maker-color-neutral-90":r["neutral-90"],"--maker-color-neutral-100":r["neutral-100"],"--maker-color-primary":r.primary,"--maker-color-background":r.background,"--maker-color-heading":r.heading,"--maker-color-body":r.body,"--maker-color-elevation":r.elevation,"--maker-color-overlay":r.overlay,"--maker-color-critical-fill":r.critical.fill,"--maker-font-heading-font-family":t.heading.fontFamily,"--maker-font-heading-font-weight":t.heading.fontWeight,"--maker-font-body-font-family":t.body.fontFamily,"--maker-font-body-font-weight":t.body.fontWeight,"--maker-font-label-font-family":t.label.fontFamily,"--maker-font-label-font-weight":t.label.fontWeight,"--maker-shape-default-border-radius":e.defaultBorderRadius,"--maker-shape-card-border-radius":e.cardBorderRadius,"--maker-shape-button-border-radius":e.buttonBorderRadius,"--maker-shape-image-border-radius":e.imageBorderRadius,"--maker-shape-thumbnail-border-radius":"".concat((l=e.imageBorderRadius,n=0,i=8,Math.min(Math.max(Number.parseInt(l,10),n),i)),"px")};var l,n,i}},1425:(o,r,t)=>{const{isString:e,isNil:l,get:n}=t(3974);o.exports={getPath:function(o){if(!e(o))throw new Error("cannot resolve pointer ".concat(o," it is not a string"));if(!o.startsWith("@"))throw new Error("cannot resolve pointer ".concat(o," it is missed the @ prefix"));const r=o.slice(1),t=n(this,r);if(l(t))throw new Error("invalid pointer ".concat(o," does not point to a field that exists within the theme"));return t},resolve:function(o){return e(o)&&o.startsWith("@")?this.resolve(this.getPath(o)):o},resolveThemeableProps:function(o,r){const t={};for(const n of r)"pattern"===n?t.resolvedPattern=function(){if(!l(this.pattern))return this.pattern;let r;const t=this.theme[o].pattern;if(l(t)||(r=t),l(r))return;const e=this.theme.resolve(r),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n){if(!n(e))throw new Error('Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(o,'" in theme.'))}else{var i;if(!(null===(i=this.theme[o].patterns)||void 0===i?void 0:i[e]))throw new Error('Invalid pattern "'.concat(e,'" for component "').concat(o,'" in theme.'))}return e}:t["resolved".concat((e=n,e[0].toUpperCase()+e.slice(1)))]=function(){if(!l(this[n]))return this[n];let r;const t=this.theme[o][n];if(l(t)||(r=t),!l(this.resolvedPattern)){var e,i;const t=null===(e=this.theme[o].patterns)||void 0===e||null===(i=e[this.resolvedPattern])||void 0===i?void 0:i[n];l(t)||(r=t)}if(l(r))return;const a=this.theme.resolve(r),c=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;if(c&&!c(a))throw new Error('Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(o,'" in theme.'));return a};var e;return t}}}}]);