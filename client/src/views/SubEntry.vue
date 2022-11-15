<template>
  <applayout>
    <v-container>
      <v-card width="600" dense shaped>
        <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
        <v-dialog v-model="dialog" max-width="550px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green darken-1"
              :v-if="!entry.entryDetail"
              dark
              v-bind="attrs"
              v-on="on"
              class="mr-3 mb-3"
            >
              إضافة جديد <v-icon>mdi-plus</v-icon></v-btn
            >
          </template>

          <v-card dense shaped>
            <v-card-title class="d-flex justify-center"
              >إضافة جديد</v-card-title
            >
            <v-card-text dir="ltr">
              <v-container>
                <v-form class="px-4">
                  <h2 dir="rtl">الدائن</h2>
                  <v-autocomplete
                    v-model="currencyValueItem"
                    type="number"
                    label="قيمة العملة"
                    :items="currencyValue"
                    @change="checkSelected"
                    item-text="value"
                    item-value="_id"
                    :rules="[() => !!currencyvalue || 'هذا الحقل مطلوب']"
                    :error-messages="errorMessages"
                    outlined
                    color="blue-grey darken-3"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
                  <v-autocomplete
                    v-model="currencyItem"
                    type="number"
                    label=" العملة"
                    :items="currency"
                    @change="checkSelected"
                    item-text="name"
                    item-value="_id"
                    :rules="[() => !!currencyItem || 'هذا الحقل مطلوب']"
                    :error-messages="errorMessages"
                    outlined
                    color="blue-grey darken-3"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
                  <h2 dir="rtl">المدين</h2>
                  <v-autocomplete
                    v-model="currencyValueItem"
                    type="number"
                    label="قيمة العملة"
                    :items="currencyValue"
                    @change="checkSelected"
                    item-text="value"
                    item-value="_id"
                    :rules="[() => !!currencyvalue || 'هذا الحقل مطلوب']"
                    :error-messages="errorMessages"
                    outlined
                    color="blue-grey darken-3"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>
                  <v-autocomplete
                    v-model="currencyItem"
                    type="number"
                    label=" العملة"
                    :items="currency"
                    @change="checkSelected"
                    item-text="name"
                    item-value="_id"
                    :rules="[() => !!currencyItem || 'هذا الحقل مطلوب']"
                    :error-messages="errorMessages"
                    outlined
                    color="blue-grey darken-3"
                    reverse
                    dense
                    shaped
                  ></v-autocomplete>

                  <div class="text-center mt-8">
                    <v-btn
                      color="green darken-1"
                      type="submit"
                      @click="createEntryDetail"
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
        <v-container>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>الدائن</th>
                  <th>المدين</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in entry.entryDetail" :key="item.name">
                  <td>{{ item.cridet }}</td>
                  <td>{{ item.debit }}</td>
                  <td>{{ item.currencyId }}</td>
                  <td>{{ item.currencyValue }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
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
  name: "SubEntry",
  data: () => ({
    currency: [],
    currencyValue: [],
    currencyItem: {},
    currencyValueItem: {},
    entry: {
      entryDetail: [],
    },
    entryNumber: 0,
    note: "",
    cridet: null,
    debit: null,
    is: false,
    cridet1: null,
    debit1: null,
  }),
  mounted() {
    this.getEntry();

    this.getCurrencyValue();
    this.getCurrency();
  },
  methods: {
    async getEntry() {
      const entryId = this.$route.params.entryId;
      console.log(entryId, "id");

      await axios
        .get(`/entry/${entryId}`)
        .then((res) => {
          this.entry = res.data;
          if (this.entry.entryDetail) {
            this.is = true;
          }
          console.log(this.entry, "aaaaa");
        })
        .catch((error) => {
          console.log(error);
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
    async updateEntry() {
      const entryId = this.$route.params.entryId;
      const formData = {
        entryNumber: this.entryNumber,
        note: this.note,
        currencyValue: this.currencyValue,
        currencyId: this.currencyId,
      };
      await axios
        .patch(`entry/${entryId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createEntryDetail() {
      const entryId = this.$route.params.entryId;
      const formData = {
        entryDetail: [
          {
            cridet: this.cridet,
            debit: this.debit,
          },
          {
            cridet: this.cridet1,
            debit: this.debit1,
          },
        ],
      };
      console.log(formData);
      await axios
        .put(`entry/${entryId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
          const toPath = this.$route.query.to || "/entry";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateEntryDetail() {
      const entryId = this.$route.params.entryId;
      const formData = {
        entryDetail: {
          cridet: this.cridet,
          debit: this.debit,
          currencyValue: this.currencyValueItem,
          currencyId: this.currencyItem,
        },
      };
      await axios
        .put(`entry/${entryId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteEntry() {
      const id = this.$route.params.entryId;
      await axios
        .delete(`entry/${id}`)
        .then((res) => {
          console.log(res.data);
          const toPath = this.$route.query.to || "/entry";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteEntryDetail() {
      const id = this.$route.params.entryId;
      await axios
        .delete(`/sub_entry/:entryId/${id}`)
        .then((res) => {
          console.log(res.data);
          const toPath = this.$route.query.to || "//sub_entry/:entryId";

          this.$router.push(toPath);
        })
        .catch((error) => {
          console.log(error);
        });
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
