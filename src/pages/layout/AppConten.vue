<template>
    <div class="mydata">
      <top-navbar></top-navbar>

       <transition name="fade" mode="out-in" class="minH">
        <router-view></router-view>
      </transition>

      <content-footer></content-footer>
    </div>
</template>
<script>
import ContentFooter from './AppFooter'
import TopNavbar from './AppHeader'
export default {
  components: {
    ContentFooter,
    TopNavbar
  }
}
</script>
