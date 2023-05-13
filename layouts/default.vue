<script setup>
const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <div class="main">
    <header class="dark:bg-slate-900">
      <nav class="navigation">
        <ul class="list">
          <li>
            <NuxtLink to="/" class="item">
              Início
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="item">
              Sobre
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="item">
              Blog
            </NuxtLink>
          </li>
        </ul>
        <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6  text-gray-50"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
        </button>
      </nav>
    </header>

    <section class="content">
      <slot />
    </section>

    <footer class="footer">
      <div>
        <img class="mix-blend-darken" src="../assets/images/wroth.jpg" alt="wellington roth" width="100px" height="100px">
      </div>
      <ul class="socials-list">
        <li>
          <a href="https://github.com/Wellingtonroth" target="_blank">
            <img width="30px" height="30px" src="../assets/images/github.png" alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wellingtonroth/" target="_blank">
            <img width="30px" height="30px" src="../assets/images/linkedin.png" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wellrothh/" target="_blank">
            <img width="30px" height="30px" src="../assets/images/instagram.png" alt="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply border-b-[2px] border-yellow-400;
}

.main {
  @apply flex flex-col justify-between h-[100vh];
}

.navigation {
  @apply main-container pt-10 pb-10 flex justify-center;
}
.list {
  @apply flex gap-4 font-medium;
}
.item {
  @apply pb-1 hover:text-yellow-500;
}

.content {
  @apply flex h-full;
}

.footer {
  @apply main-container flex justify-between py-10 mt-10 border-t-[1px] border-black dark:bg-slate-900;
}

.socials-list {
  @apply flex gap-4;
}
</style>