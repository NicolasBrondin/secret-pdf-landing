<script setup lang="ts">
import { computed } from 'vue'
import { getAllPosts, type BlogPost } from '~/data/posts'

const posts = computed<BlogPost[]>(() => getAllPosts())

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useHead({
  title: 'Blog - Secret PDF',
  meta: [
    { 
      name: 'description', 
      content: 'Expert insights on PDF security, document protection, GDPR compliance, and API integration best practices.' 
    },
    { property: 'og:title', content: 'Blog - Secret PDF' },
    { property: 'og:description', content: 'Expert insights on PDF security, document protection, and compliance.' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>

<template>
  <div>
    <AppHeader light-mode />

    <main class="bg-white">
      <!-- Blog Header -->
      <section class="bg-gradient-to-br from-slate-50 to-gray-100 py-20 pt-40 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p class="text-xl text-gray-600">
            Insights on PDF technologies, apis and best practices
          </p>
        </div>
      </section>

      <!-- Blog Posts List -->
      <section class="py-16 px-6">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <article 
              v-for="post in posts" 
              :key="post.slug"
              class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="block group">
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-3">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Title -->
                <h2 class="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors mb-3">
                  {{ post.title }}
                </h2>

                <!-- Description -->
                <p class="text-gray-600 mb-4">
                  {{ post.description }}
                </p>

                <!-- Meta -->
                <div class="flex items-center text-sm text-gray-500 gap-4">
                  <span>{{ post.author }}</span>
                  <span>•</span>
                  <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                  <span>•</span>
                  <span>{{ post.readTime }}</span>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
