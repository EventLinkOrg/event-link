import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',

      }
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: () => import('../components/Carousel.vue'),
      meta: {
        title: 'Carousel',
      },
    
    }

  ]
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
