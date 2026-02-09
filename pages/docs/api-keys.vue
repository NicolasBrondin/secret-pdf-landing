<script setup lang="ts">
useHead({
  title: 'API Keys - Secret PDF Documentation',
  meta: [
    { name: 'description', content: 'Manage your API keys for authentication' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <AppHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-[280px,1fr] gap-8">
        <DocsSidenav />
        
        <div>
      <!-- Breadcrumb -->
      <div class="mb-8">
        <NuxtLink to="/docs" class="text-blue-400 hover:text-blue-300">Documentation</NuxtLink>
        <span class="text-slate-500 mx-2">/</span>
        <span class="text-white">API Keys</span>
      </div>

      <!-- Header -->
      <div class="mb-12">
        <div class="text-5xl mb-4">🔑</div>
        <h1 class="text-4xl font-bold text-white mb-4">API Keys</h1>
        <p class="text-xl text-slate-300">
          Create and manage API keys for authenticating your requests
        </p>
      </div>

      <!-- List API Keys -->
      <ApiEndpoint
        method="GET"
        path="/api-keys"
        title="List API Keys"
        description="Get all API keys for the authenticated user"
        :parameters="[
          { name: 'Authorization', type: 'string', required: true, description: 'Bearer token' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'API keys retrieved',
            schema: `{
  &quot;success&quot;: true,
  &quot;apiKeys&quot;: [
    {
      &quot;id&quot;: &quot;key-123&quot;,
      &quot;name&quot;: &quot;Production API Key&quot;,
      &quot;key&quot;: &quot;sk_live_abc123...&quot;,
      &quot;prefix&quot;: &quot;sk_live&quot;,
      &quot;lastUsed&quot;: &quot;2026-02-09T12:00:00Z&quot;,
      &quot;createdAt&quot;: &quot;2026-01-15T10:00:00Z&quot;,
      &quot;active&quot;: true
    },
    {
      &quot;id&quot;: &quot;key-456&quot;,
      &quot;name&quot;: &quot;Development API Key&quot;,
      &quot;key&quot;: &quot;sk_test_def456...&quot;,
      &quot;prefix&quot;: &quot;sk_test&quot;,
      &quot;lastUsed&quot;: &quot;2026-02-08T15:30:00Z&quot;,
      &quot;createdAt&quot;: &quot;2026-01-10T09:00:00Z&quot;,
      &quot;active&quot;: true
    }
  ]
}`
          }
        ]"
        :code-example="`import { APIKeysApi, Configuration } from '@secret-pdf/sdk'

const config = new Configuration({
  accessToken: 'your-bearer-token'
})

const api = new APIKeysApi(config)
const keys = await api.apiKeysGet()

console.log('API Keys:', keys.apiKeys)
keys.apiKeys.forEach(key => {
  console.log(\`\${key.name}: \${key.prefix}...\`)
})`"
      />

      <!-- Create API Key -->
      <ApiEndpoint
        method="POST"
        path="/api-keys"
        title="Create API Key"
        description="Create a new API key"
        :request-body="`{
  &quot;name&quot;: &quot;Production API Key&quot;
}`"
        :responses="[
          {
            status: 200,
            description: 'API key created successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;API key created successfully&quot;,
  &quot;data&quot;: {
    &quot;id&quot;: &quot;key-789&quot;,
    &quot;name&quot;: &quot;Production API Key&quot;,
    &quot;key&quot;: &quot;sk_live_xyz789abc123def456ghi789&quot;,
    &quot;prefix&quot;: &quot;sk_live&quot;,
    &quot;createdAt&quot;: &quot;2026-02-09T12:00:00Z&quot;
  }
}`
          },
          {
            status: 400,
            description: 'Invalid request - name is required'
          }
        ]"
        :code-example="`const response = await api.apiKeysPost({
  apiKeysPostRequest: {
    name: 'Production API Key'
  }
})

// Store this key securely - it won't be shown again!
const apiKey = response.data.key
console.log('New API key created:', apiKey)

// Save to environment variable
process.env.SECRET_PDF_API_KEY = apiKey`"
      />

      <!-- Deactivate API Key -->
      <ApiEndpoint
        method="PUT"
        path="/api-keys/{id}/deactivate"
        title="Deactivate API Key"
        description="Deactivate an API key to revoke access"
        :parameters="[
          { name: 'id', type: 'string', required: true, description: 'API Key ID' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'API key deactivated',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;API key deactivated successfully&quot;
}`
          },
          {
            status: 404,
            description: 'API key not found'
          }
        ]"
        :code-example="`await api.apiKeysIdDeactivatePut({
  id: 'key-123'
})

console.log('API key deactivated')`"
      />

      <!-- API Key Types -->
      <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6">
        <h2 class="text-2xl font-bold text-white mb-4">🏷️ API Key Types</h2>
        <div class="space-y-4">
          <div class="bg-slate-950/50 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg font-mono text-sm">sk_live</span>
              <h3 class="text-lg font-semibold text-white">Production Keys</h3>
            </div>
            <p class="text-slate-300">
              Use for production environments. These keys have full access and count against your plan limits.
            </p>
          </div>

          <div class="bg-slate-950/50 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg font-mono text-sm">sk_test</span>
              <h3 class="text-lg font-semibold text-white">Test Keys</h3>
            </div>
            <p class="text-slate-300">
              Use for development and testing. Test keys have limited quotas but don't count against production limits.
            </p>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Best Practices</h2>
        <div class="space-y-4 text-slate-300">
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Name Your Keys:</strong> Use descriptive names like "Production Server" or "Staging Environment" to identify where each key is used
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">One Key Per Environment:</strong> Create separate API keys for development, staging, and production
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Rotate Regularly:</strong> Create new keys periodically and deactivate old ones to maintain security
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Store Securely:</strong> Save API keys immediately after creation - they're only shown once! Use environment variables or secret management tools
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Monitor Usage:</strong> Check the "Last Used" timestamp to identify unused keys that can be safely deactivated
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
