<template>
  <div>
    <main>
      <router-view></router-view>
      <footer>
        <ul >
          <li 
            v-for="(item,index) in list" 
            :key="index" 
            v-bind:class='{activ:ifture==index}'
            v-on:click="changeTab(index,item.path)"
            class="parents"
            >
            <div class="children" v-if="index==3">{{mesNum}}</div>
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
import eventhub from '@/js/eventHub.js'
//import store from '@/js/Vuex.js' //改进不用单独引入
export default {
  name: "Tabbar",
  data() {
    return {
      list:[
        {name:'首页',path:'index',src:'/static/img/index.png',arc:'/static/img/index_ac.png',url:''},
        {name:'快速找房',path:'find',src:'/static/img/find_home.png',arc:'/static/img/find_home_ac.png',url:''},
        {name:'房屋委托',path:'homes',src:'/static/img/entrust.png',arc:'/static/img/entrust_ac.png',url:''},
        {name:'我的',path:'user',src:'/static/img/user.png',arc:'/static/img/user_ac.png',url:''}
      ],
      ifture:0
    };
  },
  computed:{
    mesNum(){
      //return store.state.count
      return this.$store.state.count
    }
  },
  created(){
        //监听bar状态改变
    eventhub.$on('changeBar',()=>{
      this.ifture=1
      console.log(this.ifture)
    })
  },
  methods:{
    changeTab:function(e,b){
      this.ifture=e
     // this.$router.push({path:b})传参数用下：
      this.$router.push({ name: b, params: { userId: '123' }})
    },
  }
};
</script>
<style lang="" scoped>
footer{
    padding:0.5rem 0;
  position:fixed;
  bottom:0;width: 100%;
  background:white;
    z-index: 10;
  border-top: 1px solid #e0e0e0;
  overflow: hidden;
}
footer ul {
  margin: 0;
  padding:0;
  list-style: none;
  display: flex;
  justify-content: space-between;


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
/*  */
.parents{
  position: relative;
}
.children{
      position: absolute;
    top:0;
    right:1rem;
    width:1.2rem;
    height:1.2rem;
    border-radius:50%;
    background: rgb(250, 59, 59);
    font-size:0.4rem;
    color:white;
   text-align: center
}
</style>
