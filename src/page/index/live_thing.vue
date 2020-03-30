<template>
  <div>
      <div class="guest">
          <p>{{peopleName}}</p>
          <ul>
              <li class="" v-for="(item,index) in egg_people_list" :key="index">
                  <img :src="item.pic_big" alt="">
                  <div>
                      <p>{{item.author}}</p>
                      <span>{{item.title}}</span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="live">
          <p>{{liveName}}</p>
          <ul>
              <li v-for="(item ,index) in egg_live_list" :key="index">
                  <img :src="item.pic_big" alt="">
                  <p>{{item.author}}</p>
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
            peopleName:'',
            liveName:'',
            egg_live_list:[],
            egg_people_list:[]
        }
    },
    computed:{},
    created(){
        this.$http.getLive().then(res=>{
            console.log(res,'/////')
            this.liveName=res.data.result[0].name
            this.peopleName=res.data.result[2].name
            this.egg_live_list=res.data.result[0].content.filter((x,y)=>{
                return y<3
            })
            this.egg_people_list=res.data.result[2].content.filter((x,y)=>{
                return y<3
            })
        })
    },
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
