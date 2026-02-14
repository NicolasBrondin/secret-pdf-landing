<script setup lang="ts">
const viewMode = ref<'reference' | 'sdk'>('sdk')

useHead({
  title: 'Templates API - Secret PDF Documentation',
  meta: [
    { name: 'description', content: 'Create, manage, and generate HTML templates for PDF generation' }
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
        <span class="text-white">Templates</span>
      </div>

      <!-- Header -->
      <div class="mb-12">
        <div class="text-5xl mb-4">📝</div>
        <h1 class="text-4xl font-bold text-white mb-4">Templates API</h1>
        <p class="text-xl text-slate-300">
          Create, manage, and generate HTML templates for PDF generation with AI assistance
        </p>
      </div>

      <!-- View Toggle -->
      <DocsViewToggle v-model="viewMode" />

      <!-- API Reference View -->
      <div v-if="viewMode === 'reference'">
      <!-- List Templates -->
      <ApiEndpoint
        method="GET"
        path="/templates"
        title="List Templates"
        description="Get all templates for authenticated user"
        :parameters="[
          { name: 'Authorization', type: 'string', required: true, description: 'Bearer token' },
          { name: 'X-API-Key', type: 'string', required: false, description: 'API key (alternative auth)' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Templates retrieved successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;123abc&quot;,
      &quot;name&quot;: &quot;Invoice Template&quot;,
      &quot;content&quot;: &quot;<main>...</main>&quot;,
      &quot;size&quot;: &quot;A4&quot;,
      &quot;createdAt&quot;: &quot;2026-02-01T10:00:00Z&quot;,
      &quot;updatedAt&quot;: &quot;2026-02-05T14:30:00Z&quot;
    }
  ]
}`
          }
        ]"
        
      />

      <!-- Create Template -->
      <ApiEndpoint
        method="POST"
        path="/templates"
        title="Create Template"
        description="Create a new HTML template"
        :request-body="`{
  &quot;name&quot;: &quot;Invoice Template&quot;,
  &quot;content&quot;: &quot;<main>...&lt;/main>&quot;
  &quot;size&quot;: &quot;A4&quot;
}`"
        :responses="[
          {
            status: 200,
            description: 'Template created successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;Template created successfully&quot;,
  &quot;data&quot;: {
    &quot;id&quot;: &quot;template-123&quot;,
    &quot;name&quot;: &quot;Invoice Template&quot;,
    &quot;size&quot;: &quot;A4&quot;,
    &quot;content&quot;: &quot;<!DOCTYPE html>...&quot;,
    &quot;createdAt&quot;: &quot;2026-02-09T12:00:00Z&quot;
  }
}`
          },
          {
            status: 400,
            description: 'Invalid template data'
          }
        ]"
        
      />

      <!-- Get Template -->
      <ApiEndpoint
        method="GET"
        path="/templates/{templateId}"
        title="Get Template"
        description="Get a specific template by ID"
        :parameters="[
          { name: 'templateId', type: 'string', required: true, description: 'Template ID' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Template retrieved',
            schema: `{
  &quot;id&quot;: &quot;template-123&quot;,
  &quot;name&quot;: &quot;Invoice Template&quot;,
  &quot;content&quot;: &quot;<!DOCTYPE html>...&quot;,
  &quot;size&quot;: &quot;A4&quot;,
  &quot;createdAt&quot;: &quot;2026-02-01T10:00:00Z&quot;
}`
          },
          {
            status: 404,
            description: 'Template not found'
          }
        ]"
        
      />

      <!-- Update Template -->
      <ApiEndpoint
        method="PUT"
        path="/templates/{templateId}"
        title="Update Template"
        description="Update an existing template"
        :parameters="[
          { name: 'templateId', type: 'string', required: true, description: 'Template ID' }
        ]"
        :request-body="`{
  &quot;name&quot;: &quot;Updated Invoice Template&quot;,
  &quot;content&quot;: &quot;<!DOCTYPE html>...&lt;/html>&quot;
  &quot;size&quot;: &quot;Letter&quot;
}`"
        :responses="[
          {
            status: 200,
            description: 'Template updated successfully'
          }
        ]"
        
      />

      <!-- Delete Template -->
      <ApiEndpoint
        method="DELETE"
        path="/templates/{templateId}"
        title="Delete Template"
        description="Delete a template"
        :parameters="[
          { name: 'templateId', type: 'string', required: true, description: 'Template ID' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Template deleted successfully'
          }
        ]"
        
      />

      <!-- AI: Generate from Prompt -->
      <ApiEndpoint
        method="POST"
        path="/templates/generate-from-prompt"
        title="Generate Template from Prompt (AI)"
        description="Generate HTML template using AI from a text prompt"
        :request-body="`{
  &quot;prompt&quot;: &quot;Create an invoice template with company logo, billing details, and itemized list&quot;
}`"
        :responses="[
          {
            status: 200,
            description: 'Template generated and saved',
            schema: `{
  &quot;success&quot;: true,
  &quot;data&quot;: {
    &quot;id&quot;: &quot;template-456&quot;,
    &quot;name&quot;: &quot;AI Generated Invoice&quot;,
    &quot;content&quot;: &quot;<!DOCTYPE html>...&quot;
  }
}`
          }
        ]"
        
      />

      <!-- AI: Generate from PDF -->
      <ApiEndpoint
        method="POST"
        path="/templates/generate-from-pdf"
        title="Generate Template from PDF (AI)"
        description="Upload a PDF file and generate HTML template using AI"
        :parameters="[
          { name: 'file', type: 'file', required: true, description: 'PDF file to convert (multipart/form-data)' }
        ]"
        :responses="[
          {
            status: 200,
            description: 'Template generated from PDF',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;Template created successfully&quot;,
  &quot;data&quot;: {
    &quot;id&quot;: &quot;template-789&quot;,
    &quot;content&quot;: &quot;<!DOCTYPE html>...&quot;
  }
}`
          },
          {
            status: 500,
            description: 'PDF processing failed'
          }
        ]"
        
      />
    </div>

      <!-- SDK Examples View -->
      <div v-else>
        <SdkExample
          title="List Templates"
          description="Get all templates for authenticated user"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// List all templates
const response = await client.listTemplates()

console.log('Templates:', response.data)
response.data.forEach(template => {
  console.log(`- ${template.name} (ID: ${template.id})`)  
})"
        />

        <SdkExample
          title="Create Template"
          description="Create a new HTML template"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Create a new template
const result = await client.createTemplate({
  name: 'Invoice Template',
  size: 'A4',
  content: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .invoice { max-width: 800px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class=&quot;invoice&quot;>
    <h1>Invoice #{{orderNumber}}</h1>
    <p>Customer: {{name}}</p>
    <p>Email: {{email}}</p>
  </div>
</body>
</html>`
})

console.log('Template created:', result.data.id)"
        />

        <SdkExample
          title="Get Template"
          description="Retrieve a specific template by ID"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Get a template by ID
const template = await client.getTemplate('template-123')

console.log('Template name:', template.data.name)
console.log('Template content:', template.data.content)
console.log('Page size:', template.data.size)"
        />

        <SdkExample
          title="Update Template"
          description="Update an existing template"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Update a template
const updated = await client.updateTemplate('template-123', {
  name: 'Updated Invoice Template',
  content: '<!DOCTYPE html>...'
  size: 'A4'
})

console.log('Template updated:', updated.data.id)"
        />

        <SdkExample
          title="Delete Template"
          description="Remove a template"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Delete a template
await client.deleteTemplate('template-123')

console.log('Template deleted')"
        />

        <SdkExample
          title="Generate Template from Prompt (AI)"
          description="Use AI to generate a template from a text description"
          code="import { SecretPDFClient } from '@secretpdf/sdk'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Generate template using AI
const result = await client.generateTemplateFromPrompt({
  prompt: 'Create a professional invoice template with company logo, billing and shipping addresses, itemized table with quantities and prices, subtotal, tax, and total',
  params: {
    companyName: '',
    customerName: '',
    items: [],
    subtotal: '',
    tax: '',
    total: ''
  },
  templateName: 'AI Generated Invoice'
})

console.log('Generated template ID:', result.data.id)
console.log('Template name:', result.data.name)"
        />

        <SdkExample
          title="Generate Template from PDF (AI)"
          description="Upload a PDF and let AI convert it to an HTML template"
          code="import { SecretPDFClient } from '@secretpdf/sdk'
import fs from 'fs'

const client = new SecretPDFClient({
  apiKey: 'your-api-key'
})

// Read PDF file and create a Blob
const pdfBuffer = fs.readFileSync('sample-invoice.pdf')
const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' })

// Generate template from PDF
const result = await client.generateTemplateFromPdf(pdfBlob)

console.log('Template created from PDF:', result.data.id)
console.log('Template name:', result.data.name)"
        />
      </div>
      <!-- Best Practices -->
      <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Template Best Practices</h2>
        <div class="space-y-4 text-slate-300">
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Use Handlebars:</strong> Templates support Handlebars syntax for dynamic content: <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded" v-text="'{{variable}}'"></code>, <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded" v-text="'{{#each items}}...{{/each}}'"></code>
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">CSS for PDF:</strong> Use inline styles or <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded">&lt;style&gt;</code> tags. Avoid external stylesheets.
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Page Breaks:</strong> Use <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded">page-break-after: always</code> CSS property to control pagination.
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">AI Generation:</strong> The AI can convert existing PDFs or generate templates from descriptions. Review and customize generated templates for best results.
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
