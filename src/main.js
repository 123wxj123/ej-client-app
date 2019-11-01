import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from "moment"

// 自定义组件 
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
import ConfirmOrderAddress from './components/ConfirmOrderAddress'
// 全局注册 
Vue.component('briup-fulllayout',FullLayout)
Vue.component('briup-order-item',OrderItem)
Vue.component('briup-address-item',AddressItem)
Vue.component('briup-product-item',ProductItem)
Vue.component('confirm_order_address_item',ConfirmOrderAddress)

//全局注册过滤器
Vue.filter('datamt',function(val){
  return moment(val).format(" YYYY-MM-DD, h:mm:ss a")
})


Vue.config.productionTip = false
 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
