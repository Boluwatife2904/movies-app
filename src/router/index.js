import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: () => import("../pages/MovieDetail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    return savedPosition
      ? savedPosition
      : {
          top: 0,
          left: 0,
        };
  },
});

export default router;
