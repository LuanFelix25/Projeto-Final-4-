import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
]

export default createRouter({
  // Use hash history to avoid 404s on static hosts like GitHub Pages
  // No base here — build uses Vite `base` and GitHub Pages serves from repo path
  history: createWebHashHistory(),
  routes,
})
