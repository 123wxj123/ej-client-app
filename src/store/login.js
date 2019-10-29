import {get,post,post_json} from '../http/axios'
export default {
  namespaced:true,
  state:{
    token:"",
  },
  mutations:{
    refreshUes(state,token){
      state.token = token.token;
      console.log("token",token);
    }
  },
  actions:{
    async findUer(context,customer){
      let response = await post_json("/user/login",customer);
      if(response.data==null){
        response="登陆失败"
       
      }else{
        context.commit("refreshUes",response.data)
      }
     
      // console.log(response.data);
      return response;
    },
    async TokenInfo(context,token){
      let response=await get("/user/info?token="+token);
      // context.dispatch("findUer",response.data)
      return response.data;
    }
  }

}