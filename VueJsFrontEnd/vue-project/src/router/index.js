import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/About.vue';
import Home from '../views/Home.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'EventLink',
      }
    }

    ,
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',

      }
    },
    {
      path: '/Events',
      name: 'EventsCard',
      component: () => import('../components/EventsCard.vue'),
      meta: {
        title: 'Events',
      },
    
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        title: 'About Us',
      },
    }

  ]
})





router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
