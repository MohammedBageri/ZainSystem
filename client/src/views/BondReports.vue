<template>
  <applayout>
    <v-container>
      <v-row>
        <v-col cols="6" sm="12" md="8" lg="4" xs="12">
          <v-card
            elevation="3"
            class="mr-4 mt-5"
            width="400"
            height="570"
            dense
            shaped
          >
            <v-card-title class="d-flex justify-center"
              >تفاصيل العرض
            </v-card-title>
            <v-card-text dir="ltr">
              <v-text-field
                label="المستخدم"
                color="green darken-1"
                v-model="username"
                outlined
                :rules="[() => !!username || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                reverse
                dense
                shaped
              />
              <v-text-field
                v-model="code"
                label="الحساب"
                outlined
                :rules="[() => !!code || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-text-field>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                @change="checkSelected"
                item-text="name"
                item-value="_id"
                label="خلال شهر"
                placeholder="اختار..."
                :rules="[() => !!accounttype || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="blue-grey darken-3"
                reverse
                dense
                shaped
              ></v-autocomplete>
              <v-text-field
                v-model="dete"
                type="date"
                outlined
                :rules="[() => !!dete || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                color="green darken-1"
                reverse
                dense
                shaped
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
                dense
                shaped
              ></v-autocomplete>
              <v-autocomplete
                v-model="currency"
                :items="currency"
                @change="checkSelected"
                item-text="name"
                item-value="_id"
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
            </v-card-text>
            <v-btn
              color="green darken-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-7 text-h6"
              dark
              >عرض</v-btn
            >
            <v-btn
              color="green darken-1"
              type="submite"
              @click="postAccount"
              class="mt-3 mr-8 text-h6"
              dark
              >طباعة</v-btn
            >
            <v-btn
              color="green darken-1"
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
              تقرير السندات
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
  components: { Applayout },
  name: "BondReports",
  valid: true,
  nameRules: [
    (v) => !!v || "هذا الحقل مطلوب",
    (v) => (v && v.length >= 1) || "",
  ],
};
</script>
