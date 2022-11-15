<template>
  <Applayout>
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
          <v-card-text>
            <v-card-title class="d-flex justify-center"
              >إضافة جديد</v-card-title
            >
            <v-container>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form class="px-4" ref="form" @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="code"
                      type="string"
                      label="الكود "
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
                      v-model="name"
                      type="string"
                      label="الاسم"
                      :error-messages="errors"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </validation-provider>

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

                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="partName"
                      type="string"
                      label="الاسم الاخير "
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
                      @click="postCurrency"
                      class="mt-1 text-h6 white--text"
                      :disabled="invalid"
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
          <thead class="">
            <tr>
              <th>الكود</th>
              <th>الاسم</th>
              <th>ملاحظة</th>
              <th>الاسم الاخير</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in currency" :key="item.name">
              <td>{{ item.code }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.note }}</td>
              <td>{{ item.partName }}</td>
              <td>
                <v-btn @click="Subcurrency(item._id)" icon
                  ><v-icon>mdi-eye</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </Applayout>
</template>

<script>
import axios from "../plugins/axios";
import Applayout from "../layouts/Applayout.vue";

import { required, digits, email, max, regex } from "vee-validate/dist/rules";
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

  name: "Currency",
  data: () => {
    return {
      search: "",
      code: "",
      name: "",
      note: "",
      partName: "",
      currency: [],
      dialog: false,
    };
  },
  mounted() {
    this.getCurrency();
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((err) => {
        if (err) {
          console.log("work");
          this.$router.push("/currency");
        }
      });
    },
    async getCurrency() {
      await axios.get("/currency").then((res) => {
        this.currency = res.data;
        console.log(this.currency);
      });
    },
    async postCurrency() {
      const formData = {
        code: this.code,
        name: this.name,
        note: this.note,
        partName: this.partName,
      };
      console.log("formData", formData);
      await axios
        .post("/currency/create", formData)
        .then((res) => {
          console.log(res.data);
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    Subcurrency(id) {
      const toPath = this.$route.query.to || `/sub_currency/${id}`;

      this.$router.push(toPath);
    },
  },
};
</script>

<style></style>
