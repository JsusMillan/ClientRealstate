<template lang="pug">
.columns
  .column(class="is-three-quarters")
    div(class="hero is-fullheight is-primary")
      h1.estilos "Ingreso"
  .column
    div(v-if="Signup" )
      <Signup></Signup>
    div(v-else)
      <SignIn></SignIn>
</template>
<script>
import Signup from '@/components/account/signup'
import SignIn from '@/components/account/signin'
export default {
  components: {
    Signup,
    SignIn,
  },
  data() {
    return {
      Signup: false,
    }
  },
}
</script>
