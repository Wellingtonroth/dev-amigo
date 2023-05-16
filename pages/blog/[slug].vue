<script setup>
const route = useRoute();
const { data } = useAsyncData(`content-${route.path}`, () =>
  queryContent().where({_path: route.path}).findOne()
);
</script>

<template>
  <div class="main-box">
    <NuxtLink to="/blog">Voltar</NuxtLink>
    <div class="p-5">
      <h2>{{ data.title }}</h2>
      <div class="flex">
        <p>{{ data.author }}</p>
        <span>{{ data.createdAt }}</span>
      </div>
    </div>
    
    <div class="w-[760px]">
      <ContentRenderer :value="data" />
    </div>
  </div>
</template>

<style scoped>
.main-box {
  @apply flex items-center flex-col w-full dark:text-gray-200;
}
</style>