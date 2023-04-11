<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);

const lastThreePosts = posts.value
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort posts by createdAt in descending order
  .slice(0, 3); // Get the first 3 posts after sorting
</script>

<template>
  <div class="box">
    <div class="presentation">
      <img src="../assets/images/avatar.png" alt="wellington roth" width="300px" height="300px">
      <span class="name">Wellington Roth</span>
    </div>
    <div class="presentation">
      <p>
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
        
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
        Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met Lorem ipson dolar sit met 
      </p>
    </div>
  </div>

  <div class="box post">
    <h3 class="last-posts">Ultimos posts</h3>
    <NuxtLink v-for="(post, index) in lastThreePosts" :key="index" :to="post._path">
      <div class="flex mt-[20px]">
        <div style="width: 280px; height: 154px; background-color: grey"></div>
        <div class="content">
          <h4 class="title">{{ post.title }}</h4>
          <p>{{ post.description }}</p>
          <div class="tags">
            <span class="tag">css</span>
            <span class="tag">html</span>
            <span class="tag">javascript</span>
          </div>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink to="/blog" class="more">
      Ver mais
    </NuxtLink>
  </div>
</template>

<style scoped>
.box {
  @apply flex w-2/4 h-full;
}

.presentation {
  @apply flex flex-col justify-center items-center w-2/4;
}

.name {
  @apply text-[24px];
}

.post {
  @apply flex-col justify-center ml-[30px];
}

.last-posts {
  @apply text-[18px] font-medium;
}

.content {
  @apply flex flex-col justify-between ml-[26px];
}

.title{
  @apply text-[18px] font-bold;
}

.tags {
  @apply text-[12px] uppercase font-medium;
}

.tag {
  @apply mr-[6px] text-[#023859];
}

.more {
  @apply w-fit text-[12px] uppercase font-medium text-[#023859] mt-[24px];
}
</style>