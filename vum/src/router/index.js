import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Popup from '@/page/Popup'
import Preloader from '@/page/Preloader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/Preloader',
      name: 'Preloader',
      component: Preloader
    }
  ]
})
