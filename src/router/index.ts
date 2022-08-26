import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const App = () => import(/* webpackChunkName: "App" */ '@/App.vue')

const MyList = () => import(/* webpackChunkName: "MyList" */ '@/components/MyList.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    component: App,
    children: [
      {
        path: 'mylist',
        name: 'myList',
        component: MyList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
