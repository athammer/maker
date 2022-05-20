(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[612,253],{253:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a={storeName:"Goodfellas Pizzeria",categories:["Most Popular","Pizza","Specialty Pies","Sides","Desserts"],items:[{name:"Breadstick",description:"A single breadstick the size of your arm",photo:"https://picsum.photos/900/600?Breadstick",cost:300,quantity:1,categories:["Most Popular","Sides"],oneOf:[{name:"Souffle Cups",selected:"",options:[{name:"Italian",cost:0},{name:"Balsamic",cost:0},{name:"Garlic Butter",cost:0}]}]},{name:"Extra Sauce",description:"When you wanna be the sauce boss",photo:"https://picsum.photos/900/600?ExtraSauce",cost:75,quantity:1,categories:["Most Popular","Sides"],oneOf:[{name:"Souffle Cups",selected:"",options:[{name:"Marinara",cost:0},{name:"Ranch",cost:0},{name:"Nacho Cheese",cost:0}]}]},{name:'16" Pie',description:'Build your own 16" pizza pie',photo:"https://picsum.photos/900/600?16Pie",cost:1400,quantity:1,categories:["Most Popular","Pizza"],anyOf:[{name:"Add Meat Toppings",selected:[],options:[{name:"Pepperoni",cost:200},{name:"Italian Sausage",cost:200},{name:"Bacon",cost:200}]},{name:"Add Veggie Toppings",selected:[],options:[{name:"Mushrooms",cost:200},{name:"Onions",cost:200},{name:"Black Olives",cost:200}]}]},{name:'22" Pie',description:'Build your own 22" pizza pie',photo:"https://picsum.photos/900/600?22Pie",cost:2e3,quantity:1,categories:["Most Popular","Pizza"],anyOf:[{name:"Add Meat Toppings",selected:[],options:[{name:"Pepperoni",cost:300},{name:"Italian Sausage",cost:300},{name:"Bacon",cost:300}]},{name:"Add Veggie Toppings",selected:[],options:[{name:"Mushrooms",cost:300},{name:"Onions",cost:300},{name:"Black Olives",cost:300}]}]},{name:"Wiseguy",description:"Straight from the garden",photo:"https://picsum.photos/900/600?Wiseguy",quantity:1,categories:["Specialty Pies"],oneOf:[{name:"Choose size",selected:"",options:[{name:'12"',cost:1300},{name:'16"',cost:2100},{name:'22"',cost:2900}]}]},{name:"The Vinny",description:"A friend of the family",photo:"https://picsum.photos/900/600?TheVinny",quantity:1,categories:["Specialty Pies"],oneOf:[{name:"Choose size",selected:"",options:[{name:'12"',cost:1400},{name:'16"',cost:2250},{name:'22"',cost:3100}]}]},{name:"Cannoli",description:"Pastry filled with sweet ricotta & chocolate chips",photo:"https://picsum.photos/900/600?Cannoli",cost:300,quantity:1,categories:["Desserts"]},{name:"Chocolate Chip Cookie",description:"Extra large chocolate filled chocolate chip cookie",photo:"https://picsum.photos/900/600?ChocolateChipCookie",cost:200,quantity:1,categories:["Desserts"]}]}},8672:(t,e,n)=>{"use strict";n.d(e,{U:()=>u});var a=n(771),o=n.n(a),s=n(7356),i=n(4185);const r={inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},bgColor:{type:String,default:void 0,validator:t=>o().valid(t)||"transparent"===t},color:{type:String,default:void 0,validator:t=>o().valid(t)}},computed:{...(0,i.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){s.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),s.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),s.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}};var l=n(8187),c=n.n(l);const u=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g(t._b({class:[t.$s.Container,t.$s["size_"+t.size]],style:t.style},"section",t.$attrs,!1),t.$listeners),[n("header",{class:t.$s.Header},[t.hasLabel?n("div",{class:t.$s.Label},[t._t("label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]})),t._v(" "),t.hasSublabel?n("div",{class:t.$s.Sublabel},[t._t("sublabel",(function(){return[t._v("\n\t\t\t\t\t"+t._s(t.sublabel)+"\n\t\t\t\t")]}))],2):t._e()],2):t._e(),t._v(" "),t.hasRequirementLabel?n("div",{class:t.$s.RequirementLabel},[t._t("requirement-label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.requirementLabel)+"\n\t\t\t")]}))],2):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},2971:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.Container_qgBQ0 {\n\tpadding: 16px 24px;\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-family: inherit;\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--neutral-90, inherit));\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tfont-size: 14px;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),a.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},t.exports=a},4483:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.modal[data-v-70035052] {\n\tbackground-color: inherit;\n}\n.section[data-v-70035052] {\n\tmargin-bottom: 16px;\n}\n.option-cost[data-v-70035052] {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 16px;\n}\n.option-control[data-v-70035052] {\n\tflex: 1 0 auto;\n}\n.option-cost-label[data-v-70035052] {\n\tflex: 0 0 auto;\n\tmargin: 0;\n}\n.has-options[data-v-70035052] {\n\tpadding-bottom: 16px;\n}\n.icon[data-v-70035052] {\n\twidth: 24px;\n\theight: 24px;\n}\n.cover-photo[data-v-70035052] {\n\twidth: 100%;\n\theight: 280px;\n}\n",""]),t.exports=a},2466:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.heading[data-v-69717b4b] {\n\tpadding: 24px;\n}\n.item[data-v-69717b4b] {\n\tdisplay: flex;\n\tpadding: 24px;\n\tcursor: pointer;\n}\n.item-details[data-v-69717b4b] {\n\tflex: 1 0 auto;\n}\n.item-description[data-v-69717b4b] {\n\tcolor: rgba(0, 0, 0, 0.7);\n}\n.item-preview[data-v-69717b4b] {\n\tflex: 0 0 auto;\n\twidth: 96px;\n\theight: 96px;\n\toverflow: hidden;\n\tborder-radius: 16px;\n}\n.notice-banner[data-v-69717b4b] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 16px;\n\tbackground-color: rgb(160, 121, 164);\n}\n.banner-text[data-v-69717b4b] {\n\tmargin: 8px;\n\tcolor: white;\n}\n.banner-subtext[data-v-69717b4b] {\n\tmargin: 8px;\n\tcolor: rgba(255, 255, 255, 0.7);\n}\n.highlight[data-v-69717b4b] {\n\tbackground-color: white;\n}\n",""]),t.exports=a},5280:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\nhtml,\nbody {\n\tbackground: #f6f6f6;\n}\n",""]),t.exports=a},2787:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var a=n(8672),o=n(5239),s=n(193),i=n(987),r=n(3368),l=n(8832),c=n(111),u=n(388),m=n(7392),d=n(5552),p=n(9893),h=n.n(p);const b={components:{MModal:o.x6,MImage:s.F,MContainer:a.U,MText:i.H,MRadio:r.H,MDivider:l.j,MInput:c.z,MStepper:u.f,MInlineActionBar:m.pE,MActionBarButton:m.n5,MCheckbox:d._,XIcon:h()},inject:{modalApi:o.UJ},props:{item:{type:Object,required:!0}},computed:{addAmount(){let t=Number.NaN;if(this.item.cost&&(t=this.item.cost),!t&&this.item.oneOf){const e=this.item.oneOf[0],{selected:n}=e;n&&(t=e.options.find((t=>t.name===n)).cost)}if(!this.item.anyOf)return this.item.quantity*t;let e=0;for(let t=0;t<this.item.anyOf.length;t+=1){const n=this.item.anyOf[t],{selected:a}=n;e+=n.options.map((t=>{if(a.includes(t.name))return t.cost;return 0})).reduce(((t,e)=>t+e),0)}return this.item.quantity*(t+e)},canPlaceOrder(){return!this.item.oneOf||!!this.item.oneOf.every((t=>!!t.selected))}},methods:{formatCost(t){if(Number.isNaN(t)||!t&&0!==t)return"";const e=(t/100).toFixed(2);return"$".concat(e)}}};n(5238);const f=(0,n(1900).Z)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:t.item.photo}})],1),t._v(" "),n("m-container",{staticClass:"section",attrs:{label:t.item.name,size:"large"}},[n("m-text",{staticStyle:{margin:"0 0 16px 0"},attrs:{size:-1}},[t._v("\n\t\t\t"+t._s(t.item.description)+"\n\t\t")])],1),t._v(" "),t._l(t.item.oneOf,(function(e){return n("m-container",{key:e.name,staticClass:"section has-options",attrs:{label:e.name},scopedSlots:t._u([{key:"requirement-label",fn:function(){return[t._v("\n\t\t\tPick one\n\t\t")]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.options,(function(a,o){return n("div",{key:a.name,staticStyle:{"padding-top":"16px"}},[n("div",{staticClass:"option-cost"},[n("m-radio",{staticClass:"option-control",attrs:{value:a.name},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"oneOf.selected"}},[t._v("\n\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t")]),t._v(" "),a.cost?n("m-text",{staticClass:"option-cost-label",attrs:{size:-1}},[t._v("\n\t\t\t\t\t"+t._s(t.formatCost(a.cost))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),o+1!==e.options.length?n("m-divider"):t._e()],1)}))],2)})),t._v(" "),t._l(t.item.anyOf,(function(e){return n("m-container",{key:e.name,staticClass:"section has-options",attrs:{label:e.name},scopedSlots:t._u([{key:"requirement-label",fn:function(){return[t._v("\n\t\t\tPick any\n\t\t")]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.options,(function(a,o){return n("div",{key:a.name,staticStyle:{"padding-top":"16px"}},[n("div",{staticClass:"option-cost"},[n("m-checkbox",{staticClass:"option-control",attrs:{value:a.name},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"anyOf.selected"}},[t._v("\n\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t")]),t._v(" "),a.cost?n("m-text",{staticClass:"option-cost-label",attrs:{size:-1}},[t._v("\n\t\t\t\t\t"+t._s(t.formatCost(a.cost))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),o+1!==e.options.length?n("m-divider"):t._e()],1)}))],2)})),t._v(" "),n("m-container",{staticClass:"section",staticStyle:{"margin-bottom":"120px"},attrs:{label:"Special requests"}},[n("m-input",{attrs:{placeholder:"allergies, extra sauce, no onions, etc"}}),t._v(" "),n("m-stepper",{staticStyle:{"margin-top":"16px"},attrs:{min:1},model:{value:t.item.quantity,callback:function(e){t.$set(t.item,"quantity",e)},expression:"item.quantity"}})],1),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"close",on:{click:function(e){return t.modalApi.close()}}},[n("x-icon",{staticClass:"icon"})],1),t._v(" "),n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.formatCost(t.addAmount))+"\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAdd to order\n\t\t\t")])],1)],2)}),[],!1,null,"70035052",null).exports},4612:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var a=n(987),o=n(8832),s=n(193),i=n(5239),r=n(7392),l=n(8581),c=n(2787),u=n(253);const m={components:{MText:a.H,MDivider:o.j,MImage:s.F,MActionBar:r.MS,MButton:l.G},inject:{modalApi:i.UJ},data:()=>u.default,computed:{addedItemCount(){return this.items.reduce(((t,e)=>e.quantity?t+e.quantity:t),0)}},methods:{openItemModal(t){this.modalApi.open((e=>e(c.default,{props:{item:t}})))},categoryItems(t){return this.items.filter((e=>e.categories.includes(t)))},formatItemCost(t){if(t.cost)return this.formatCost(t.cost);let e=Number.MAX_SAFE_INTEGER;let n=0;t.oneOf[0].options.forEach((t=>{e=Math.min(e,t.cost),n=Math.max(n,t.cost)}));const a=this.formatCost(e),o=this.formatCost(n);return"".concat(a," - ").concat(o)},formatCost(t){const e=(t/100).toFixed(2);return"$".concat(e)}}};n(4585),n(3097);const d=(0,n(1900).Z)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"highlight"},[n("m-text",{staticClass:"heading",attrs:{variant:"title",size:1}},[t._v("\n\t\t\t"+t._s(t.storeName)+" Online Store\n\t\t")])],1),t._v(" "),n("div",{staticClass:"notice-banner"},[n("m-text",{staticClass:"banner-text"},[t._v("\n\t\t\tOrder and check out directly from our menu and we’ll deliver straight to you\n\t\t")]),t._v(" "),n("m-text",{staticClass:"banner-subtext"},[t._v("\n\t\t\tTable 9\n\t\t")])],1),t._v(" "),t._l(t.categories,(function(e){return n("div",{key:e},[n("m-text",{staticClass:"heading",attrs:{variant:"title"}},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"highlight"},[t._l(t.categoryItems(e),(function(e){return[n("div",{key:e.name,staticClass:"item",on:{click:function(n){return t.openItemModal(e)}}},[n("div",{staticClass:"item-details"},[n("m-text",{attrs:{variant:"title",size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"item-description",attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.description)+"\n\t\t\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.formatItemCost(e))+"\n\t\t\t\t\t\t")])],1),t._v(" "),n("m-image",{staticClass:"item-preview",attrs:{src:e.photo}})],1),t._v(" "),n("m-divider",{key:e.name})]}))],2)],1)})),t._v(" "),n("m-action-bar",[n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",color:"rgb(160, 121, 164)","full-width":""},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.addedItemCount)+" items added\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView order\n\t\t\t")])],1)],2)}),[],!1,null,"69717b4b",null).exports},8187:(t,e,n)=>{var a=n(2971);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("a829cb1e",a,!0,{})},5238:(t,e,n)=>{var a=n(4483);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("62bd05db",a,!0,{})},4585:(t,e,n)=>{var a=n(2466);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("18a7101d",a,!0,{})},3097:(t,e,n)=>{var a=n(5280);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("29616bd7",a,!0,{})}}]);