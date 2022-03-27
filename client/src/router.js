import { createWebHistory, createRouter} from 'vue-router'



const routes = [
  { path: '/', component: () => import("./components/IndexComponent") },
  { path: '/admin', component: () => import("./components/AdminComponent") },
  { path: '/login', component: () => import("./components/LoginComponent") },
  { path: '/games', component: () => import("./components/GamesComponent") },
  { path: '/games/:id(\\d+)', component: () => import("./components/RunsComponent") },
  { path: '/suggestions', component: () => import("./components/SuggestionsComponent") },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;