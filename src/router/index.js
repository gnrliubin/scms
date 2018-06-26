import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Layout from '@/components/layout/Layout'


Vue.use(Router)

  const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      // beforeEnter:(to,from,next)=>{
      //   alert('路由独享守卫')
      // }
    }
  ]
})

// // 全局守卫会覆盖独享守卫
// router.beforeEach((to,from,next)=>{
//   alert('路由全局守卫')
//   store.commit('increment')
//   console.log(this) //这个this是router
//   console.log(this.$store)  //undefined
// })

export default router