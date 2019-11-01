<template>
  <div class="user">
    <van-nav-bar
      title="我的"
      left-text="返回"
      right-text="退出"
      left-arrow
      @click-left="black"
      @click-right="logoutHandler"/>
    <div class="top">
      <div class="header">  
        <img :src="info.avatar" alt=""> 
      </div>
      <h2 style="">{{info.name}}</h2>
    </div>
    <br>
    <br>
    <div class="line" @click="toAddressHandler">
      <strong>常用地址</strong> 
    </div>
    <br/>
    <br/>
    <br/>
    <!-- {{info}} -->
  
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  created(){
  },
  computed:{
    ...mapState("user",["info"]),
  },
  methods:{
    ...mapActions('user',['logout']),
     
    black(){
      this.$router.push({path:'/manager/home'})
    },
    toAddressHandler(){
      this.$router.push({path:'/manager/address'})
    },
    logoutHandler(){
      this.$router.push({path:'/login'})
    },
    
  },
}
</script>
<style scoped>
.top{
  width: 150px;
  height: 240px;
  padding-top: 20px; 
  margin: 0 auto;
}
  img{
    width: 150px;
    height:150px;
    border-radius: 50%;  
  }
  h2{
    text-align: center;
  }
  .line{
    border-bottom: 1px solid #ededed;
    padding-left: 10px;
    padding-bottom: 5px;

  }
</style>