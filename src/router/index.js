import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import About from '../pages/about/about.vue'
import Projects from '../pages/projects/projects.vue'
import Cinema from '../pages/cinema/cinema.vue'
import Gallery from '../pages/gallery/gallery.vue'
import Photograph from '../pages/gallery/photograph/photograph.vue'
import Photoshop from '../pages/gallery/photoshop/photoshop.vue'
import Lab from '../pages/lab/lab.vue'
import Work from '../pages/work/work.vue'
import Contact from '../pages/contact/contact.vue'

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
    },
    {
      path: '/gallery/photograph',
      name: 'photograph',
      component: Photograph,
      meta: { transition: 'slide-left' }
    },
    {
      path: '/gallery/photoshop',
      name: 'photoshop',
      component: Photoshop,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }
  ]
})

export default router
