<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)

useHead({
  title: 'API Documentation - Secret PDF',
  meta: [
    { name: 'description', content: 'Complete API documentation for Secret PDF - The developer-friendly HTML to PDF API' }
  ]
})

const apiCategories = [
  {
    title: 'Authentication',
    description: 'Authenticate your API requests using API keys or OAuth',
    icon: '🔐',
    link: '/docs/authentication',
    endpoints: 7
  },
  {
    title: 'Documents',
    description: 'Generate PDFs from templates and view usage statistics',
    icon: '📄',
    link: '/docs/documents',
    endpoints: 2
  },
  {
    title: 'Templates',
    description: 'Create, manage, and generate HTML templates for PDF generation',
    icon: '📝',
    link: '/docs/templates',
    endpoints: 6
  },
  /*{
    title: 'API Keys',
    description: 'Manage your API keys for authentication',
    icon: '🔑',
    link: '/docs/api-keys',
    endpoints: 3
  },
  {
    title: 'Storage',
    description: 'Configure external storage for generated PDFs',
    icon: '💾',
    link: '/docs/storage',
    endpoints: 4
  },
  {
    title: 'Webhooks',
    description: 'Handle webhook events from external services',
    icon: '🔗',
    link: '/docs/webhooks',
    endpoints: 1
  }*/
]

const selectedExample = ref<'nodejs' | 'curl'>('nodejs')
const quickStartNodeCode = ref<HTMLElement | null>(null)
const quickStartCurlCode = ref<HTMLElement | null>(null)
const authApiKeyCode = ref<HTMLElement | null>(null)
const authBearerCode = ref<HTMLElement | null>(null)

const highlightQuickStartCode = () => {
  if (quickStartNodeCode.value) {
    const code = `import { SecretPDFClient } from '@secretpdf/sdk';

// Initialize the client
const client = new SecretPDFClient({
  apiKey: "your-api-key"
});

try {
    const result = await client.generate({
        templateId: "template-123",
        sandbox: true, // for testing
        data: {
            name: "John Doe",
            date: "2024-06-01"
        }
    });
    console.log('PDF generated:', result);
} catch (error) {
    console.error('Error generating PDF:', error);
}
`
    quickStartNodeCode.value.textContent = code
    hljs.highlightElement(quickStartNodeCode.value)
  }

  if (quickStartCurlCode.value) {
    const code = `curl -X POST https://api.secretpdf.io/generate \\
  -H "X-API-Key: your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "templateId": "template-123",
    "sandbox": true,
    "data": {
      "name": "John Doe",
      "date": "2024-06-01"
    }
  }'`
    quickStartCurlCode.value.textContent = code
    hljs.highlightElement(quickStartCurlCode.value)
  }
}

watch(selectedExample, () => {
  nextTick(() => {
    highlightQuickStartCode()
  })
})

onMounted(() => {
  highlightQuickStartCode()

  if (authApiKeyCode.value) {
    const code = `X-API-Key: your-api-key`
    authApiKeyCode.value.textContent = code
    hljs.highlightElement(authApiKeyCode.value)
  }

  if (authBearerCode.value) {
    const code = `Authorization: Bearer your-token`
    authBearerCode.value.textContent = code
    hljs.highlightElement(authBearerCode.value)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <AppHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col lg:grid lg:grid-cols-[280px,1fr] gap-8">
        <DocsSidenav />
        
        <div class="py-12">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">
          API Documentation
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Complete reference for the Secret PDF API. Generate PDFs from HTML templates in one API call.
        </p>
        <div class="mt-8 flex items-center justify-center gap-4">
          <span class="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm font-mono">
            v1.0.3
          </span>
          <a href="https://github.com/SecretPDF/secretpdf-js-sdk" target="_blank" class="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-all text-sm">
            View on GitHub
          </a>
          <a href="https://www.npmjs.com/package/@secretpdf/sdk" target="_blank" class="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-all text-sm">
            View on NPM
          </a>
        </div>
      </div>

      <!-- Quick Start -->
      <div class="mb-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">Quick Start</h2>
        <p class="text-slate-300 mb-6">
          Get started with the Secret PDF API in minutes. First, get <a href="https://app.secretpdf.io/api-keys" target="_blank" class="text-blue-400 hover:text-blue-300 underline">your API key</a> from the dashboard.
        </p>
        
        <!-- Toggle Tabs -->
        <div class="flex gap-2 mb-4">
          <button
            @click="selectedExample = 'nodejs'"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              selectedExample === 'nodejs'
                ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-300 hover:border-slate-600'
            ]"
          >
            Node.js
          </button>
          <button
            @click="selectedExample = 'curl'"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              selectedExample === 'curl'
                ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-300 hover:border-slate-600'
            ]"
          >
            cURL
          </button>
        </div>

        <!-- Node.js Example -->
        <div v-if="selectedExample === 'nodejs'" class="bg-slate-950/50 rounded-xl p-6 overflow-x-auto">
          <div class="text-slate-500 mb-2"># Install the SDK</div>
          <div class="text-green-400 mb-4">npm install @secretpdf/sdk</div>
          <div class="text-slate-500 mb-2"># Generate a PDF</div>
          <pre><code ref="quickStartNodeCode" class="hljs language-javascript text-sm block"></code></pre>
        </div>

        <!-- cURL Example -->
        <div v-if="selectedExample === 'curl'" class="bg-slate-950/50 rounded-xl p-6 overflow-x-auto">
          <div class="text-slate-500 mb-4"># Generate a PDF with cURL</div>
          <pre><code ref="quickStartCurlCode" class="hljs language-bash text-sm block"></code></pre>
        </div>
      </div>

      <!-- API Categories Grid -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8">API Reference</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="category in apiCategories"
            :key="category.title"
            :to="category.link"
            class="group bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all hover:bg-slate-900/70 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div class="text-4xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {{ category.title }}
            </h3>
            <p class="text-slate-400 mb-4">
              {{ category.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-500">{{ category.endpoints }} endpoints</span>
              <span class="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Base URL -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">Base URL</h2>
        <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm">
          <span class="text-slate-500">https://</span><span class="text-blue-400">api.secretpdf.io</span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-white mb-3">Authentication</h3>
          <p class="text-slate-300 mb-3">
            All API requests require authentication using an API key:
          </p>
          <div class="bg-slate-950/50 rounded-xl p-4 space-y-4">
            <div>
              <div class="text-slate-500 mb-2"># Using API Key</div>
              <pre><code ref="authApiKeyCode" class="hljs language-bash text-sm block"></code></pre>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped>
pre {
  margin: 0;
  line-height: 1.6;
}

code.hljs {
  background: transparent;
  padding: 0;
}
</style>
