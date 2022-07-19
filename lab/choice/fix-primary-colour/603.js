(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[603],{3070:(t,n,e)=>{"use strict";e.d(n,{g:()=>u,c:()=>x});var i=e(9826),a=e(2416),s=e(6475),o=e(6765);const r=Symbol("ChoiceKey"),l={provide(){return{[r]:this}},inject:{theme:{default:(0,i.uH)(),from:i.YH}},model:{prop:"selected",event:"choice:update"},props:{selected:{type:void 0,default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"single-select",validator:t=>["single-select","multi-select"].includes(t)},selectedColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid}},data(){return{currentValue:this.selected,isMultiSelect:"multi-select"===this.mode}},computed:{...(0,i.C9)("choice",["selectedColor"]),contrastColor(){return(0,s.mj)(this.resolvedSelectedColor,"#fff")},disabledContrastColor(){return(0,o.Vi)(this.contrastColor).alpha(.4)},style(){return this.resolvedSelectedColor?{"--selected-background-color":this.resolvedSelectedColor,"--selected-text-color":this.contrastColor,"--selected-disabled-text-color":this.disabledContrastColor}:{}}},watch:{selected(){this.validateProps(),this.currentValue=this.selected},currentValue(t){this.$emit("choice:update",t)}},created(){this.validateProps()},methods:{validateProps(){this.isMultiSelect&&a.Z.error(Array.isArray(this.selected),"The v-model value for a multi-select must be of type Array.")},isSelected(t){return this.isMultiSelect?this.currentValue.includes(t):this.currentValue===t},selectValue(t){if(this.isMultiSelect){const n=this.currentValue.slice();if(n.includes(t)){const e=1;n.splice(n.indexOf(t),e)}else n.push(t);t=n}this.currentValue=t}}};var c=e(7426),d=e.n(c),p=e(1900);const u=(0,p.Z)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Choice,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports;const v={inject:{controlState:r},props:{value:{type:void 0,required:!0},disabled:{type:Boolean,default:!1}},computed:{isSelected(){return this.controlState.isSelected(this.value)},isDisabled(){return this.disabled||this.controlState.disabled}},methods:{selectSelf(){this.controlState.selectValue(this.value)}}};var m=e(6233),h=e.n(m);const x=(0,p.Z)(v,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("button",{class:[n.$s.ChoiceOption,(t={},t[n.$s.selected]=n.isSelected,t)],attrs:{disabled:n.isDisabled},on:{click:n.selectSelf}},[n._t("default")],2)}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports},8327:(t,n,e)=>{"use strict";e.d(n,{j:()=>d});var i=e(6765),a=e(9901),s=e(9826),o=e(2416);const r={components:{MLoading:a.g},inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>(0,i.Vi)(t).isValid()},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,s.C9)("textbutton",["pattern","size","color"]),style(){return{"--color":this.resolvedColor}},isDisabled(){return this.disabled||this.loading}},created(){o.Z.warn(this.$slots.default,"TextButton should be used with a label")}};var l=e(5713),c=e.n(l);const d=(0,e(1900).Z)(r,(function(){var t,n=this,e=n.$createElement,i=n._self._c||e;return i("button",n._g(n._b({class:[n.$s.TextButton,n.$s["size_"+n.resolvedSize],(t={},t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?i("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),i("span",{class:n.$s.MainText},[n._t("default")],2)],1)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},8433:(t,n,e)=>{var i=e(7705)((function(t){return t[1]}));i.push([t.id,"\n.Preview_XhizJ {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, minmax(360px, 1fr));\n\tgrid-gap: 40px;\n\theight: 100%;\n\tmax-height: calc(100vh - 80px);\n\tpadding: 40px;\n\tbackground-color: #f8f8f8;\n\tbox-shadow:\n\t\tinset 0.6px 0.6px 2.2px rgba(0, 0, 0, 0.07),\n\t\tinset 1.3px 1.3px 5.3px rgba(0, 0, 0, 0.05),\n\t\tinset 2.5px 2.5px 10px rgba(0, 0, 0, 0.042),\n\t\tinset 4.5px 4.5px 17.9px rgba(0, 0, 0, 0.035),\n\t\tinset 8.4px 8.4px 33.4px rgba(0, 0, 0, 0.028),\n\t\tinset 20px 20px 80px rgba(0, 0, 0, 0.02);\n}\n.Canvas_TguRI {\n\tposition: relative;\n\theight: calc(100% - 40px);\n\tmax-height: calc(100% - 40px);\n\tpadding: 20px 10px;\n\toverflow: hidden;\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--font-weights-text, normal);\n\tfont-size: var(--font-base-size);\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tbackground-color: var(--maker-color-background);\n\tborder-radius: 30px;\n\tbox-shadow:\n\t\t4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),\n\t\t12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),\n\t\t23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),\n\t\t38px 51px 54px -40px rgba(0, 0, 0, 0.098);\n}\n.Notch_LGvrh {\n\twidth: 40%;\n\theight: 20px;\n\tmargin: -20px auto 0;\n\tbackground-color: black;\n\tborder-radius: 0 0 30px 30px;\n}\n.Page_Rbb5q {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: scroll;\n}\n.Section_wNM99 {\n\tpadding: 2vh 1vw;\n}\n",""]),i.locals={Preview:"Preview_XhizJ",Canvas:"Canvas_TguRI",Notch:"Notch_LGvrh",Page:"Page_Rbb5q",Section:"Section_wNM99"},t.exports=i},7051:(t,n,e)=>{var i=e(7705)((function(t){return t[1]}));i.push([t.id,"\n.Choice__xYdB {\n\t--font-size: 14px;\n\t--line-height: 24px;\n\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-size: var(--font-size);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tline-height: var(--line-height);\n}\n",""]),i.locals={Choice:"Choice__xYdB"},t.exports=i},2452:(t,n,e)=>{var i=e(7705)((function(t){return t[1]}));i.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tDefined in Choice component:\n\t--selected-background-color\n\t--selected-text-color\n\t--selected-disabled-text-color\n*/\n.ChoiceOption_JrUHk {\n\t--button-padding: 12px 24px;\n\t--radius-rounded-default: 4px;\n\n\tflex-shrink: 0;\n\tpadding: var(--button-padding);\n\tcolor: var(--maker-color-neutral-90, #222);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\ttext-align: left;\n\tbackground-color: var(--maker-color-neutral-10, #f2f2f2);\n\tborder: none;\n\tborder-radius: var(--maker-shape-default-border-radius, var(--radius-rounded-default));\n\toutline: none;\n\tbox-shadow: var(--focus-border, 0 0);\n\tcursor: pointer\n}\n.ChoiceOption_JrUHk:not(:last-child) {\n\t\tmargin-right: 8px;\n}\n.ChoiceOption_JrUHk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-10, #fff),\n\t\t\t0 0 0 3px var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));\n}\n.ChoiceOption_JrUHk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.selected_MLoDE {\n\tcolor: var(--selected-text-color, var(--maker-color-neutral-10, #f1f1f1));\n\tbackground-color: var(--selected-background-color, var(--maker-color-neutral-90, #222))\n}\n.selected_MLoDE:disabled {\n\t\tcolor: var(--selected-disabled-text-color, var(--maker-color-neutral-20, #666));\n}\n",""]),i.locals={ChoiceOption:"ChoiceOption_JrUHk",selected:"selected_MLoDE"},t.exports=i},4298:(t,n,e)=>{var i=e(7705)((function(t){return t[1]}));i.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.TextButton__xxoX {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color, var(--maker-color-neutral-90));\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\toutline-color: currentColor;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.TextButton__xxoX.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.TextButton__xxoX.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.TextButton__xxoX.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.TextButton__xxoX:active,\n\t.TextButton__xxoX:focus {\n\t\tbox-shadow: 0 0 0 1px currentColor;\n}\n.TextButton__xxoX:disabled {\n\t\tcursor: initial\n}\n.TextButton__xxoX:disabled > * {\n\t\t\topacity: 0.5;\n}\n.TextButton__xxoX > .Loading_pd2rj {\n\t\topacity: 1;\n}\n.TextButton__xxoX.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color, var(--maker-color-neutral-90));\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1.5;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),i.locals={TextButton:"TextButton__xxoX",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",Loading:"Loading_pd2rj",loading:"loading_bNQgE",MainText:"MainText_qfj5z"},t.exports=i},8900:(t,n,e)=>{var i=e(7705)((function(t){return t[1]}));i.push([t.id,'\n.header {\n\tdisplay: grid;\n\tgrid-template-columns: 40px 3fr 40px;\n\talign-items: center;\n\tjustify-items: center;\n\tmin-height: 44px;\n}\n.logo {\n\tfont-weight: bold;\n\tfont-size: 32px;\n\tfont-family: "Palatino Linotype", Palatino, Palladio, "Century Schoolbook L", Georgia, serif;\n\ttext-align: center;\n}\n.icon {\n\twidth: 24px;\n\theight: 24px;\n}\n.icon-sm {\n\twidth: 16px;\n\theight: 16px;\n}\n.banner {\n\tmin-height: 200px;\n\tbackground-image: url(https://source.unsplash.com/Kwdp-0pok-I/400x250);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n.item,\n.cart-item {\n\tdisplay: flex;\n\tgrid-gap: 20px;\n\tpadding: 20px 0;\n}\n.item-title,\n.item-price,\n.item-description {\n\tmargin-bottom: 16px;\n}\n.item .item-description {\n\tdisplay: -webkit-box;\n\tmargin: 0;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.item-preview {\n\tflex: 0 0 auto;\n\twidth: 96px;\n\theight: 96px;\n\toverflow: hidden;\n\tborder-radius: var(--radii-default, 16px);\n}\n.detail-image {\n\theight: 250px;\n}\n.option {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 44px;\n}\n.cart-item {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgrid-gap: 20px;\n\tjustify-content: space-between;\n\tpadding: 20px 0;\n}\n.cart-item .item-title {\n\tmargin: 0;\n}\n.cart-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 3;\n\tgrid-gap: 30px;\n\talign-content: space-between;\n\theight: 84px;\n}\n.cart-text,\n.cart-controls {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.cart-text {\n\talign-items: center;\n}\n.cart-media {\n\torder: 1;\n\twidth: 84px;\n\theight: 84px;\n\toverflow: hidden;\n\tborder-radius: var(--radii-default, 16px);\n}\n.row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tline-height: 1.5;\n}\n.row .side-label {\n\ttext-align: right;\n}\n\n',""]),t.exports=i},6603:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>$});var i=e(2698),a=e.n(i),s=e(3810),o=e.n(s),r=e(9893),l=e.n(r),c=e(2598),d=e.n(c),p=e(9826),u=e(990),v=e(900),m=e(7363),h=e(2562),x=e(5035),f=e(7341),_=e(1635),g=e(4058),b=e(4293),y=e(8327),C=e(3070),k=e(8667);const w={components:{MenuIcon:a(),ShoppingBagIcon:o(),XIcon:l(),Trash:d(),MTheme:p.qo,MText:u.H,MDivider:v.j,MImage:m.F,MStepper:h.f,MContainer:x.U,MRadio:f.H,MCheckbox:_._,MInput:g.z,MButton:b.G,MTextButton:y.j,MChoice:C.g,MChoiceOption:C.c,MInlineActionBar:k.pE,MActionBarButton:k.n5},data:()=>({categories:["Coffee","Tea","Pastries"],items:[{id:1,name:"Americano",description:"Italian espresso gets the American treatment; hot water fills the cup for a rich alternative to drip coffee.",photo:"https://source.unsplash.com/900x600/?coffee",categories:["Coffee"]},{id:2,name:"Holiday Spice Latte",description:"A returning favorite, our Holiday Spice Latte mingles holiday baking spices like cinnamon, ginger, cloves, and nutmeg with hand-pulled espresso and freshly steamed milk.",photo:"https://source.unsplash.com/900x600/?latte",categories:["Coffee"]},{id:3,name:"Cappuccino",description:"The essence of handcrafting. Our rich espresso is artfully marbled with freshly micro-foamed milk.",photo:"https://source.unsplash.com/900x600/?cappuccino",categories:["Coffee"]}],size:"sm",selected:"choice-1",quantity:1,nestedThemeProfile:"primary-bold"}),methods:{categoryItems(t){return this.items.filter((n=>n.categories.includes(t)))}}};e(3881);var z=e(2797),S=e.n(z);const $=(0,e(1900).Z)(w,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.Preview},[e("div",{class:t.$s.Canvas},[e("div",{class:t.$s.Notch}),t._v(" "),e("div",{class:t.$s.Page},[e("div",{class:t.$s.Section},[e("div",{staticClass:"header"},[e("menu-icon",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"logo"},[t._v("Kafo")]),t._v(" "),e("shopping-bag-icon",{staticClass:"icon"})],1)]),t._v(" "),e("m-theme",{class:t.$s.Section,attrs:{profile:t.nestedThemeProfile}},[t._v('\n\t\t\t\tTesting nested themes, this is using a defined profile called "primary-bold".\n\t\t\t')]),t._v(" "),t._l(t.categories,(function(n){return e("div",{key:n,class:t.$s.Section},[e("m-text",{attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t")]),t._v(" "),t._l(t.categoryItems(n),(function(n){return[e("div",{key:n.name,staticClass:"item"},[e("div",{staticClass:"item-details"},[e("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:0}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.name)+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("m-text",{staticClass:"item-description",attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.description)+"\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("m-image",{staticClass:"item-preview",attrs:{src:n.photo}})],1),t._v(" "),e("m-divider",{key:n.id})]}))],2)})),t._v(" "),e("m-inline-action-bar",[e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tMenu\n\t\t\t\t")])],1)],2)]),t._v(" "),e("div",{class:t.$s.Canvas},[e("div",{class:t.$s.Notch}),t._v(" "),e("div",{class:t.$s.Page},[e("m-image",{staticClass:"detail-image",attrs:{src:"https://source.unsplash.com/900x600/?cappuccino"}}),t._v(" "),e("div",{class:t.$s.Section},[e("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:2}},[t._v("\n\t\t\t\t\tCappuccino\n\t\t\t\t")]),t._v(" "),e("m-text",{staticClass:"item-price",attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\t$4.00\n\t\t\t\t")]),t._v(" "),e("m-text",{staticClass:"item-description",attrs:{size:0}},[t._v("\n\t\t\t\t\tThe essence of handcrafting. Our rich espresso is artfully\n\t\t\t\t\tmarbled with freshly micro-foamed milk.\n\t\t\t\t")]),t._v(" "),e("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}})],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tSize\n\t\t\t\t\t")])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"option"},[e("m-radio",{attrs:{value:"sm"},model:{value:t.size,callback:function(n){t.size=n},expression:"size"}},[t._v("\n\t\t\t\t\t\tSmall\n\t\t\t\t\t")]),t._v(" "),e("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$3.00\n\t\t\t\t\t")])],1),t._v(" "),e("m-divider"),t._v(" "),e("div",{staticClass:"option"},[e("m-radio",{attrs:{value:"md"},model:{value:t.size,callback:function(n){t.size=n},expression:"size"}},[t._v("\n\t\t\t\t\t\tMedium\n\t\t\t\t\t")]),t._v(" "),e("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$3.50\n\t\t\t\t\t")])],1),t._v(" "),e("m-divider"),t._v(" "),e("div",{staticClass:"option"},[e("m-radio",{attrs:{value:"lg"},model:{value:t.size,callback:function(n){t.size=n},expression:"size"}},[t._v("\n\t\t\t\t\t\tLarge\n\t\t\t\t\t")]),t._v(" "),e("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$4.00\n\t\t\t\t\t")])],1)],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tModifiers\n\t\t\t\t\t")])]},proxy:!0},{key:"required-label",fn:function(){return[t._v("\n\t\t\t\t\tOptional\n\t\t\t\t")]},proxy:!0}])},[t._v(" "),t._v(" "),e("div",{staticClass:"option"},[e("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Cream\n\t\t\t\t\t")])],1),t._v(" "),e("m-divider"),t._v(" "),e("div",{staticClass:"option"},[e("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Sugar\n\t\t\t\t\t")])],1),t._v(" "),e("m-divider"),t._v(" "),e("div",{staticClass:"option"},[e("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Cinnamon\n\t\t\t\t\t")])],1)],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tNotes\n\t\t\t\t\t")])]},proxy:!0},{key:"required-label",fn:function(){return[t._v("\n\t\t\t\t\tOptional\n\t\t\t\t")]},proxy:!0}])},[t._v(" "),t._v(" "),e("m-input",{attrs:{variant:"outline",placeholder:"Details"}})],1),t._v(" "),e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tAdd to Order\n\t\t\t\t")])],1)],1)]),t._v(" "),e("div",{class:t.$s.Canvas},[e("div",{class:t.$s.Notch}),t._v(" "),e("div",{class:t.$s.Page},[e("div",{class:t.$s.Section},[e("div",{staticClass:"header"},[e("menu-icon",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"logo"},[t._v("Kafo")]),t._v(" "),e("shopping-bag-icon",{staticClass:"icon"})],1)]),t._v(" "),e("div",{class:[t.$s.Section,t.$s.Cart]},[e("m-text",{attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\tShopping Cart\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"cart-item"},[e("div",{staticClass:"cart-content"},[e("div",{staticClass:"cart-text"},[e("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\t\t\tHoliday Spice Latte\n\t\t\t\t\t\t\t")]),t._v(" "),e("m-text",{staticClass:"cart-price",attrs:{size:-1,element:"span"}},[t._v("\n\t\t\t\t\t\t\t\t$6.00\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"cart-controls"},[e("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}}),t._v(" "),e("m-text-button",[e("trash",{staticClass:"icon-sm"})],1)],1)]),t._v(" "),e("m-image",{staticClass:"cart-media",attrs:{src:"https://source.unsplash.com/900x600/?latte"}})],1),t._v(" "),e("m-divider"),t._v(" "),e("div",{staticClass:"cart-item"},[e("div",{staticClass:"cart-content"},[e("div",{staticClass:"cart-text"},[e("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\t\t\tBlonde Latte\n\t\t\t\t\t\t\t")]),t._v(" "),e("m-text",{staticClass:"cart-price",attrs:{size:-1,element:"span"}},[t._v("\n\t\t\t\t\t\t\t\t$5.00\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"cart-controls"},[e("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}}),t._v(" "),e("m-text-button",[e("trash",{staticClass:"icon-sm"})],1)],1)]),t._v(" "),e("m-image",{staticClass:"cart-media",attrs:{src:"https://source.unsplash.com/900x600/?latte"}})],1),t._v(" "),e("m-button",{attrs:{variant:"secondary","full-width":""}},[t._v("\n\t\t\t\t\tAdd more items\n\t\t\t\t")]),t._v(" "),e("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),e("m-text",{attrs:{pattern:"title",size:0}},[t._v("\n\t\t\t\t\tAdd a tip\n\t\t\t\t")]),t._v(" "),e("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t100% of the tip goes to the kitchen\n\t\t\t\t")]),t._v(" "),e("m-choice",{staticStyle:{"font-size":"12px","line-height":"1.2"},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[e("m-choice-option",{attrs:{value:"choice-1"}},[e("strong",[t._v("10%")]),e("br"),t._v("\n\t\t\t\t\t\t$1.00\n\t\t\t\t\t")]),t._v(" "),e("m-choice-option",{attrs:{value:"choice-2"}},[e("strong",[t._v("15%")]),e("br"),t._v("\n\t\t\t\t\t\t$3.00\n\t\t\t\t\t")]),t._v(" "),e("m-choice-option",{attrs:{value:"choice-3"}},[e("strong",[t._v("20%")]),e("br"),t._v("\n\t\t\t\t\t\t$5.00\n\t\t\t\t\t")]),t._v(" "),e("m-choice-option",{attrs:{value:"choice-4"}},[t._v("\n\t\t\t\t\t\tOther\n\t\t\t\t\t")])],1),t._v(" "),e("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),e("m-input",{attrs:{placeholder:"Add gift card or coupon",variant:"outline"}}),t._v(" "),e("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\tTotal will be calculated at checkout\n\t\t\t\t")]),t._v(" "),e("m-divider",{staticStyle:{margin:"24px 0"}})],1),t._v(" "),e("m-inline-action-bar",[e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tCheckout\n\t\t\t\t")])],1)],1)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("strong",[t._v("Subtotal (2 items)")]),t._v(" "),e("span",{staticClass:"side-label"},[e("strong",[t._v("$14.00")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[t._v("\n\t\t\t\t\tTaxes\n\t\t\t\t\t"),e("span",{staticClass:"side-label"},[t._v("$1.56")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[t._v("\n\t\t\t\t\tTip (10%)\n\t\t\t\t\t"),e("span",{staticClass:"side-label"},[t._v("$1.36")])])}],!1,(function(t){this.$s=S().locals||S()}),null,null).exports},2797:(t,n,e)=>{var i=e(8433);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4023).Z)("ed3c5e92",i,!0,{})},7426:(t,n,e)=>{var i=e(7051);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4023).Z)("a6d1c446",i,!0,{})},6233:(t,n,e)=>{var i=e(2452);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4023).Z)("54d35d07",i,!0,{})},5713:(t,n,e)=>{var i=e(4298);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4023).Z)("49bbe38a",i,!0,{})},3881:(t,n,e)=>{var i=e(8900);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4023).Z)("082aca10",i,!0,{})}}]);