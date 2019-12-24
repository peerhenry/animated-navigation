<template lang="pug">
.layout
  Nav.layout-nav.span-2
  .layout-side-nav
    transition(name="slide-left")
      SideNav(v-if="hasSubroutes")
    .layout-tabs(:class="{'span-2': !hasSubroutes}")
      Tabs
      div {{ path }}
      transition(name="fade" mode="out-in")
        router-view
</template>

<script>
import Nav from '@/components/navigation/Nav.vue'
import SideNav from '@/components/navigation/SideNav.vue'
import Tabs from '@/components/navigation/Tabs.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { Nav, SideNav, Tabs },
  computed: {
    ...mapState(['path']),
    ...mapGetters(['hasSubroutes']),
  },
}
</script>

<style lang="stylus" scoped>
.layout
  height 100%

.layout-side-nav
  display flex
  height 100%

.layout-tabs
  display inline-block
  width 100%

// transitions

.slide-left-enter-active, .slide-left-leave-active
  transition all 0.5s ease

.slide-left-enter-to, .slide-left-leave
  width 180px

.slide-left-enter, .slide-left-leave-to
  width 0
  padding-left 0
  padding-right 0

.fade-enter-active, .fade-leave-active
  transition opacity .2s ease

.fade-enter, .fade-leave-to
  opacity 0
</style>
