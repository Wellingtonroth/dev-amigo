<script setup></script>

<template>
  <div class="main">
    <header>
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
      </nav>
    </header>

    <!-- output the page content -->
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
  @apply text-yellow-500 border-b-[1px] border-yellow-500;
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
  @apply pb-1 hover:text-yellow-400;
}

.content {
  @apply main-container flex pb-4 h-full;
}

.footer {
  @apply main-container flex justify-between py-10 border-t-[1px] border-black;
}

.socials-list {
  @apply flex gap-4;
}
</style>