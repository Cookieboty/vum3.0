import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Popup from '@/page/Popup'
import Loading from '@/page/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
