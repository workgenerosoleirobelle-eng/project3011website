import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BsIt from '../views/BsIt.vue'
import BsCs from '../views/BsCs.vue'
import BsDmIa from '../views/BsDmIa.vue'
import Blis from '../views/Blis.vue'
import Faculty from '../views/Faculty.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/programs/bsit', name: 'bsit', component: BsIt },
    { path: '/programs/bscs', name: 'bscs', component: BsCs },
    { path: '/programs/bsdmia', name: 'bsdmia', component: BsDmIa },
    { path: '/programs/blis', name: 'blis', component: Blis },
    { path: '/faculty', name: 'faculty', component: Faculty },
    { path: '/news', name: 'news', component: News },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
