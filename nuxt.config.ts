export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image-edge'],
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    title: 'Dev amigo',
    meta: [
      { name: 'Dev Amigo', content: 'Aprenda programação, produtividade e foco com projetos e dicas do Dev Amigo. Otimize sua rotina e alcance seus objetivos com vídeos baseados em fatos. ' },
    ],
  },
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
  image: {
    provider: 'ipx',
  },
})
