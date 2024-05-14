<template>
  <v-app>
    <div>
      <v-app-bar app height="25px" color="deep-orange darken-1" flat>
        <div class="top-nav-bar-1stitem">Become a Seller</div>
        <div class="top-nav-bar-items">Daraz Affiliate Program</div>
        <div class="top-nav-bar-items">Help & Support</div>
        <div class="top-nav-bar-items">Daraz Logistics Partner</div>
      </v-app-bar>
      <v-app-bar
        app
        style="margin-top: 25px"
        height="66px"
        color="deep-orange darken-1"
        flat
      >
        <div class="d-flex align-center w-100">
          <img class="darazlogo" src="./assets/darazlogo.png" />

          <!-- <div class="text-h6">Daraz</div> -->
          <v-text-field
            solo
            background-color="white"
            label="Search in Daraz"
            :rules="rules"
            filled
            class="font-weight-lighter; rounded-xl"
            hide-details
            dense
            style="margin-left: 20px; margin-bottom: 10px; width: 415px"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            v-if="$route.path != '/login'"
            width="100"
            height=""
            class="ma-2 white--text font-weight-bold text-body-2"
            small
            color="blue"
            @click="login"
            >LOGIN</v-btn
          >
        </div>
      </v-app-bar>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
