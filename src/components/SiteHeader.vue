<template>
  <header>
    <div class="gradient" />
    <Container class="content">
      <g-link to="/" class="title">
        <span class="title"> leondrolio.com </span>
      </g-link>
    </Container>
    <div class="divider" />
  </header>
</template>

<script lang="ts">
import Vue from "vue"
import Container from "./Container.vue"
export default Vue.extend({
  components: { Container },
  name: "SiteHeader",
})
</script>

<style lang="scss" scoped>
header {
  background-color: #f8f8f8;

  .divider {
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .gradient {
    height: 0.25em;
    width: 100%;
    background-image: linear-gradient(
      to right,
      red,
      green,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
  }

  .content {
    padding: 1em;
  }

  .title {
    font-weight: bold;
    color: unset;
    text-decoration: none;
  }
}
</style>
