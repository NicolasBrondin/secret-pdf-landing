<script setup lang="ts">
const viewMode = ref<'reference' | 'sdk'>('sdk')

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

      <!-- View Toggle -->
      <DocsViewToggle v-model="viewMode" />

      <!-- API Reference View -->
      <div v-if="viewMode === 'reference'">
      <!-- Generate PDF Endpoint -->
      <ApiEndpoint
        method="POST"
        path="/generate"
        title="Generate PDF"
        description="Generate a PDF document from an HTML content or a template ID with custom data"
        :parameters="[
          { name: 'X-API-Key', type: 'string', required: true, description: 'Your API key for authentication' }
        ]"
        :request-bodies="[`{
  &quot;html&quot;: &quot;<main><h1>Invoice</h1><p>To: John Doe</p></main>&quot;,
  &quot;size&quot;: &quot;A4&quot;,                          // Set size of the document to generate
  &quot;orientation&quot;: &quot;portrait&quot;,             // Set orientation of the document to generate
  &quot;returnPdf&quot;: true,                    // Return PDF in response (default: true)
  &quot;sandbox&quot;: true                       // Use sandbox mode to test without consuming credits
  
}`,
`// Using a stored template
{
  &quot;templateId&quot;: &quot;template-123&quot;,        // ID of stored template
  &quot;data&quot;: {                            // Data to inject into template
    &quot;name&quot;: &quot;John Doe&quot;,
    &quot;email&quot;: &quot;john@example.com&quot;,
    &quot;items&quot;: [...]
  },
  &quot;returnPdf&quot;: true,                   // Return PDF in response (default: true)
  &quot;sandbox&quot;: true                      // Use sandbox mode to test without consuming credits
}`]"
        :responses="[
          {
            status: 200,
            description: 'PDF generated successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;data&quot;: &quot;<base64-encoded-pdf-content>&quot;
}`
          },
          {
            status: 401,
            description: 'Unauthorized - invalid or missing API key'
          }
        ]"
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
        
      />
      </div>

      <!-- SDK Examples View -->
      <div v-else>
        <SdkExample
          title="Generate PDF From Raw HTML"
          description="Generate a PDF document from raw HTML content"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

const resultFromHtml = await client.generate({
  html: `<div>
  <h1>Client's name: {{name}}</h1>
  <span>Client's email: {{email}}</span>
  <span>Order number: {{orderNumber}}</span>
  {{#each items}}
    <div>
      <li>Product: {{items.product}}</li>
      <li>Price: {{items.price}}</li>
      <li>Quantity: {{items.quantity}}</li>
    </div>
  {{/each}}
  <span>Total: {{total}}</span>
</div>`,
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    orderNumber: 'ORD-001',
    items: [
      { product: 'Widget', price: 29.99, quantity: 2 }
    ],
    total: 109.97
  },
  returnFile: true,
  sandbox: true, // Use sandbox mode to test without consuming credits
  orientation: 'portrait'
})

// Base64-encoded PDF content
console.log('PDF generated:', resultFromHtml.data)"
        />

        <SdkExample
          title="Generate PDF from stored template"
          description="Generate a PDF document from a template with custom data"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

const resultFromTemplate = await client.generate({
  templateId: '<your-template-id>',
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    orderNumber: 'ORD-001',
    items: [
      { product: 'Widget', price: 29.99, quantity: 2 }
    ],
    total: 109.97
  },
  returnFile: true,
  sandbox: false
})

// Base64-encoded PDF content
console.log('PDF generated:', resultFromTemplate.data)"
        />

        <SdkExample
          title="Get Usage Statistics"
          description="View document generation usage statistics"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Get usage statistics
const usage = await client.getUsageStats()

console.log('Usage stats:', usage.stats)

// List generation records with pagination
const records = await client.listGenerationRecords({
  page: 1,
  limit: 10
})

console.log('Recent generations:', records.records)"
        />
      </div>

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
          <!--<div class="flex gap-3">
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
          </div>-->
        </div>
      </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
