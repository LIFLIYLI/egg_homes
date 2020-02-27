<template>
    <div>
        <div class="message_title">
            <div><img src="../../assets/user.png" alt="">点击登陆</div>
            <div><img src="../../assets/message.png" alt=""></div>
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
    .message_title div{
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
</style>