import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import order from './modules/order'
import order1 from './modules/order1'
import product from './modules/product'
import category from './modules/category'
import address from './modules/address'
import shopcar from './modules/shopcar'

export default new Vuex.Store({
  modules:{
    user,
    order, 
    order1,
    product,
    category,
    address,
    shopcar,
  }
})
