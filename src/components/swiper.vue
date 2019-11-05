<template>
  <div class="swiper">
    <ul :style="containerStyle">
      <li>
        <img :src="sliders[sliders.length - 1].img" alt />
      </li>
      <li v-for="(item,index) in sliders" :key="index">
        <img :src="item.img" alt />
      </li>
      <li>
        <img :src="sliders[0].img" alt />
      </li>
    </ul>
    <div>
      <button @click="move(1)">上</button>
      <button @click="move(-1)">下</button>
    </div>
    <ul>
      <li v-for="(item,index) in sliders" :key="index" class="small" :class="{active:num===index}"></li>
    </ul>
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
      distance: -10,
      width:10,
    };
  },
  create() {},
  mounted() {},
  computed: {
    containerStyle() {
      //这里用了计算属性，用transform来移动整个图片列表
      return {
        transform: `translate3d(${this.distance}rem, 0, 0)`
      };
    }
  },
  methods: {
    move(direction) {
      this.distance += this.width * direction;
      if (this.distance < this.sliders.length*this.width*(-1)) this.distance = this.width*(-1)
      if (this.distance > this.width*(-1)) this.distance = this.sliders.length*this.width*(-1)
      this.num-=direction
      if(this.num<0)this.num=this.sliders.length-1
      if(this.num>=this.sliders.length)this.num=0
    }
  }
};
</script>

<style scoped>
.swiper {
  width: 10rem;
  border: 1px solid red;
  padding: 1rem 0;
  margin: 0 auto;
  overflow: hidden;
}
ul {
  border: 1px solid blue;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  transition:all 2s;
}

ul li.small {
  border:1px solid red;
  width:10px;
  height:10px;
  /* transition: transform 0.5s; */
}
ul li.small.active {
  background:blue
}
ul li img {
  width: 10rem;
  height: 100%;
}
</style>