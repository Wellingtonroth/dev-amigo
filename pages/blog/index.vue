<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);
</script>

<template>
  <section>
    <div>sou o index.vue na pasta blog</div>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>


<style scoped></style>