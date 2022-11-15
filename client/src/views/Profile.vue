<template>
<applayout>
  <v-container >
    <v-col>
    <v-sheet rounded="sm" elevation="4" class="pa-4" >
      <v-row>
        <v-col cols="6" sm="12" md="8" lg="4" xs="12">
          <v-card elevation="3" class="mr-4 mt-2" width="400" height="350" dense shaped>
            <v-card-title class="d-flex justify-center" >تفاصيل الحساب</v-card-title>
            <v-card flat class="mx-auto pa-4 d-flex justify-center ">
              <v-avatar color="primary" size="100" class="mt-5"></v-avatar>
            </v-card>
             </v-card></v-col>


             <v-col cols="4" sm="12" md="8" lg="4" xs="12">
       <v-card class="mr-16 mt-2" width="500" height="400" elevation="2">
        <v-card-title class="d-flex justify-center" >تغيير كلمة المرور</v-card-title>
   <v-card-text>
    <v-form >
      <v-text-field v-model="password" label="كلمة المرور الحالية" type="password" color="green darken-1" outlined reverse />
       <v-text-field v-model="password" label="كلمة المرور الجديدة" type="password" color="green darken-1" outlined reverse />
        <v-text-field v-model="password" label="تاكيد كلمة المرور الجديدة" type="password" color="green darken-1" outlined reverse />
     
    <div class="text-center mt-2">
    <v-btn color="green lighten-1" type="submite" @click="postAccount" class="mt-3 text-h6" dark>تغيير كلمة المرور</v-btn></div>
    </v-form>
  </v-card-text>
 </v-card>
             </v-col>   
             </v-row>      
    </v-sheet>
    </v-col>
  </v-container>
  </applayout>
</template>


<script>
import Applayout  from '../layouts/Applayout.vue'
export default {
    components:{
    Applayout
  },
  name: 'Profile',
  data() {
    return {
     
    }
  },
  }
</script>

