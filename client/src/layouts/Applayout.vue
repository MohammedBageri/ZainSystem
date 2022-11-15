<template>
  <v-app class="grey lighten-4" dir="rtl">
      <SideBar />
    <v-main>
    <div>
     <v-app-bar app class="green darken-1 topToolbar" >
      <v-app-bar-nav-icon @click="$store.state.drawer = true" class="mr-2 hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">نوفل سوفت</v-toolbar-title>

      <v-spacer></v-spacer>
       <v-btn icon>
        <v-icon color="white">mdi-email</v-icon>
      </v-btn>

       <v-menu bottom offset->
        <template v-slot:activator="{ on, attrs }">
         <v-btn icon>
        <v-icon color="white" dark v-bind="attrs" v-on="on">mdi-bell</v-icon>
      </v-btn>
        </template>
        
        <v-list>
          <v-list-item v-for="(noti, i) in notis" :key="i" @click="() => {}">
            <v-list-item-icon class="ml-4"><v-icon v-text="icon">{{ noti.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title class="ml-4">{{ noti.title }}</v-list-item-title>
            
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu bottom offset->
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon>
        <v-icon color="white" dark v-bind="attrs" v-on="on" class="mr-3">mdi-menu-open</v-icon>
        </v-btn>
        </template>
        
        <v-list>
          <v-list-item v-for="(side, i) in sides" :key="i" @click="() => {}">
            <v-list-item-icon class="ml-4"><v-icon v-text="icon">{{ side.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title class="ml-4">{{ side.title }}</v-list-item-title>
            
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    </div>
    <div class="grey lighten-4 content">
      <slot />
    </div>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
   data: () => ({
    token:"",
    valid: true,
    nameRules: [
        v => !!v || 'هذا الحقل مطلوب',
        v => (v && v.length >= 1) || '',
      ],
    drawer: false,
        sides: [
          {
            
            icon: 'mdi-solar-panel-large',
            title: 'التحصيلات'
             
          },
          {
            icon: 'mdi-currency-usd',
            title: 'اسعار العملات'
          },
          {
            icon: 'mdi-cellphone-text',
            title: 'كشف الحساب'
          },
          {
            icon: 'mdi-book-cog',
            title: 'تقرير التحصيلات'
          },
        ],
         notis: [
          {
            
            icon: 'mdi-hand-extended',
            title: 'الطلبات'
             
          },
           {
            
            icon: 'mdi-account-lock-open',
            title: 'طلبات فتح الحساب '
             
          },
          ]
  }),
  mounted(){
    this.auth()
  },
  methods:{
    auth(){
       this.token = this.$store.state.token
    }
  }
};
</script>
