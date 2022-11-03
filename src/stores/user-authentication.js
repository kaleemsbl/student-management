import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const authUserStore = defineStore("user", {
  state: () => ({
    data: {},
    token: "",
    refreshToken: "",
  }),
  getters: {
    getAuthUser() {
      return this.data;
    },
    getAuthUserToken() {
      return this.token;
    },
    getAuthUserRefreshToken() {
      return this.refreshToken;
    },
  },
  actions: {
    loginUser(data) {
      this.data = data.user;
      this.token = data.tokens.access.token;
      this.refreshToken = data.tokens.refresh.token;
      Cookies.set("token", data.tokens.access.token);
    },
    logoutUser() {
      this.data = {};
      this.token = "";
      this.refreshToken = "";
      Cookies.remove("token");
    },
  },
});
