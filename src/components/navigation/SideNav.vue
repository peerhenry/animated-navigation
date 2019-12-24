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
  white-space nowrap
  box-sizing content-box
  a
    display inline
    margin-top 1rem
    margin 1rem 2rem 0 1rem
    color white
    text-decoration none
    font-size 18px
    font-weight bold
    &:hover
      color yellow
</style>
