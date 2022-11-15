import{n as c,A as l,a as s}from"./index.4f76038a.js";import{s as u,e as i,r as d,V as y,c as v}from"./vee-validate.esm.a8e11856.js";u("eager");i("required",{...d,message:"\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"});const m={components:{Applayout:l,ValidationProvider:y,ValidationObserver:v},name:"Entry",data:()=>({entryId:null,entryNumber:"",note:"",currency:[],currencyValue:[],currencyItem:"",currencyValueItem:"",currencyId:"",entryDetail:{cridet:null,debit:null,currencyId:""},entry:[]}),mounted(){this.getEntry(),this.getCurrency()},methods:{submit(){this.$refs.observer.validate().then(r=>{r&&(console.log("work"),this.$router.push("/entry"))})},async getCurrency(){await s.get("/currency").then(r=>{this.currency=r.data,console.log("cu",this.currency)}).catch(r=>{console.log(r)})},async getCurrencyValue(){await s.get("/currency_value").then(r=>{this.currencyValue=r.data,console.log(this.currencyValue)})},async getEntry(){await s.get("/entry").then(r=>{this.entry=r.data,console.log(this.entry)}).catch(r=>{console.log(r)})},async postEntry(){const r={entryNumber:this.entryNumber,note:this.note,currencyId:this.currencyItem};await s.post("/entry/create",r).then(e=>{this.r=e.data,console.log(e.data);const t=this.$route.query.to||`/sub_bond/${e.data._id}`;this.$router.push(t)}).catch(e=>{console.log(e)})},async updateEntry(){const r={entryDetail:{cridet:this.entryDetail.cridet,debit:this.entryDetail.debit,currencyValue:this.entryDetail.currencyValue,currencyId:this.entryDetail.currencyId}};await s.put("/entry/635696024a6e4cf70992d22b",r).then(e=>{console.log(e.data)}).catch(e=>{console.log(e)})},subEntry(r){const e=this.$route.query.to||`/sub_entry/${r}`;this.$router.push(e)},checkSelected(){console.log(this.currencyValueItem)},checkSelected(){console.log(this.currencyItem)}}};var h=function(){var e=this,t=e._self._c;return t("applayout",[t("v-container",[t("v-row",[t("v-col",[t("v-dialog",{attrs:{"max-width":"550px"},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:a}){return[t("v-btn",e._g(e._b({staticClass:"ml-6",attrs:{color:"green darken-1",dark:""}},"v-btn",a,!1),n),[e._v(" \u0625\u0636\u0627\u0641\u0629 \u062C\u062F\u064A\u062F"),t("v-icon",[e._v("mdi-plus")])],1),t("v-btn",{attrs:{color:"green darken-1",dark:""}},[e._v(" \u0637\u0628\u0627\u0639\u0629"),t("v-icon",{staticClass:"mr-2"},[e._v("mdi-printer")])],1)]}}]),model:{value:e.dialog,callback:function(n){e.dialog=n},expression:"dialog"}},[t("v-card",{attrs:{dense:"",shaped:""}},[t("v-card-title",{staticClass:"d-flex justify-center"},[e._v("\u0625\u0636\u0627\u0641\u0629 \u062C\u062F\u064A\u062F")]),t("v-card-text",{attrs:{dir:"ltr"}},[t("v-container",[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function({invalid:n}){return[t("v-form",{ref:"form",staticClass:"px-4",on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[t("validation-provider",{attrs:{rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("v-text-field",{attrs:{label:"\u0631\u0642\u0645 \u0627\u0644\u0627\u062F\u062E\u0627\u0644",type:"number","error-messages":a,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.entryNumber,callback:function(o){e.entryNumber=o},expression:"entryNumber"}})]}}],null,!0)}),t("validation-provider",[t("v-text-field",{attrs:{type:"string",label:"\u0645\u0644\u0627\u062D\u0638\u0629",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.note,callback:function(a){e.note=a},expression:"note"}})],1),t("validation-provider",{attrs:{rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("v-autocomplete",{attrs:{label:"\u0627\u0644\u0639\u0645\u0644\u0629",items:e.currency,"error-messages":a,"item-text":"name","item-value":"_id",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.currencyItem,callback:function(o){e.currencyItem=o},expression:"currencyItem"}})]}}],null,!0)}),t("div",{staticClass:"text-center mt-8"},[t("v-btn",{staticClass:"mt-3 text-h6 white--text",attrs:{color:"green darken-1",type:"submit",disabled:n},on:{click:e.postEntry}},[e._v("\u0627\u0644\u062A\u0627\u0644\u064A")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1),t("v-simple-table",{staticClass:"mt-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",[e._v("\u0631\u0642\u0645 \u0627\u0644\u0625\u062F\u062E\u0627\u0644")]),t("th",[e._v("\u0645\u0644\u0627\u062D\u0638\u0629")]),t("th",[e._v("\u0627\u0644\u0639\u0645\u0644\u0629")])])]),t("tbody",e._l(e.entry,function(n){return t("tr",{key:n.name},[t("td",[e._v(e._s(n.entryNumber))]),t("td",[e._v(e._s(n.note))]),t("td",[e._v(e._s(n.currencyId))]),t("td",[t("v-btn",{attrs:{icon:""},on:{click:function(a){return e.subEntry(n._id)}}},[t("v-icon",[e._v("mdi-eye")])],1)],1)])}),0)]},proxy:!0}])})],1)],1)},_=[],p=c(m,h,_,!1,null,null,null,null);const g=p.exports;export{g as default};
