<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Container",
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
