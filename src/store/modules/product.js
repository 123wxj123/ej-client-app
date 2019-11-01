import {get,post,post_array} from '../../http/axios';

export default {
  namespaced:true,
  state:{
    products:[],
  },
  getters:{
    productCustomerFilter(state){
      return (categoryId)=>{
        return state.products.filter(item=>item.categoryId === categoryId)
      }
    }
  },
  mutations:{
    refreshProducts(state,products){
      state.products = products;
    },
  },
  actions:{
    // async findAllProducts(context){ 
    //   let response = await get("/product/findAll");
    //   context.commit("refreshProducts",response.data);
    // },
    async queryProduct({commit},payload){
      let response = await post('/product/query',payload)
      // 为每一个产品添加一个Number属性
      response.data.list.forEach(item=>item.number=0)
      commit('refreshProducts',response.data.list);
    }
  }
}