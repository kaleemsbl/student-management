<template>
  <div style="width: 60%; margin: auto;" class="q-pa-lg">
    <div class="row">
      <div class="col">
        <h5>Register Teacher</h5>
        <q-form>
          <q-input
            v-model="registerData.firstname"
            type="text"
            label="First Name"
            >
          </q-input>

          <q-input
            v-model="registerData.lastname"
            type="text"
            label="Last Name"
            >
          </q-input>

          <q-input
            v-model="registerData.email"
            type="text"
            label="Email"
            >
          </q-input>

          <q-input
            v-model="registerData.mobile"
            type="text"
            label="Mobile"
            >
          </q-input>

          <q-input
            v-model="registerData.addres"
            type="textarea"
            label="Address"
            rows="3">
          </q-input>

          <q-btn class="full-width" color="purple mt-50" label="Register" type="submit" />
        </q-form>
      </div>
      
    </div>
    <!-- <q-page style="width: 75%" class="items-center">
      <q-form >
  
        <q-input
          v-model="registerData.firstname"
          type="text"
          label="First Name"
          hint="First Name">
        </q-input>
  
        <q-input
          v-model="registerData.lasttname"
          type="text"
          label="Last Name"
          hint="Last Name">
        </q-input>
  
        <q-btn class="full-width" color="purple mt-50" label="Register" type="submit" />
  
      </q-form>
    </q-page> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerData: {}
    }
  }
}
</script>