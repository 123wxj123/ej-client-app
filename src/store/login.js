import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    ues:[]
  },
  mutations:{
    refreshUes(state,ues){
      state.ues = ues;
      console.log(ues);
    }
  },
  actions:{
    async findUes(context){
      let response = await get("/user/info");
      context.commit("refreshUes",response.data)
      console.log(response.data);
    }
  }
}