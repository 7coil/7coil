<template>
  <div class="layout">
    <site-header />
    <div class="container"><slot /></div>
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import SiteHeader from "@/components/SiteHeader.vue"
import Container from "@/components/Container.vue"
import SiteFooter from "@/components/SiteFooter.vue"

export default Vue.extend({
  name: "Default",
  components: {
    SiteHeader,
    Container,
    SiteFooter,
  },
})
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html,
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}

.layout {
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    flex-grow: 1;
  }
}
</style>
