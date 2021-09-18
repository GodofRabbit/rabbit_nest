<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    this.$loading.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 5000)
  }
})
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
