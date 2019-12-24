<template lang="pug">
.layout
  Nav.layout-nav
  SideNav.layout-side-nav
  .layout-tabs
    Tabs
    div heyo
    router-view
</template>

<script>
import Nav from '@/components/navigation/Nav.vue'
import SideNav from '@/components/navigation/SideNav.vue'
import Tabs from '@/components/navigation/Tabs.vue'

export default {
  components: { Nav, SideNav, Tabs },
}
</script>

<style lang="stylus" scoped>
.layout
  display grid
  grid-template-columns 3fr 20fr
  grid-template-rows auto 1fr
  width 100%
  height 100%

.layout-nav
  grid-column-end span 2
</style>
