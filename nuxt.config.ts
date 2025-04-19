export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/encryptDecrypt/', // اسم الريبو
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  plugins: ['~/plugins/bootstrap.client.ts'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})
