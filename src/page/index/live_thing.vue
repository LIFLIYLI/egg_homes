<template>
  <div>
      <div class="guest">
          <p>租客故事</p>
          <ul>
              <li class="" v-for="(item,index) in guestList" :key="index">
                  <img :src="item.src" alt="">
                  <div>
                      <p>{{item.name}}</p>
                      <span>{{item.title}}</span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="live">
          <p>蛋壳生活</p>
          <ul>
              <li v-for="(item ,index) in liveList" :key="index">
                  <img :src="item.src" alt="">
                  <p>{{item.name}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
            guestList:[
                {src:'/static/img/bed_1.jpg',name:'居家',title:'省心不分心 才是让我安心的选择'},
                {src:'/static/img/bed_2.jpg',name:'经历',title:'我的京城居 不在抱怨大不易'},
                {src:'/static/img/bed_1.jpg',name:'集中式',title:'这里会成为《爱情公寓》的样子'}
            ],
            liveList:[
                {src:'/static/img/bed_1.jpg',name:'亚马逊海外购送福利'},
                {src:'/static/img/bed_2.jpg',name:'蛋壳用户专享搬家礼'},
                {src:'/static/img/bed_1.jpg',name:'演员de蛋生-上海站精彩回顾'}
            ]
        }
    },
    computed:{},
    created(){},
    methods:{

    }
}
</script>

<style scoped>
ul{
    list-style: none;
    margin:0;
    padding:0;
}
    .guest>p{
        margin:1rem;
    }
    .guest ul{
        /* display: -webkit-box; */
        overflow-y: hidden;
        display: flex;
    }
    .guest li{
        width:12rem;
        margin-left: 0.4rem;
        height:10rem;
        position: relative;
    }
    .guest div{
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
    }
    .guest img{
        width:12rem;
        height:10rem;
        border-radius:8px;
        vertical-align: bottom;
    }
    .guest div p{
        margin: 0.4rem;
        background:white;
        font-size:0.9rem;
        border-radius:4px;
        display: inline-block;
        padding:0.1rem 0.4rem
    }
.guest div span{
    display: block;
    background:rgb(0,0,0,0.4);
    color:white;
    padding:0 2rem 0 0.4rem;
    font-size:0.6rem;
    height:2.4rem;
}
    /*  */
    .live>p{
        margin:1rem;
    }
    .live ul{
        display: flex;
        justify-content: flex-start;
        overflow-y: hidden;
        margin-bottom:2rem;

    }
    .live li{
        flex-shrink: 0;
        width:45vw;
        margin-left:0.4rem;
    }
    .live li:last-child{
        padding-right: 0.4rem
    }
    .live img{
        width:100%;
        height:8rem;
        border-radius:6px;
    }
    .live li p{
        margin:0;
        font-size:0.8rem;
    }
</style>
