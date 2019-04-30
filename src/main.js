import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import App from "./App.vue";

// Views
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Vue-Router
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*", // Redirect every paths that does not exist to the Login view.
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    }
  ]
});

// Add Navigation Gaurds
// Note from: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
// Navigation guards provided by vue-router are primarily used to guard navigations either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: globally, per-route, or in-component.
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next(); // Else, we proceed navigation.
});

// Initialize Firebase
// Note from https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
// For the simplicity of the tutorial, we put the Firebase configuration in main.js file, but on real production system, avoid to do that and put it in a specific configuration file.Also, you may see appear in the console some Firebase warnings about only importing the part of the SDK we actually use.In production, you should definitely do that! But again, to keep the simplicity of this tutorial, I skip this part.
var config = {
  apiKey: "AIzaSyBxK4y4oGo8If7WzRxX5RwTOtDj9LlZH0M",
  authDomain: "vue-firebase-tutorial-d5a9d.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-d5a9d.firebaseio.com",
  projectId: "vue-firebase-tutorial-d5a9d",
  storageBucket: "vue-firebase-tutorial-d5a9d.appspot.com",
  messagingSenderId: "437915476980"
};
firebase.initializeApp(config);

let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
