<template>
  <div>
    <span @click="show()">{{msg}}</span>

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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
