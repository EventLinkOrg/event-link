import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/About.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: 'Contact Us',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../components/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        title: 'Register',
      },
    }

  ]
})





router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
