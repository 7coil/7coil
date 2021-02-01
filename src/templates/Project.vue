<template>
  <Layout :pageTitle="$page.post.title">
    <jumbotron v-if="$page.post.page_features.includes('jumbotron')">
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.description }}</p>
      <template v-slot:buttons>
        <a
          v-for="button of $page.post.links"
          :key="button.key"
          :href="button.link"
        >
          <site-button>
            {{ button.name }}
          </site-button>
        </a>
      </template>
    </jumbotron>

    <container>
      <VueRemarkContent />
    </container>
  </Layout>
</template>

<script lang="ts">
import Container from "@/components/Container.vue"
import Jumbotron from "@/components/Jumbotron.vue"
import SiteButton from "@/components/SiteButton.vue"
import info from "@/data/meta.json"

import Vue from "vue"
export default Vue.extend({
  name: "Project",
  components: { Container, Jumbotron, SiteButton },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          key: "og:url",
          property: "og:url",
          content: info.siteUrl + this.$page.post.slug,
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: info.siteName,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.description,
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: info.author,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.post.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description,
        },
      ],
    }
  },
})
</script>

<page-query>
  query project($path: String){
    post: project(path: $path){
      title
      description
      content
      page_features
      redirect
      slug
      links {
        key
        name
        link
      }
    }
  }
</page-query>
