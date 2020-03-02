import Vuex from 'Vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:33
    },
    mutations:{
        add(state){
            state.count++
        }
    }
})
export  default store