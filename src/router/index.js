import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Women from "../components/Women/Women.vue";
import Men from "../components/Men/Men.vue";
import Pet from "../components/Pet/Pet.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;