<template>
  <applayout>
    <v-container>
      <v-card width="500">
        <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
        <v-card-text dir="ltr">
          <v-form class="px-4">
            <v-text-field
              v-model="bond.bondsNumber"
              type="string"
              label="رقم السند"
              outlined
              color="green darken-1"
              reverse
              dense
              shaped
            ></v-text-field>
            <v-autocomplete
              v-model="bond.accountId"
              :items="accounts"
              @change="checkSelected"
              item-text="name"
              item-value="name"
              label="الحساب"
              placeholder="اختار"
              outlined
              color="green darken-1"
              reverse
              dense
              shaped
            ></v-autocomplete>
            <v-autocomplete
              v-model="bond.transferAccountId"
              :items="accounts"
              @change="checkSelected"
              item-text="name"
              item-value="name"
              label="الى حساب"
              placeholder="اختار"
              outlined
              color="green darken-1"
              reverse
              dense
              shaped
            ></v-autocomplete>
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
            <v-text-field
              v-model="bond.total"
              label=" المجموع"
              outlined
              color="green darken-1"
              reverse
              dense
              shaped
            ></v-text-field>
            <v-autocomplete
              v-model="currencyItem"
              :items="currency"
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
            <v-text-field
              v-model="bond.note"
              label=" ملاحظة"
              outlined
              color="green darken-1"
              reverse
              dense
              shaped
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-dialog v-model="dialog" max-width="550px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green darken-1"
              type="submite"
              class="mt-3 mr-8 mb-3 ml-6 text-h6"
              v-bind="attrs"
              v-on="on"
              dark
              >تحديث</v-btn
            >
          </template>

          <v-card dense shaped height="550">
            <v-card-title class="d-flex justify-center"> تحديث</v-card-title>
            <v-card-text>
              <v-container>
                <v-form class="px-4">
                  <v-text-field
                    v-model="bond.bondsNumber"
                    type="string"
                    label="رقم السند"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-autocomplete
                    v-model="bond.accountId"
                    :items="accounts"
                    @change="checkSelected"
                    item-text="name"
                    item-value="name"
                    label="الحساب"
                    placeholder="اختار"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
                  <v-autocomplete
                    v-model="bond.transferAccountId"
                    :items="accounts"
                    @change="checkSelected"
                    item-text="name"
                    item-value="name"
                    label="الى حساب"
                    placeholder="اختار"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
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
                  <v-autocomplete
                    v-model="currencyItem"
                    :items="currency"
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
                  <v-text-field
                    v-model="bond.note"
                    label=" ملاحظة"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <div class="text-center mt-2">
                    <v-btn
                      color="green darken-1"
                      @click="updateBond"
                      class="mt-3 text-h6 white--text"
                      >تحديث</v-btn
                    >
                  </div>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card></v-container
    >
  </applayout>
</template>

<script>
import axios from "../plugins/axios";
import Applayout from "../layouts/Applayout.vue";

import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "هذا الحقل مطلوب",
});

export default {
  components: {
    Applayout,
    ValidationProvider,
    ValidationObserver,
  },
  name: "SubBond",
  data: () => ({
    bondsNumber: "",
    accountId: "",
    transferAccountId: "",
    type: "",
    total: null,
    currencyId: "",
    currencyValue: null,
    note: "",
    entryId: "",
    userId: "",
    bond: {},
    accountType: ["دائن", "مدين"],

    currency: [],
    currencyValue: [],
    currencyItem: "",
    currencyValueItem: {},

    accounts: [],
    accountName: [],
    accountId: [],
    account1: "",
    transferAccountId: "",

    accountItem: "",
  }),
  mounted() {
    this.getBond();
    this.getAccount();
    this.getCurrency();
    this.getCurrencyValue();
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((err) => {
        if (err) {
          console.log("work");
          this.$router.push("/account");
        }
      });
    },
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
    async getCurrencyValue() {
      await axios.get("/currency_value").then((res) => {
        this.currencyValue = res.data;
        console.log(this.currencyValue);
      });
    },
    async getAccount() {
      await axios
        .get("/account")
        .then((res) => {
          this.accounts = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getBond() {
      const bondId = this.$route.params.bondId;
      console.log(bondId, "id");

      await axios
        .get(`bond/${bondId}`)
        .then((res) => {
          this.bond = res.data;
          this.account1 = res.data.accountId;
          console.log(this.bond, "hg");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateBond() {
      const bondId = this.$route.params.bondId;
      const formData = {
        bondsNumber: this.bond.bondsNumber,
        accountId: this.bond.accountId,
        transferAccountId: this.bond.transferAccountId,
        type: this.type,
        currencyId: this.currencyItem,
        note: this.bond.note,
      };
      await axios
        .put(`bond/${bondId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
          const toPath =
            this.$route.query.to || `/sub_entry/${this.bond.entryId}`;

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteBond() {
      const id = this.$route.params.bondId;
      await axios
        .delete(`bond/${id}`)
        .then((res) => {
          console.log(res);
          const toPath = this.$route.query.to || "/bonds";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkSelected() {
      console.log(this.currencyItem);
    },
    checkSelected() {
      console.log(this.accountItem);
    },
  },
};
</script>

<style></style>
