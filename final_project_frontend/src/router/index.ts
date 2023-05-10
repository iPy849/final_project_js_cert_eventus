import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/landingPage/landingPageView.vue"),
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/landingPage/termsPageView.vue"),
  },
  {
    path: "/user-setup",
    name: "UserSetup",
    component: () => import("@/views/app/userSetupView.vue"),
  },
  {
    path: "/app",
    name: "App",
    component: () => import("@/views/app/mainView.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: () => import("@/views/404/notFoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
