// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: true,
      }
    }],
  ],
})
