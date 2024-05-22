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
        style="margin-top: 25px; padding-bottom: 10px"
        height="66px"
        color="deep-orange darken-1"
        flat
      >
        <div class="d-flex align-center w-100">
          <img
            class="darazlogo"
            src="./assets/darazlogo.png"
            @click="homePage()"
          />

          <!-- <div class="text-h6">Daraz</div> -->
          <v-text-field
            solo
            background-color="white"
            label="Search in Daraz"
            filled
            class="font-weight-lighter; rounded-xl"
            hide-details
            dense
            style="margin-left: 20px; width: 415px"
          ></v-text-field>
          <v-btn
            v-if="$route.path != '/login'"
            text
            height="36px"
            class="ma-2 white--text font-weight-bold text-body-2"
            small
            color="white"
            @click="login"
          >
            <v-icon color="white">mdi-account-outline</v-icon>
            Login
          </v-btn>

          <v-divider vertical color="white" class="my-5"></v-divider>

          <v-btn text class="ml-2" @click="openCart">
            <v-icon color="white"> mdi-cart-outline </v-icon>
          </v-btn>
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
    homePage() {
      this.$router.push("/");
    },
    openCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
