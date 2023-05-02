<script setup>
import { ref, onMounted } from 'vue';

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);

const lastThreePosts = posts.value
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort posts by createdAt in descending order
  .slice(0, 3); // Get the first 3 posts after sorting

const presentationList = ref([
  { 
    title: 'Olá, me chamo Wellington roth.',
    presentation: 'Sou desenvolvedor frontend'
  },
  { 
    title: 'Olá, me chamo Wellington roth 2222222222.',
    presentation: 'Sou desenvolvedor frontend 2222222222'
  },
  { 
    title: 'Olá, me chamo Wellington roth 333333333333.',
    presentation: 'Sou desenvolvedor frontend 333333333333'
  },
  { 
    title: 'Olá, me chamo Wellington roth 444444444444.',
    presentation: 'Sou desenvolvedor frontend 444444444444'
  },
]);
const currentIndex = ref(0);
const currentPresentation = ref(presentationList.value[currentIndex.value]);

function changePresentation(index) {
  currentIndex.value = index;
  currentPresentation.value = presentationList.value[index];
}

function resetCountdown() {
  clearInterval(intervalId);
  countdown = 0;
  intervalId = setInterval(countdownHandler, 1000);
}

let intervalId = setInterval(countdownHandler, 1000);
let countdown = 0;

function countdownHandler() {
  countdown++;
  if (countdown === 5) {
    currentIndex.value = (currentIndex.value + 1) % presentationList.value.length;
    currentPresentation.value = presentationList.value[currentIndex.value];
    countdown = 0;
  }
}

onMounted(() => {
  resetCountdown();
});
</script>

<template>
  <div class="box">
    <div class="presentation" v-if="currentPresentation" :key="currentPresentation.id">
      <h3>{{ currentPresentation.title }}</h3>
      <p>{{ currentPresentation.presentation }}</p>
    </div>

    <div class="bullets">
      <span 
        v-for="(list, index) in presentationList" 
        :key="index" 
        :class="{ active: index === currentIndex }" 
        @click="changePresentation(index); resetCountdown()"
      >
      </span>
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
  @apply flex flex-col justify-center items-center;
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

.bullets {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.bullets span {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: #ccc;
  display: inline-block;
  cursor: pointer;
}

.bullets span.active {
  background-color: #f00;
}
</style>