// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/style.css'],
  
  tailwindcss: {
    cssPath: '~/assets/css/style.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },

  app: {
    head: {
      title: 'Secret PDF',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
