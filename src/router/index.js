import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Women from "../components/Women/Women.vue";
import Men from "../components/Men/Men.vue";
import Pet from "../components/Pet/Pet.vue";
// import Login from "../components/AccountPages/Login.vue";
// import Register from "../components/AccountPages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Women",
    name: "Women",
    component: Women,
  },
  {
    path: "/Men",
    name: "Men",
    component: Men,
  },
  {
    path: "/Pet",
    name: "Pet",
    component: Pet,
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import('../components/AccountPages/Login.vue'),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import('../components/AccountPages/Register.vue'),
  },
  {
    path: "/Account",
    name: "Account",
    component: () => import('../components/AccountPages/Account.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;