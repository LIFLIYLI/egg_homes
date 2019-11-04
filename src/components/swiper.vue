<template>
  <div>
      <ul>
            <li  
                v-for="(item,index) in sliders" 
                :key="index">
                <img :src="item.img" alt="">
            </li>
      </ul>
  </div>
</template>

<script>
export default {
    components:{

    },
    props:{},
    data(){
        return{
             sliders:[
        {
          img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
        },
      ],
        }
    },
    create(){},
    mounted(){},
    methods:{},
    computed:{}
}
</script>

<style scoped>
    ul{
        border:1px solid blue;
        list-style: none;
        padding:0;
        margin:0;
        position:relative;
    }
    ul li{
        border:1px solid green;
        width:100%;
        height:6rem;
        position:absolute;
        top:0;
        left:0;
    }
    ul li img{
        width: 100%;
        height:100%;
    }
</style>