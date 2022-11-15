<template >
  <Applayout>
  <v-container class="light-green lighten-4">
    <p class="text-h5 text--primary mr-3">لوحة المراقبة</p>
    <v-row>

      <v-col cols="6" md="4">
        <v-card class="pa-2 rounded-lg mr-16 mt-2" outlined tile width="250" height="200" >
         <v-icon x-large class="mr-16" >mdi-file-plus</v-icon>
    <v-card-text>
      <p class="text-h5 text--primary mr-11 mt-4">طلبات جديدة</p>
    </v-card-text>
    <div class="text-center "><v-btn rounded color="green darken-1" class="text-h6" dark type="submite">التفاصيل </v-btn></div>
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
         <v-card class="pa-2 rounded-lg mr-16 mt-2" outlined tile width="250" height="200" >
         <v-icon x-large class="mr-16" >mdi-account-plus</v-icon>
    <v-card-text>
      <p class="text-h5 text--primary mr-8 mt-4">طلبات فتح حساب</p>
    </v-card-text>
    <div class="text-center "><v-btn rounded color="green darken-1" class="text-h6" dark type="submite">التفاصيل </v-btn></div>
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
         <v-card class="pa-2 rounded-lg mr-16 mt-2" outlined tile width="250" height="200" >
         <v-icon x-large class="mr-16" >mdi-account-group</v-icon>
    <v-card-text>
      <p class="text-h5 text--primary mr-16 mt-4">العملاء </p>
    </v-card-text> 
    <div class="text-center "><v-btn rounded color="green darken-1" class="text-h6" dark type="submite">التفاصيل </v-btn></div>
        </v-card>
      </v-col>

    </v-row>

    <v-row>

      <v-col cols="6" md="4">
         <v-card class="pa-2 rounded-lg mr-16 mt-2" outlined tile width="250" height="200" >
         <v-icon x-large class="mr-16" >mdi-chart-box</v-icon>
    <v-card-text>
      <p class="text-h5 text--primary mr-14 mt-4">التحصيلات</p>
    </v-card-text>
    <div class="text-center "><v-btn rounded color="green darken-1" class="text-h6" dark type="submite">التفاصيل </v-btn></div>
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
         <v-card class="pa-2 rounded-lg mr-16 mt-2" outlined tile width="250" height="200" >
         <v-icon x-large class="mr-16" >mdi-cellphone-text</v-icon>
    <v-card-text>
      <p class="text-h5 text--primary mr-8 mt-4">التحصيلات المعلقة</p>
    </v-card-text>
    <div class="text-center "><v-btn rounded color="green darken-1" class="text-h6" dark type="submite">التفاصيل </v-btn></div>
        </v-card>
      </v-col>
    </v-row>
        <p class="text-h5 text--primary mr-5 mt-8 "><v-icon class="ml-4">mdi-calendar-clock </v-icon>أرصدة مقاربة الأنتهاء </p>
    <div>
  <v-data-table :headers="headers" :items="names" item-key="name" class="elevation-1" :search="search" :custom-filter="filterOnlyCapsText">
      <template v-slot:top>
        <v-text-field v-model="search" label="ابحث هنا" class="mx-4" color="green darken-1" reverse></v-text-field>
      </template>
    </v-data-table>
  </div>
  </v-container>
</Applayout>
</template>

<script>
import Applayout from '../layouts/Applayout.vue'
  export default {
    data () {
      return {
        search: '',
        Prices: '',
        names: [
          {
            name: 'امينة محمد',
            Prices: 159,
          },
          {
            name: 'صقر خالد',
            Prices: 237,
          },
          {
            name: 'امينة محمد',
            Prices: 159,
          },
          {
            name: 'صقر خالد',
            Prices: 237,
          },
          {
            name: 'امينة محمد',
            Prices: 159,
          },
          {
            name: 'صقر خالد',
            Prices: 237,
          },
        
        ],
      }
    },
    components:{
      Applayout  
    },
   computed: {
      headers () {
        return [
          {
            text: 'اسم الحساب',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: 'الرصيد',
            value: 'Prices',
            filter: value => {
              if (!this.Prices) return true

              return value < parseInt(this.Prices)
            },
          },
        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>
<style>

</style>