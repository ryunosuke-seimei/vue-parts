import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import TopView from "@/views/TopView"
import ChartView from "@/views/ChartView"
import SwordView from "@/views/SwordView"
import SwordInputView from "@/views/SwordInputView"

import MuscleView from "@/views/MuscleView"

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
      path:"/sword",
      component:SwordView
    },
    {
      path:"/sword/input",
      component:SwordInputView
    },
    {
      path:"/muscle",
      component:MuscleView
    }
  ],
})

export default router
