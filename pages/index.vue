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
    <NuxtLink 
      v-for="(post, index) in lastThreePosts" 
      :key="index"
      :to="post._path"
      class="link"
    >
      <div class="post-link">
        <div style="width: 280px; height: 154px; background-color: grey"></div>
        <div class="content">
          <h4 class="title">{{ post.title }}</h4>
          <p>{{ post.description }}</p>
          <div class="tags">
            <span class="subjects">{{ post.subjects.join(' - ') }}</span>
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
  @apply flex w-2/4 h-full mr-2;
}

.presentation {
  @apply flex flex-col justify-center items-center w-2/4;
}

.name {
  @apply text-[24px];
}

.post {
  @apply flex-col justify-center;
}

.link {
  @apply hover:bg-slate-300	;
}

.post-link {
  @apply flex mt-[10px] mb-[10px] ml-[30px];
}
.last-posts {
  @apply ml-[30px] text-[18px] font-medium;
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

.subjects {
  @apply mr-[6px] text-[#023859];
}

.more {
  @apply w-fit text-[12px] uppercase font-medium text-[#023859] mt-[24px] ml-[30px];
}
</style>