<template>
  <div class="column" v-bind:class="{ imager }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Column",
  props: {
    imager: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.column {
  flex-basis: 100%;

  &.imager img {
    width: 100%;
  }
}
</style>
