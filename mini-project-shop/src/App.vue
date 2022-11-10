<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from './layouts/HeaderView.vue'
import Footer from './layouts/FooterView.vue'
export default {
  components: { Header, Footer },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
