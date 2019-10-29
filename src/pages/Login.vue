<template>
  <div class="login">
    <!-- <img src='https://img.yzcdn.cn/vant/apple-1.jpg' > -->
    <van-cell-group>
      <van-field v-model="username" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="info" @click="loginTo">登陆</van-button>
    {{username}}{{password}}
   
  </div>
</template>
<script>
import {mapState,mapActions, mapMutations} from 'vuex'

export default {
  data() {
    return {
      username:"",
      password:"",
      type:"customer",
      customer:{},
     
    };

  },
  created(){
    
  },
 computed:{
   ...mapState("login",["token"]),
 },
  methods:{
    ...mapMutations("login",["refreshUes"]),
    ...mapActions("login",["findUer","TokenInfo"]),

    //普通方法
    loginTo(){
      this.customer.type=this.type;
      this.customer.username=this.username;
      this.customer.password=this.password;
      
      this.findUer(this.customer)
      .then((response)=>{
        if(response=="登陆失败"){
          alert("登陆失败")
        }
        else if(response.status===200){
             // this.token=response.data.token;
            //  console.log(this.token)
            this.TokenInfo(this.token)
            .then((response)=>{
              // console.log(response.id)
              this.$router.push({path:"/",query:response.id})
            })
       
          }
        
          // else if(response==null){
          //   Toast.fail('登陆失败');
          // }
         
        
      })
    }
  },
}
</script>