<template lang="pug">
form(@submit.prevent="signUp({email: email, password: password})")
  h1 Regístrate 
  b-field(label="Email" )
    b-input(placeholder="Email" type="email" icon="email" v-model="email")
  b-field(label="Password")
    b-input(placeholder="Password" type="password" password-reveal icon="lock" v-model="password" )
  .control
    button(class="button is-primary") Registrarse
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    ...mapActions('users', ['signUp']),
  },
}
</script>
<style scoped></style>
