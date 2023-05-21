import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '@/stores';

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
    children: [

    ],
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

router.beforeEach((to) => {
  const userStore = useUserStore();

  if(to.name === "Landing" && userStore.authToken){
    return {name: "App"};
  }

  // Path protegidos
  const protectedPath = ["/app", "/user-setup"];
  let isProtectedPath = false;
  protectedPath.forEach((path: string) => isProtectedPath = isProtectedPath || to.fullPath.includes(path));
  if(isProtectedPath && !userStore.authToken){
    return {name: "Landing"}
  }
})

export default router;
