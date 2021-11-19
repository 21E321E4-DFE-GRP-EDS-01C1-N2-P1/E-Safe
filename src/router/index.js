import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
// import Women from "../components/Women.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
//   {
//     path: "/Women",
//     name: "Women",
//     component: Women,
//   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;