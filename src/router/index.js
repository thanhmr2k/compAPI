import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropinComp from '../views/PropinComp.vue'
import Detail from '../components/Detail.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/side',
    name: 'side',
    component: PropinComp
  },
  {
    path: '/posts/:id',
    name: 'Detail',
    component: Detail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
