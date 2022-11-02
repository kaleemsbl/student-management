import Cookies from "js-cookie";

import MainLayout from "layouts/MainLayout.vue";
import LoginLayout from "layouts/LoginLayout.vue";

function authenticationRequire(to, from, next) {
  let token = Cookies.get("Token");
  if (!token) {
    next("/login");
  } else {
    next();
  }
}

function ifLoginRedirectToHome(to, from, next) {
  let token = Cookies.get("Token");
  if (token) {
    next("/");
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    beforeEnter: [authenticationRequire],
  },
  {
    path: "/login",
    component: LoginLayout,
    children: [{ path: "", component: () => import("pages/Login.vue") }],
    beforeEnter: [ifLoginRedirectToHome],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
