<template>
  <div class="card">
    <g-image v-if="image" :src="image" class="image" fit="cover" />
    <div class="content">
      <span class="title">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "ProjectCard",
  props: {
    image: String,
    title: String,
    description: String,
  },
})
</script>

<style lang="scss" scoped>
@use '@/scss/config';

.card {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;

  .content {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-bottom: 1em;

    .title {
      font-size: 2em;
    }

    .description {
      font-size: 1.2em;
    }
  }

  .image {
    width: 20vw;
    min-width: 20vw;
    max-width: 20vw;
    height: 200px;
    object-fit: cover;

    @include config.onMobile {
      width: 10vw;
      min-width: 10vw;
      max-width: 10vw;
    }
  }
}
</style>
