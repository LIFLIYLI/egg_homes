<template>
    <div>
        <div class="style_list">
            <ul>
                <li v-for="(item,index) in styleList" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="title_list">
            <ul>
                <li v-for="(item,index) in titleList" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    components:{},
    data(){
        return {
            styleList:{rent:'整/合租',address:'位置',money:'价格',more:'更多'},
            titleList:['天通原','可月租','独立卫生间','近地铁','南','宋家庄','可乐','童话故事']
        }
    },
    computed:{},
    created(){},
    mounted(){},
    methods:{}
}
</script>
<style lang="">
    .style_list ul{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f0f0f0;
        padding:1rem 1rem 0.5rem 1rem;
    }
    /*  */
    .title_list ul{
        display: flex;
        justify-content: space-between;
        margin:0.5rem 1rem 1rem 1rem;
        overflow-y: hidden;
    }
     .title_list ul li{
         border-radius: 14px;
         background: #f5f3f3;
         white-space: nowrap;
         padding:0.2rem 0.8rem;
         margin-right:1rem;
         color:#464545;
     }
</style>