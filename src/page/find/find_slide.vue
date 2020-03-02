<template>
  <div>
    <ul class="slide">
      <li>
        <img src="../../assets/bed_1.jpg" alt />
        <div class="bg_size">
          <p>今日签约 免费退换</p>
          <span>3天不满意免费退</span>
        </div>
      </li>
      <li>
        <img src="../../assets/bed_2.jpg" alt />
                <div class="bg_size">
          <p>短期过渡 免费换租</p>
          <span>再享租金9折优惠</span>
        </div>
      </li>
      <li>
        <img src="../../assets/bed_1.jpg" alt />
                <div class="bg_size">
          <p>今日签约 免费退换</p>
          <span>3天不满意免费退</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="" scope>
ul.slide {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  overflow-y: hidden;
  padding: 0 1rem;
}
ul.slide li {
  width: 10rem;
  height: 6rem;
  margin-right: 1rem;
  position: relative;
  color:white;
}
.slide li img {
  width: 10rem;
  height: 6rem;
  border-radius: 6px;
}
.slide li .bg_size{
    position: absolute;
    bottom:1rem;
    left:0.5rem;
}
.bg_size span{
    font-size:0.8rem;
}
</style>