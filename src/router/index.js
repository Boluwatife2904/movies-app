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
  routes,
  scrollBehavior(_1, _2, savedPosition){
    if(savedPosition){
      return savedPosition;
    } else{
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
