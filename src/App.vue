<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  mounted() {
    this.$loading.show()
  }
})
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
