<script setup lang="ts">
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
  {
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
  }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <AppHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">
          API Documentation
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Complete reference for the Secret PDF API. Generate PDFs from HTML templates with AI assistance.
        </p>
        <div class="mt-8 flex items-center justify-center gap-4">
          <span class="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm font-mono">
            v1.0.0
          </span>
          <a href="https://github.com" target="_blank" class="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-all text-sm">
            View on GitHub
          </a>
        </div>
      </div>

      <!-- Quick Start -->
      <div class="mb-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">Quick Start</h2>
        <p class="text-slate-300 mb-6">
          Get started with the Secret PDF API in minutes. First, get your API key from the dashboard.
        </p>
        <div class="bg-slate-950/50 rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div class="text-slate-500 mb-2"># Install the SDK</div>
          <div class="text-green-400">npm install @secret-pdf/sdk</div>
          <div class="mt-4 text-slate-500 mb-2"># Generate a PDF</div>
          <pre class="text-blue-300">
<span class="text-purple-400">import</span> { <span class="text-yellow-300">DocumentsApi</span>, <span class="text-yellow-300">Configuration</span> } <span class="text-purple-400">from</span> <span class="text-green-400">'@secret-pdf/sdk'</span>

<span class="text-purple-400">const</span> config = <span class="text-purple-400">new</span> <span class="text-yellow-300">Configuration</span>({
  apiKey: <span class="text-green-400">'your-api-key'</span>
})

<span class="text-purple-400">const</span> api = <span class="text-purple-400">new</span> <span class="text-yellow-300">DocumentsApi</span>(config)
<span class="text-purple-400">const</span> response = <span class="text-purple-400">await</span> api.<span class="text-yellow-300">generatePost</span>({
  generatePostRequest: {
    templateId: <span class="text-green-400">'template-123'</span>,
    data: { name: <span class="text-green-400">'John Doe'</span> }
  }
})</pre>
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
          <span class="text-slate-500">https://</span><span class="text-blue-400">api.secret-pdf.com</span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-white mb-3">Authentication</h3>
          <p class="text-slate-300 mb-3">
            All API requests require authentication using an API key or Bearer token:
          </p>
          <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm space-y-2">
            <div><span class="text-slate-500"># Using API Key</span></div>
            <div><span class="text-blue-400">X-API-Key</span>: <span class="text-green-400">your-api-key</span></div>
            <div class="mt-3"><span class="text-slate-500"># Using Bearer Token</span></div>
            <div><span class="text-blue-400">Authorization</span>: <span class="text-green-400">Bearer your-token</span></div>
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
</style>
