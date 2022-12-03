<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col">
        <q-form>
          <q-input
            v-model="registerData.firstname"
            type="text"
            label="First Name *"
       
            >
          </q-input>
          <span class="mandatory" v-for="error of v$.registerData.firstname.$errors" :key="error">
            {{ error.$message}}
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
export default {
  data() {
    return {
      registerData: {},
    }
  }
}
</script>