<template>
    <!-- briup-fulllayout 消除下部导航 -->
    <briup-fulllayout title="产品列表">
    <div class="product_list">
        <!-- <van-nav-bar
            title="产品列表"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            /> -->
        <van-row>
            <!-- 左侧列表 查询栏目-->
            <van-col :span="3" class="list_nav">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item v-for="c in categories" :key="c.id" :title="c.name" @click="categoryId=c.id"/>
                </van-sidebar>
            </van-col>
            <!-- 右侧产品 -->
            <van-col :span="21">
                <div class="list_content">
                    <briup-product-item v-for="product in productCustomerFilter(categoryId)" :key="product.id" :data="product"></briup-product-item>
                </div>
                <!-- {{categories}} -->
                <!-- {{products}} -->
            </van-col>
        </van-row>
        <van-row class="car">
        <van-col :span="4">总额 <strong>￥{{total}}</strong> </van-col>
        <van-col :offset="16" :span="4" @click="ToPlaceOrder">
          <van-button round type="info">提交订单</van-button>
          </van-col>
      </van-row>
    </div>
    </briup-fulllayout>
</template>
<script>
import { mapActions,mapState,mapGetters } from 'vuex'
export default {
  data(){
    return {
      activeKey:0,
      categoryId:'',
    }
  },
  computed:{
    ...mapState('category',['categories']),
    ...mapState("product",["products"]),
    ...mapGetters('product',['productCustomerFilter']),
    ...mapGetters('shopcar',['total'])
  },
  methods:{
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['queryProduct']),
    // 确认下单
    ToPlaceOrder(){
        this.$router.push({path:"/manager/confirm_order"})
    },
  },
  created(){
    // 查询所有栏目信息
    this.findAllCategories();
    // 查询所有产品信息
    this.queryProduct({page:0,pageSize:200});
    this.categoryId = this.$route.query.id;
    this.activeKey = this.$route.query.activeKey;
  }, 
}
</script>
<style scoped>
   .car {
        position: fixed;
        bottom: 0;
        line-height: 4em;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        text-align: center;
        }
</style>