<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" :rules="{
          required: true,
          digits: 7,
        }">
        <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name" required></v-text-field>
      </validation-provider>

      <validation-provider >
        <v-text-field v-model="phoneNumber" label="Phone Number" ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
      </validation-provider>
      
      <v-btn class="mr-4" type="submit" :disabled="invalid" >submit</v-btn>
    </form>
  </validation-observer>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate().then(err => {
          if (err) {
            console.log('work')
            this.$router.push('/account')
          }
        })
      },
    },
  }
</script>