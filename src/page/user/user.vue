<template>
    <div>
        <div class="message_title">
            <div><img src="../../assets/user.png" alt="">点击登陆</div>
            <div class="messages"><div class="get_mes">{{mesNum}}</div><img src="../../assets/message.png" alt=""></div>
        </div>
        <my-user class="my_user"></my-user>
        <my-tool class="my_tools"></my-tool>
        <my-life></my-life>
    </div>
</template>
<script>
import myUser from '@/page/user/user_login.vue'
import myTool from '@/page/user/user_tool.vue'
import myLife from '@/page/user/user_life'
//import store from '@/js/Vuex.js'
export default {
    components:{
        myUser,
        myTool,
        myLife
    },
    data(){
        return{

        }
    },
    created(){},
    mounted(){},
    computed:{
        mesNum(){
           // return store.state.count
           return this.$store.state.count
        }
    },
    methods:{

    }
}
</script>
<style lang="" scoped>
    .message_title{
        display: flex;
        justify-content: space-between;
        height:3rem;
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        align-items: center;
        padding:1rem;
        box-sizing: border-box;
        background: white;
        z-index: 10;
    }
    .message_title>div{
        display: flex;
        align-items: center;
    }
    .message_title img{
        width:2rem;height:2rem;
    }
    /*  */
    .my_user{
        border-bottom:10px solid #f0f0f0;
        margin-top:3rem;
    }
    /*  */
    .my_tools{
        border-bottom:10px solid #f0f0f0;
    }
    /*  */
    .messages{
        position: relative;
    }
    .messages .get_mes{
    position: absolute;
    top:0;
    right:-0.6rem;
    width:1.2rem;
    height:1.2rem;
    border-radius:50%;
    background: rgb(250, 59, 59);
    font-size:0.4rem;
    color:white;
   text-align: center
}
</style>