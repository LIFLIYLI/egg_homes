<template>
    <div>
        <seach-message></seach-message>
        <div>
            <swiper-img></swiper-img>
        </div>
    </div>
</template>

<script>
import seachMessage from './seach_message'
import swiperImg from '../../components/swiper'
export default {
    components:{
        seachMessage,
        swiperImg
    },
    data(){
        return{

        }
    },
    created(){},//创建结束
    mounted(){},//渲染结束
    methods:{},//方法
    computed:{},//计算属性
    
}
</script>

<style scoped>

</style>