<template>
    <div class="waite_confirm_order">
     
         <div v-if="noWaiterOrder">
            <van-card 
                v-for="item in noWaiterOrder" :key="item.id"
                :title="item.orderTime | datamt"
                :price="item.total"
                :desc="item.status"  
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                >
                <div slot="footer">
                    <van-button size="mini" @click="makeSureOrderHandler(item.id)">确认订单</van-button>
                </div>
            </van-card>
        </div>   
        <div v-else>
            <div class="none">暂无待确认的订单</div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapState} from "vuex"
export default {
  data(){
    return {
   
      
    }
  },
  created(){
      this.findAllOders(this.info.id);
    
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapGetters("order1",["noWaiterOrder"])
   
   
  },
  methods:{

    ...mapActions("order1",["makeSureOrder","findAllOders"]),
      //点击确认订单传递参数orderId
      makeSureOrderHandler(orderId){
        //   console.log(orderId)
         this.makeSureOrder(orderId)
         .then((response)=>{
             this.Toast.success('确认成功');
         }) 
      }
  }
}
</script>