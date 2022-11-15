<template>
  <Applayout>
    <v-container>
      <v-row>
        <v-col>
          <v-card dense shaped width="500" class="mr-2 mt-2">
            <v-card-text>
              <v-card-title class="d-flex justify-center"
                >بيانات الحساب</v-card-title
              >
              <v-row>
                <v-col>
                  <v-form class="px-4">
                    <v-autocomplete
                      v-model="parentaccount"
                      label="حساب الاب"
                      placeholder="اختار..."
                      :rules="[() => !!parentaccount || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-autocomplete>
                    <v-text-field
                      v-model="accountName"
                      label="اسم الحساب"
                      type="string"
                      :rules="[() => !!accountName || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-textarea
                      v-model="Description"
                      label="الوصف"
                      :rules="[() => !!Description || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-textarea>
                  </v-form>
                </v-col>
                <v-col>
                  <v-form class="px-4">
                    <v-text-field
                      v-model="accountId"
                      label="رقم الحساب "
                      type="number"
                      :rules="[() => !!accountId || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-autocomplete
                      v-model="accounttype"
                      label="نوع الحساب"
                      placeholder="اختار..."
                      :rules="[() => !!accounttype || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-autocomplete>
                  </v-form>
                </v-col>
              </v-row>

              <v-btn
                color="green lighten-1"
                type="submite"
                @click="postAccount"
                class="mt-3 ml-4 mr-14 text-h6"
                dark
                >حفظ</v-btn
              >
              <v-btn
                color="green lighten-1"
                type="submite"
                @click="postAccount"
                class="mt-3 ml-4 text-h6"
                dark
                >تعديل</v-btn
              >
              <v-btn
                color="green lighten-1"
                type="submite"
                @click="postAccount"
                class="mt-3 ml-4 text-h6"
                dark
                >تحديث</v-btn
              >
              <v-btn
                color="green lighten-1"
                type="submite"
                @click="postAccount"
                class="mt-3 ml-4 text-h6"
                dark
                >حذف</v-btn
              >
            </v-card-text>
          </v-card></v-col
        >

        <v-col>
          <v-card dense shaped width="500" class="ml-2 mt-2">
            <v-card-text>
              <v-card-title class="d-flex justify-center"
                >شجرة الحسابات</v-card-title
              >
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="search"
                    label="ابحث هنا"
                    prepend-icon="mdi-magnify"
                    color="green darken-1"
                    reverse
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-btn
                    color="green darken-1"
                    class="text-h6 mt-4 mr-6"
                    dark
                    type="submite"
                  >
                    ابحث</v-btn
                  >
                </v-col>
              </v-row>
              <v-row> </v-row>
            </v-card-text> </v-card
        ></v-col>
      </v-row>
    </v-container>
  </Applayout>
</template>

<script>
import axios from "../plugins/axios";
import Applayout from "../layouts/Applayout.vue";
export default {
  components: {
    Applayout,
  },
  name: "AccountTree",
  data: () => ({
    valid: true,
    nameRules: [
      (v) => !!v || "هذا الحقل مطلوب",
      (v) => (v && v.length >= 1) || "",
    ],
    parentaccount: "",
    accountName: "",
    Description: "",
    accountId: "",
    accounttype: "",
  }),
  methods: {
    async getAccountTree() {
      await axios
        .get("/account")
        .then((res) => {
          this.account = res.data;
          console.log(this.account);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
