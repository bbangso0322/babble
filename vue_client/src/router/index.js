import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/accounts/Signup.vue'
import Diary from '@/views/diaries/Diary.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
