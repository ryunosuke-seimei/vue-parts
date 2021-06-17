import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state:() => ({
        title: "Limits-Training"
    }),
    getters:{
        title(state){return state.title},
    },
    mutations:{
        setTitle(state, title){
            state.title = title
        }
    },
    actions:{
        SetTitle: function(context, value){
            context.commit("setTitle", value)
        }
    }
})
