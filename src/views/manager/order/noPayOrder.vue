<template>
    <div class="no_pay_order">
        <div v-if="noPayOrder">
            <van-card 
            v-for="item in noPayOrder" :key="item.id"
            :title="item.orderTime | datamt"
            :price="item.total"
            :desc="item.status"  
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
            <div slot="footer">
                    <van-button size="mini" @click="cancelOrderHandler(item.id)">取消订单</van-button>
                    <van-button size="mini" @click="payOrderHandler(item.id)">去支付</van-button>
            </div>
            </van-card>
        </div>

        <div v-else><div class="none">暂无未支付的订单</div></div>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
  data(){
    return {
   
      
    }
  },
  created(){
      this.findAllOders(this.info.id)
    
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapGetters("order1",["noPayOrder"])
   
   
  },
  methods:{
      ...mapActions("order1",["cancelOrder","findAllOders"]),
    //取消订单
    cancelOrderHandler(orderId){
        this.cancelOrder(orderId)
        .then((response)=>{
            this.Toast.success(response.status);
        })
    },
    //点击去支付订单
    payOrderHandler(orderId){
        this.$router.push("/manager/confirm_order")
    }
  }
}
</script>