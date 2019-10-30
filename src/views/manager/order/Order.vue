<template>
  <div class="order">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="activeName"  @change="pageChangeHandler">
      <van-tab title="全部订单" name="/manager/order/allorder"></van-tab>
      <van-tab title="未支付" name="/manager/order/no_pay_order"></van-tab>
      <van-tab title="未服务" name="/manager/order/no_ser_order"></van-tab>
      <van-tab title="待确认" name="/manager/order/waite_confirm_order"></van-tab>
    </van-tabs>
    <!-- <van-tabs v-model="active" >
      <van-tab title="全部订单" to="/manager/order/allorder"></van-tab>
      <van-tab title="未付款" to="/manager/order/no_pay_order"></van-tab>
      <van-tab title="未服务" to="/manager/order/no_ser_order"></van-tab>
      <van-tab title="待确认" to="/manager/order/waite_confirm_order"></van-tab>
    </van-tabs> -->
     订单
    <router-view></router-view>   
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeName:'/manager/order/allOrde'
    }
  },
  methods:{
    pageChangeHandler(path){
      this.$router.push({path})
    },
    onClickLeft(){
      // this.$router.go(-1);
      this.$router.push('/manager/Home');
    }
  },
}
</script>