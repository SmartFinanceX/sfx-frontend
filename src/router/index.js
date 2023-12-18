// Composables
import { createRouter, createWebHistory } from "vue-router";
import defaulVue from "@/layouts/default/Default.vue";
import incRoute from "./incRoute.js";
import account from "./account.js";
const routes = [
  { path: "", redirect: "/login" },
  {
    //登录路由
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    component: defaulVue,
    children: [
      {
        path: "/",
        name: "Home",
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        children: [
          {
            name: "SearchView",
            path: "/search",
            component: () => import("@/views/SearchView.vue"),
          },
          {
            name: "Dashboard",
            path: "/dashboard",
            component: () => import("@/views/Dashboard.vue"),
          },
          {
            name: "DefaultHome",
            path: "",
            component: () => import("@/views/Dashboard.vue"),
          },
          {
            name: "News",
            path: "/news",
            component: () => import("@/views/NewsView.vue"),
          },
          incRoute,
          account,
          {
            name: "Test",
            path: "/test",
            component: () => import("@/views/Test.vue"),
          },
          // {
          //   name: "Collect",
          //   path: "/collect",
          //   component: () => import("@/views/Collect.vue"),
          // },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
