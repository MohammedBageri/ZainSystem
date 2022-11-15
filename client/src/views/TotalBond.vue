<template>
  <applayout>
    <v-container>
      <v-row>
        <v-col cols="6" sm="12" md="8" lg="4" xs="12">
          <v-card elevation="3" class="mr-4 mt-2" width="400" height="800">
            <v-card-title class="d-flex justify-center"
              >تفاصيل العرض
            </v-card-title>
            <v-card-text dir="ltr">
              <v-text-field
                label="المستخدم"
                color="green darken-1"
                v-model="username"
                outlined
                reverse
              />
              <v-text-field
                v-model="Code"
                label="الحساب"
                outlined
                color="green darken-1"
                reverse
              ></v-text-field>
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
              ></v-autocomplete>
              <v-text-field
                v-model="Code"
                label=""
                outlined
                color="green darken-1"
                reverse
              ></v-text-field>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                label="سند قبض"
                placeholder="اختار..."
                :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
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
              ></v-autocomplete>

              <v-radio-group v-model="radios">
                <v-radio value="التجميع بالحساب">
                  <template v-slot:label>
                    <div><strong>تجميع بالحساب</strong></div>
                  </template>
                </v-radio>
                <v-radio value="التجميع بالمستخدم">
                  <template v-slot:label>
                    <div><strong>التجميع بالمستخدم</strong></div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-card-text>
            <v-btn
              color="green lighten-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-10 text-h6"
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
          <v-card class="mr-16 mt-2" width="400" height="500" elevation="2">
            <v-card-title class="d-flex justify-center">
              إجمالي السندات
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
  name: "TotalBond",
  data() {
    return {
      radios: "Duckduckgo",
    };
  },
};
</script>
