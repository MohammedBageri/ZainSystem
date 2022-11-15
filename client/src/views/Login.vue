<template>
  <applayout>
    <v-container>
      <v-card class="mr-6 mt-5 mb-5" width="450" height="220" dense shaped>
        <v-card-text>
          <v-form v-model="valid" lazy-validation @submit.prevent="submitForm">
            <v-text-field
              v-model="username"
              label="المستخدم"
              prepend-icon="mdi-account"
              color="green darken-1"
              :rules="[() => !!name || 'هذا الحقل مطلوب']"
              :error-messages="errorMessages"
              reverse
              outlined
              dense
              shaped
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="كلمة المرور"
              prepend-icon="mdi-lock"
              type="password"
              color="green darken-1"
              :rules="[() => !!password || 'هذا الحقل مطلوب']"
              :error-messages="errorMessages"
              outlined
              required
              reverse
              dense
              shaped
            />
            <div class="text-center mt-2">
              <v-btn
                rounded
                color="green darken-1"
                class="text-h6"
                dark
                type="submite"
                >تسجيل الدخول</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
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
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessages: "",
      name: null,
      errors: [],
    };
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = "";

      await localStorage.removeItem("token");

      const formData = {
        username: this.username,
        password: this.password,
      };
      await axios
        .post("/user/login/", formData)
        .then((response) => {
          const token = response.data[0];
          console.log(token, "res");
          const user = response.data[1];
          this.$store.commit("setToken", token);
          this.$store.commit("setUser", user);
          console.log(user, "token");
          axios.defaults.headers.common["Authorization"] =
            "access_token " + token;
          console.log(
            axios.defaults.headers.common["Authorization"],
            "Authorization"
          );
          console.log("aaaaa", response.headers);
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          console.log(response.data);

          const toPath = this.$route.query.to || "/";

          this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>
