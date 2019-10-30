<template>
  <div class="login">
    <div class="header">
      <div class="logo"></div>
      <div class="title"><strong>家政服务平台</strong>
      </div>
    </div>
    <div class="form">
      {{form}}
      <van-cell-group>
        <van-field
          v-model="form.username"
          required
          clearable
          label="用户名"
          icon="question-o"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div style="text-align:center">
       <van-button plain  type="default" @click="loginHandler">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:'customer'
      }
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    loginHandler(){
      this.login(this.form)
      .then(()=>{
        //跳转到首页
        this.$router.push({path:'/manager/home'})
      })
    }
  }
}
</script>
<style scoped>
.header {
  height: 200px;
  padding: 50px;
  color: #333;
  /* background-color: pink; */
  background-image:url('../assets/images/0.png');
  text-align: center
}
.header .logo {
  width: 150px;
  height: 150px;
  /* line-height: 50px; */
  border-radius: 50%;
  /* border: 1px solid #333; */
  margin: 0 auto;
  color:#333;
  font-weight: bold;
  margin-bottom: 1em;
  background-size: cover;
  background-image: url('../assets/images/home_02.png')
}
.header .title {
  font-size: 24px;
}
</style>