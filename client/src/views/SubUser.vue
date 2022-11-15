<template>
  <applayout>
    <v-container>
      <v-card width="500" dense shaped>
        <v-card-title class="d-flex justify-center"
          >تفاصيل المستخدم</v-card-title
        >
        <v-card-text class="text-h6"
          >اسم المستخدم:{{ user.username }}</v-card-text
        >
        <v-card-text class="text-h6">رقم الهاتف:{{ user.phoneNO }}</v-card-text>
        <v-card-text class="text-h6">العنوان:{{ user.address }}</v-card-text>

        <v-expansion-panels>
          <v-expansion-panel>
            <div>
              <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
                <v-expansion-panel>
                  <v-expansion-panel-header> العميل</v-expansion-panel-header>
                  <v-expansion-panel-content v-if="user.AUTH.agent">
                    <v-card-text class="text-h6"
                      >الكود:{{ user.AUTH.agent.code }}</v-card-text
                    >
                    <v-card-text class="text-h6"
                      >الاسم:{{ user.AUTH.agent.name }}</v-card-text
                    >
                    <v-card-text class="text-h6"
                      >ملاحظة:{{ user.AUTH.agent.note }}</v-card-text
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>الوكيل</v-expansion-panel-header>
                  <v-expansion-panel-content v-if="user.AUTH.distributer">
                    <v-card-text class="text-h6"
                      >الكود:{{ user.AUTH.distributer.code }}</v-card-text
                    >
                    <v-card-text class="text-h6"
                      >الاسم:{{ user.AUTH.distributer.name }}</v-card-text
                    >
                    <v-card-text class="text-h6"
                      >الرقم التعريفي للعميل:{{
                        user.AUTH.distributer.agentId
                      }}</v-card-text
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>الزبون</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      v-model="user.AUTH.client.code"
                      label="كود"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.clintName"
                      label="الاسم"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.email"
                      label="الايميل"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.distributerId"
                      label="الرقم التعريفي للوكيل"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.phoneNO"
                      label="رقم الهاتف"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.address"
                      label="العنوان"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.status"
                      label="الاسم"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.statusType"
                      label="الايميل"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.cardType"
                      label="الرقم التعريفي للوكيل"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.cardNO"
                      label="رقم الهاتف"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.emissionplace"
                      label="العنوان"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.emission"
                      label="العنوان"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="user.AUTH.client.userId"
                      label="العنوان"
                      required
                      outlined
                      color="green darken-1"
                      reverse
                      dense
                      shaped
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-dialog v-model="dialog" max-width="550px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green darken-1"
              dark
              v-bind="attrs"
              v-on="on"
              class="mt-3 mb-3 ml-6 mr-4 text-h6"
            >
              تحديث</v-btn
            >
          </template>
          <v-card>
            <v-card-title class="d-flex justify-center">التفاصيل</v-card-title>
            <v-form class="px-4">
              <v-text-field
                v-model="user.username"
                type="namber"
                label="اسم المستخدم"
                :rules="[() => !!username || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                label=" كلمة المرور"
                type="password"
                :rules="[() => !!password || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-text-field>
              <v-text-field
                v-model="user.phoneNO"
                type="رقم الهاتف"
                label="رقم الهاتف"
                :rules="[() => !!phoneNO || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
                outlined
                color="green darken-1"
                reverse
                dense
                shaped
              ></v-text-field>
              <v-text-field
                v-model="user.address"
                label="العنوان"
                :rules="[() => !!address || 'هذا الحقل مطلوب']"
                :error-messages="errorMessages"
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
                        label="المدير"
                        v-model="user.isAdmin"
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
                            v-model="user.isSubAdmin"
                          ></v-checkbox>
                          <v-checkbox
                            label="حذف مستخدم"
                            v-model="user.isSubAdmin"
                          ></v-checkbox>
                        </v-expansion-panel-content>
                      </v-expansion-panel>

                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          العميل</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-text-field
                            v-model="agent.code"
                            label="كود"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="agent.name"
                            label="الاسم"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="agent.note"
                            label="ملاحظة"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                        </v-expansion-panel-content>
                      </v-expansion-panel>

                      <v-expansion-panel>
                        <v-expansion-panel-header
                          >الوكيل</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-text-field
                            v-model="distributer.code"
                            label="كود"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="distributer.name"
                            label="الاسم"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="distributer.agentId"
                            label="الرقم التعريفي للعميل"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                        </v-expansion-panel-content>
                      </v-expansion-panel>

                      <v-expansion-panel>
                        <v-expansion-panel-header
                          >الزبون</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-text-field
                            v-model="client.code"
                            label="كود"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.clintName"
                            label="الاسم"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.email"
                            label="الايميل"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.distributerId"
                            label="الرقم التعريفي للوكيل"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.phoneNO"
                            label="رقم الهاتف"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.address"
                            label="العنوان"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.status"
                            label="الاسم"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.statusType"
                            label="الايميل"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.cardType"
                            label="الرقم التعريفي للوكيل"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.cardNO"
                            label="رقم الهاتف"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.emissionplace"
                            label="العنوان"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.emission"
                            label="العنوان"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
                          <v-text-field
                            v-model="client.userId"
                            label="العنوان"
                            required
                            outlined
                            color="green darken-1"
                            reverse
                            dense
                            shaped
                          ></v-text-field>
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
                  @click="updateUser"
                  class="mt-3 mb-3 text-h6"
                  dark
                  >تحديث</v-btn
                >
              </div>
            </v-form>
          </v-card>
        </v-dialog>
        <v-btn
          color="green darken-1"
          type="submite"
          @click="deleteUser"
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
  name: "SubUser",
  data: () => ({
    disabled: false,
    readonly: false,
    user: {
      AUTH: {
        agent: {},
        distributer: {},
        client: {},
        isSubAdmin: [],
      },
    },
    x: [
      {
        agent: {},
        username: "",
        distributer: {},
        client: {},
        isSubAdmin: [],
      },
    ],
    username: "",
    password: "",
    phoneNO: "",
    address: "",
    status: "",
    name: "",
    note: "",
    agentId: "",
    email: "",
    distributerId: "",
    agent: {
      code: "",
      name: "",
      note: "",
    },
    distributer: {
      code: "",
      name: "",
      agentId: "",
    },
    client: {
      code: "",
      clintName: "",
      email: "",
      distributerId: "",
      phoneNO: "",
      address: "",
      status: false,
      statusType: "",
      cardType: "",
      cardNO: "",
      emissionplace: "",
      emission: "",
      userId: "",
    },
    isAdmin: false,
    isSubAdmin: [],
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const userId = this.$route.params.userId;
      console.log(userId, "id");

      await axios
        .get(`user/${userId}`)
        .then((res) => {
          this.user = res.data;
          this.x = res.data;
          this.username = this.user.username;
          console.log(this.user, "aaaaa");
          console.log(this.user.username, "aaaaa");
          console.log(this.x, "789aaa");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateUser() {
      const userId = this.$route.params.userId;
      const formData = {
        username: this.user.username,
        phoneNO: this.user.phoneNO,
        address: this.user.address,
        AUTH: {
          agent: this.agent,
          distributer: this.distributer,
          client: this.client,
        },
      };
      await axios
        .put(`user/${userId}`, formData)
        .then((res) => {
          console.log(res.data, "aaaaa");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteUser() {
      const id = this.$route.params.userId;
      await axios
        .delete(`user/${id}`)
        .then((res) => {
          console.log(res);
          const toPath = this.$route.query.to || "/user";

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
