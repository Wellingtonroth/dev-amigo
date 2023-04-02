<script setup>

const route = useRoute();
const { slug } = route.params;
const { data } = useAsyncData(`content-${route.path}`, () =>
  queryContent().where({_path: route.path}).findOne()
);
</script>

<template>
  <main>
    <div>aaaaaaaa</div>
    <p>{{ slug }} slugslugslugslugslug</p>
    <p>{{ data.author }} datadatadatadatadata</p>
    <ContentRenderer :value="data" />
  </main>
</template>