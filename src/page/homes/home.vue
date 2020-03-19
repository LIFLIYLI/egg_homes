<template>
    <div>
        <div>data取值：{{num}}</div>
        <div>计算属性:{{kk}}</div>
        <div @click="addButton" class="border">值加加</div>
        <div class="border" v-on:click="reduceButton">值延时减少</div>
    </div>
</template>
<script>
//import vuexs from '@/js/Vuex.js'
export default {
    components:{},
    data(){
        return {
            num:''
        }
    },
    computed:{
        kk(){
            //return vuexs.state.count
            return this.$store.state.count
        }
    },
    created(){
       // this.num=vuexs.state.count
            this.num=this.$store.state.count
    },
    mounted(){},
    methods:{
        addButton:function(){
           // vuexs.commit('add')
           this.$store.commit('add')
        },
        reduceButton:function(){
            //vuexs.comit
            this.$store.dispatch('reduce').then(()=>{
                alert('0')
            })
        }
    }
}
</script>
<style lang="">
    .border{
        border:1px solid red;
        padding:2px 1rem;
        margin:1rem 0;
        display: inline-block;
    }
</style>