<template>
  <div>
    <seach-message></seach-message>
    <div>
      <!-- 下面有两种方式的传值，不绑定那么只能传string,绑定后可以传值的本身js值 -->
      <swiper-img ifButton="true" :ifInk="false" :bannerList="sliders" :autotime="4"></swiper-img>
      <div class="title_list">
        <div v-for="item in titleList" :key="item.name">
          <img :src="item.src" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="icon_list">
          <div v-for="(index,item) in iconList" :key="item">
              <img :src="index.src" alt="">
              <p>{{index.name}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import seachMessage from "./seach_message";
import swiperImg from "../../components/swiper";
export default {
  components: {
    seachMessage,
    swiperImg
  },
  data() {
    return {
      sliders: [
        {
          img:
            "http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658"
        },
        {
          img:
            "http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658"
        },
        {
          img:
            "http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658"
        },
        {
          img:
            "http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658"
        },
        {
          img:
            "http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658"
        }
      ],
      titleList:[
          {name:'100%房源',src:'/static/img/affirm_icon.png'},
          {name:'优质保洁/维修',src:'/static/img/icon.png'},
          {name:'品质房屋/环境优美',src:'/static/img/zuanshi.png'}
      ],
        iconList:[
            {name:'合租',src:'/static/img/icon-test-2.png'},
            {name:'整租',src:'/static/img/-fangzi.png'},
            {name:'月租',src:'/static/img/zufang.png'},
            {name:'地图找房',src:'/static/img/fangzi.png'}
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

.title_list{
    display:flex;
    justify-content: space-around;
    font-size:6px;
    color:#c0c0c0;
    margin:10px 0;

}
.title_list div p{
    display: inline;
}
.title_list div img{
    vertical-align: bottom
}
.icon_list{
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size:12px;
    color:#8a8a8a;
    margin:26px 10px 10px 10px;
     border:1px solid red
}
.icon_list img{
    height:40px;
    width:40px;
    vertical-align: bottom;
}
.icon_list p{
    margin:4px 0;
}
</style>