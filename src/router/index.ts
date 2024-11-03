import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contacts from '@/pages/Contacts.vue'
import Antipasto from '@/pages/Antipasto.vue'
import Deserts from '@/pages/Deserts.vue'
import Drinks from '@/pages/Drinks.vue'
import Pasta from '@/pages/Pasta.vue'
import Pizza from '@/pages/Pizza.vue'
import Salads from '@/pages/Salads.vue'
import Soup from '@/pages/Soup.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/Контакты', name: 'contact', component: Contacts },
    { path: '/Антипасто', name: 'антипасто', component: Antipasto },
    { path: '/Десерты', name: 'десерты', component: Deserts },
    { path: '/Напитки', name: 'напитки', component: Drinks },
    { path: '/Паста', name: 'паста', component: Pasta },
    { path: '/Пицца', name: 'пицца', component: Pizza },
    { path: '/Салаты', name: 'салаты', component: Salads },
    { path: '/Супы', name: 'супы', component: Soup },
  ],
})

export default router
