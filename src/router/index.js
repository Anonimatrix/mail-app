import { createRouter, createWebHistory } from "vue-router";
import MailView from "../views/MailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
