<template>
  <div class="button" role="button">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "SiteButton",
})
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  padding: 0.4em;
  border-color: lightgrey;
  background-color: white;
  transition: background-color 0.5s;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
}
</style>
