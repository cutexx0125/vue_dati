import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../page/home/Home.vue')
      },
      {
        path: '/item',
        name: 'Item',
        component: () => import('../page/item/Item.vue')
      },
      {
        path: '/score',
        name: 'Score',
        component: () => import('../page/score/Score.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
