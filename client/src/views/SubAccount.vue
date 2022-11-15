<template>
  <applayout>
    <v-container>
      <v-card width="500" class="mb-5">
        <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
        <v-card-text class="text-h6"
          >رمز الحساب :{{ account.code }}</v-card-text
        >
        <v-card-text class="text-h6">
          اسم الحساب:{{ account.name }}</v-card-text
        >
        <v-card-text class="text-h6">نوع الحساب:{{ account.type }}</v-card-text>
        <v-card-text class="text-h6"
          >الحساب الاب :{{ account.parent }}</v-card-text
        >
        <v-card-text class="text-h6">دائن:{{ account.credit }}</v-card-text>
        <v-card-text class="text-h6">مدين:{{ account.debit }}</v-card-text>
        <v-card-text class="text-h6"
          >الوصف:{{ account.description }}</v-card-text
        >
        <v-card-text class="text-h6"
          >العملة:{{ account.currencyId }}</v-card-text
        >

        <v-dialog v-model="dialog" max-width="550px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green darken-1"
              class="mt-3 mr-8 mb-3 ml-6 text-h6"
              v-bind="attrs"
              v-on="on"
              dark
              >تحديث</v-btn
            >
          </template>

          <v-card dense shaped>
            <v-card-title class="d-flex justify-center"> تحديث</v-card-title>
            <v-card-text dir="ltr">
              <v-container>
                <v-form class="px-4">
                  <v-text-field
                    v-model="code"
                    label="رمز الحساب"
                    :error-messages="errors"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>

                  <v-text-field
                    v-model="name"
                    label="اسم الحساب"
                    :error-messages="errors"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>

                  <v-autocomplete
                    v-model="type"
                    :items="accountType"
                    label="نوع الحساب"
                    placeholder="اختار..."
                    :error-messages="errors"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>

                  <!-- <v-text-field v-model="parent" label=" الحساب الاب" outlined color="green darken-1" reverse dense shaped></v-text-field> -->

                  <v-textarea
                    v-model="description"
                    label="الوصف"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-textarea>

                  <v-autocomplete
                    v-model="currencyItem"
                    :items="currency"
                    :error-messages="errors"
                    @change="checkSelected"
                    item-text="name"
                    item-value="name"
                    label="العملة"
                    placeholder="اختار"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>

                  <div class="text-center mt-2">
                    <v-btn
                      color="green darken-1"
                      @click="updateAccount"
                      class="mt-3 text-h6 white--text"
                      >تحديث</v-btn
                    >
                  </div>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-btn
          color="green darken-1"
          type="submite"
          @click="deleteAccount"
          class="mt-3 mb-3 text-h6"
          dark
          >حذف</v-btn
        >
      </v-card>
    </v-container>
  </applayout>
</template>

<script>
import axios from "../plugins/axios";
import Applayout from "../layouts/Applayout.vue";

export default {
  components: {
    Applayout,
  },
  name: "SubAccount",
  data: () => ({
    currency: [],
    currencyItem: "",
    accountType: ["دائن", "مدين"],
    account: {
      code: "",
      name: "",
      type: "",
      parent: "",
      description: "",
      userId: "",
    },
  }),
  mounted() {
    this.getCurrency();
    this.getAccount();
  },
  methods: {
    async getCurrency() {
      await axios
        .get("/currency")
        .then((res) => {
          this.currency = res.data;
          console.log("cu", this.currency);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAccount() {
      const accountId = this.$route.params.accountId;
      console.log(accountId, "id");

      await axios
        .get(`account/${accountId}`)
        .then((res) => {
          this.account = res.data;
          console.log(this.account, "aaaaa");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateAccount() {
      const accountId = this.$route.params.accountId;
      const formData = {
        code: this.code,
        name: this.name,
        type: this.type,
        description: this.description,
        currencyId: this.currencyItem,
      };

      await axios
        .put(`account/${accountId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
          const toPath = this.$route.query.to || "/account";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(formData);
    },
    async deleteAccount() {
      const accountId = this.$route.params.accountId;
      await axios
        .delete(`account/${accountId}`)
        .then((res) => {
          console.log(res);
          const toPath = this.$route.query.to || "/account";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkSelected() {
      console.log(this.currencyItem);
    },
  },
};
</script>

<style></style>
