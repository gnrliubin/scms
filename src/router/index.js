import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Layout from '@/components/layout/Layout'
import MainTest from '@/components/view/MainTest'
import Cookies from 'js-cookie' 


Vue.use(Router)

  const router = new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'Layout',
        component: Layout,
        children:[
          {
            path:'main',
            component: MainTest,
          }
        ],
        // beforeEnter:(to,from,next)=>{
        //   alert('路由独享守卫')
        // }
      }
    ]
})

//全局守卫会覆盖独享守卫
router.beforeEach((to,from,next)=>{
  //有token，则存入cookies
  if(to.query["token"]){
    Cookies.set('token', to.query["token"])
  }
  // 从cookies中读取token
  let accessToken = Cookies.get('token')
  // 如果没有保存token，则去单点登录
  if(!accessToken){
    window.location.href='http://172.27.30.172:8080/sso/login?service=http://localhost:8080'+to.path
  }
  // 如果有token，则路由通过
  else{
    // console.log(accessToken)
    next()
  }
   

})

export default router