// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
//   colorMode: {
//     classSuffix: '',
//   },
//   tailwindcss: {
//     cssPath: '~/assets/css/tailwind.css',
//     configPath: 'tailwind.config.js',
//     exposeConfig: false,
//     injectPosition: 0,
//     viewer: true,
//   },
// });

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
})
