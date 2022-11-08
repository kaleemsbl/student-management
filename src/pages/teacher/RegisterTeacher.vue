<template>
  <div style="width: 60%; margin: auto;" class="q-pa-lg">
    <div class="row">
      <div class="col">
        <h5>Register Teacher</h5>
        <q-form>
          <q-input
            v-model="registerData.firstname"
            type="text"
            label="First Name *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.firstname.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.lastname"
            type="text"
            label="Last Name *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.lastname.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.email"
            type="text"
            label="Email *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.email.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.password"
            type="password"
            label="Password *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.password.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.cpassword"
            type="password"
            label="Confrim Password *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.cpassword.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.mobile"
            type="text"
            label="Mobile *"
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.mobile.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-input
            v-model="registerData.address"
            type="textarea"
            label="Address *"
            rows="3">
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.address.$errors" :key="error">
            {{ error.$message }}
          </span>

          <q-btn
            class="full-width"
            color="purple mt-50"
            label="Register"
            @click="teacherFormSubmit"
          />
        </q-form>
      </div>
      
    </div>
  </div>
</template>
<script>
import { Loading, Notify } from 'quasar';
import TeacherValidationMixin from '../../mixins/validations/teacher-validation'
export default {
  data() {
    return {
      registerData: {},
    }
  },
  mixins: [TeacherValidationMixin],
  methods: {
    async teacherFormSubmit() {
      let isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return

      this.sendDataToServer(this.registerData)
    },
    async sendDataToServer(data) {
      const finalData = {
        name: data.firstName + ' ' + data.lastname,
        email: data.email,
        role: 'teacher',
        password: data.password,
        mobile: data.mobile,
        addres: data.addres
      }
      Loading.show();
      try {
        let result = await this.$api.post("/users", finalData);
      } catch (error) {
        Notify.create({
          position: 'top-right',
          type: 'negative',
          message: error.response.data.message
        });
      }
      Loading.hide();
    }
  }
}
</script>