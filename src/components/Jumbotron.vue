<template>
  <div class="jumbotron">
    <div>
      <div class="content">
        <slot />
      </div>
      <div class="buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Jumbotron",
})
</script>

<style lang="scss" scoped>
.jumbotron {
  width: 100%;
  height: 60vh;
  margin-bottom: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #eee;

  .content {
    font-size: 2em;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 0.5em;

    a {
      text-decoration: none;
      color: unset;
    }
  }
}
</style>
