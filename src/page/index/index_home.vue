<template>
  <div>
    <div class="special_offer_home">
      <h4>特价房源</h4>
      <ul class="offer_home">
        <li>
          <div>
            <img src="../../assets/bed_1.jpg" alt />
          </div>
          <p>青山露水 福元小区</p>
          <div class="money">
            <p>¥965</p>/首月
            <span>1920</span>
          </div>
          <div class="tag">
            <p>万房5折</p>
            <span>近地铁</span>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/bed_1.jpg" alt />
          </div>
          <p>青山露水 福元小区</p>
          <div class="money">
            <p>¥965</p>/首月
            <span>  1920</span>
          </div>
          <div class="tag">
            <p>万房5折</p>
            <span>近地铁</span>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/bed_1.jpg" alt />
          </div>
          <p>青山露水 福元小区</p>
          <div class="money">
            <p>¥965</p>/首月
            <span>1920</span>
          </div>
          <div class="tag">
            <p>万房5折</p>
            <span>近地铁</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 品质区手动滑动轮播图 -->
    <div class="swipers_box">
        <div class="title">
            <h4>租房品质</h4>
            <div>
                <span>{{swiperHomeNum+1}}</span>/3
            </div>
        </div>
        <ul class="swiper_home">
                     <li class="left_view">
                <div class="left">
                    <img :src="leftViewFn.left_src" alt="">
                    <div class="swiper_home_tag">
                      <p>{{leftViewFn.title}}</p>
                      <span>{{leftViewFn.name}}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="leftViewFn.top_src" alt="">
                    <img :src="leftViewFn.bottom_src" alt="">
                </div>
            </li>

            <li v-for="(item,index) in swiperHome" 
            class="active_view"
            :class="{active:index==swiperHomeNum,next:index==leave,ago:index==oldimg,zIndex:index==oldimg && faceLeft==true}"
            @touchstart="touchStart"
            @touchend="touchEnd"
            @touchmove="touchMove"
            :key="index">
                <div class="left">
                    <img :src="item.left_src" alt="">
                    <div class="swiper_home_tag">
                      <p>{{item.title}}</p>
                      <span>{{item.name}}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="item.top_src" alt="">
                    <img :src="item.bottom_src" alt="">
                </div>
            </li>

              <li class="right_view">
                <div class="left">
                    <img :src="rightViewFn.left_src" alt="">
                    <div class="swiper_home_tag">
                      <p>{{rightViewFn.title}}</p>
                      <span>{{rightViewFn.name}}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="rightViewFn.top_src" alt="">
                    <img :src="rightViewFn.bottom_src" alt="">
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      swiperHome:[
        {left_src:'/static/img/bed_1.jpg',title:'整租',name:'逸者自居 卓尔不群',top_src:'/static/img/bed_2.jpg',bottom_src:'/static/img/bed_1.jpg'},
        {left_src:'/static/img/bed_1.jpg',title:'月租',name:'简单潇洒的租住体验',top_src:'/static/img/bed_2.jpg',bottom_src:'/static/img/bed_1.jpg'},
        {left_src:'/static/img/bed_1.jpg',title:'合租',name:'共享美好生活',top_src:'/static/img/bed_2.jpg',bottom_src:'/static/img/bed_1.jpg'}
      ],
      swiperHomeNum:0,
      startX:null,
      endX:null,
      faceLeft:false,
    };
  },
  created() {},
  mounted() {},
  computed: {
    leave(){
      return  this.swiperHomeNum+1 < this.swiperHome.length?this.swiperHomeNum+1:0
    },
    oldimg(){
      return  this.swiperHomeNum-1 >=0?this.swiperHomeNum-1:this.swiperHome.length-1
    },
    rightViewFn(){
      let right=this.swiperHomeNum+1 < this.swiperHome.length?this.swiperHomeNum+1:0
      return this.swiperHome[right]
    },
    leftViewFn(){
      let left=this.swiperHomeNum-1 >=0?this.swiperHomeNum-1:this.swiperHome.length-1
      return this.swiperHome[left]
    }
  },
  methods: {
    touchStart:function(e){
        this.startX = e.changedTouches[0].pageX; // 获取触摸时的原点
    },
    //滑动方向
    touchEnd:function(e){
     // console.log( e.changedTouches[0].pageX)
      this.endX=e.changedTouches[0].pageX
      if(this.endX>this.startX){
        this.swiperHomeNum=this.swiperHomeNum-1 <0?this.swiperHome.length-1:this.swiperHomeNum-1
        this.faceLeft=false
      }else if(this.endX<this.startX){
        this.swiperHomeNum=this.swiperHomeNum+1 <this.swiperHome.length?this.swiperHomeNum+1:0
        this.faceLeft=true
      }
    },
    touchMove:function(e){
      console.log( e.changedTouches[0].pageX)
    }
  }
};
</script>
<style scoped>
ul{
    list-style: none;
    padding:0;
}
.special_offer_home {
  margin: 0 1rem;
}
.special_offer_home h4 {
  position: relative;
}
.special_offer_home h5::after {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border: 2px solid #999999;
  position: absolute;
  right: 0;
  top: 3px;
  border-left: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transform: rotate(45deg);
}
ul.offer_home {
  margin: 0;
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
}
ul.offer_home li {
  width: 10rem;
  margin-right:.6rem;
}

ul.offer_home li img {
  width: 10rem;
  height: 6rem;
  vertical-align: bottom;
  border-radius:4px;
}
ul.offer_home li > p {
  margin: 0.4rem;
  font-weight: bold;
  font-size: 0.8rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
ul.offer_home li .money {
  display: flex;
  justify-content: flex-start;
  font-size: 0.6rem;
  color: #999999;
  margin: 0 0.4rem;
}
ul.offer_home li .money p {
  margin: 0;
  color: red;
  font-size: 0.8rem;
}
ul.offer_home li .money span {
  text-decoration: line-through;
  margin-left:0.2rem;
}
ul.offer_home li .tag {
  display: flex;
  justify-content: flex-start;
  font-size: 0.6rem;
  margin: 0.2rem 0.4rem;
}
ul.offer_home li .tag p {
  margin: 0;
  border-radius:2px;
  padding:0 0.1rem;
  background:rgb(233, 99, 99);
  color:white;
}
ul.offer_home li .tag span{
    border:1px solid #e0e0e0;
    border-radius:2px;
    padding:0 .1rem;
    display: inline-block;
    margin-left:.2rem;
    color:#999999;
}
/* 品质区 ========================*/
.swipers_box{
    margin:1.5rem 0;
}
.swipers_box .title {
    margin:1rem 1rem;
    display: flex;
    justify-content: space-between;

}
.swipers_box .title h4{
    margin:0;
}
.swipers_box .title div{
    font-size:.6rem;
}
.swipers_box .title div span{
    font-size:1rem
}
.swipers_box .swiper_home{
    position: relative;
    height:8rem;
    overflow: hidden;
}
.swipers_box .swiper_home li{
  position:absolute;
  top:0;
  left:7%;
    display: flex;
    justify-content: space-between; 
   padding:0 .4rem;
    width:80vw;
    transition: transform 2s;
    background:white;
}
.swipers_box .swiper_home li.active_view{

}
.swipers_box .swiper_home li.left_view{
transform: translateX(-100%);
}
.swipers_box .swiper_home li.right_view{
transform: translateX(100%);
}
.swipers_box .swiper_home li.ago{
transform: translateX(-100%);

}
.swipers_box .swiper_home li.ago.zIndex{
  z-index: 3
}
.swipers_box .swiper_home li.active{
transform: translateX(0);
z-index: 6
}
.swipers_box .swiper_home li.next{
  transform: translateX(100%);
  z-index: 2
}

.swipers_box .swiper_home li img{
    vertical-align: bottom;
}
.swiper_home li .left{
    margin-right:.2rem;
   position:relative;
}
.swiper_home_tag{
  position: absolute;
  bottom:0.4rem;
  left:.4rem;
  color:white;
}
.swiper_home_tag span{
  font-size:.6rem
}
.swiper_home li .left img{
    width:50vw;
    height:8rem;
    border-radius:4px;
}
.swiper_home li .right{

}
.swiper_home li .right img{
    height:3.9rem;
    width:30vw;
    border-radius:2px;
}
.swiper_home li .right img:nth-child(1){
    margin-bottom:.2rem;
}
</style>