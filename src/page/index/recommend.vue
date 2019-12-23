<template>
  <div>
    <div class="nav_change">
      <h4>为你推荐</h4>
      <div>
        <span
          @click="navChange(index)"
          v-for="(item,index) in navList"
          :key="index"
          :class="{active:navNum==index}"
        >{{item}}</span>
      </div>
    </div>
    <ul class="recommend_list" v-if="navNum==0">
      <li v-for="(item,index) in list" :key="index">
        <div class="picture">
          <img :src="item.src" alt />
        </div>
        <div class="right">
          <h4>{{item.title}}</h4>
          <div class="types">
            <div>{{item.name}}</div>
            <span>{{item.names}}</span>
          </div>
          <p>{{item.text}}</p>
          <div class="buttons">
            <span>{{item.button[0]}}</span>
            <span>{{item.button[1]}}</span>
            <span>{{item.button[2]}}</span>
          </div>
          <div class="money">
            <span>{{item.money}}</span>/月
          </div>
        </div>
      </li>
    </ul>
    <ul class="recommend_list" v-if="navNum==1">
      <li v-for="(item,index) in list" :key="index">
        <div class="picture">
          <img :src="item.src" alt />
        </div>
        <div class="right">
          <h4>{{item.title}}</h4>
          <div class="types">
            <div>{{item.name}}</div>
            <span>{{item.names}}</span>
          </div>
          <p>{{item.text}}</p>
          <div class="buttons">
            <span>{{item.button[0]}}</span>
            <span>{{item.button[1]}}</span>
            <span>{{item.button[2]}}</span>
          </div>
          <div class="money">
            <span>{{item.money}}</span>/月
          </div>
        </div>
      </li>
    </ul>
    <ul class="recommend_list" v-if="navNum==2">
      <li v-for="(item,index) in list" :key="index">
        <div class="picture">
          <img :src="item.src" alt />
        </div>
        <div class="right">
          <h4>哈哈哈哈</h4>
          <div class="types">
            <div>{{item.name}}</div>
            <span>{{item.names}}</span>
          </div>
          <p>{{item.text}}</p>
          <div class="buttons">
            <span>{{item.button[0]}}</span>
            <span>{{item.button[1]}}</span>
            <span>{{item.button[2]}}</span>
          </div>
          <div class="money">
            <span>{{item.money}}</span>/月
          </div>
        </div>
      </li>
    </ul>
    <div class="more_button">更多品质房源</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      navNum: 1,
      navList: ["整租", "合租", "月租"],
      list: [
        {
          money: "¥5550",
          src: "/static/img/bed_1.jpg",
          title: "紫菱 神彩园 朝南-主卧",
          name: "合租",
          names: "3室1厅·9平方米·9/42层",
          text: "距您20.4公里，距5号线环中线，10号线1公里",
          button: ["可月租", "近地铁", "品质公寓"]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    navChange: function(e) {
      this.navNum = e;
    }
  }
};
</script>

<style>
.nav_change {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
}
.nav_change div {
  font-size: 0.8rem;
  color: #999999;
}
.nav_change div span {
  display: inline-block;
  margin: 0 0.5rem;
}
.nav_change div span.active {
  color: black;
  border-bottom: 2px solid blue;
}
ul.recommend_list {
  list-style: none;
  margin: 0 0.6rem 0 1rem;
  padding: 0;
}
ul.recommend_list li {
  display: flex;
  justify-content: flex-start;
}
ul.recommend_list li .picture {
  width: 8rem;
  height: 6rem;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 0.8rem;
}
ul.recommend_list li .picture img {
  width: 100%;
  height: 100%;
}
ul.recommend_list li .right {
  font-size: 0.8rem;
  color: #999999;
}
ul.recommend_list li .right h4 {
  margin: 0;
  color: black;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
ul.recommend_list li .right .types {
  display: flex;
  justify-content: flex-start;
  margin: 0.4rem 0 0.2rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
ul.recommend_list li .right p {
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
ul.recommend_list li .right .buttons {
  margin: 0.2rem 0;
}
ul.recommend_list li .right .buttons span {
  display: inline-block;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 1px 4px;
}
ul.recommend_list li .right .money span {
  color: red;
  font-size: 1rem;
}
.more_button{
      width:80%;
  background:#f0f0f0;
  height:2.5rem;
  font-size:1rem;
  line-height: 2.5rem;
  border-radius:2.5rem;
  text-align: center;
  margin:2rem auto;
}
</style>