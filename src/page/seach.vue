<template>
  <div>
    <div class="seach_title">
      <div class="input">
        <input type="text" placeholder="蜗牛壳半价月 万房5折" v-on:keyup.enter="submit" v-model="values" />
        <img src="../assets/seach.png" alt />
      </div>
      <div class="size" v-on:click="returPrv">取消</div>
    </div>
    <div class="history">
      <p>历史搜索</p>
      <img v-on:click="deteleHistory" src="../assets/detele.png" alt />
    </div>
    <ul class="history_list">
      <li v-for="(item,index) in showArr" :key="index">{{item}}</li>
    </ul>
    <div class="hot_seach">热门搜索</div>
    <ul class="hot_list">
      <li>立水桥</li>
      <li>青年路</li>
      <li>短期过渡 免费换租</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      values: "",
      arr: []
    };
  },
  computed: {
    showArr() {
      return this.arr.filter(function(x, y) {
        return y < 4;
      });
    }
  },
  created() {},
  mounted() {
    //渲染历史记录
    let kk = localStorage.getItem("histroySeach");
    if (kk) {
      this.arr = JSON.parse(kk);
    }
  },
  methods: {
    //   返回上一层
    returPrv: function() {
      this.$router.go(-1);
    },
    submit: function() {
      let k = this.values;
      if (k != "") {
        this.arr.unshift(k);
        localStorage.setItem("histroySeach", JSON.stringify(this.arr));
      }
      // new Promise((resolve,reject)=>{
      //     resolve(this.arr)
      // }).then(res=>{
      //     console.log(res)
      // })
      this.$router.push({ path: "find" });
    },
    deteleHistory: function() {
      this.arr = [];
      localStorage.setItem("histroySeach", JSON.stringify(this.arr));
    }
  }
};
</script>
<style lang="" scoped>
.input {
  border: 1px solid #e0e0e0;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 0 8px 1px #dddada;
  width: 80%;
}
.input > input {
  height: 2rem;
  padding-left: 2rem;
  border: none;
  width: 80%;
}
.input > img {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
/*  */
.seach_title {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}
.size {
  font-size: 1rem;
}
/*  */
.history {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.history img {
  width: 1rem;
  height: 1rem;
}
.history_list li {
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.8rem;
  color: #444343;
  padding: 1rem;
  margin: 0 2rem;
}
/*  */
.hot_seach {
  padding: 1rem 2rem;
}
.hot_list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 2rem;
}
.hot_list li {
  padding: 0.2rem 0.6rem;
  color: #706e6e;
  background: #f0f0f0;
  font-size: 0.8rem;
  margin: 0.5rem;
  border-radius: 4px;
}
</style>