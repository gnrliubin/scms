import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

  const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      components:{ 
        
      },
      beforeEnter:(to,from,next)=>{
        alert('路由独享守卫')
      }
    }
  ]
})

// 全局守卫会覆盖独享守卫
router.beforeEach((to,from,next)=>{
  alert('路由全局守卫')
  store.commit('increment')
  console.log(this)
})

export default router