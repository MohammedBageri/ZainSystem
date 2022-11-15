<template>
  <Applayout>
    <v-container>
      <!-- dialog start -->
    <v-dialog v-model="dialog"  max-width="550px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green darken-1" dark v-bind="attrs" v-on="on" class="ml-6"> إضافة جديد<v-icon>mdi-plus</v-icon></v-btn>
        <v-btn color="green darken-1" dark> طباعة<v-icon class="mr-2">mdi-printer</v-icon></v-btn>
      </template>

  <v-card dense shaped>
    <v-card-title class="d-flex justify-center"> إضافة جديد</v-card-title>
   <v-card-text dir="ltr">
    <v-container >

      <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form class="px-4"  ref="form" @submit.prevent="submit">

      <validation-provider v-slot="{ errors }" :rules="{required: true,}">
       <v-text-field v-model="code" label="رمز الحساب" :error-messages="errors" outlined color="green darken-1" reverse dense shaped></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" :rules="{required: true,}">
      <v-text-field v-model="name" label="اسم الحساب" :error-messages="errors" outlined color="green darken-1" reverse dense shaped></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" :rules="{required: true,}">
        <v-autocomplete ref="country" v-model="type" :items="accountType" label="نوع الحساب" placeholder="اختار..." :error-messages="errors"  outlined color="green darken-1" reverse dense shaped></v-autocomplete>
      </validation-provider>

      <!-- <v-text-field v-model="parent" label=" الحساب الاب" outlined color="green darken-1" reverse dense shaped></v-text-field> -->

      <v-textarea v-model="description" label="الوصف" outlined  color="green darken-1" reverse dense shaped></v-textarea>

      <validation-provider v-slot="{ errors }" :rules="{required: true,}">
      <v-autocomplete ref="country" v-model="currencyItem" :items="currency" :error-messages="errors"  @change="checkSelected" item-text="name" item-value="name"
         label="العملة" placeholder="اختار" outlined  color="green darken-1" reverse dense shaped></v-autocomplete>
      </validation-provider>

    <div class="text-center mt-2">
    <v-btn color="green darken-1" type="submite" @click="postAccount" :disabled="invalid" class="mt-3 text-h6 white--text" >إضافة</v-btn>
    </div>
    </v-form>
      </validation-observer>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- dialog end -->

<!-- table start -->
<v-container >
        <v-simple-table class="mt-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th >رمز الحساب</th>
          <th >اسم الحساب</th>
          <th >نوع الحساب</th>
           <th >الحساب الاب</th>
          <th > دائن</th>
          <th > مدين</th>
          <th > الوصف</th>
          <th > العملة</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in account" :key="item.name">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.parent }}</td>
          <td>{{ item.credit }}</td>
          <td>{{ item.debit }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.currencyId }}</td>
          <td >
             <v-btn @click="subAccount(item._id)" icon><v-icon >mdi-eye</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <!-- table end -->

 
    
</v-container>
  
</v-container>
  </Applayout>
 
</template>

<script>
import axios  from 'axios'
import Applayout  from '../layouts/Applayout.vue'

// import vee-validate
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
 setInteractionMode('eager')
 
  extend('required', {
    ...required,
    message: 'هذا الحقل مطلوب',
  })

export default {
    components:{
    Applayout,
    // components of vee-validate
    ValidationProvider,
    ValidationObserver,
  },
  name:'Account',
  data: () => ({
      currency: [],
      currencyItem: {},
      accountType: ['دائن','مدين'],
      code:"",
      name:"",
      type:"",
      parent:"",
      credit:"",
      debit:"",
      description:"",
      currencyId:"",
      account:[],
      user:""
    }),
    mounted(){
      this.getAccount()
      this.getCurrency()
      // this.getUser()
    },
    methods:{
      submit () {
        this.$refs.observer.validate().then(err => {
          if (!err) {
            console.log('work')
           
          }
        })
      },
      async getCurrency(){
        await axios
          .get('/currency')
          .then(res =>{
            this.currency = res.data
            console.log('cu',this.currency)
            console.log('cu',this.currencyId)
          })
          .catch(error =>{
            console.log(error)
          })
      },
      async getAccount(){
        await axios
          .get('/account')
          .then(res => {
            this.account = res.data
            console.log(this.account,'account')
          })
          .catch(error =>{
            console.log(error)
          })
      },
      async getUser(id){
        console.log(id)
        await axios
        .get(`/user/${id}`)
        .then(res=>{
          this.user=res.data.username
          console.log(this.users,'us')
          
        })
        .catch(error=>{
          console.log(error)
        })
       
      },
      async postAccount(){
        const formData = {
          code: this.code,
          name: this.name,
          type: this.type,
          credit: this.credit,
          description: this.description,
          debit: this.debit,
          currencyId: this.currencyItem,
      }
      await axios
        .post('/account/create', formData)
        .then(res => {
          console.log(res.data)
          this.$router.go();

        })
        .catch(error =>{
          console.log(error)
        })
      },
      subAccount(id){
        const toPath = this.$route.query.to || `/sub_account/${id}`

        this.$router.push(toPath)
      }
      ,
      checkSelected()
      {
        console.log(this.currencyItem)
      }

    }
}
</script>

<style>

</style>