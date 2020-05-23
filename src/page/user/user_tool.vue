<template>
  <div>
    <div class="tool_box">
      <div class="titles">
        <div>常用工具</div>
        <span>设置您的常用工具</span>
      </div>
      <ul class="tool_list">
        <li v-for="(item,index) in toolList" :key="index">
          <div>
            <img :src="item.icon" alt />
          </div>
          <div>{{item.able}}</div>
        </li>
      </ul>
    </div>

    <div class="egg_arrange">
      <div>蛋壳服务</div>
      <ul>
        <li v-for="(item,index) in eggList" :key="index">
          <div>
            <img :src="item.icon" alt />
          </div>
          <div>{{item.able}}</div>
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
      toolList: [
        { icon: "../../static/img/tool-1.png", able: "租房合同" },
        { icon: "../../static/img/tool-2.png", able: "租约变更" },
        { icon: "../../static/img/tool-3.png", able: "智能门锁" },
        { icon: "../../static/img/tool_4.png", able: "在线报修" },
        { icon: "../../static/img/tool-5.png", able: "我的管家" }
      ],
      eggList: [
        { icon: "../../static/img/tool-6.png", able: "租房合同" },
        { icon: "../../static/img/tool-7.png", able: "租房账单" },
        { icon: "../../static/img/tool-8.png", able: "品质搬家" }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="" scope>
.tool_box{
    padding:1rem;
    border-bottom: 10px solid #f0f0f0;
}
.titles {
  display: flex;
  justify-content: space-between;
}
.titles span {
  font-size: 0.8rem;
  color: #999999;
}
.tool_list {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0.5rem 0;
  
}
.tool_list li {
  text-align: center;
  font-size: 0.8rem;
  color: #999999;
}
.tool_list li img {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
}
/*  */
.egg_arrange {
    padding:1rem;
}
.egg_arrange ul{
    display: flex;
    justify-content: flex-start;
    margin-top:1rem;
}
.egg_arrange ul li{
     text-align: center;
  font-size: 0.8rem;
  color: #999999; 
  padding:1rem 1.5rem 0 0;
}
.egg_arrange ul li img{
    width:2rem;
    height:2rem;
    margin-bottom:0.5rem;
}
</style>