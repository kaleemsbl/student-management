import useVuelidate from '@vuelidate/core';
import { required, email, sameAs, maxLength, minLength, numeric } from '@vuelidate/validators';

export default {
  data() {
    return {
      v$: useVuelidate()
    }
  },
  validations() {
    return {
      registerData: {
        firstname: {
          required
        },
        lastname: {
          required
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        },
        cpassword: {
          required,
          sameAs: sameAs(this.registerData.password)
        },
        mobile: {
          required,
          numeric,
          maxLength: maxLength(10),
          minLength: minLength(10)
        },
        address: {
          required
        }
      }
    }
  }
}