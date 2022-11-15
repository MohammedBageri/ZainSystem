import{n as r,A as s,a}from"./index.4f76038a.js";import{s as l,e as d,r as u,V as i,c as m}from"./vee-validate.esm.a8e11856.js";l("eager");d("required",{...u,message:"\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"});const b={components:{Applayout:s,ValidationProvider:i,ValidationObserver:m},name:"SubBond",data:()=>({bondsNumber:"",accountId:"",transferAccountId:"",type:"",total:null,currencyId:"",currencyValue:null,note:"",entryId:"",userId:"",bond:{},accountType:["\u062F\u0627\u0626\u0646","\u0645\u062F\u064A\u0646"],currency:[],currencyValue:[],currencyItem:"",currencyValueItem:{},accounts:[],accountName:[],accountId:[],account1:"",transferAccountId:"",accountItem:""}),mounted(){this.getBond(),this.getAccount(),this.getCurrency(),this.getCurrencyValue()},methods:{submit(){this.$refs.observer.validate().then(o=>{o&&(console.log("work"),this.$router.push("/account"))})},async getCurrency(){await a.get("/currency").then(o=>{this.currency=o.data,console.log("cu",this.currency)}).catch(o=>{console.log(o)})},async getCurrencyValue(){await a.get("/currency_value").then(o=>{this.currencyValue=o.data,console.log(this.currencyValue)})},async getAccount(){await a.get("/account").then(o=>{this.accounts=o.data}).catch(o=>{console.log(o)})},async getBond(){const o=this.$route.params.bondId;console.log(o,"id"),await a.get(`bond/${o}`).then(e=>{this.bond=e.data,this.account1=e.data.accountId,console.log(this.bond,"hg")}).catch(e=>{console.log(e)})},async updateBond(){const o=this.$route.params.bondId,e={bondsNumber:this.bond.bondsNumber,accountId:this.bond.accountId,transferAccountId:this.bond.transferAccountId,type:this.type,currencyId:this.currencyItem,note:this.bond.note};await a.put(`bond/${o}`,e).then(t=>{console.log(t.data,"aaaaa");const n=this.$route.query.to||`/sub_entry/${this.bond.entryId}`;this.$router.push(n)}).catch(t=>{console.log(t)})},async deleteBond(){const o=this.$route.params.bondId;await a.delete(`bond/${o}`).then(e=>{console.log(e);const t=this.$route.query.to||"/bonds";this.$router.push(t)}).catch(e=>{console.log(e)})},checkSelected(){console.log(this.currencyItem)},checkSelected(){console.log(this.accountItem)}}};var h=function(){var e=this,t=e._self._c;return t("applayout",[t("v-container",[t("v-card",{attrs:{width:"500"}},[t("v-card-title",{staticClass:"d-flex justify-center"},[e._v("\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644")]),t("v-card-text",{attrs:{dir:"ltr"}},[t("v-form",{staticClass:"px-4"},[t("v-text-field",{attrs:{type:"string",label:"\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.bond.bondsNumber,callback:function(n){e.$set(e.bond,"bondsNumber",n)},expression:"bond.bondsNumber"}}),t("v-autocomplete",{attrs:{items:e.accounts,"item-text":"name","item-value":"name",label:"\u0627\u0644\u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.bond.accountId,callback:function(n){e.$set(e.bond,"accountId",n)},expression:"bond.accountId"}}),t("v-autocomplete",{attrs:{items:e.accounts,"item-text":"name","item-value":"name",label:"\u0627\u0644\u0649 \u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.bond.transferAccountId,callback:function(n){e.$set(e.bond,"transferAccountId",n)},expression:"bond.transferAccountId"}}),t("v-autocomplete",{attrs:{items:e.accountType,label:"\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631...","error-messages":e.errors,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.type,callback:function(n){e.type=n},expression:"type"}}),t("v-text-field",{attrs:{label:" \u0627\u0644\u0645\u062C\u0645\u0648\u0639",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.bond.total,callback:function(n){e.$set(e.bond,"total",n)},expression:"bond.total"}}),t("v-autocomplete",{attrs:{items:e.currency,"item-text":"name","item-value":"name",label:"\u0627\u0644\u0639\u0645\u0644\u0629",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.currencyItem,callback:function(n){e.currencyItem=n},expression:"currencyItem"}}),t("v-text-field",{attrs:{label:" \u0645\u0644\u0627\u062D\u0638\u0629",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.bond.note,callback:function(n){e.$set(e.bond,"note",n)},expression:"bond.note"}})],1)],1),t("v-dialog",{attrs:{"max-width":"550px"},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:c}){return[t("v-btn",e._g(e._b({staticClass:"mt-3 mr-8 mb-3 ml-6 text-h6",attrs:{color:"green darken-1",type:"submite",dark:""}},"v-btn",c,!1),n),[e._v("\u062A\u062D\u062F\u064A\u062B")])]}}]),model:{value:e.dialog,callback:function(n){e.dialog=n},expression:"dialog"}},[t("v-card",{attrs:{dense:"",shaped:"",height:"550"}},[t("v-card-title",{staticClass:"d-flex justify-center"},[e._v(" \u062A\u062D\u062F\u064A\u062B")]),t("v-card-text",[t("v-container",[t("v-form",{staticClass:"px-4"},[t("v-text-field",{attrs:{type:"string",label:"\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.bond.bondsNumber,callback:function(n){e.$set(e.bond,"bondsNumber",n)},expression:"bond.bondsNumber"}}),t("v-autocomplete",{attrs:{items:e.accounts,"item-text":"name","item-value":"name",label:"\u0627\u0644\u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.bond.accountId,callback:function(n){e.$set(e.bond,"accountId",n)},expression:"bond.accountId"}}),t("v-autocomplete",{attrs:{items:e.accounts,"item-text":"name","item-value":"name",label:"\u0627\u0644\u0649 \u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.bond.transferAccountId,callback:function(n){e.$set(e.bond,"transferAccountId",n)},expression:"bond.transferAccountId"}}),t("v-autocomplete",{attrs:{items:e.accountType,label:"\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628",placeholder:"\u0627\u062E\u062A\u0627\u0631...","error-messages":e.errors,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.type,callback:function(n){e.type=n},expression:"type"}}),t("v-autocomplete",{attrs:{items:e.currency,"item-text":"name","item-value":"name",label:"\u0627\u0644\u0639\u0645\u0644\u0629",placeholder:"\u0627\u062E\u062A\u0627\u0631",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},on:{change:e.checkSelected},model:{value:e.currencyItem,callback:function(n){e.currencyItem=n},expression:"currencyItem"}}),t("v-text-field",{attrs:{label:" \u0645\u0644\u0627\u062D\u0638\u0629",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.bond.note,callback:function(n){e.$set(e.bond,"note",n)},expression:"bond.note"}}),t("div",{staticClass:"text-center mt-2"},[t("v-btn",{staticClass:"mt-3 text-h6 white--text",attrs:{color:"green darken-1"},on:{click:e.updateBond}},[e._v("\u062A\u062D\u062F\u064A\u062B")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},p=[],v=r(b,h,p,!1,null,null,null,null);const f=v.exports;export{f as default};
