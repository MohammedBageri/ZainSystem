<template>
  <v-app-bar app class="green darken-1">
    <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
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
          <v-list-item-icon class="ml-4"
            ><v-icon>{{ noti.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title class="ml-4">{{ noti.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu bottom offset->
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon>
          <v-icon color="white" dark v-bind="attrs" v-on="on"
            >mdi-menu-open</v-icon
          >
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(side, i) in sides" :key="i" @click="() => {}">
          <v-list-item-icon class="ml-4"
            ><v-icon>{{ side.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title class="ml-4">{{ side.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",
  data: () => ({
    drawer: false,
    mini: true,
    sides: [
      {
        icon: "mdi-solar-panel-large",
        title: "التحصيلات",
      },
      {
        icon: "mdi-currency-usd",
        title: "اسعار العملات",
      },
      {
        icon: "mdi-cellphone-text",
        title: "كشف الحساب",
      },
      {
        icon: "mdi-book-cog",
        title: "تقرير التحصيلات",
      },
    ],
    notis: [
      {
        icon: "mdi-hand-extended",
        title: "الطلبات",
      },
      {
        icon: "mdi-account-lock-open",
        title: "طلبات فتح الحساب ",
      },
    ],
  }),
};
</script>

<style></style>
