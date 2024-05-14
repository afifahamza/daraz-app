<template>
  <div class="d-flex justify-center align-center h-100">
    <v-card width="45vw" height="250">
      <v-card-title class="d-flex justify-center"> LOGIN </v-card-title>
      <v-card-text class="pb-0">
        <v-text-field
          v-model="username"
          label="Enter Username"
          :rules="rules"
          class="font-weight-light"
          hide-details
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Enter Password"
          class="font-weight-light py-2"
          :type="'password'"
          hide-details
          outlined
          color="pink"
          dense
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          width="100"
          height=""
          class="ma-2 white--text font-weight-bold text-body-2"
          small
          color="blue"
          @click="login"
          >LOGIN</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [(value) => !!value || "Required."],
    password: "",
    username: "",
  }),
  methods: {
    login() {
      console.log("username:", this.username, "password:", this.password);
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
// make login form, after pressing login button
