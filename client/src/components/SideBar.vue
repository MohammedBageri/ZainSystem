<template>
  <div>
    <v-navigation-drawer right absolute app class="green darken-1" :class="navCss" v-model="$store.state.drawer"
      style="z-index: 2; height: 100%">
      <v-menu bottom offset->
          <template v-slot:activator="{ on, attrs }">
            <v-list-item class="px-2">
             <v-list-item-avatar class="p-0" v-bind="attrs" v-on="on">
          <svg id="user-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_1" data-name="Group 1">
              <path id="Path_1" data-name="Path 1" d="M20,0A20,20,0,1,0,40,20,19.993,19.993,0,0,0,20,0ZM30.292,31.78a15.641,15.641,0,0,1-20.582,0,1.427,1.427,0,0,1-.457-1.359c.985-4.81,4.049-8.6,7.948-9.852a7.536,7.536,0,0,1-3.432-6.54c0-4.043,2.79-7.32,6.231-7.32s6.231,3.277,6.231,7.32A7.536,7.536,0,0,1,22.8,20.569c3.9,1.248,6.964,5.041,7.949,9.851A1.428,1.428,0,0,1,30.292,31.78Z" fill="white"/>
            </g></svg>
            </v-list-item-avatar>

            <v-list-item-title class="white--text mr-3">حمزة</v-list-item-title>
            </v-list-item>
          </template>
          
          <!-- <v-list>
            <v-list-item v-for="(user, i) in users" :key="i" @click="() => {}">
              <v-list-item-icon><v-icon v-text="icon">{{user.icon}}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ user.title }}</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>

      <v-divider></v-divider>

       <v-list>
      
          <v-list-item  to="/control_panel"  class="white--text" >
            <v-list-item-icon>
              <v-icon color="white">mdi-solar-panel-large</v-icon>
            </v-list-item-icon>
            <!-- <router-link to="/control_panel"> -->

            <v-list-item-title class="mr-3">لوحة المراقبة</v-list-item-title>
            <!-- </router-link> -->
          </v-list-item>

          <v-list-group :value="false" prepend-icon="mdi-laptop" color="white">
            <template v-slot:activator>
              <v-list-item-title class="mr-3 white--text">إدارة الحسابات</v-list-item-title>
            </template>

            <v-list-group :value="false" no-action sub-group color="white">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="white--text">التهيئة</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(itme, i) in initialization" :key="i" link :to="itme.link">
                <v-list-item-title class="white--text mr-8">{{itme.title}}</v-list-item-title>
              </v-list-item>
            </v-list-group>

            
          

          </v-list-group>

        </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    navCss: "",
    initialization: [
    
      {title:"دليل الحسابات",link:"/account"},
      {title:"اسعار العملات", link:"/currency_value"},
      {title:"دليل العملات", link:"/currency"},
      {title:" السندات", link:"/bonds"},
      {title:" إضافة سندات", link:"/entry"},
      
    ],
    // users: [
    //   {
    //     icon: "mdi-account-cog",
    //     title: "الملف الشخصي",
    //   },
    //   {
    //     icon: "mdi-logout",
    //     title: "تسجيل الخروج",
    //   },
    // ],
  }),
};
</script>