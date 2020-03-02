<template>
  <div>
    <ul class="homes_list">
      <li v-for="(item,index) in list" :key="index">
        <div class="left_picture">
          <img :src="item.picture" alt />
          <p>{{item.attention}}</p>
        </div>
        <div class="right">
          <p>{{item.title}}</p>
          <div>{{item.introduce}}</div>
          <div>{{item.distance}}</div>
          <ul>
            <li v-for="(able,index) in item.prompt" :key="index">{{able}}</li>
          </ul>
          <div>
            <span class="money_color">¥{{item.money_one}}</span>/首月
            <span class="money_delete">{{item.money_old}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        list:[{picture:'/static/img/bed_1.jpg',attention:'今天有用户关注',title:'龙泽 朝南-主卧',introduce:'合租| 2室1厅 · 3/14层',distance:'距13号线龙泽站754米',prompt:['立减600元','独立卫生间','品质公寓'],money_one:'0',money_old:'3878'},
        {picture:'/static/img/bed_1.jpg',attention:'今天有用户关注',title:'龙泽 朝南-主卧',introduce:'合租| 2室1厅 · 3/14层',distance:'距13号线龙泽站754米',prompt:['立减600元','独立卫生间','品质公寓'],money_one:'0',money_old:'3878'},
        {picture:'/static/img/bed_1.jpg',attention:'今天有用户关注',title:'龙泽 朝南-主卧',introduce:'合租| 2室1厅 · 3/14层',distance:'距13号线龙泽站754米',prompt:['立减600元','独立卫生间','品质公寓'],money_one:'0',money_old:'3878'},
        {picture:'/static/img/bed_1.jpg',attention:'今天有用户关注',title:'龙泽 朝南-主卧',introduce:'合租| 2室1厅 · 3/14层',distance:'距13号线龙泽站754米',prompt:['立减600元','独立卫生间','品质公寓'],money_one:'0',money_old:'3878'}
        ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="">
ul.homes_list > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
ul.homes_list li .right {
  flex-grow: 1;
  font-size: 0.8rem;
  color: #535151;
}
.homes_list li .right p {
  font-size: 1rem;
  font-weight: bold;
  color: black;
}
.homes_list li .right > div {
  margin: 0.2rem 0;
}
.homes_list li .right ul {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  white-space: nowrap;
}
.homes_list li .right ul li {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
}
.homes_list .left_picture {
  position: relative;
  width: 40%;
  height: 6rem;
  margin-right: 1rem;
}
.homes_list .left_picture p {
  position: absolute;
  bottom: 0;
  left: 0;
}
.left_picture img {
  width: 100%;
  height: 6rem;
  border-radius: 8px;
}
.money_color{
    color:red;
    font-size:1rem;
}
.money_delete{
    text-decoration:line-through
}
</style>