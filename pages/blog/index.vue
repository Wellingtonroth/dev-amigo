<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);
</script>

<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._id" class="">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>


<style scoped></style>