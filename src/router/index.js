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
import ConfirmOrder from '../views/manager/placeorder/ConfirmOrder'
//  登录
// import Login from '../views/Login'
import { getToken } from '../utils/auth'
// import { Toast } from 'vant'
import store from '../store'
// 产品详情
// 地址
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
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = getToken();
      if(token){
        // 查询info
        store.dispatch('user/info',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/login'})
      }
    },
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
    },
    {
      path: 'address',
      component: ()=>import('../views/manager/address/address_index') 
    },{
      path: 'add_address',
      component: ()=>import('../views/manager/address/AddAddress') 
    },{
      path: 'product_details',
      component: ()=>import('../views/manager/product/Details') 
    },{
      path: 'product_list',
      component: ()=>import('../views/manager/product/list') 
    },{
      path:'confirm_order',
      component:ConfirmOrder,
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
