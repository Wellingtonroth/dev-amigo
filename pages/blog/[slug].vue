<script setup>

const route = useRoute();

const { data } = useAsyncData(`content-${route.path}`, () =>
queryContent().where({_path: route.path}).findOne()
);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

useHead({
  titleTemplate: `Dev Amigo - Blog`,
})
</script>

<template>
  <div class="main-box s-phone:px-4 phone:px-4">
    <div class="s-phone:w-full phone:w-full tablet:w-[760px] s-desktop:w-[760px] desktop:w-[760px] b-desktop:w-[760px]">
      <NuxtLink to="/blog" class="border-b-[2px] border-yellow-400 text-xs">
        Voltar
      </NuxtLink>
    </div>
    <div class="s-phone:w-full phone:w-full tablet:w-[760px] s-desktop:w-[760px] desktop:w-[760px] b-desktop:w-[760px] mb-7 pb-4 apply-border">
      <h2 class="text-4xl font-semibold mb-2">
        {{ data.title }}</h2>
      <div class="flex justify-between">
        <p class="text-xl">
          {{ data.author }}
        </p>
        <span class="text-sm">
          Publicado em {{ formatDate(data.createdAt) }}
        </span>
      </div>
    </div>
    
    <div class="s-phone:w-full phone:w-full tablet:w-[760px] s-desktop:w-[760px] desktop:w-[760px] b-desktop:w-[760px]">
      <ContentRenderer :value="data" />
    </div>
  </div>
</template>

<style scoped>
.main-box {
  @apply flex items-center flex-col w-full dark:text-gray-200;
}

.apply-border {
  border-bottom: 1px solid #e2e8f0;
}
</style>