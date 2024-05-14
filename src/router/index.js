import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
