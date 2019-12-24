<template lang="pug">
#app
  Layout
</template>

<script>
import Layout from './Layout.vue'

export default {
  components: { Layout },
}
</script>

<style lang="stylus">
html, body
  height 100%
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
</style>
