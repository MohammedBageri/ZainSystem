<template>
  <applayout>
    <v-container>
      <v-row>
        <v-col>
          <v-dialog v-model="dialog" max-width="550px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green darken-1" dark v-bind="attrs" v-on="on"
                >إضافة جديد <v-icon>mdi-plus</v-icon></v-btn
              >
              <v-btn color="green darken-1" class="mr-6" dark>طباعة </v-btn>
              <v-btn color="green darken-1" class="mr-6" dark> إكسل</v-btn>
            </template>

            <v-card dense shaped>
              <v-card-title class="d-flex justify-center"
                >إضافة جديد</v-card-title
              >
              <v-card-text>
                <v-container>
                  <v-form class="px-4">
                    <v-text-field
                      v-model="currency"
                      label=" العملة"
                      type="number"
                      :rules="[() => !!currency || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="ExchangeRate"
                      label="سعر التحويل"
                      type="string"
                      :rules="[() => !!ExchangeRate || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="sellingPrice"
                      label=" سعر البيع"
                      type="string"
                      :rules="[() => !!sellingPrice || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="buyingPrice"
                      label=" سعر الشراء"
                      type="string"
                      :rules="[() => !!buyingPrice || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="code"
                      label=" الرمز"
                      type="string"
                      :rules="[() => !!code || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="note"
                      label=" ملاحظات"
                      type="string"
                      :rules="[() => !!note || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="Update"
                      label=" اخر وقت للتحديث"
                      type="string"
                      :rules="[() => !!Update || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user"
                      label=" المستخدم "
                      type="string"
                      :rules="[() => !!user || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="date"
                      label=" وقت الإنشاء"
                      type="date"
                      :rules="[() => !!date || 'هذا الحقل مطلوب']"
                      :error-messages="errorMessages"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <div class="text-center mt-8">
                      <v-btn
                        color="green darken-1"
                        type="submite"
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
        </v-col>
      </v-row>

      <v-simple-table class="mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th>العملة</th>
              <th>سعر التحويل</th>
              <th>سعر البيع</th>
              <th>سعر الشراء</th>
              <th>الرمز</th>
              <th>ملاحظات</th>
              <th>اخر وقت للتحديث</th>
              <th>المستخدم</th>
              <th>وقت الإنشاء</th>
              <th>
                <router-link to="#">
                  <v-btn icon><v-icon>mdi-eye</v-icon></v-btn>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
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
export default {
  components: {
    Applayout,
  },
  name: "ExchangeRates",
};
</script>

<style></style>
