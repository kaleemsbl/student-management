import { boot } from "quasar/wrappers";
import { api } from "./axios";
import { authUserStore } from "../stores/user-authentication";
import Cookies from "js-cookie";

export default boot(async ({ redirect, store }) => {
  try {
    const token = Cookies.get("token");
    if (token) {
      api.defaults.headers.common['Authorization'] = "Bearer " + Cookies.get('token');
      let result = await api.get("/auth/get-user-by-token");
      const userStore = authUserStore(store); // whole user store
      userStore.updateUser({
        role: result.data.role,
        isEmailVerified: result.data.isEmailVerified,
        name: result.data.name,
        email: result.data.email,
        id: result.data.id,
      });
      console.log("Page Hard Refresh - State Updated!");
    }
  } catch (error) {
    console.log(error.response.data.message);
    if(error.response.status == 401) {
      console.log(error.response.status);
      Cookies.remove('token');
      redirect({ path: '/login' });
    }
  }

  // Set i18n instance on app
  // app.use(i18n)
});
