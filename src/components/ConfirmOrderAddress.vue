<template>
  <div class="confirm_order_address_item">
    <van-row>
      <van-col :span="21">
        <div class="telephone">
        <b>电话 </b>{{data.telephone}}
        </div>
        <div>
          <van-button type="primary" size="small">默认地址</van-button>
          &nbsp;&nbsp;
          {{data.province}} {{data.city}} {{data.area}} {{data.address}}
        </div>
      </van-col>
      <van-col :span="3" class="option">
        <van-icon name="arrow" @click="ToAllAddressHaddler"/>    
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:['data'],
  methods:{
      ToAllAddressHaddler(){
          this.$router.push({path:'/manager/address'})
      },
  }
}
</script>
<style scoped>
.address_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.address_item .xing {
  width:3em;
  height: 3em;
  border-radius: 50%;
  background-color: pink;
  text-align: center;
  line-height: 3em;
  color: #ffffff
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
.telephone{
    margin-bottom: 5px;
}
</style>