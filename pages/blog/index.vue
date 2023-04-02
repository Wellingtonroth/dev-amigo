<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);
</script>

<template>
  <section>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <ul>
      <li v-for="post in posts" :key="post._id">
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>


<style scoped></style>