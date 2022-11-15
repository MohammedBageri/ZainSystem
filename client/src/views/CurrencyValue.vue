<template>
  <applayout>
    <v-container>
      <v-dialog v-model="dialog" max-width="550px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green darken-1"
            dark
            v-bind="attrs"
            v-on="on"
            class="ml-6"
          >
            إضافة جديد<v-icon>mdi-plus</v-icon></v-btn
          >
          <v-btn color="green darken-1" dark>
            طباعة<v-icon class="mr-2">mdi-printer</v-icon></v-btn
          >
        </template>

        <v-card dense shaped>
          <v-card-title class="d-flex justify-center">إضافة جديد</v-card-title>
          <v-card-text dir="ltr">
            <v-container>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form class="px-4" ref="form" @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
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
                    ></v-autocomplete
                  ></validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="value"
                      type="number"
                      label="القيمة"
                      :error-messages="errors"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="saling"
                      type="number"
                      label="سعر البيع"
                      :error-messages="errors"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="buying"
                      type="number"
                      label=" سعر الشراء"
                      :error-messages="errors"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </validation-provider>

                  <div class="text-center mt-2">
                    <v-btn
                      color="green darken-1"
                      type="submit"
                      @click="postCurrencyValue"
                      :disabled="invalid"
                      class="mt-3 text-h6 white--text"
                      >إضافة</v-btn
                    >
                  </div>
                </v-form>
              </validation-observer>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-simple-table class="mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th>العملة</th>
              <th>القيمة</th>
              <th>سعر البيع</th>
              <th>سعر الشراء</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in currencyValue" :key="item.name">
              <td>{{ item.currencyID }}</td>
              <td>{{ item.value }}</td>
              <td>{{ item.saling }}</td>
              <td>{{ item.buying }}</td>
              <td>
                <v-btn @click="SubCurrencyValue(item._id)" icon
                  ><v-icon>mdi-eye</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </applayout>
</template>

<script>
import Applayout from "../layouts/Applayout.vue";
import axios from "../plugins/axios";

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
  name: "Currencyvalue",
  data: () => ({
    currencyID: "",
    value: null,
    saling: null,
    buying: null,
    currencyValue: [],
    currencyItem: "",
    currency: [],
  }),
  mounted() {
    this.getCurrencyValue();
    this.getCurrency();
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((err) => {
        if (err) {
          console.log("work");
          this.$router.push("/currency_value");
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
      await axios
        .get("/currency_value")
        .then((res) => {
          this.currencyValue = res.data;
          console.log("cu", this.currencyValue);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SubCurrencyValue(id) {
      const toPath = this.$route.query.to || `/sub_currency_value/${id}`;

      this.$router.push(toPath);
    },
    async postCurrencyValue() {
      const formData = {
        currencyID: this.currencyItem,
        value: this.value,
        saling: this.saling,
        buying: this.buying,
      };
      await axios
        .post("/currency_value/create", formData)
        .then((res) => {
          console.log(res.data);
          this.$router.go();
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
