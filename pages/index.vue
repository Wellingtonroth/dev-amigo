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
    title: 'Olá, me chamo Wellington Roth.',
    presentation: 'Sou desenvolvedor frontend e idealizador do canal XXXX.'
  },
  { 
    title: 'Ja conhece o canal XXXX?',
    presentation: 'Se não conhece, da uma olhada, tenho certeza que vai gostar.'
  },
  { 
    title: 'XXXXX',
    presentation: 'XXXX é um projeto solo que criei com o intuito de compartilhar conhecimento.'
  },
  { 
    title: 'Conteúdos diversos',
    presentation: 'No canal XXXX você vai encontrar dicas e conteúdos diversos sobre tecnologia, programação, desenvolvimento web, produtividade e foco.'
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
  <div class="flex-col justify-center items-center box">
    <div class="presentation" v-if="currentPresentation" :key="currentPresentation.id">
      <h3 class="presentation-title">{{ currentPresentation.title }}</h3>
      <p class="presentation-text">{{ currentPresentation.presentation }}</p>
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
          <div>
            <h4 class="post-title">
              {{ post.title }}
            </h4>
            <p class="posts-description">
              {{ post.description }}
            </p>
          </div>
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
  @apply hover:bg-[#f2f2f2]	;
}

.post-link {
  @apply flex mt-[10px] mb-[10px] ml-[30px];
}
.last-posts {
  @apply ml-[30px] text-[18px] font-medium text-[#222];
}

.content {
  @apply flex flex-col justify-between ml-[26px];
}

.post-title{
  @apply text-[18px] font-semibold text-[#222];
}

.posts-description {
  @apply text-base text-[#3a3a3a];
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
  @apply flex justify-center mt-[16px];
}

.bullets span {
  @apply h-[16px] w-[16px] rounded-full mr-[8px] bg-[#ccc] inline-block cursor-pointer;
}

.bullets span.active {
  @apply bg-[#facc15];
}

.presentation-title {
  @apply text-xl font-medium text-[#222];
}

.presentation-text {
  @apply text-base text-[#3a3a3a];
}
</style>