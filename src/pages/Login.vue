<template>
  <div class="login">
    登录页面
    {{ues}}
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created(){
    this.findUes();
  },
  computed:{
    ...mapState("use",["ues"]),
  },
  methods:{
    ...mapActions("use",["findUes"]),
    
    
  }
}  
</script>