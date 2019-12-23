<template>
  <div class="contents_boxs">
    <seach-message></seach-message>
    <!-- 内容区 -->
    <div class="main_margin">
      <!-- 下面有两种方式的传值，不绑定那么只能传string,绑定后可以传值的本身js值 -->
      <swiper-img ifButton="true" :ifInk="true" :bannerList="sliders" :autotime="4"></swiper-img>

      <div class="title_list">
        <div v-for="item in titleList" :key="item.name">
          <img :src="item.src" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
      <!-- 租房类型 -->
      <div class="icon_list">
        <div v-for="(index,item) in iconList" :key="item">
          <img :src="index.src" alt />
          <p>{{index.name}}</p>
        </div>
      </div>
      <!-- 三图区 -->
      <div class="third_img">
        <div class="left">
          <img src="../../assets/sofa_2.jpg" alt />
          <div>
            <h5>{{third_img.one.title}}</h5>
            <span></span>
            <p>{{third_img.one.name}}</p>
          </div>
        </div>
        <div class="right">
          <div>
            <img src="../../assets/pillow.jpeg" alt />
            <div>
              <h5>{{third_img.one.title}}</h5>
              <span></span>
              <p>{{third_img.one.name}}</p>
            </div>
          </div>
          <div>
            <img src="../../assets/sofa_1.jpg" alt />
            <div class="">
              <h5>{{third_img.one.title}}</h5>
              <span></span>
              <p>{{third_img.one.name}}</p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
         <!-- 特价房源板块和优质房源 -->
    <home-view></home-view>
    <!-- 按钮和特点提示区 -->
    <div class="person_string">
      <ul>
        <li v-for="(item,index) in personList" :key="index">
          <div><img :src="item.url" alt=""></div>
          <p>{{item.name}}</p>
          <span>{{item.title}}</span>
        </li>
      </ul>
      <div class="more_button">更多品质房源</div>
    </div>
    <!-- 生活故事板块 -->
    <live-thing></live-thing>
    <!-- 为你推荐 -->
    <recommend-list></recommend-list>
  </div>
</template>

<script>
import seachMessage from "./seach_message";
import swiperImg from "../../components/swiper";
import homeView from "./index_home"
import liveThing from '@/page/index/live_thing';
import recommendList from '@/page/index/recommend'
export default {
  components: {
    seachMessage,
    swiperImg,
    homeView,
    liveThing,
    recommendList
  },
  data() {
    return {
      sliders: [
        {
          img:
            "/static/img/affirm_icon.png"
        },
        {
          img:
            "/static/img/affirm_icon.png"
        },
        {
          img:
            "/static/img/affirm_icon.png"
        },
        {
          img:
            "/static/img/affirm_icon.png"
        },
        {
          img:
            "/static/img/affirm_icon.png"
        }
      ],
      titleList: [
        { name: "100%房源", src: "/static/img/affirm_icon.png" },
        { name: "优质保洁/维修", src: "/static/img/icon.png" },
        { name: "品质房屋/环境优美", src: "/static/img/zuanshi.png" }
      ],
      iconList: [
        { name: "合租", src: "/static/img/icon-test-2.png" },
        { name: "整租", src: "/static/img/-fangzi.png" },
        { name: "月租", src: "/static/img/zufang.png" },
        { name: "地图找房", src: "/static/img/fangzi.png" }
      ],
      third_img: {
        one: { title: "万房5折", name: "蛋壳半价月", src: "" },
        two: { title: "独卫大卧房", name: "享受空间自主权", src: "" },
        third: { title: "热租商圈精选", name: "宝安西乡", src: "" }
      },
      personList:[
        {name:'极速wifi',title:'网络精彩不断线',url:'/static/img/Routerwi-fi.png'},
        {name:'优质保洁',title:'持续保持卫生',url:'/static/img/clean.png'},
        {name:'专业维修',title:'维修极速上门',url:'/static/img/weixiubanshou.png'},
        {name:'私人管家',title:'24小时贴心服务',url:'/static/img/people.png'},

      ]
    };
  },
  created() {}, //创建结束
  mounted() {}, //渲染结束
  methods: {}, //方法
  computed: {} //计算属性
};
</script>

<style scoped>
.contents_boxs{
  padding-bottom:5rem;
}
.main_margin{
  margin-top:3.5rem
}
.title_list {
  display: flex;
  justify-content: space-around;
  font-size: 6px;
  color: #c0c0c0;
  margin: 10px 0;
}
.title_list div p {
  display: inline;
}
.title_list div img {
  vertical-align: bottom;
}
.icon_list {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 12px;
  color: #8a8a8a;
  margin: 1.5rem 1rem;
}
.icon_list img {
  height: 2rem;
  width: 2rem;
  vertical-align: bottom;
}
.icon_list p {
  margin: 4px 0;
}
.third_img {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.third_img > div {
  width: 48%;
  height: 8rem;
}
.third_img > div img {
  width: 100%;
  vertical-align: bottom;
}
.third_img > div.left img {
  height: 100%;
}
.third_img > div.left{
  position:relative;
  border-radius:4px;
  overflow: hidden;
}
.third_img > div.left>div{
  position:absolute;
  left:0.4rem;top:0.4rem;
    display: flex;
  justify-content: space-between;
  flex-flow: column;


}
.third_img > div.right{
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}
.third_img > div.right>div{
  position: relative;
  height:46%;
 border-radius:4px;
 overflow: hidden;
}
.third_img > div.right> div>img {
  height: 100%;
}
.third_img > div.right>div>div{
  position:absolute;
  top:0.4rem;
  left:0.4rem;
    display: flex;
  justify-content: space-between;
  flex-flow: column
}
.third_img h5{
 margin:0;
}
.third_img span{
  width:1rem;
  height:.2rem;
  background:rgb(231, 117, 174);
  display: inline-block
}
.third_img  p{
 font-size:0.6rem;
 margin:0;
}
/* 提示字按钮板块 */
.person_string{

  margin:0 1rem ;
}
.person_string ul{
  margin:0;
  padding:0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.person_string ul li div{
  border:2px solid #e0e0e0;
  display: inline-block;
  padding:0.5rem;
  border-radius: 50%;
}
.person_string ul li div img{
  width:1.5rem;
  height:1.5rem;
  vertical-align: bottom;
}
.person_string ul li p{
  margin:0.5rem 0 0.1rem 0;
  font-size:.9rem;
  color:#8a8787;
}
.person_string ul li span{
  font-size:0.6rem;
 color:#999898;
  display: block;
}
.person_string .more_button{
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