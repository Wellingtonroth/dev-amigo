<script setup>
import { ref, computed } from 'vue';

const selectedSubjects = ref([]);

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find(),
);

const getUniqueSubjects = () => {
  const subjectsList = posts.value.map((post) => post.subjects).flat();
  return [...new Set(subjectsList)];
};

const uniqueSubjects = getUniqueSubjects();

const toggleSubject = (subject) => {
  if (selectedSubjects.value.includes(subject)) {
    selectedSubjects.value = selectedSubjects.value.filter(
      (item) => item !== subject
    );
  } else {
    selectedSubjects.value = [...selectedSubjects.value, subject];
  }
};

const filteredPosts = computed(() =>
  posts.value.filter((post) => {
    if (selectedSubjects.value.length === 0) {
      return true;
    }
    return post.subjects.some((subject) =>
      selectedSubjects.value.includes(subject)
    );
  })
);
</script>

<template>
  <div class="main-box">
    <div class="filter-list">
      <ul class="flex">
        <li
          class="filter-subject"
          v-for="subject in uniqueSubjects"
          :key="subject"
          @click="toggleSubject(subject)"
          :class="{ 'subject-filtered': selectedSubjects.includes(subject) }"
        >
          {{ subject }}
        </li>
      </ul>
    </div>
    <ul class="w-[760px]">
      <li
        v-for="post in filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))"
        :key="post._id"
        class="post-link"
      >
        <NuxtLink :to="post._path">
          <div class="flex justify-between">
            <div class="w-[80%]">
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="posts-summary">{{ post.summary }}</p>
            </div>
          <img :src="post.coverImage" alt="Cover Image" style="width: 80px; height: 80px;">
          </div>
          <div class="tags">
            <span class="subjects">{{ post.subjects.join(' - ') }}</span>
          </div>
        </NuxtLink>
        <div class="border-b-[1px] border-gray-200 my-5"></div>
      </li>
    </ul>
  </div>
</template>



<style scoped>
.main-box {
  @apply flex items-center flex-col w-full;
}

.filter-list {
  @apply flex justify-end w-[760px] mb-5 pb-5 border-b-[1px] border-gray-200;
}

.post-link {
  @apply  flex flex-col justify-between hover:shadow-sm hover:bg-[#f2f2f2] pt-5 pr-5 pl-5 dark:hover:bg-[#2d3748];
}

.post-title {
  @apply text-xl font-medium text-[#222] mb-1 dark:text-gray-200;
}

.posts-summary {
  @apply text-base text-[#3a3a3a] dark:text-gray-200;
}

.tags {
  @apply text-[12px] uppercase font-medium mt-5;
}

.subjects {
  @apply mr-[6px] text-[#023859] bg-[#f2f2f2] py-1 px-2 rounded-xl;
}

.filter-subject {
  @apply mr-5 text-[12px] uppercase font-medium cursor-pointer hover:text-yellow-500 dark:text-gray-200 dark:hover:text-yellow-500;
}

.subject-filtered {
  @apply border-b-[2px] border-yellow-400;
}
</style>