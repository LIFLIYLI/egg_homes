import Vuex from 'Vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:33,
    },
    mutations:{
        add(state){
            state.count++
        },
        reduce(state){
            state.count--
        }
    },
    actions:{
        reduce(x){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    x.commit('reduce')
                    resolve()
                },3000)
            })
        }
    }
})
export  default store