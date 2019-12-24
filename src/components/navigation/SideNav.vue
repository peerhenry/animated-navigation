<template lang="pug">
.side-nav
  router-link(to="/") subroute Home
  router-link(to="/alpha") subroute Alpha
  router-link(to="/beta") subroute Beta
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.side-nav
  padding 1rem
  color white
  background #222
  display flex
  flex-direction column
  text-align left
  a
    display inline
    margin-top 1rem
    margin-left 1rem
    color white
    text-decoration none
    font-size 18px
    &:hover
      color yellow
</style>
