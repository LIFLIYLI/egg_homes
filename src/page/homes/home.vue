<template>
  <div>
    <div>data取值：{{num}}</div>
    <div>计算属性:{{kk}}</div>
    <div @click="addButton" class="border">vuex值加加</div>
    <div class="border" v-on:click="reduceButton">vuex值延时减少</div>
    <div class="axios_list">
      <el-row>
        <el-button type="primary" @click="getAxios">get请求按钮</el-button>
        <el-button type="success" @click="postAxios">post请求按钮</el-button>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-button type="primary" @click="andRequest">请求并发按钮</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
//import vuexs from '@/js/Vuex.js'
export default {
  components: {},
  data() {
    return {
      num: ""
    };
  },
  computed: {
    kk() {
      //return vuexs.state.count  不能动态渲染
      return this.$store.state.count;
    }
  },
  created() {
    // this.num=vuexs.state.count
    this.num = this.$store.state.count;
  },
  mounted() {},
  methods: {
    //增加值（发布）
    addButton: function() {
      // vuexs.commit('add')
      this.$store.commit("add");
    },
    //异步增加值（发布）
    reduceButton: function() {
      //vuexs.comit
      this.$store.dispatch("reduce").then(() => {
        alert("异步操作执行成功的回调");
      });
    },
    getAxios: function() {
      this.$http.giveList().then(res => {
        console.log("hhhhooo", res);
      });
    },
    postAxios: function() {
      this.$http
        .postList(14)
        .then(res => {
          console.log("post数据", res);
        })
        .catch(() => {
          alert("cuowu");
        });
    },
    //并发请求
    andRequest: function() {
      this.$axios
        .all([this.$http.postList({ id: 14 }), this.$http.giveList()])
        .then(
          this.$axios.spread(function(acct, perms) {
            // Both requests are now complete
            console.log("两个完成", acct, perms);
          })
        );
    }
  }
};
</script>
<style lang="">
.border {
  border: 1px solid red;
  padding: 2px 1rem;
  margin: 1rem 0;
  display: inline-block;
}
.axios_list {
  border: 1px solid blue;
  padding: 1rem 0;
}
</style>