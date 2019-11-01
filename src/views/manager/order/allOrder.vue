<template>
    <div class="allorder">
    <div v-if="orders">
     <van-card
      v-for="item in orders" :key="item.id"
      :title="item.orderTime | datamt"
      :price="item.total"
      :desc="item.status"  
      
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    </div>
    <div v-else>暂无未支付的订单</div>
 </div> 
   
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  data(){
    return {
      customerId:"",
      
    }
  },
  created(){
    
     this.findAllOdersHandler();
     
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapState("order1",["orders"]),
   
   
  },
  methods:{
    ...mapActions("order1",["findAllOders"]),
   
    // 根据顾客的id查询他的订单
    findAllOdersHandler(){
      this.customerId=this.info.id
      console.log(this.customerId)
    
      this.findAllOders(this.info.id)
      .then((response)=>{
        // if(response.data==null){
        //   alert("暂无订单")
        // }
       
       
      })
      
    }
  }
}
</script>
   