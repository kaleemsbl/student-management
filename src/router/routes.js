import MainLayout from "layouts/MainLayout.vue";
import LoginLayout from "layouts/LoginLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/login",
    component: LoginLayout,
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
