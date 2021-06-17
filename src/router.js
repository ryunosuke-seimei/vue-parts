import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import TopView from "@/views/TopView"
import ChartView from "@/views/ChartView"
import VuetifyView from "@/views/VuetifyView"
import VuexView from "@/views/VuexView"

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",
      component:TopView
    },
    {
      path:"/chart",
      component:ChartView
    },
    {
      path:"/vuetify",
      component:VuetifyView
    },
    {
      path:"/vuex",
      component:VuexView
    }
  ],
})

export default router
