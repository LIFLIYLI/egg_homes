<template>
  <div>
    <main>
      <router-view></router-view>

      <footer>
        <ul v-on:click="changeTab($event)">
          <li 
            v-for="(item,index) in list" 
            :key="index" 
            v-bind:class='{activ:ifture==index}'
            @click="ifture=index">
            <img v-if="ifture==index" :src="item.arc" alt="">
            <img v-else :src="item.src" alt="">
            <div>
              {{item.name}}
            </div>
            
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
        {name:'首页',src:'/static/img/index.png',arc:'/static/img/index_ac.png',url:''},
        {name:'快速找房',src:'/static/img/find_home.png',arc:'/static/img/find_home_ac.png',url:''},
        {name:'房屋委托',src:'/static/img/entrust.png',arc:'/static/img/entrust_ac.png',url:''},
        {name:'我的',src:'/static/img/user.png',arc:'/static/img/user_ac.png',url:''}
      ],
      ifture:0
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
main{
  border:1px solid black;
}
footer ul {
  margin: 0;
  border: 1px solid red;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding:0;
  position:fixed;
  bottom:0;width: 100%;
  background:white;

}
footer ul li{
  width: 25%;
  text-align: center;
  font-size:0.8rem;
}
footer ul li img{
  width: 2.2rem;
  height:2.2rem;
}
footer ul li.activ{
  color:#1296db;
}
</style>
