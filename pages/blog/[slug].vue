<script setup>

const route = useRoute();
const { slug } = route.params;
const { data } = useAsyncData(`content-${route.path}`, () =>
  queryContent().where({_path: route.path}).findOne()
);
</script>

<template>
  <main>
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
    
    <div style="padding: 20px;">
      <title>{{ data.title }}</title>
      <p>{{ data.author }} author</p>
      <p>{{ data.description }} description</p>
    </div>
    
    <ContentRenderer :value="data" />
  </main>
</template>