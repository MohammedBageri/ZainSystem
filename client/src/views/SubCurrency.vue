<template>
  <applayout>
    <v-container>
      <v-card width="500" dense shaped>
        <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
        <v-card-text class="text-h6"> الكود :{{ currency.code }}</v-card-text>
        <v-card-text class="text-h6"> الاسم:{{ currency.name }}</v-card-text>
        <v-card-text class="text-h6">ملاحظة:{{ currency.note }}</v-card-text>
        <v-card-text class="text-h6"
          >الاسم الاخير:{{ currency.partName }}</v-card-text
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
            <v-card-text>
              <v-container>
                <v-form class="px-4">
                  <v-text-field
                    v-model="currency.code"
                    type="string"
                    label=" الكود"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-text-field
                    v-model="currency.name"
                    type="string"
                    label="الاسم"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-text-field
                    v-model="currency.note"
                    type="string"
                    label=" ملاحظة"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>
                  <v-text-field
                    v-model="currency.partName"
                    type="string"
                    label="الاسم الاخير "
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
                      @click="updateCurrency"
                      class="mt-3 text-h6"
                      dark
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
          @click="deleteCurrency"
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
  name: "SubCurrency",
  data: () => {
    return {
      search: "",
      code: "",
      name: "",
      note: "",
      partName: "",
      currency: {},
      dialog: false,
    };
  },
  mounted() {
    this.getCurrency();
  },
  methods: {
    async getCurrency() {
      const currncyId = this.$route.params.currncyId;
      await axios.get(`/currency/${currncyId}`).then((res) => {
        this.currency = res.data;
        console.log(this.currency);
      });
    },

    async updateCurrency() {
      const currncyId = this.$route.params.currncyId;
      const formData = {
        code: this.currency.code,
        name: this.currency.name,
        note: this.currency.note,
        partName: this.currency.partName,
      };
      await axios
        .put(`currency/${currncyId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
          const toPath = this.$route.query.to || "/currency";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteCurrency() {
      const currncyId = this.$route.params.currncyId;
      await axios
        .delete(`currency/${currncyId}`)
        .then((res) => {
          console.log(res);
          const toPath = this.$route.query.to || "/currency";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
