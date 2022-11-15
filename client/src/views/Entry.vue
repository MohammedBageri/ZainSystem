<template>
  <applayout>
    <v-container>
      <v-row>
        <v-col>
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
              <v-card-title class="d-flex justify-center"
                >إضافة جديد</v-card-title
              >
              <v-card-text dir="ltr">
                <v-container>
                  <validation-observer ref="observer" v-slot="{ invalid }">
                    <v-form class="px-4" ref="form" @submit.prevent="submit">
                      <validation-provider
                        v-slot="{ errors }"
                        :rules="{ required: true }"
                      >
                        <v-text-field
                          v-model="entryNumber"
                          label="رقم الادخال"
                          type="number"
                          :error-messages="errors"
                          outlined
                          color="green darken-1"
                          reverse
                          dense
                          shaped
                        ></v-text-field>
                      </validation-provider>

                      <validation-provider>
                        <v-text-field
                          v-model="note"
                          type="string"
                          label="ملاحظة"
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
                        <v-autocomplete
                          v-model="currencyItem"
                          label="العملة"
                          :items="currency"
                          @change="checkSelected"
                          :error-messages="errors"
                          item-text="name"
                          item-value="_id"
                          outlined
                          color="green darken-1"
                          reverse
                          dense
                          shaped
                        ></v-autocomplete>
                      </validation-provider>

                      <div class="text-center mt-8">
                        <v-btn
                          color="green darken-1"
                          type="submit"
                          :disabled="invalid"
                          @click="postEntry"
                          class="mt-3 text-h6 white--text"
                          >التالي</v-btn
                        >
                      </div>
                    </v-form>
                  </validation-observer>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-simple-table class="mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th>رقم الإدخال</th>
              <th>ملاحظة</th>
              <th>العملة</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in entry" :key="item.name">
              <td>{{ item.entryNumber }}</td>
              <td>{{ item.note }}</td>
              <td>{{ item.currencyId }}</td>
              <td>
                <v-btn @click="subEntry(item._id)" icon
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
  name: "Entry",
  data: () => ({
    entryId: null,
    entryNumber: "",
    note: "",

    currency: [],
    currencyValue: [],
    currencyItem: "",
    currencyValueItem: "",

    currencyId: "",
    entryDetail: {
      cridet: null,
      debit: null,
      currencyId: "",
    },
    entry: [],
  }),
  mounted() {
    this.getEntry();

    // this.getCurrencyValue()
    this.getCurrency();
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((err) => {
        if (err) {
          console.log("work");
          this.$router.push("/entry");
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

    async getEntry() {
      await axios
        .get("/entry")
        .then((res) => {
          this.entry = res.data;
          console.log(this.entry);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async postEntry() {
      const formData = {
        entryNumber: this.entryNumber,
        note: this.note,
        currencyId: this.currencyItem,
      };
      await axios
        .post("/entry/create", formData)
        .then((res) => {
          this.r = res.data;
          console.log(res.data);
          const toPath = this.$route.query.to || `/sub_bond/${res.data._id}`;

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async updateEntry() {
      const formData = {
        entryDetail: {
          cridet: this.entryDetail.cridet,
          debit: this.entryDetail.debit,
          currencyValue: this.entryDetail.currencyValue,
          currencyId: this.entryDetail.currencyId,
        },
      };
      await axios
        .put("/entry/635696024a6e4cf70992d22b", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    subEntry(id) {
      const toPath = this.$route.query.to || `/sub_entry/${id}`;

      this.$router.push(toPath);
    },
    checkSelected() {
      console.log(this.currencyValueItem);
    },
    checkSelected() {
      console.log(this.currencyItem);
    },
  },
};
</script>

<style></style>
