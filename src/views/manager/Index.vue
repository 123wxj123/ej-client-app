<template>
  <!-- 后台管理总页面 -->
  <div class="manager">
    <!-- 用于接受管理页面，首页，订单页，我的页面 -->
    <router-view></router-view>
    <!-- info:{{info}} -->
    <!-- token: {{token}} -->
    <div>
      <van-tabbar v-model="active" @change="pageChangeHandler">
      <van-tabbar-item name="/manager/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/manager/order/allorder" icon="search">订单</van-tabbar-item>
      <van-tabbar-item name="/manager/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0,
    }
  },
  created(){
    // if(this.token){
    //   // 查询info
    //   this.getInfo(this.token);
    // } else {
    //   this.$toast("token失效")
    //   // 跳转到登录
    //   this.$router.push({path:'/login'})
    // }
  },
  computed:{
    ...mapState('user',['token','info'])
  },
  methods:{
    ...mapActions('user',{
      'getInfo':'info'
    }),
    pageChangeHandler(path){
      this.$router.push({path})
    },
  }
}
</script>