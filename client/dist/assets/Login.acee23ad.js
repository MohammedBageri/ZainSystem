import{n,A as l,a}from"./index.4f76038a.js";const i={components:{Applayout:l},name:"Login",data(){return{username:"",password:"",errorMessages:"",name:null,errors:[]}},methods:{async submitForm(){a.defaults.headers.common.Authorization="",await localStorage.removeItem("token");const o={username:this.username,password:this.password};await a.post("/user/login/",o).then(e=>{const s=e.data[0];console.log(s,"res");const t=e.data[1];this.$store.commit("setToken",s),this.$store.commit("setUser",t),console.log(t,"token"),a.defaults.headers.common.Authorization="access_token "+s,console.log(a.defaults.headers.common.Authorization,"Authorization"),console.log("aaaaa",e.headers),localStorage.setItem("token",s),localStorage.setItem("user",t),console.log(e.data);const r=this.$route.query.to||"/";this.$router.push(r)}).catch(e=>{if(e.response)for(const s in e.response.data)this.errors.push(`${s}: ${e.response.data[s]}`);else this.errors.push("Something went wrong. Please try again"),console.log(JSON.stringify(e))})}}};var c=function(){var e=this,s=e._self._c;return s("applayout",[s("v-container",[s("v-card",{staticClass:"mr-6 mt-5 mb-5",attrs:{width:"450",height:"220",dense:"",shaped:""}},[s("v-card-text",[s("v-form",{attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","prepend-icon":"mdi-account",color:"green darken-1",rules:[()=>!!e.name||"\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"],"error-messages":e.errorMessages,reverse:"",outlined:"",dense:"",shaped:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("v-text-field",{attrs:{label:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","prepend-icon":"mdi-lock",type:"password",color:"green darken-1",rules:[()=>!!e.password||"\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"],"error-messages":e.errorMessages,outlined:"",required:"",reverse:"",dense:"",shaped:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("div",{staticClass:"text-center mt-2"},[s("v-btn",{staticClass:"text-h6",attrs:{rounded:"",color:"green darken-1",dark:"",type:"submite"}},[e._v("\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")])],1)],1)],1)],1)],1)],1)},d=[],u=n(i,c,d,!1,null,null,null,null);const p=u.exports;export{p as default};