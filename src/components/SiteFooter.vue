<template>
  <footer>
    <container>
      <p class="text">Copyright Leondro Lio, 2015 - 2021</p>
      <p class="random">
        {{ message }}
        <a target="_blank" :href="link" v-if="link">on Spotify</a>
      </p>
    </container>
  </footer>
</template>

<script lang="ts">
import Vue from "vue"
import Container from "./Container.vue"
import playlist from "@/data/playlist.json"

export default Vue.extend({
  components: { Container },
  name: "SiteFooter",
  data: () => ({
    message: "Stan LOONA!",
    link: "",
  }),
  beforeMount() {
    const song = playlist[Math.floor(Math.random() * playlist.length)]
    this.message = `You should probably listen to "${song.name}" by ${song.artist} in the album "${song.album}"`
    if (song.uri) this.link = "https://open.spotify.com/track/" + song.uri
  },
})
</script>

<style lang="scss" scoped>
footer {
  font-size: 9pt;
  margin-top: 5rem;

  .text,
  .random {
    color: grey;
  }

  .random {
    font-style: italic;
  }
}
</style>
