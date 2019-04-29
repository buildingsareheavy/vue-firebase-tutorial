import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
