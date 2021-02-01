<template>
  <Layout>
    <jumbotron>
      <h1>Leondro Lio</h1>
      <p>Student and Developer</p>

      <template v-slot:buttons>
        <a href="https://github.com/7coil">
          <site-button>GitHub</site-button>
        </a>
        <a href="https://twitter.com/sevencoil">
          <site-button>Twitter</site-button>
        </a>
        <a href="https://www.linkedin.com/in/leondro/">
          <site-button>LinkedIn</site-button>
        </a>
        <a href="https://discordapp.com/invite/wHgdmf4">
          <site-button>Discord</site-button>
        </a>
      </template>
    </jumbotron>

    <container>
      <h2>Projects</h2>
      <div v-for="edge in $page.allProject.edges" :key="edge.node.id">
        <a
          :href="edge.node.redirect"
          v-if="edge.node.redirect && edge.node.display"
        >
          <project-card
            :image="edge.node.image"
            :description="edge.node.description"
            :title="edge.node.title"
          />
        </a>
        <g-link v-else-if="edge.node.display" :to="edge.node.path">
          <project-card
            :image="edge.node.image"
            :description="edge.node.description"
            :title="edge.node.title"
          />
        </g-link>
      </div>
    </container>
  </Layout>
</template>

<script>
import Container from "@/components/Container.vue"
import Jumbotron from "@/components/Jumbotron.vue"
import ProjectCard from "@/components/ProjectCard.vue"
import SiteButton from "@/components/SiteButton.vue"
export default {
  components: { Container, Jumbotron, ProjectCard, SiteButton },
  metaInfo: {
    titleTemplate: "Leondro Lio",
  },
}
</script>

<page-query>
  {
    allProject(sortBy: "edited") {
      edges {
        node {
          id
          path
          image
          title
          description
          redirect
          display
        }
      }
    }
  }
</page-query>
