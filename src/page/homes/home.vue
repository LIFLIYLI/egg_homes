<template>
    <div>
        <div>data取值：{{num}}</div>
        <div>计算属性:{{kk}}</div>
        <div @click="addButton">值加加</div>
    </div>
</template>
<script>
import vuexs from '@/js/Vuex.js'
export default {
    components:{},
    data(){
        return {
            num:''
        }
    },
    computed:{
        kk(){
            return vuexs.state.count
        }
    },
    created(){
        this.num=vuexs.state.count
    },
    mounted(){},
    methods:{
        addButton:function(){
            vuexs.commit('add')
        }
    }
}
</script>
<style lang="">
    
</style>