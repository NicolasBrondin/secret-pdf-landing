<script setup lang="ts">
useHead({
  title: 'Documents API - Secret PDF Documentation',
  meta: [
    { name: 'description', content: 'Generate PDFs from templates and view usage statistics' }
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
        <span class="text-white">Documents</span>
      </div>

      <!-- Header -->
      <div class="mb-12">
        <div class="text-5xl mb-4">📄</div>
        <h1 class="text-4xl font-bold text-white mb-4">Documents API</h1>
        <p class="text-xl text-slate-300">
          Generate PDFs from templates and view usage statistics
        </p>
      </div>

      <!-- Generate PDF Endpoint -->
      <ApiEndpoint
        method="POST"
        path="/generate"
        title="Generate PDF"
        description="Generate a PDF document from a template with custom data"
        :parameters="[
          { name: 'X-API-Key', type: 'string', required: true, description: 'Your API key for authentication' }
        ]"
        :request-body="`{
  &quot;templateId&quot;: &quot;template-123&quot;,        // ID of stored template
  &quot;data&quot;: {                            // Data to inject into template
    &quot;name&quot;: &quot;John Doe&quot;,
    &quot;email&quot;: &quot;john@example.com&quot;,
    &quot;items&quot;: [...]
  },
  &quot;storage&quot;: {                         // Optional: External storage config
    &quot;provider&quot;: &quot;s3&quot;,
    &quot;path&quot;: &quot;documents/invoice.pdf&quot;
  },
  &quot;returnPdf&quot;: true                   // Return PDF in response (default: true)
}`"
        :responses="[
          {
            status: 200,
            description: 'PDF generated successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;data&quot;: {
    &quot;documentId&quot;: &quot;doc-abc123&quot;,
    &quot;url&quot;: &quot;https://storage.example.com/documents/invoice.pdf&quot;,
    &quot;size&quot;: 245678,
    &quot;generatedAt&quot;: &quot;2026-02-09T12:34:56Z&quot;
  }
}`
          },
          {
            status: 400,
            description: 'Invalid request - missing required fields',
            schema: `{
  &quot;success&quot;: false,
  &quot;error&quot;: &quot;templateId is required&quot;
}`
          },
          {
            status: 401,
            description: 'Unauthorized - invalid or missing API key'
          }
        ]"
        :code-example="`import { DocumentsApi, Configuration } from '@secret-pdf/sdk'

const config = new Configuration({
  apiKey: 'your-api-key'
})

const api = new DocumentsApi(config)

const response = await api.generatePost({
  generatePostRequest: {
    templateId: 'template-123',
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      orderNumber: 'ORD-001',
      items: [
        { product: 'Widget', price: 29.99, quantity: 2 },
        { product: 'Gadget', price: 49.99, quantity: 1 }
      ],
      total: 109.97
    },
    storage: {
      provider: 's3',
      path: 'invoices/2026/02/invoice-001.pdf'
    },
    returnPdf: true
  }
})

console.log('PDF URL:', response.data.url)`"
      />

      <!-- Usage Stats Endpoint -->
      <ApiEndpoint
        method="GET"
        path="/documents/usage-stats"
        title="Get Usage Statistics"
        description="Get document generation usage statistics for the last 7 days"
        :parameters="[
          { name: 'X-API-Key', type: 'string', required: true, description: 'Your API key for authentication' },
          { name: 'Authorization', type: 'string', required: false, description: 'Bearer token for OAuth authentication' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Usage statistics retrieved successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;data&quot;: {
    &quot;totalDocuments&quot;: 1234,
    &quot;period&quot;: &quot;7 days&quot;,
    &quot;stats&quot;: [
      {
        &quot;date&quot;: &quot;2026-02-09&quot;,
        &quot;count&quot;: 156,
        &quot;totalSize&quot;: 45678901
      },
      {
        &quot;date&quot;: &quot;2026-02-08&quot;,
        &quot;count&quot;: 142,
        &quot;totalSize&quot;: 42345678
      }
      // ... more days
    ]
  }
}`
          },
          {
            status: 401,
            description: 'Unauthorized - invalid or missing authentication'
          }
        ]"
        :code-example="`import { DocumentsApi, Configuration } from '@secret-pdf/sdk'

const config = new Configuration({
  apiKey: 'your-api-key'
})

const api = new DocumentsApi(config)
const stats = await api.documentsUsageStatsGet()

console.log('Total documents:', stats.data.totalDocuments)
console.log('Daily breakdown:', stats.data.stats)`"
      />

      <!-- Additional Info -->
      <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Tips & Best Practices</h2>
        <div class="space-y-4 text-slate-300">
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Template Data:</strong> Use the <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded">data</code> field to pass variables that will be injected into your template using Handlebars syntax.
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Storage Options:</strong> Configure external storage (S3, Azure Blob, etc.) to automatically save generated PDFs to your cloud storage.
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Async Generation:</strong> For large documents, set <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded">returnPdf: false</code> to receive immediate response with document ID and retrieve the PDF later.
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Rate Limits:</strong> Document generation is subject to rate limits based on your plan. Check your usage stats regularly to monitor consumption.
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
