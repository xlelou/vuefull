<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from './components/Login.vue'
  export default {
    components: {
      Login
    }
  }
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    width 100%
    font-size 20px
</style>
