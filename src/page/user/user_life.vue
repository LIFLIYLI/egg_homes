<template>
  <div>
      <div class="life_title">
          <div>蛋壳公寓</div>
          <span>有料蛋壳不一样</span>
      </div>
      <ul class="lift_list">
          <li>
              <img src="../../assets/bed_1.jpg" alt="">
              <div>2020蛋壳布历</div>
          </li>
                    <li>
              <img src="../../assets/bed_1.jpg" alt="">
              <div>2020蛋壳布历 上新抢。。。</div>
          </li>
                    <li>
              <img src="../../assets/bed_1.jpg" alt="">
              <div>2020蛋壳布历 新用户专享</div>
          </li>
      </ul>
      <div class="bottom_end">
            让租房变得简单和快乐
      </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="" scope>
.life_title{
    padding:1rem;
    display: flex;
    justify-content: space-between;
}
.life_title span{
    font-size:0.8rem;
    color:#999999;
}
.lift_list{
    margin: 1rem;
    overflow-y: hidden;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    font-size:0.8rem;
}

.lift_list li:nth-child(2),
.lift_list li:nth-child(1){
    margin-right:1rem;
}
.lift_list li div{
    white-space:nowrap;
       overflow:hidden;
       text-overflow:ellipsis;
       margin:0.4rem 0;
}
.lift_list img{
    width:10rem;
    height:7rem;
    border-radius:8px;
}
/*  */
.bottom_end{
    margin-bottom:4rem;
    line-height: 5rem;
    text-align: center;
    background: #f0f0f0;
    color:#999999
}
</style>