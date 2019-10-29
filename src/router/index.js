import Vue from 'vue'
import VueRouter from 'vue-router'
import Manages from '../pages/Manages/Layout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manages',
    component: Manages,
    children:[{
      path:"home",
      component:() => import('../pages/Manages/Home.vue')
    },{
      path:"order",
      component:() => import('../pages/Manages/Order.vue')
    },{
      path:"user",
      component:() => import('../pages/Manages/User.vue')
    },]
  },
 
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
