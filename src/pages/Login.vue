<template>
  <div class="q-pa-md">
    <q-page class="flex flex-center">
      
      <div class="q-gutter-y-md column login" style="width: 30%">
        <div class="row">
          <div class="col text-align-center">
            <q-img src="/images/logo.png" style="width: 150px" />
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            <q-form @submit="submitLoginData">
        
              <q-input v-model="loginData.email" :rules="[
                  (val) => (val && val != '') || 'This field is required!',
                  (val) => validateEmail(val) || 'Must be a valid email.',
                ]" label="Email" hint="Enter Your Email" >
                <template v-slot:append>
                  <q-icon name="email"/>
                </template>
              </q-input>
              
              <q-input v-model="loginData.password" :rules="[
                  (val) => (val && val != '') || 'This field is required!',
                ]" label="Password" :type="passwordType" hint="Password">
                <template v-slot:append>
                  <q-icon :name="passwordIcon" @click="showPassword" class="cursor-pointer" />
                </template>
              </q-input>
        
              <q-btn class="full-width" color="purple mt-50" label="Login" type="submit" />
        
            </q-form>
          </div>
        </div>

      </div>
    </q-page>
  </div>

</template>

<script>
import { Loading, Notify } from 'quasar';
import Cookies from "js-cookie";

import { mapActions } from 'pinia';
import { authUserStore } from '../stores/user-authentication';

export default {
  name: 'LoginPage',
  data() {
    return {
      loginData: {},
      passwordType: 'password',
      passwordIcon: 'visibility_off'
    }
  },
  methods: {
    ...mapActions(authUserStore, ['loginUser']),
    async submitLoginData() {
      Loading.show();
      try {
        let result = await this.$api.post("/auth/login", this.loginData);
        this.loginUser(result.data);
        this.$api.defaults.headers.common['Authorization'] = "Bearer " + Cookies.get('token');
        this.$router.push('/');
      } catch (error) {
        Notify.create({
          position: 'top-right',
          type: 'negative',
          message: error.response.data.message
        });
      }
      Loading.hide();
    },
    validateEmail(email) {
      return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    },
    showPassword() {
      this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordType == 'text' ? 'visibility' : 'visibility_off'
    }
  }

}
</script>
