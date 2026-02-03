import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import ProposView from '@/views/ProposView.vue'
import ServiceView from '@/views/ServiceView.vue'



const routes = [
  {
    path: '/',
    component : HomeView
  },
  {
    path: '/blog',
    component : BlogView
  },
  {
    path: '/contact',
    component : ContactView
  },
  {
    path: '/propos',
    component : ProposView
  },
  {
    path: '/services',
    component : ServiceView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
