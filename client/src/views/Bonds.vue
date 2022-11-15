<template>
  <applayout>
    <v-container>
      <!-- <v-dialog v-model="dialog" persistent max-width="550px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn color="green darken-1" dark v-bind="attrs" v-on="on" class="ml-6"> إضافة جديد  <v-icon>mdi-plus</v-icon></v-btn>
        <v-btn color="green darken-1" dark> اكسل</v-btn>
      </template> 

      <v-card >
        <v-card-text>
          <v-container >
            <v-form class="px-4">
       <v-text-field v-model="bondsNumber" label="الاسم" outlined color="green darken-1" reverse></v-text-field>
       <v-text-field v-model="accountId"  type="string" label="رقم تحويل الحساب"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="transferAccountId"  type="string" label="رقم تحويل اليه"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="type" type="string" label="النوع" outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="total" type="number" label="المجموع" :rules="[() => !!total || 'هذا الحقل مطلوب']" :error-messages="errorMessages"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="currencyId" type="number" label="رقم العملة" :rules="[() => !!currencyId || 'هذا الحقل مطلوب']" :error-messages="errorMessages"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="currencyValue" type="string" label="قيمة العملة" :rules="[() => !!currencyValue || 'هذا الحقل مطلوب']" :error-messages="errorMessages"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="note" type="string" label="ملاحظة" :rules="[() => !!note || 'هذا الحقل مطلوب']" :error-messages="errorMessages" outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="entryId" type="number" label="رقم الادخال" :rules="[() => !!entryId || 'هذا الحقل مطلوب']" :error-messages="errorMessages"  outlined color="green darken-1" reverse></v-text-field>
      <v-text-field v-model="userId" type="number" label="رقم المستخدم" :rules="[() => !!userId || 'هذا الحقل مطلوب']" :error-messages="errorMessages"  outlined color="green darken-1" reverse></v-text-field>
      
    <div class="text-center mt-2">
    <v-btn color="green darken-1" @click="postBond" class="mt-3 text-h6" dark >التالي</v-btn></div>
    </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog> -->

      <v-simple-table class="mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th>رقم السند</th>
              <th>رقم الحساب</th>
              <th>رقم تحويل الحساب</th>
              <th>النوع</th>
              <th>المجموع</th>
              <th>رقم العملة</th>
              <th>قيمة العملة</th>
              <th>ملاحظة</th>
              <th>المستخدم</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in bond" :key="item.name">
              <td>{{ item.bondsNumber }}</td>
              <td>{{ item.accountId }}</td>
              <td>{{ item.transferAccountId }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.total }}</td>
              <!-- <td>{{ item.total}}</td> -->
              <td>{{ item.currencyId }}</td>
              <td>{{ item.currencyValue }}</td>
              <td>{{ item.note }}</td>
              <td>{{ item.userId }}</td>
              <td>
                <v-btn @click="SubBond(item._id)" icon
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
export default {
  components: {
    Applayout,
  },
  name: "Bonds",
  data: () => ({
    bondsNumber: "",
    accountId: "",
    transferAccountId: "",
    type: "",
    total: null,
    currencyId: "",
    currencyValue: null,
    note: "",
    entryId: "",
    userId: "",
    bond: [],
  }),
  mounted() {
    this.getBond();
  },
  methods: {
    async getBond() {
      await axios
        .get("/bond")
        .then((res) => {
          this.bond = res.data;
          console.log(this.bond);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async postBond() {
      const formData = {
        bondsNumber: this.bondsNumber,
        accountId: this.accountId,
        transferAccountId: this.transferAccountId,
        currencyId: this.currencyId,
        type: this.type,
        total: this.total,
        currencyValue: this.currencyValue,
        note: this.note,
        entryId: this.entryId,
        userId: this.userId,
      };
      const id = this.entryId;
      await axios
        .post(`/bond/create/${id}`, formData)
        .then((res) => {
          console.log(res.data, "asd");
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SubBond(id) {
      const toPath = this.$route.query.to || `/sub_bond/${id}`;

      this.$router.push(toPath);
    },
  },
};
</script>

<style></style>
