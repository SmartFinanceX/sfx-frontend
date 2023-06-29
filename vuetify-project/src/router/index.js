// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        children: [
          {
            name: 'SearchView',
            path: '/search',
            component: () => import('@/views/SearchView.vue'),
          },
          {
            name: 'Dashboard',
            path: '/dashboard',
            component: () => import('@/views/Dashboard.vue'),
          },
          {
            name: 'DefaultHome',
            path: '',
            component: () => import('@/views/Dashboard.vue'),
          },
          {
            name: 'News',
            path: '/news',
            component: () => import('@/views/NewsView.vue'),
          },
        ]
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
