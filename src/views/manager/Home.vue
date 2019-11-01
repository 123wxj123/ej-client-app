<template>
  <div class="home">
    <van-row>
      <img style="width:100%" src="../../assets/images/home_02.png" alt="">
    </van-row>
    <van-row>
      <h3>分类预览</h3>
    </van-row>
    <van-row class="category">
      <van-grid :border="false" :column-num="3">
        <van-grid-item
          v-for="(c,index) in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
          @click="ToProductListHandler(c.id,index)"
        />
      </van-grid>
    </van-row>
    <van-row>
      <h3>产品预览</h3>
    </van-row>
    <!-- 产品信息 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="p in products"
        :key="p.id">
        <van-image :src="p.photo" />
        <div>{{p.name}}</div>
      </van-grid-item>
    </van-grid>
    <br>
    <br>
    <br>
    <!-- {{info}} -->
    <!-- {{categories}} -->
    <!-- {{products}} -->
    <!-- {{product.name}}  -->
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
       product:{}
    }
  },
  created(){
    // this.findAllProducts();  
    // pageSize:3首页只查询三个
    this.queryProduct({page:0,pageSize:6});
    this.findAllCategories();
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapState("product",["products"]),
    ...mapState("category",["categories"]),
  },
  methods:{
    ...mapActions("product",["queryProduct"]),
    ...mapActions("category",["findAllCategories"]),
    // 跳转到产品列表页面
    ToProductListHandler(id,activeKey){
      this.$router.push({path:"/manager/product_list",query:{id,activeKey}})
    }
  },
}
</script>
<style scoped>
   h3{
     margin-left: 10px;
   }
   .home {
    /* padding-bottom: 10px; */
  }
  .header {
    height: 200px;
    overflow: hidden;
  }
  .header img {
    width: 100%;
  }
  van-grid-item{
    width: 200px;
    height: 200px;
    background-size: cover;
  }
</style>