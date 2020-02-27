<template>
    <div>
        <div class="photo_title">
            <div class="left">
                <img src="../../assets/user.png" alt="">
                <div class="login">
                    <p>点击登陆<span><img src="../../assets/vip.png" alt="">我的会员</span></p>
                    <div class="vip">企优享</div>
                </div>
            </div>

        </div>
        <div class="user_nav_list">
            <ul>
                <li>
                    <img src="../../assets/heart.png" alt="">
                    <p>关注</p>
                </li>
                <li>
                    <img src="../../assets/foot.png" alt="">
                    <p>足迹</p>
                </li>
                <li>
                    <img src="../../assets/purse.png" alt="">
                    <p>钱包</p>
                </li>
                <li>
                    <img src="../../assets/ticket.png" alt="">
                    <p>优惠券</p>
                </li>
                <li>
                    <img src="../../assets/record.png" alt="">
                    <p>预定记录</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    components:{},
    data(){
      return{}  
    },
    created(){},
    mounted(){},
    computed:{},
    methods:{}
}
</script>
<style lang="" scoped>
    .photo_title{
        display: flex;
        justify-content: space-between;
        margin:1rem;
    }
    .photo_title .left>img{
        width:4rem;
        height:4rem;
        margin-right:1rem;
    }
    .photo_title .left{
        display: flex;
        justify-content: flex-start;
    }
    .photo_title .login{
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
    .photo_title .login p span{
        display: inline-block;
        color:white;
        border-radius:10px;
        padding:2px 8px;
        background:linear-gradient(to right, rgb(207, 216, 75) , rgb(219, 193, 77));
        margin:0 10px;
        
        font-size:0.7rem;
    }
    .photo_title .login p span img{
        vertical-align: bottom
    }
     .photo_title .login img{
         width:1rem;
         height:1rem;
     }
     .photo_title .login .vip{
         color:rgb(78, 171, 184);
         border:1px solid rgb(78, 171, 184);
         border-radius:8px;
         display: inline-block;
         width:30%;
         position: relative;
         padding:2px 16px;
         font-size: 0.7rem;
     }
     .photo_title .login .vip::after{
         display: block;
         content:'';
         position: absolute;
         top:6px;
         right:6px;
         height:8px;
         width:8px;
         border:1px solid  rgb(65, 146, 156);
         border-top:transparent;
         border-left:transparent;
         transform: rotate(-45deg);	
     }
     /*  */
     .user_nav_list  ul{
         margin:2rem 1rem 1rem;
         display: flex;
         justify-content: space-between;
     }
     .user_nav_list  ul li{
         font-size:0.8rem;
         color:rgb(163, 161, 161);
         display: flex;
         flex-flow: column;
         align-items: center;
     }
     .user_nav_list  ul li img{
         width:2rem;
         height:2rem;
         margin-bottom:0.6rem;
     }
</style>