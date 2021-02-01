<template>
  <Layout>
    <jumbotron>
      <h1>owo</h1>
      <p>what's this 404?!</p>

      <template v-slot:buttons>
        <g-link to="/">
          <site-button>Go Home</site-button>
        </g-link>
      </template>
    </jumbotron>
  </Layout>
</template>

<script>
import Container from "@/components/Container.vue"
import Jumbotron from "@/components/Jumbotron.vue"
import SiteButton from "@/components/SiteButton.vue"
export default {
  components: { Container, Jumbotron, SiteButton },
  metaInfo: {
    title: "404",
  },
}
</script>
