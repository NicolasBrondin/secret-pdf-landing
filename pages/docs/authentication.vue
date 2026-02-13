<script setup lang="ts">
useHead({
  title: 'Authentication - Secret PDF Documentation',
  meta: [
    { name: 'description', content: 'Authenticate your API requests using API keys or OAuth' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <AppHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="flex flex-col lg:grid lg:grid-cols-[280px,1fr] gap-8">
        <DocsSidenav />
        
        <div>
      <!-- Breadcrumb -->
      <div class="mb-8">
        <NuxtLink to="/docs" class="text-blue-400 hover:text-blue-300">Documentation</NuxtLink>
        <span class="text-slate-500 mx-2">/</span>
        <span class="text-white">Authentication</span>
      </div>

      <!-- Header -->
      <div class="mb-12">
        <div class="text-5xl mb-4">🔐</div>
        <h1 class="text-4xl font-bold text-white mb-4">Authentication</h1>
        <p class="text-xl text-slate-300">
          Authenticate your API requests using API keys
        </p>
      </div>

      <!-- Auth Methods -->
      <div class="mb-12 grid md:grid-cols-2 gap-6">
        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 class="text-xl font-bold text-white mb-3">🔑 API Key Authentication</h3>
          <p class="text-slate-300 mb-4">
            Best for server-to-server communication and simple integrations
          </p>
          <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm mb-2">
            <span class="text-blue-400">X-API-Key</span>: <span class="text-green-400">your-api-key</span>
          </div>
          <p class="text-slate-300">Get your key from our <a href="https://app.secretpdf.io/api-keys" target="_blank" class="text-blue-400 hover:text-blue-300 underline">dashboard</a>.</p>
        </div>

      </div>


      


      <!-- Recent Activity -->
      <ApiEndpoint
        method="GET"
        path="/me/recent-activity"
        title="Get Recent Activity"
        description="Get recent activity and statistics for the user"
        :responses="[
          {
            status: 200,
            description: 'Recent activity',
            schema: `{
  &quot;success&quot;: true,
  &quot;stats&quot;: {
    &quot;totalTemplates&quot;: 1234,
    &quot;totalActiveApiKeys&quot;: 1234,
    &quot;totalGeneratedPdfs&quot;: 45,
    &quot;generatedPdfsLast30Days&quot;: 5678,
    &quot;totalCreditsUsed&quot;: 5678,
    &quot;creditsUsedCurrentMonth&quot;: 5678
  },
  &quot;recentActivities&quot;: [
    {
      &quot;id&quot;: &quot;3617f53c-6d2b-4dcb-bce8-686e12730a0a&quot;,
      &quot;activityType&quot;: &quot;document_generated&quot;,
      &quot;entityType&quot;: &quot;template&quot;,
      &quot;entityId&quot;: &quot;1a17f53c-5d2b-3dcb-ace8-986e22730a0a&quot;,
      &quot;entityName&quot;: &quot;Invoice Template&quot;,
      &quot;metadata&quot;: {},
      &quot;createdAt&quot;: &quot;2026-02-09T12:34:56Z&quot;
    }
  ]
}`
          }
        ]"
      />

      <!-- Security Info -->
      <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">🔒 Security Best Practices</h2>
        <div class="space-y-4 text-slate-300">
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Keep API Keys Secret:</strong> Never expose API keys in client-side code or public repositories
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Use Environment Variables:</strong> Store API keys in environment variables, not in your code
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Rotate Keys Regularly:</strong> Create new API keys and deactivate old ones periodically
            </p>
          </div>
          
        </div>
      </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
