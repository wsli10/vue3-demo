import {createRouter, createWebHistory} from 'vue-router'

const Swiper =  () => import('./components/SwiperVue')
const Hello =  () => import('./components/HelloWorld')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path: '/swiper/',
      component: Swiper
    }
  ]
})

export default router