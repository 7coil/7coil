<template>
  <div class="row">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Row",
})
</script>

<style lang="scss" scoped>
@use '@/scss/config';

.row {
  display: flex;
  gap: 1em;

  @include config.onMobile {
    flex-direction: column;
  }
}
</style>
