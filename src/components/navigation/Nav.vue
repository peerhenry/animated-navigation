<template lang="pug">
.nav
  router-link(to="/") Home
  router-link(to="/alpha") Alpha
  router-link(to="/beta") Beta
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.nav
  display flex
  padding 1rem 0
  width 100%
  background cornflowerblue
  color white
  a
    color white
    text-decoration none
    margin-right 1rem
    margin-left 2rem
    font-size 24px
    &:hover
      color yellow
</style>
