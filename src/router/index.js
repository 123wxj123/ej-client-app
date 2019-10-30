import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'

import User from '../views/manager/User'
// 登录页面
import Login from '../views/Login'
// 订单页面
import Order from '../views/manager/order/Order'
import allOrder from '../views/manager/order/allOrder'
import noPayOrder from '../views/manager/order/noPayOrder'
import noSerOrder from '../views/manager/order/noSerOrder'
import waitConfOrder from '../views/manager/order/waitConfOrder'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/manager/home"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    children:[{
      path: 'home',
      component: Home,
    },{
      path: 'order',
      component: Order,
      children:[
        {
          path:'allorder',
          component:allOrder,
        },
        {
          path:'no_pay_order',
          component:noPayOrder,
        },
        {
          path:'no_ser_order',
          component:noSerOrder,
        },
        {
          path:'waite_confirm_order',
          component:waitConfOrder,
        },
      ]
    },{
      path: 'user',
      component: User,
    },]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
