<template lang="pug">
.layout
  Nav.layout-nav.span-2
  .layout-side-nav
    transition(name="slide-left")
      SideNav(v-if="hasSubroutes")
    .layout-tabs(:class="{'span-2': !hasSubroutes}")
      Tabs
      div {{ path }}
      transition(:name="pageTransition" mode="out-in")
        router-view
</template>

<script>
import Nav from '@/components/navigation/Nav.vue'
import SideNav from '@/components/navigation/SideNav.vue'
import Tabs from '@/components/navigation/Tabs.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { Nav, SideNav, Tabs },
  data() {
    return {
      transitionName: 'fade',
    }
  },
  computed: {
    ...mapState(['path', 'pageTransition']),
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
  overflow-x hidden

// Vue transitions

transition-time = 0.5s

.slide-left-enter-active, .slide-left-leave-active
  transition all transition-time ease

.slide-left-enter-to, .slide-left-leave
  width 180px

.slide-left-enter, .slide-left-leave-to
  width 0
  padding-left 0
  padding-right 0

.fade-enter-active, .fade-leave-active
  transition opacity transition-time ease

.fade-enter, .fade-leave-to
  opacity 0

amplitude = 200px

.ltr-enter-active, .ltr-leave-active
  transition all transition-time ease

.ltr-enter
  transform translate3d(- amplitude, 0, 0)
  opacity 0

.ltr-leave-to
  transform translate3d(amplitude, 0, 0)
  opacity 0

.rtl-enter-active, .rtl-leave-active
  transition all transition-time ease

.rtl-enter
  transform translate3d(amplitude, 0, 0)
  opacity 0

.rtl-leave-to
  transform translate3d(- amplitude, 0, 0)
  opacity 0
</style>
