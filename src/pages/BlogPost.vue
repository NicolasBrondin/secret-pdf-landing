<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { getPostBySlug, type BlogPost } from '../data/posts'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

// Configure marked with syntax highlighting
marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  }
}))

const route = useRoute()
const router = useRouter()

const post = computed<BlogPost | undefined>(() => {
  const slug = route.params.slug as string
  return getPostBySlug(slug)
})

const renderedContent = computed(() => {
  if (!post.value) return ''
  return marked(post.value.content)
})

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO Meta tags
function updateSEO() {
  if (!post.value) return

  document.title = `${post.value.title} - Secret PDF Blog`

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', post.value.description)

  // Open Graph tags
  updateMetaTag('og:title', post.value.title)
  updateMetaTag('og:description', post.value.description)
  updateMetaTag('og:type', 'article')
  updateMetaTag('article:published_time', post.value.date)
  updateMetaTag('article:author', post.value.author)

  // Twitter Card
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', post.value.title)
  updateMetaTag('twitter:description', post.value.description)
}

function updateMetaTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) || 
            document.querySelector(`meta[name="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    if (property.startsWith('og:') || property.startsWith('article:')) {
      tag.setAttribute('property', property)
    } else {
      tag.setAttribute('name', property)
    }
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

onMounted(() => {
  if (!post.value) {
    router.push('/blog')
    return
  }
  updateSEO()
})

watch(() => route.params.slug, () => {
  if (post.value) {
    updateSEO()
  }
})
</script>

<template>
  <AppHeader light-mode />

  <main v-if="post" class="bg-white">
    <!-- Article Header -->
    <section class="bg-gradient-to-br from-slate-50 to-gray-100 py-20 pt-40 px-6">
      <div class="max-w-3xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="mb-6">
          <router-link to="/blog" class="text-blue-500 hover:text-blue-800 transition-colors">
            ← Back to Blog
          </router-link>
        </nav>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ post.title }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-wrap items-center text-gray-600 gap-4">
          <span class="font-medium">{{ post.author }}</span>
          <span>•</span>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span>•</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-12 px-6">
      <div 
        class="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-a:text-blue-500 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100"
        v-html="renderedContent"
      />
    </article>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-slate-800 to-slate-900 py-16 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to secure your documents?
        </h2>
        <p class="text-slate-300 mb-6">
          Join our waitlist and be the first to experience enterprise-grade PDF security.
        </p>
        <router-link 
          to="/#pricing"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started
        </router-link>
      </div>
    </section>

    <!-- Related Posts could go here -->
  </main>

  <!-- 404 State -->
  <main v-else class="bg-white py-32 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
      <p class="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
      <router-link 
        to="/blog"
        class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Back to Blog
      </router-link>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped>
@reference "tailwindcss";

/* Prose customizations */
:deep(.prose pre) {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.7;
}

:deep(.prose pre code) {
  background-color: transparent;
  padding: 0;
  color: inherit;
  font-size: inherit;
}

:deep(.prose code) {
  background-color: #f1f5f9;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

:deep(.prose code::before),
:deep(.prose code::after) {
  content: none;
}

:deep(.prose table) {
  @apply w-full border-collapse;
}

:deep(.prose th),
:deep(.prose td) {
  @apply border border-gray-300 px-4 py-2;
}

:deep(.prose th) {
  @apply bg-gray-100 font-semibold;
}
</style>
