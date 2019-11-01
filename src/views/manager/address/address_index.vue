<template>
  <briup-fulllayout title="地址列表">
    <div class="address">
      <!-- <van-nav-bar
        title="我的地址"
        left-text="返回"
        left-arrow
        @click-left="backHandler" /> -->
      <div class="list">
        <briup-address-item v-for="address in addresses" :key="address.id" :data="address"></briup-address-item>
      </div>
      <!-- {{addresses}} -->
      <div class="newAddress" @click="newAddressHandler">
        <b>+ 新建收货地址</b>
      </div>
    </div>
  </briup-fulllayout>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  created(){
    this.findAllAddresses();
  },
  computed:{
    ...mapState('address',['addresses'])
  },
  methods:{
    ...mapActions('address',['findAllAddresses']),
    backHandler(){
      this.$router.go(-1)
    },
    newAddressHandler(){
      this.$router.push({path:'/manager/add_address'})
    },
  }
}
</script>
<style scoped>
/* .address {
  background-color: #f1f1f1;
  padding-bottom: .2em;
} */
 .newAddress {
   position: fixed;
   bottom: 0px;
   width: 100%;
   background-color: rgb(0, 162, 255);
   height: 50px;
   text-align: center;
   line-height: 50px;
   font: 16px;
   color: #fff;
 }
</style>