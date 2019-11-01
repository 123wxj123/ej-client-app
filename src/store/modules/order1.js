import { get } from "../../http/axios";

export default {
  namespaced:true,
  state: {
    orders:[],
  },
  getters:{
    //查询未支付的订单
    noPayOrder:state => {
     
      return state.orders.filter(item=>item.status=="待支付"
      
 
      )},
      //查询未服务的订单
    noSerOrder:state =>{
      return state.orders.filter(item=>item.status=="待接单"||item.status=="待派单"||item.status=="待服务")
    },
    //查询已完成订单
    noWaiterOrder:state =>{
      return state.orders.filter(item=>item.status=="待确认")
    }
  },
  mutations: {
    reflashhandler(state,order){
      state.orders=order;
      
    }
  },
  actions: {
    //查询根据用户所有的订单
    async findAllOders(context,customerId){
      // async findAllOders({rootState}){
      // let customerId=rootState.user.info.id
      let response=await get("/order/query?customerId="+customerId);
      context.commit("reflashhandler",response.data);
      console.log(response.data)
      return response.data;
    },
    //确认订单
    async makeSureOrder(context,orderId){
      let response=await get("/order/confirmOrder?orderId="+orderId);
      context.dispatch("findAllOders");
      return response.data;
    },
    //取消订单
    async cancelOrder(context,id){
      let response=await get("/order/deleteById?id="+id);
      context.dispatch("findAllOders");
      return response.data;
    }
  },
 
}