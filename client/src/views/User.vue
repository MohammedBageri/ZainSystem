<template>
  <applayout>
    <v-container>
      <v-dialog v-model="dialog" max-width="550px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green darken-1"
            dark
            v-bind="attrs"
            v-on="on"
            class="ml-6 mb-5"
          >
            إضافة جديد <v-icon>mdi-plus</v-icon></v-btn
          >
          <v-btn color="green darken-1" dark class="mb-5">
            طباعة<v-icon class="mr-2">mdi-printer</v-icon></v-btn
          >
        </template>
        <v-card dense shaped>
          <v-card-title class="d-flex justify-center">إضافة جديد</v-card-title>
          <v-card-text>
            <v-container>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form class="px-4" ref="form" @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-text-field
                      v-model="username"
                      type="string"
                      label="اسم المستخدم"
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
                      v-model="password"
                      label="الرقم السري"
                      type="password"
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
                      v-model="phoneNO"
                      type="string"
                      label="رقم الهاتف"
                      :error-messages="errors"
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </validation-provider>

                  <v-text-field
                    v-model="address"
                    type="string"
                    label="العنوان"
                    outlined
                    color="green darken-1"
                    reverse
                    dense
                    shaped
                  ></v-text-field>

                  <v-expansion-panels>
                    <v-expansion-panel>
                      <div>
                        <div class="d-flex">
                          <v-checkbox
                            label="الحالة"
                            v-model="status"
                          ></v-checkbox>
                        </div>
                        <div class="d-flex">
                          <v-checkbox
                            label="المدير"
                            v-model="disabled"
                          ></v-checkbox>
                        </div>

                        <v-expansion-panels
                          v-model="panel"
                          :disabled="disabled"
                          multiple
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              مساعد مدير</v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <v-checkbox
                                label="حذف مستخدم"
                                v-model="disabled"
                              ></v-checkbox>
                              <v-checkbox
                                label="حذف مستخدم"
                                v-model="disabled"
                              ></v-checkbox>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                    </v-expansion-panel>
                  </v-expansion-panels>

                  <div class="text-center mt-2">
                    <v-btn
                      color="green darken-1"
                      type="submite"
                      :disabled="invalid"
                      @click="postUser"
                      class="mt-3 text-h6"
                      >التالي</v-btn
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
          <thead>
            <tr>
              <th>اسم المستخدم</th>
              <th>رقم الهاتف</th>
              <th>العنوان</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.name">
              <td>{{ item.username }}</td>
              <td>{{ item.phoneNO }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.status }}</td>
              <!-- <td v-if="item.isAdmin "><v-icon>mdi-chick</v-icon></td>
          <td v-else-if="item.isSubAdmin">{{ item.isSubAdmin }}</td>
          <td v-else-if="item.agent">{{ item.agent }}</td>
          <td v-else-if="item.client">{{ item.client }}</td>
          <td v-else-if="item.distributer">{{ item.distributer }}</td> -->

              <td>
                <v-btn @click="subuser(item._id)" icon
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
  name: "User",
  data: () => ({
    disabled: false,
    disabled1: false,
    readonly: false,
    countries: ["نشط", "غير نشط"],
    bondsNumber: "",
    username: "",
    password: "",
    phoneNO: "",
    address: "",
    status: false,
    name: "",
    note: "",
    agentId: "",
    email: "",
    distributerId: "",
    userType: ["زبون", "وكيل", "عميل"],
    users: [],
    // agent:{
    //   code:"",
    //   name:"",
    //   note:""
    // },
    // distributer:{
    //   code:"",
    //   name:"",
    //   agentId:""
    // },
    // client:{
    //   code:"",
    //   clintName:"",
    //   email:"",
    //   distributerId:"",
    //   phoneNO:"",
    //   address1:"",
    //   status1:false,
    //   statusType:"",
    //   cardType:"",
    //   cardNO:"",
    //   emissionplace:"",
    //   emission:"",
    //   userId:""
    // },
    // isAdmin:false,
    // isSubAdmin:[],
    // userEdit:[]
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((err) => {
        if (err) {
          console.log("work");
          this.$router.go();
        }
      });
    },
    async postUser() {
      const formData = {
        username: this.username,
        password: this.password,
        phoneNO: this.phoneNO,
        address: this.address,
        status: this.status,
      };
      await axios
        .post("user/create", formData)
        .then((res) => {
          console.log("es.data", res.data);
          console.log("lkjhgf", formData);

          // const toPath = this.$route.query.to || `/sub_user/${res.data._id}`

          // console.log(toPath)
          // this.$router.push(toPath)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUser() {
      await axios
        .get("/user")
        .then((res) => {
          this.users = res.data;
          console.log(this.users, "us");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    subuser(id) {
      const toPath = this.$route.query.to || `/sub_user/${id}`;

      this.$router.push(toPath);
    },
  },
};
</script>

<style></style>
