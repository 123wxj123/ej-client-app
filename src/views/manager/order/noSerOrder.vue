<template>
    <div class="no_ser_order">
        <div v-if="noSerOrder">
            <van-card 
            v-for="item in noSerOrder" :key="item.id"
            :title="item.orderTime | datamt"
            :price="item.total"
            :desc="item.status"  
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />
        </div>
            
        <div v-else><div class="none">暂无待服务的订单</div></div>
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
      this.findAllOders(this.info.id);
    
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapGetters("order1",["noSerOrder"])
   
   
  },
  methods:{
    ...mapActions("order1",["findAllOders"])
  }
}
</script>