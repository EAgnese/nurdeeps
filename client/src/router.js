import { createWebHistory, createRouter} from 'vue-router'



const routes = [
  { path: '/games', component: () => import("./components/GamesComponent") },
  { path: '/suggestions', component: () => import("./components/GamesComponent") },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;