<template>
  <div class="q-pa-md">
    <q-page class="flex flex-center">
      <div class="q-gutter-y-md column login" style="width: 30%">

        <q-input label="Email" hint="Enter Your Email" />

        <q-input label="Password" type="password" hint="Password" />

        <q-btn color="purple mt-50" label="Login" />
      </div>
    </q-page>
  </div>

</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      env: process.env.API
    }
  },
  async created() {
    let res = await this.$api.post('/auth/login', {
      "email": "fake@example.com",
      "password": "password1"
    });

    console.log(res)
  }
}
</script>
