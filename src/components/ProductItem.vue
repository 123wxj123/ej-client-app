<template>
  <div class="product_item">
    <van-row>
      <van-col :span="4">
        <!--如果data.photo存在  -->
        <img v-if="data.photo" :src="data.photo" alt="">
        <!-- 如果data.photo不存在 -->
        <img v-else src="../assets/images/home_02.png" alt="">
      </van-col>
      <van-col :offset="1" :span="14">
        <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>   
      </van-col>
      <van-col :span="5" class="computer">
        <div> <van-stepper v-model="data.number" :min="0"  @change="numberChangeHandler(data)"/> </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import {mapMutations,mapState,mapGetters,mapActions} from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    ...mapMutations('shopcar',['addShopCar']),
    numberChangeHandler(val){
      let orderLine = {
        productId:val.id,
        productName:val.name,
        price:val.price,
        number:val.number
      }
      this.addShopCar(orderLine);
    }
  },

}
</script>
<style scoped>
  .product_item {
    margin:.5em 1em;
    padding: .5em;
    border-radius: 5px;
    height: 80px;
    border: 1px dotted #ccc;
  }
  .product_item img {
    width: 100%;
    border-radius: 3px;
  }
  .computer{
    margin-top: 5%;
  }
</style>