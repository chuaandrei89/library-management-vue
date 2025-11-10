import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import AppOnboarding1 from '../components/AppOnboarding1.vue'
import AppOnboarding2 from '../components/AppOnboarding2.vue'
import AppOnboarding3 from '../components/AppOnboarding3.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/onboarding1', name: 'Onboarding1', component: AppOnboarding1 },
  { path: '/onboarding2', name: 'Onboarding2', component: AppOnboarding2 },
  { path: '/onboarding3', name: 'Onboarding3', component: AppOnboarding3 },
  { path: '/signup', name: 'SignUp', component: () => import('../components/SignUp.vue') },
  {
    path: '/onboarding1',
    name: 'Onboarding1',
    component: () => import('../components/AppOnboarding1.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
