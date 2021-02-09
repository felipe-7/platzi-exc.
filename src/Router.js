import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import coinDetail from "@/views/coinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: coinDetail
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
