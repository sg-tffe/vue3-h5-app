import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const App = () => import(/* webpackChunkName: "App" */ '@/App.vue')

const List = () => import(/* webpackChunkName: "List" */ '@/components/List.vue')
const List2 = () => import(/* webpackChunkName: "List" */ '@/components/Lis2.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    component: App,
    children: [
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'list2',
        name: 'list2',
        component: List2
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
