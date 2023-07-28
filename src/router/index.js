import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/paisyDeny',
      name: 'Paisy Deny',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/CreateCustomer',
      name: 'New Customer',
      component: () => import('../views/CreateCustomer.vue')
    }
  ]
})

export default router
