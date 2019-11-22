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
                <span>1</span>/3
            </div>
        </div>
        <ul class="swiper_home">
            <li>
                <div class="left">
                    <img src="../../assets/bed_2.jpg" alt="">
                </div>
                <div class="right">
                    <img src="../../assets/bed_1.jpg" alt="">
                    <img src="../../assets/bed_2.jpg" alt="">
                </div>
            </li>
                        <li>
                <div class="left">
                    <img src="../../assets/bed_2.jpg" alt="">
                </div>
                <div class="right">
                    <img src="../../assets/bed_1.jpg" alt="">
                    <img src="../../assets/bed_2.jpg" alt="">
                </div>
            </li>
                        <li>
                <div class="left">
                    <img src="../../assets/bed_2.jpg" alt="">
                </div>
                <div class="right">
                    <img src="../../assets/bed_1.jpg" alt="">
                    <img src="../../assets/bed_2.jpg" alt="">
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
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
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
    display: flex;
    overflow: hidden;
}
.swipers_box .swiper_home li{
    display: flex;
    justify-content: space-between; 
   
    margin:0 .4rem;
    border:1px solid yellow;
}
.swipers_box .swiper_home li img{
    vertical-align: bottom;
}
.swiper_home li .left{
    margin-right:.2rem;
   
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