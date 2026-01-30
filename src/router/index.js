import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import About from '../pages/about/about.vue'
import Projects from '../pages/projects/projects.vue'
import Cinema from '../pages/cinema/cinema.vue'
import Gallery from '../pages/gallery/gallery.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
})

export default router
