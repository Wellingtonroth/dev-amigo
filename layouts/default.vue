<script setup>
useHead({
  titleTemplate: 'Dev Amigo - Sobre',
})

const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}
</script>

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
            <NuxtLink to="/sobre" class="item">
              Sobre
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="item">
              Blog
            </NuxtLink>
          </li>
        </ul>
        <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" aria-label="Alternar tema de cores">
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-50"
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
      <!-- <div>
        <img class="mix-blend-darken" src="../public/Dev-amigo.png" alt="wellington roth">
      </div> -->
      <ul class="socials-list">
        <li>
          <a href="https://www.youtube.com/channel/UCc0FTXTrZFKK7V_3gmdUFOw" target="_blank" aria-label="Canal do YouTube">
            <svg class="svg-dark" version="1.0" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
              <g class="svg-dark" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -960 -491 -2230
                272 -3065 423 -463 951 -740 1585 -830 118 -17 511 -16 635 0 579 80 1097 337
                1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0
                630 -43 303 -122 561 -247 814 -134 268 -270 459 -483 674 -395 400 -889 649
                -1457 733 -123 18 -478 26 -600 13z m800 -1439 c616 -22 747 -46 863 -154 96
                -90 136 -209 163 -491 17 -174 18 -730 1 -910 -26 -272 -51 -375 -111 -455
                -83 -110 -165 -152 -349 -175 -493 -62 -1923 -56 -2304 10 -196 34 -320 150
                -361 340 -48 218 -69 677 -47 1030 25 411 55 528 161 640 91 96 177 123 464
                145 352 28 1056 37 1520 20z"/>
                <path d="M2240 2560 l0 -480 48 27 c615 352 781 449 781 453 0 4 -166 101
                -781 453 l-48 27 0 -480z"/>
              </g>
            </svg>      
          </a>
        </li>
        <li>
          <a href="https://github.com/Wellingtonroth" target="_blank" aria-label="Perfil no GitHub">
            <svg class="svg-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"> 
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
            </svg>          
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wellingtonroth/" target="_blank" aria-label="Perfil no LinkedIn">
            <svg class="svg-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">    
              <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wellrothh/" target="_blank" aria-label="Perfil no Instagram">
            <svg class="svg-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">   
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/>
            </svg>
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
  @apply flex flex-col justify-between min-h-[100vh] dark:bg-[#1a202c];
}

.navigation {
  @apply main-container py-9 flex justify-center;
}
.list {
  @apply flex gap-4 font-medium;
}
.item {
  @apply pb-1 hover:text-yellow-500 dark:text-gray-200 dark:hover:text-yellow-500;
}

.content {
  @apply s-desktop:flex s-desktop:h-full desktop:h-full b-desktop:h-full tablet:main-container s-desktop:main-container desktop:main-container b-desktop:main-container;
}

.footer {
  @apply main-container flex justify-between py-9 mt-9 border-t-[1px] border-black dark:border-gray-700;
}

.socials-list {
  @apply flex gap-4;
}

.svg-dark {
  @apply dark:fill-gray-200;
}
</style>