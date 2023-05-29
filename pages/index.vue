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
  <div class="s-desktop:flex desktop:flex b-desktop:flex s-desktop:items-center desktop:items-center b-desktop:items-center s-phone:items-center s-phone:flex-col s-desktop:flex-row desktop:mr-[100px] desktop:ml-[100px] s-desktop:mr-[20px] s-desktop:ml-[20px]">
    <div class="flex-col justify-center items-center tablet:mx-1 phone:mx-1 s-phone:mx-1 box">
      <div class="presentation" v-if="currentPresentation" :key="currentPresentation.id">
        <h3 class="presentation-title">
          {{ currentPresentation.title }}
        </h3>
        <p class="presentation-text">
          {{ currentPresentation.presentation }}
        </p>
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
      <h3 class="last-posts">
        Ultimos postsssssss
      </h3>
      <NuxtLink 
        v-for="(post, index) in lastThreePosts" 
        :key="index"
        :to="post._path"
        class="link"
      >
        <div class="post-link">
          <img 
            :src="post.coverImage" 
            alt="Cover Image" 
            class="desktop:w-[180px] desktop:h-[150px] b-desktop:w-[180px] b-desktop:desktop:h-[150px] s-desktop:w-[180px] s-desktop:h-[150px] tablet:w-[155px] tablet:h-[145px] phone:w-[150px] phone:h-[140px] s-phone:w-[145px] s-phone:h-[135px]"
          />

          <div class="content">
            <div>
              <h4 class="post-title">
                {{ post.title }}
              </h4>
              <p class="posts-description">
                {{ post.summary }}
              </p>
            </div>
            <div class="tags">
              <span class="subjects">
                {{ post.subjects.join(' - ') }}
              </span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/blog" class="more">
        Ver mais
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.box {
  @apply flex s-desktop:w-2/4 b-desktop:w-2/4 desktop:w-2/4 h-full;
}

.presentation {
  @apply flex flex-col justify-center items-center;
}

.presentation-title {
  @apply text-xl font-medium text-[#222] dark:text-gray-200;
}

.presentation-text {
  @apply text-base text-[#3a3a3a] max-w-[500px] dark:text-gray-200;
}

.post {
  @apply flex-col justify-center s-phone:mt-5 phone:mt-5 tablet:mt-5;
}

.link {
  @apply hover:bg-[#f2f2f2]	dark:hover:bg-[#2d3748];
}

.post-link {
  @apply flex mt-[10px] mb-[10px] s-desktop:ml-[30px] tablet:mx-1 phone:mx-1 s-phone:mx-1;
}
.last-posts {
  @apply ml-[30px] text-[18px] font-medium text-[#222] dark:text-gray-200;
}

.content {
  @apply flex flex-col justify-between ml-[26px];
}

.post-title{
  @apply text-[18px] font-semibold text-[#222] dark:text-gray-200;
}

.posts-description {
  @apply text-base text-[#3a3a3a] dark:text-gray-200;
}

.tags {
  @apply text-[12px] uppercase font-medium;
}

.subjects {
  @apply mr-[6px] text-[#023859] bg-[#f2f2f2] py-1 px-2 rounded-xl;
}

.more {
  @apply w-fit text-[12px] uppercase font-medium text-[#023859] mt-[24px] ml-[30px] dark:text-gray-200;
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
</style>