<template>
  <div>
    <span class="title" @click="show()">{{msg}}</span>

    <router-view></router-view>

    <mt-tabbar v-model="msg">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {
      show(){
        Toast("welcome")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: block;
    color: #2c3e50;
  }

</style>
