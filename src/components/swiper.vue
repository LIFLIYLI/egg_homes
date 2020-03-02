<template>
  <div class="swiper" @mouseenter="createImg($event)" @mouseleave="cleartImg($event)">
    <ul  class="banner">
      <li
        v-for="(item,index) in bannerList"
        :key="index"
        :class="{
          'current':index==num,
          'leave_ac':index==leave,
          'come_ac':index==come,
          'Zindex':index==come && ZindexN,
          'right':index==hoverRight,
          'left':index==hoverLeft
          }"
        v-bind:style="calculateTime"
      >
        <img :src="item.img" alt />
      </li>
    </ul>
    <div class="change_button" v-if='ifButton'>
        <div class="previous" @click="move(-1)"></div>
        <div class="next" @click="move(1)"></div>
    </div>
    <ul class="other_ul" v-if='ifInk'>
      <li v-for="(item,index) in bannerList" 
      :key="index" 
      :class="{circle:index==num}"
      @click="jumpImg(index)"
      @mouseenter="hoverAc(index)"
      @mouseleave="hoverOut(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  //props:['ifButton','ifInk'],
  props:{
    ifButton:{
      type:String,
      
    },
    ifInk:{
      type:Boolean,
    },
    autotime:{
      type:Number
    },
    bannerList:{
      type:Array
    }
  },
  data() {
    return {

      num: 0,
      ZindexN: false,
      time: 500,
      active: true,
      playTime: 4000,
      t: null,
      hoverRight:null,
      hoverLeft:null,
    };
  },
  created() {
 
  },
  mounted() {
    this.playTime=this.autotime*1000
    this.autoPlay();
  },
  computed: {
    //这里用了计算属性，用于计算当前画面的左右两边因该是那一张，返回给适合标签激活对应的class
    leave() {
      return this.num == 0 ? this.bannerList.length - 1 : this.num - 1;
    },
    come() {
      return this.num == this.bannerList.length - 1 ? 0 : this.num + 1;
    },
    //动态计算轮播动画时间
    calculateTime() {
      return { transition: `transform ${this.time / 1000}s` };
    }
    

  },
  methods: {
    move: function(x) {
      if (!this.active) {
        return;
      }
      this.active = false;
      this.num += x;
      //因为向左滑动时候，图片的图层问题出现覆盖的现象，所以判断滑动方向添加class变更图层级别
      this.ZindexN = x < 0 ? true : false;
      //阻止计数的溢出
      if (this.num < 0) this.num = this.bannerList.length - 1;
      if (this.num == this.bannerList.length) this.num = 0;
      setTimeout(() => {
        this.active = true;
      }, this.time);
    },
    //自动播放
    autoPlay: function() {
      this.t = setInterval(() => {
        this.num++;
        if (this.num == this.bannerList.length) this.num = 0;
      }, this.playTime);
    },
    //鼠标浮进停自动
    createImg: function() {
      clearInterval(this.t);
    },
    //鼠标浮出开自动播放
    cleartImg: function() {
      this.autoPlay();
    },
    //小点点击切换
    jumpImg:function(x){
      this.num=x
      this.hoverLeft=null,
      this.hoverRight=null
    },
    //鼠标浮进小圆点加css
    hoverAc:function(num){
      console.log('ke',num)
      if(num>(this.num+1)){
        this.hoverRight=num
      }else if(num<(this.num-1)){
        this.hoverLeft=num
      }
    },
    //鼠标浮出小圆点
    hoverOut:function(num){
      this.hoverLeft=null,
      this.hoverRight=null
    }
  }
};
</script>

<style scoped>
.swiper {
  position: relative;
  width: 100%;
  height: 8rem;
}
ul {
  list-style: none;
  padding: 0;
}
ul.banner {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

ul.banner li {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
ul.banner li.come_ac {
  display: block;
  transform: translateX(100%);
}
ul.banner li.right{
   display: block;
  transform: translateX(100%);
}
ul.banner li.Zindex {
  z-index: 3;
}
ul.banner li.leave_ac {
  display: block;
  transform: translateX(-100%);
  z-index: 2;
}
ul.banner li.left{
  display: block;
  transform: translateX(-100%);
}
ul.banner li.current {
  display: block;
  z-index: 4;
}
ul.banner li img {
  width: 100vw;
  height: 100%;
  vertical-align: bottom;
}
.change_button {
  position: absolute;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  left: 0;
  z-index: 5;
}
.change_button>div{
  border-radius:1px;
   height:31px;
   width:16px;
   background:rgb(0,0,0,0.1);
  position: relative;
 
}

.change_button .previous::after {
  width:10px;
  height:10px;
  border:2px solid rgb(0,0,0,0.3);
  transform: rotate(-45deg);
  border-right: transparent;
  border-bottom: transparent;
  position: absolute;
  top:9px;
  left:5px;
  content:'';
  display: block;
}
.change_button .next::after {
  width:10px;
  height:10px;
   border:2px solid rgb(0,0,0,0.3);
  transform: rotate(135deg);
  border-right: transparent;
  border-bottom: transparent;
  position: absolute;
  top:9px;
  right:5px;
  content:'';
  display: block;
}
ul.other_ul {
  margin: 0;
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
}
ul.other_ul li {
  width: 10px;
  height: 4px;
  background: rgb(0,0,0,0.2);
  margin:0 5px;
}
ul.other_ul li.circle {
  background: rgb(0,0,0,0.4);
}
</style>