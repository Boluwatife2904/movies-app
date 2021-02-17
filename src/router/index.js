import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import MovieDetail from '@/pages/MovieDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
