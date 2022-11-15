<template>
  <applayout>
    <v-container>
      <v-card width="500" dense shaped>
        <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
        <v-card-text class="text-h6">
          العملة :{{ currencyValue.currencyID }}</v-card-text
        >
        <v-card-text class="text-h6">
          القيمة:{{ currencyValue.value }}</v-card-text
        >
        <v-card-text class="text-h6"
          >المبيعات:{{ currencyValue.saling }}</v-card-text
        >
        <v-card-text class="text-h6">
          المشتريات:{{ currencyValue.buying }}</v-card-text
        >

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

          <v-card dense shaped height="450">
            <v-card-title class="d-flex justify-center"> تحديث</v-card-title>
            <v-card-text dir="ltr">
              <v-container>
                <v-form class="px-4">
                  <v-autocomplete
                    v-model="currencyValue.currencyItem"
                    type="string"
                    label=" العملة"
                    :items="currency"
                    @change="checkSelected"
                    item-text="name"
                    item-value="name"
                    outlined
                    color="blue-grey darken-3"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
                  <v-text-field
                    v-model="currencyValue.value"
                    type="number"
                    label="القيمة"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-text-field
                    v-model="currencyValue.saling"
                    type="number"
                    label=" المبيعات"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-text-field
                    v-model="currencyValue.buying"
                    type="number"
                    label=" المشتريات"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <div class="text-center mt-8">
                    <v-btn
                      color="green darken-1"
                      type="submit"
                      @click="updateCurrencyValue"
                      class="mt-3 text-h6"
                      dark
                      >التالي</v-btn
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
          @click="deleteCurrencyValue"
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
  name: "SubCurrencyValue",
  data: () => {
    return {
      currencyID: "",
      value: "",
      saling: "",
      currencyValue: {},
      buying: "",
      currency: [],
      currencyItem: "",
      dialog: false,
    };
  },
  mounted() {
    this.getCurrency();
    this.getcurrencyValue();
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
    async getcurrencyValue() {
      const CurrencyValueId = this.$route.params.CurrencyValueId;
      await axios.get(`/currency_value/${CurrencyValueId}`).then((res) => {
        this.currencyValue = res.data;
        console.log(this.currencyValue, "cc");
      });
    },

    async updateCurrencyValue() {
      const CurrencyValueId = this.$route.params.CurrencyValueId;
      const formData = {
        currencyID: this.currencyValue.currencyItem,
        value: this.currencyValue.value,
        nosalingte: this.currencyValue.saling,
        buying: this.currencyValue.buying,
      };
      await axios
        .put(`currency_value/${CurrencyValueId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
          const toPath = this.$route.query.to || "/currency_value";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteCurrencyValue() {
      const id = this.$route.params.CurrencyValueId;
      await axios
        .delete(`currency_value/${id}`)
        .then((res) => {
          console.log(res);
          const toPath = this.$route.query.to || "/currency_value";

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
