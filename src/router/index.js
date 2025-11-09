import Login from '@/views/Login.vue';
import Onboarding1 from '@/views/Onboarding1.vue';
import Onboarding2 from '@/views/Onboarding2.vue';
import Onboarding3 from '@/views/Onboarding3.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Onboarding1',
    component: Onboarding1,
  },
  {
    path: '/onboarding2',
    name: 'Onboarding2',
    component: Onboarding2,
  },
  {
    path: '/onboarding3',
    name: 'Onboarding3',
    component: Onboarding3,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'SimpleTest',
    component: () => import('@/views/SimpleTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
