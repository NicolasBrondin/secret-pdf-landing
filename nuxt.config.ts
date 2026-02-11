// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = 'https://www.secretpdf.io';
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
      title: 'The developer-friendly HTML to PDF API - Secret PDF',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Convert HTML to PDF with our developer-friendly API. Fast, reliable, and easy to integrate. Start generating PDFs in minutes.' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Secret PDF' },
        { property: 'og:title', content: 'The developer-friendly HTML to PDF API - Secret PDF' },
        { property: 'og:description', content: 'Convert HTML to PDF with our developer-friendly API. Fast, reliable, and easy to integrate. Start generating PDFs in minutes.' },
        { property: 'og:url', content: baseURL },
        { property: 'og:image', content: `${baseURL}/open-graph.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'The developer-friendly HTML to PDF API - Secret PDF' },
        { name: 'twitter:description', content: 'Convert HTML to PDF with our developer-friendly API. Fast, reliable, and easy to integrate. Start generating PDFs in minutes.' },
        { name: 'twitter:image', content: `${baseURL}/open-graph.jpg` },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
      ],
      script: [
        { src: 'https://plausible.io/js/pa-lUPIywEyKlhMbb153OOrC.js', async: true },

          {
            children:
              `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`,
          },
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
