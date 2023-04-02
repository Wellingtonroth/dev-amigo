<script setup>

const route = useRoute();
const { data } = useAsyncData(`content-${route.path}`, () =>
  queryContent().where({_path: route.path}).findOne()
);
</script>

<template>
  <main>    
    <div style="padding: 20px;">
      <title>{{ data.title }}</title>
      <p>{{ data.author }} author</p>
      <p>{{ data.description }} description</p>
    </div>
    
    <ContentRenderer :value="data" />
  </main>
</template>