<template>
  <div class="swiper">
    <ul>
      <li
        v-for="(item,index) in sliders"
        :key="index"
        :class="{'current':index==num,'leave_ac':index==leave,'come_ac':index==come,'Zindex':index==come && ZindexN}"
       v-bind:style="calculateTime"
      >
        <img :src="item.img" alt />
      </li>
    </ul>
    <div>
      <button @click="move(-1)">上</button>
      <button @click="move(1)">下</button>
    </div>
    <!--<ul>
      <li v-for="(item,index) in sliders" :key="index" class="small" :class="{active:num===index}"></li>
    </ul>-->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
      num: 0,
      ZindexN: false,
      time: 2000,
      active:true
    };
  },
  create() {},
  mounted() {
     // this.autoPlay()
  },
  computed: {
    //这里用了计算属性，用于计算当前画面的左右两边因该是那一张，返回给适合标签激活对应的class
    leave() {
      return this.num == 0 ? this.sliders.length - 1 : this.num - 1;
    },
    come() {
      return this.num == this.sliders.length - 1 ? 0 : this.num + 1;
    },
    //动态计算轮播动画时间
    calculateTime(){
        return {transition:`transform ${this.time/1000}s`}
    }
  },
  methods: {
    move: function(x) {
        if(!this.active){
            return
        }
        this.active=false
      this.num += x;
      //因为向左滑动时候，图片的图层问题出现覆盖的现象，所以判断滑动方向添加class变更图层级别
      this.ZindexN = x < 0 ? true : false;
      //阻止计数的溢出
      if (this.num < 0) this.num = this.sliders.length - 1;
      if (this.num == this.sliders.length) this.num = 0;
      setTimeout(()=>{
          this.active=true
      },this.time)
    },
    autoPlay:function(){
        setInterval(()=>{
            this.num++
            if(this.num==this.sliders.length)this.num=0
        },this.time)
    }
  }
};
</script>

<style scoped>
.swiper {
  border: 1px solid red;
}
ul {
  border: 1px solid blue;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  position: relative;
  width: 10rem;
  height: 4rem;
  overflow: hidden;
}

ul li {
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  
}
ul li.come_ac {
  transform: translateX(100%);
}
ul li.Zindex {
  z-index: 3;
}
ul li.leave_ac {
  transform: translateX(-100%);
  z-index: 2;
}
ul li.current {
  z-index: 4;
}
ul li img {
  width: 10rem;
  height: 4rem;
  vertical-align: bottom;
}
</style>