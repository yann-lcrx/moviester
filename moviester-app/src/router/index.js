import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Quiz",
    component: () => import("../views/Quiz.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
