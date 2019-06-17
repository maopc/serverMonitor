import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/back',
      name: 'backHome',
      component: () => import('@/views/backHome'),
      redirect:'/server',
      children:[
        {
            path:'/server',
            component: () => import('@/views/server'),
        },
        {
            path:'/log',
            component: () => import('@/views/log'),
        },
        {
          path:'/about',
          component: () => import('@/views/about'),
        }
    ]
    }
  ]
})
