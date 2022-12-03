import Cookies from "js-cookie";

import MainLayout from "layouts/MainLayout.vue";
import LoginLayout from "layouts/LoginLayout.vue";

function authenticationRequire(to, from, next) {
  let token = Cookies.get("token");
  if (!token) {
    next("/login");
  } else {
    next();
  }
}

function ifLoginRedirectToHome(to, from, next) {
  let token = Cookies.get("token");
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
  {
    path: "/admin/teachers",
    component: MainLayout,
    children: [{ path: "", component: () => import("pages/teacher/Teacher.vue") }],
    beforeEnter: [authenticationRequire],
  },
  {
    path: "/admin/students",
    component: MainLayout,
    children: [{ path: "", component: () => import("pages/student/StudentList.vue") }],
    beforeEnter: [authenticationRequire],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
