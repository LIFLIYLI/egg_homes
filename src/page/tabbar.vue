<template>
  <div>
    <main>
      <router-view></router-view>

      <footer>
        <ul v-on:click="changeTab($event)">
          <li v-for="index in list" :key="index.name" @click="changeTab()">
              <img :src="index.src" alt="">
            {{index.name}}
          </li>
        </ul>
      </footer>
    </main>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      list:[
        {name:'首页',src:'/static/img/index.png',url:''},
        {name:'快速找房',src:'/static/img/find_home.png',url:''},
        {name:'房屋委托',src:'/static/img/entrust.png',url:''},
        {name:'我的',src:'/static/img/user.png',url:''}
      ],
    };
  },
  methods:{
    changeTab:function(e){
      console.log(e.target)
    }
  }
};
</script>
<style scoped="" >
footer ul {
  margin: 0;
  border: 1px solid red;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding:0;

}
footer ul li{
  width: 25%;
}
</style>
