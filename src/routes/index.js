import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import('../views/PedidosVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;