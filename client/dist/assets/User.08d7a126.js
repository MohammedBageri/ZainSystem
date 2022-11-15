import{n as o,A as d,a as l}from"./index.4f76038a.js";import{s as i,e as u,r as c,V as v,c as p}from"./vee-validate.esm.a8e11856.js";i("eager");u("required",{...c,message:"\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"});const f={components:{Applayout:d,ValidationProvider:v,ValidationObserver:p},name:"User",data:()=>({disabled:!1,disabled1:!1,readonly:!1,countries:["\u0646\u0634\u0637","\u063A\u064A\u0631 \u0646\u0634\u0637"],bondsNumber:"",username:"",password:"",phoneNO:"",address:"",status:!1,name:"",note:"",agentId:"",email:"",distributerId:"",userType:["\u0632\u0628\u0648\u0646","\u0648\u0643\u064A\u0644","\u0639\u0645\u064A\u0644"],users:[]}),mounted(){this.getUser()},methods:{submit(){this.$refs.observer.validate().then(r=>{r&&(console.log("work"),this.$router.go())})},async postUser(){const r={username:this.username,password:this.password,phoneNO:this.phoneNO,address:this.address,status:this.status};await l.post("user/create",r).then(e=>{console.log("es.data",e.data),console.log("lkjhgf",r)}).catch(e=>{console.log(e)})},async getUser(){await l.get("/user").then(r=>{this.users=r.data,console.log(this.users,"us")}).catch(r=>{console.log(r)})},subuser(r){const e=this.$route.query.to||`/sub_user/${r}`;this.$router.push(e)}}};var b=function(){var e=this,s=e._self._c;return s("applayout",[s("v-container",[s("v-dialog",{attrs:{"max-width":"550px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:t}){return[s("v-btn",e._g(e._b({staticClass:"ml-6 mb-5",attrs:{color:"green darken-1",dark:""}},"v-btn",t,!1),a),[e._v(" \u0625\u0636\u0627\u0641\u0629 \u062C\u062F\u064A\u062F "),s("v-icon",[e._v("mdi-plus")])],1),s("v-btn",{staticClass:"mb-5",attrs:{color:"green darken-1",dark:""}},[e._v(" \u0637\u0628\u0627\u0639\u0629"),s("v-icon",{staticClass:"mr-2"},[e._v("mdi-printer")])],1)]}}]),model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[s("v-card",{attrs:{dense:"",shaped:""}},[s("v-card-title",{staticClass:"d-flex justify-center"},[e._v("\u0625\u0636\u0627\u0641\u0629 \u062C\u062F\u064A\u062F")]),s("v-card-text",[s("v-container",[s("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function({invalid:a}){return[s("v-form",{ref:"form",staticClass:"px-4",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[s("validation-provider",{attrs:{rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("v-text-field",{attrs:{type:"string",label:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","error-messages":t,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})]}}],null,!0)}),s("validation-provider",{attrs:{rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("v-text-field",{attrs:{label:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A",type:"password","error-messages":t,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}})]}}],null,!0)}),s("validation-provider",{attrs:{rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("v-text-field",{attrs:{type:"string",label:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641","error-messages":t,outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.phoneNO,callback:function(n){e.phoneNO=n},expression:"phoneNO"}})]}}],null,!0)}),s("v-text-field",{attrs:{type:"string",label:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646",outlined:"",color:"green darken-1",reverse:"",dense:"",shaped:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),s("v-expansion-panels",[s("v-expansion-panel",[s("div",[s("div",{staticClass:"d-flex"},[s("v-checkbox",{attrs:{label:"\u0627\u0644\u062D\u0627\u0644\u0629"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),s("div",{staticClass:"d-flex"},[s("v-checkbox",{attrs:{label:"\u0627\u0644\u0645\u062F\u064A\u0631"},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}})],1),s("v-expansion-panels",{attrs:{disabled:e.disabled,multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[s("v-expansion-panel",[s("v-expansion-panel-header",[e._v(" \u0645\u0633\u0627\u0639\u062F \u0645\u062F\u064A\u0631")]),s("v-expansion-panel-content",[s("v-checkbox",{attrs:{label:"\u062D\u0630\u0641 \u0645\u0633\u062A\u062E\u062F\u0645"},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}}),s("v-checkbox",{attrs:{label:"\u062D\u0630\u0641 \u0645\u0633\u062A\u062E\u062F\u0645"},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}})],1)],1)],1)],1)])],1),s("div",{staticClass:"text-center mt-2"},[s("v-btn",{staticClass:"mt-3 text-h6",attrs:{color:"green darken-1",type:"submite",disabled:a},on:{click:e.postUser}},[e._v("\u0627\u0644\u062A\u0627\u0644\u064A")])],1)],1)]}}])})],1)],1)],1)],1),s("v-simple-table",{staticClass:"mt-5",scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",[e._v("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645")]),s("th",[e._v("\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641")]),s("th",[e._v("\u0627\u0644\u0639\u0646\u0648\u0627\u0646")]),s("th",[e._v("\u0627\u0644\u062D\u0627\u0644\u0629")])])]),s("tbody",e._l(e.users,function(a){return s("tr",{key:a.name},[s("td",[e._v(e._s(a.username))]),s("td",[e._v(e._s(a.phoneNO))]),s("td",[e._v(e._s(a.address))]),s("td",[e._v(e._s(a.status))]),s("td",[s("v-btn",{attrs:{icon:""},on:{click:function(t){return e.subuser(a._id)}}},[s("v-icon",[e._v("mdi-eye")])],1)],1)])}),0)]},proxy:!0}])})],1)],1)},m=[],_=o(f,b,m,!1,null,null,null,null);const g=_.exports;export{g as default};
