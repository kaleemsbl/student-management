import { boot } from "quasar/wrappers";
import { api } from "./axios";
import { authUserStore } from "../stores/user-authentication";
import Cookies from "js-cookie";

export default boot(async ({ store }) => {
  try {
    const token = Cookies.get("token");
    if (token) {
      // let result = await api.post("/auth/login", {});
      const userStore = authUserStore(store); // whole user store

      userStore.updateUser({
        role: "user",
        isEmailVerified: false,
        name: "Fake User",
        email: "fake@example.com",
        id: "62fa7394cc1f9000226f9322",
      });
      console.log("Page Hard Refresh - State Updated!");
    }
  } catch (error) {
    console.log(error.response.data.message);
  }

  // Set i18n instance on app
  // app.use(i18n)
});
