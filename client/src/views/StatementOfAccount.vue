<template>
  <applayout>
    <v-container>
      <v-row>
        <v-col cols="6" sm="12" md="8" lg="4" xs="12">
          <v-card
            elevation="3"
            class="mr-6 mt-5"
            width="400"
            height="850"
            dense
            shaped
          >
            <v-card-title class="d-flex justify-center"
              >تفاصيل العرض
            </v-card-title>
            <v-card-text dir="ltr">
              <v-autocomplete
                v-model="currency"
                :items="currency"
                label="خلال شهر"
                placeholder="اختار..."
                :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-text-field
                v-model="date"
                type="date"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-text-field>
              <v-autocomplete
                v-model="accountName"
                :items="currency"
                label="اسم الحساب"
                placeholder="اختار..."
                :rules="[() => !!accountName || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                label="كافة العملات"
                placeholder="اختار..."
                :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                label="كافة المستندات"
                placeholder="اختار..."
                :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-autocomplete
                v-model="status"
                :items="currency"
                label="الحالة "
                placeholder="اختار..."
                :rules="[() => !!status || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                label="كافة العملات"
                placeholder="اختار..."
                :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-autocomplete>

              <v-radio-group v-model="radios">
                <template v-slot:label>
                  <h3 class="d-flex mr-2 mb-2">نوع التقرير</h3>
                </template>
                <v-radio value="إجمالي">
                  <template v-slot:label>
                    <div><strong>إجمالي</strong></div>
                  </template>
                </v-radio>
                <v-radio value="تفصيلي">
                  <template v-slot:label>
                    <div><strong>تفصيلي</strong></div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="radios">
                <v-radio value=" بدون رصيد سابق">
                  <template v-slot:label>
                    <div><strong> بدون رصيد سابق</strong></div>
                  </template>
                </v-radio>
                <v-radio value="التجميع بالمستند">
                  <template v-slot:label>
                    <div><strong>التجميع بالمستند</strong></div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-card-text>
            <v-btn
              color="green lighten-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-7 text-h6"
              dark
              >عرض</v-btn
            >
            <v-btn
              color="green lighten-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-8 text-h6"
              dark
              >طباعة</v-btn
            >
            <v-btn
              color="green lighten-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-8 text-h6"
              dark
              >إكسل</v-btn
            >
          </v-card>
        </v-col>

        <v-col cols="4" sm="12" md="8" lg="4" xs="12">
          <v-card
            class="mr-16 mt-5"
            width="400"
            height="500"
            elevation="2"
            dense
            shaped
          >
            <v-card-title class="d-flex justify-center">
              كشف حساب
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
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
  name: "StatementOfAccount",
  data() {
    return {
      radios: "Duckduckgo",
    };
  },
};
</script>
