<template>
  <div class="q-pa-md">
    <q-page class="flex flex-center">
      <div class="q-gutter-y-md column login" style="width: 30%">
        <q-form @submit="submitLoginData">

          <q-input
            v-model="loginData.email"
            :rules="[
              (val) => (val && val != '') || 'This field is required!',
              (val) => validateEmail(val) || 'Must be a valid email.',
            ]" 
            label="Email"
            hint="Enter Your Email"
            />

          <q-input
            v-model="loginData.password"
            :rules="[
              (val) => (val && val != '') || 'This field is required!',
            ]"
            label="Password"
            type="password"
            hint="Password"
            />

          <q-btn color="purple mt-50" label="Login" type="submit" />

        </q-form>

      </div>
    </q-page>
  </div>

</template>

<script>
import Cookies from 'js-cookie';
import { Loading, Notify } from 'quasar'
export default {
  name: 'LoginPage',
  data() {
    return {
      loginData: {},
    }
  },
  methods: {
    async submitLoginData() {
      Loading.show();
      try {
        let result = await this.$api.post('/auth/login', this.loginData);
        Cookies.set('Token', result.data.tokens.access.token);
        this.$router.push('/');
      } catch (error) {
        Notify.create({
          position: 'top-right',
          type: 'negative',
          message: error.response.data.message
        })
      }
      Loading.hide();
    },
    validateEmail(email) {
      return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    }
  }
}
</script>
