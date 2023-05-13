<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);
</script>

<template>
  <div class="main-box">
    <div class="filter-list">
      <ul class="flex">
        <li>lista de subjects para filtrar os posts</li>
      </ul>
    </div>
    <ul class="w-[760px]">
      <li v-for="post in posts" :key="post._id" class="post-link">
        <NuxtLink :to="post._path">
          <div class="flex justify-between">
            <div class="w-[80%]">
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="posts-description">{{ post.summary }}</p>
            </div>
            <div style="width: 60px; height: 60px; background-color: grey"></div>
          </div>
          <div class="tags">
            <span class="subjects">{{ post.subjects.join(' - ') }}</span>
          </div>
        </NuxtLink>
        <div class="border"></div>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.main-box {
  @apply flex justify-center items-center flex-col w-full h-full;
}

.filter-list {
  @apply flex justify-end w-[760px] mb-5;
}

.post-link {
  @apply  flex flex-col justify-between hover:shadow-sm hover:bg-[#f2f2f2] pt-5 pr-5 pl-5;
}

.post-title {
  @apply text-xl font-medium text-[#222] mb-1;
}

.posts-description {
  @apply text-base text-[#3a3a3a];
}

.border {
  @apply border-b-[1px] border-gray-200 my-5
}

.tags {
  @apply text-[12px] uppercase font-medium mt-5;
}

.subjects {
  @apply mr-[6px] text-[#023859];
}
</style>