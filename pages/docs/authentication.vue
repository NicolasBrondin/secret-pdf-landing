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
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          Authenticate your API requests using API keys or OAuth tokens
        </p>
      </div>

      <!-- Auth Methods -->
      <div class="mb-12 grid md:grid-cols-2 gap-6">
        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 class="text-xl font-bold text-white mb-3">🔑 API Key Authentication</h3>
          <p class="text-slate-300 mb-4">
            Best for server-to-server communication and simple integrations
          </p>
          <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm">
            <span class="text-blue-400">X-API-Key</span>: <span class="text-green-400">your-api-key</span>
          </div>
        </div>

        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 class="text-xl font-bold text-white mb-3">👤 OAuth Authentication</h3>
          <p class="text-slate-300 mb-4">
            Best for user-specific actions and web applications
          </p>
          <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm">
            <span class="text-blue-400">Authorization</span>: <span class="text-green-400">Bearer your-token</span>
          </div>
        </div>
      </div>

      <!-- Get User Info -->
      <ApiEndpoint
        method="GET"
        path="/auth/me"
        title="Get Current User"
        description="Get information about the authenticated user"
        :parameters="[
          { name: 'Authorization', type: 'string', required: true, description: 'Bearer token' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'User information retrieved',
            schema: `{
  &quot;success&quot;: true,
  &quot;user&quot;: {
    &quot;id&quot;: &quot;user-123&quot;,
    &quot;email&quot;: &quot;user@example.com&quot;,
    &quot;name&quot;: &quot;John Doe&quot;,
    &quot;createdAt&quot;: &quot;2026-01-15T10:00:00Z&quot;
  },
  &quot;billing&quot;: {
    &quot;plan&quot;: &quot;pro&quot;,
    &quot;credits&quot;: 5000,
    &quot;customerId&quot;: &quot;cus_abc123&quot;
  }
}`
          }
        ]"
        :code-example="`import { AuthenticationApi, Configuration } from '@secret-pdf/sdk'

const config = new Configuration({
  accessToken: 'your-bearer-token'
})

const api = new AuthenticationApi(config)
const user = await api.authMeGet()

console.log('User:', user.user)
console.log('Plan:', user.billing.plan)`"
      />

      <!-- Get Credits -->
      <ApiEndpoint
        method="GET"
        path="/auth/credits"
        title="Get Credits Balance"
        description="Get current credit balance and usage"
        :responses="[
          {
            status: 200,
            description: 'Credits information',
            schema: `{
  &quot;success&quot;: true,
  &quot;credits&quot;: {
    &quot;available&quot;: 5000,
    &quot;used&quot;: 1234,
    &quot;total&quot;: 10000,
    &quot;resetDate&quot;: &quot;2026-03-01T00:00:00Z&quot;
  }
}`
          }
        ]"
        :code-example="`const credits = await api.authCreditsGet()
console.log('Available credits:', credits.credits.available)`"
      />

      <!-- GitHub OAuth Callback -->
      <ApiEndpoint
        method="GET"
        path="/auth/github/callback"
        title="GitHub OAuth Callback"
        description="Handle GitHub OAuth callback (internal use)"
        :parameters="[
          { name: 'code', type: 'string', required: false, description: 'Authorization code from GitHub' },
          { name: 'state', type: 'string', required: false, description: 'OAuth state parameter' },
          { name: 'error', type: 'string', required: false, description: 'Error code if auth failed' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Authentication successful',
            schema: `{
  &quot;success&quot;: true,
  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&quot;,
  &quot;user&quot;: {
    &quot;id&quot;: &quot;user-123&quot;,
    &quot;email&quot;: &quot;user@example.com&quot;,
    &quot;name&quot;: &quot;John Doe&quot;
  }
}`
          },
          {
            status: 400,
            description: 'Authentication failed'
          }
        ]"
      />

      <!-- Logout -->
      <ApiEndpoint
        method="POST"
        path="/auth/logout"
        title="Logout"
        description="Invalidate current session token"
        :responses="[
          {
            status: 200,
            description: 'Logged out successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;Logged out successfully&quot;
}`
          }
        ]"
        :code-example="`await api.authLogoutPost()`"
      />

      <!-- Billing Portal -->
      <ApiEndpoint
        method="GET"
        path="/auth/billing"
        title="Get Billing Portal URL"
        description="Get customer portal URL for managing payment details"
        :parameters="[
          { name: 'userId', type: 'string', required: true, description: 'User ID' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Billing portal URL',
            schema: `{
  &quot;success&quot;: true,
  &quot;url&quot;: &quot;https://billing.polar.sh/portal/cus_abc123&quot;
}`
          }
        ]"
        :code-example="`const billing = await api.authBillingGet({ userId: 'user-123' })
window.location.href = billing.url`"
      />

      <!-- Checkout -->
      <ApiEndpoint
        method="POST"
        path="/auth/checkout"
        title="Create Checkout Session"
        description="Create a checkout session for purchasing credits"
        :responses="[
          {
            status: 200,
            description: 'Checkout session created',
            schema: `{
  &quot;success&quot;: true,
  &quot;checkoutUrl&quot;: &quot;https://checkout.polar.sh/session_abc123&quot;
}`
          }
        ]"
      />

      <!-- Get Invoices -->
      <ApiEndpoint
        method="GET"
        path="/auth/invoices"
        title="List Invoices"
        description="Get list of invoices for the authenticated user"
        :parameters="[
          { name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' },
          { name: 'limit', type: 'number', required: false, description: 'Items per page (default: 20)' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Invoices list',
            schema: `{
  &quot;success&quot;: true,
  &quot;invoices&quot;: [
    {
      &quot;id&quot;: &quot;inv-123&quot;,
      &quot;amount&quot;: 2900,
      &quot;currency&quot;: &quot;USD&quot;,
      &quot;status&quot;: &quot;paid&quot;,
      &quot;date&quot;: &quot;2026-02-01T00:00:00Z&quot;,
      &quot;pdfUrl&quot;: &quot;https://...&quot;
    }
  ],
  &quot;pagination&quot;: {
    &quot;page&quot;: 1,
    &quot;limit&quot;: 20,
    &quot;total&quot;: 45
  }
}`
          }
        ]"
        :code-example="`const invoices = await api.authInvoicesGet({ page: 1, limit: 20 })
console.log('Invoices:', invoices.invoices)`"
      />

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
    &quot;documentsGenerated&quot;: 1234,
    &quot;templatesCreated&quot;: 45,
    &quot;apiCalls&quot;: 5678
  },
  &quot;recentActivities&quot;: [
    {
      &quot;type&quot;: &quot;document_generated&quot;,
      &quot;templateName&quot;: &quot;Invoice Template&quot;,
      &quot;timestamp&quot;: &quot;2026-02-09T12:34:56Z&quot;
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
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Use OAuth for User Actions:</strong> Use OAuth tokens for user-specific operations in web apps
            </p>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
