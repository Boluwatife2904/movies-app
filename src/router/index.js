import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home || FindAMovie"
    }
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: () => import("../pages/MovieDetail.vue"),
    props: true,
    meta: {
      title: "Movie Details || FindAMovie"
    }
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

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
})

export default router;
