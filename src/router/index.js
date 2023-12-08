import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'
import PageCocktail from '../pages/PageCocktail.vue'
import PageCocktailRandom from '../pages/PageCocktailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/cocktails/:rid',
      name: 'cocktail',
      component: PageCocktail
    },
    {
      path: '/random',
      name: 'cocktailRandom',
      component: PageCocktailRandom
    }
  ]
})

export default router
