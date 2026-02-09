<script setup lang="ts">
useHead({
  title: 'Webhooks - Secret PDF Documentation',
  meta: [
    { name: 'description', content: 'Handle webhook events from external services' }
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
        <span class="text-white">Webhooks</span>
      </div>

      <!-- Header -->
      <div class="mb-12">
        <div class="text-5xl mb-4">🔗</div>
        <h1 class="text-4xl font-bold text-white mb-4">Webhooks</h1>
        <p class="text-xl text-slate-300">
          Receive real-time notifications for events in your Secret PDF account
        </p>
      </div>

      <!-- Polar Webhook -->
      <ApiEndpoint
        method="POST"
        path="/webhooks/polar"
        title="Polar Webhook Handler"
        description="Internal endpoint for handling Polar (payment provider) webhook events"
        :request-body="`{
  &quot;type&quot;: &quot;checkout.completed&quot;,
  &quot;data&quot;: {
    &quot;id&quot;: &quot;checkout_123&quot;,
    &quot;customerId&quot;: &quot;cus_abc123&quot;,
    &quot;amount&quot;: 2900,
    &quot;currency&quot;: &quot;USD&quot;,
    &quot;metadata&quot;: {
      &quot;userId&quot;: &quot;user-123&quot;,
      &quot;credits&quot;: 10000
    }
  }
}`"
        :responses="[
          {
            status: 200,
            description: 'Webhook processed successfully',
            schema: `{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;Webhook processed&quot;
}`
          },
          {
            status: 400,
            description: 'Invalid webhook signature or payload'
          }
        ]"
      />

      <!-- Webhook Events -->
      <div class="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6">
        <h2 class="text-2xl font-bold text-white mb-6">📬 Webhook Events</h2>
        <p class="text-slate-300 mb-6">
          Secret PDF can send webhooks to your server when certain events occur. Configure webhook endpoints in your dashboard.
        </p>
        
        <div class="space-y-4">
          <div class="bg-slate-950/50 rounded-xl p-4">
            <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-green-400">✓</span>
              <code class="text-blue-400">document.generated</code>
            </h3>
            <p class="text-slate-300 mb-3">
              Triggered when a PDF document is successfully generated
            </p>
            <div class="bg-slate-900/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <pre class="text-slate-300">{
  <span class="text-blue-400">&quot;event&quot;</span>: <span class="text-green-400">&quot;document.generated&quot;</span>,
  <span class="text-blue-400">&quot;timestamp&quot;</span>: <span class="text-green-400">&quot;2026-02-09T12:34:56Z&quot;</span>,
  <span class="text-blue-400">&quot;data&quot;</span>: {
    <span class="text-blue-400">&quot;documentId&quot;</span>: <span class="text-green-400">&quot;doc-abc123&quot;</span>,
    <span class="text-blue-400">&quot;templateId&quot;</span>: <span class="text-green-400">&quot;template-123&quot;</span>,
    <span class="text-blue-400">&quot;url&quot;</span>: <span class="text-green-400">&quot;https://...&quot;</span>,
    <span class="text-blue-400">&quot;size&quot;</span>: <span class="text-yellow-400">245678</span>
  }
}</pre>
            </div>
          </div>

          <div class="bg-slate-950/50 rounded-xl p-4">
            <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-red-400">✗</span>
              <code class="text-blue-400">document.failed</code>
            </h3>
            <p class="text-slate-300 mb-3">
              Triggered when PDF generation fails
            </p>
            <div class="bg-slate-900/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <pre class="text-slate-300">{
  <span class="text-blue-400">&quot;event&quot;</span>: <span class="text-green-400">&quot;document.failed&quot;</span>,
  <span class="text-blue-400">&quot;timestamp&quot;</span>: <span class="text-green-400">&quot;2026-02-09T12:34:56Z&quot;</span>,
  <span class="text-blue-400">&quot;data&quot;</span>: {
    <span class="text-blue-400">&quot;templateId&quot;</span>: <span class="text-green-400">&quot;template-123&quot;</span>,
    <span class="text-blue-400">&quot;error&quot;</span>: <span class="text-green-400">&quot;Invalid template syntax&quot;</span>
  }
}</pre>
            </div>
          </div>

          <div class="bg-slate-950/50 rounded-xl p-4">
            <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-blue-400">$</span>
              <code class="text-blue-400">checkout.completed</code>
            </h3>
            <p class="text-slate-300 mb-3">
              Triggered when a payment is successfully processed
            </p>
            <div class="bg-slate-900/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <pre class="text-slate-300">{
  <span class="text-blue-400">&quot;event&quot;</span>: <span class="text-green-400">&quot;checkout.completed&quot;</span>,
  <span class="text-blue-400">&quot;timestamp&quot;</span>: <span class="text-green-400">&quot;2026-02-09T12:34:56Z&quot;</span>,
  <span class="text-blue-400">&quot;data&quot;</span>: {
    <span class="text-blue-400">&quot;userId&quot;</span>: <span class="text-green-400">&quot;user-123&quot;</span>,
    <span class="text-blue-400">&quot;amount&quot;</span>: <span class="text-yellow-400">2900</span>,
    <span class="text-blue-400">&quot;credits&quot;</span>: <span class="text-yellow-400">10000</span>
  }
}</pre>
            </div>
          </div>

          <div class="bg-slate-950/50 rounded-xl p-4">
            <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-yellow-400">📝</span>
              <code class="text-blue-400">template.created</code>
            </h3>
            <p class="text-slate-300 mb-3">
              Triggered when a new template is created
            </p>
            <div class="bg-slate-900/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <pre class="text-slate-300">{
  <span class="text-blue-400">&quot;event&quot;</span>: <span class="text-green-400">&quot;template.created&quot;</span>,
  <span class="text-blue-400">&quot;timestamp&quot;</span>: <span class="text-green-400">&quot;2026-02-09T12:34:56Z&quot;</span>,
  <span class="text-blue-400">&quot;data&quot;</span>: {
    <span class="text-blue-400">&quot;templateId&quot;</span>: <span class="text-green-400">&quot;template-456&quot;</span>,
    <span class="text-blue-400">&quot;name&quot;</span>: <span class="text-green-400">&quot;Invoice Template&quot;</span>,
    <span class="text-blue-400">&quot;generatedBy&quot;</span>: <span class="text-green-400">&quot;ai&quot;</span>
  }
}</pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Setting Up Webhooks -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6">
        <h2 class="text-2xl font-bold text-white mb-4">⚙️ Setting Up Webhooks</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">1. Create Your Endpoint</h3>
            <div class="bg-slate-950/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-slate-300"><span class="text-purple-400">import</span> { <span class="text-yellow-300">createHmac</span> } <span class="text-purple-400">from</span> <span class="text-green-400">'crypto'</span>

<span class="text-purple-400">export</span> <span class="text-purple-400">async</span> <span class="text-purple-400">function</span> <span class="text-yellow-300">POST</span>(request) {
  <span class="text-purple-400">const</span> signature = request.headers.get(<span class="text-green-400">'X-Secret-PDF-Signature'</span>)
  <span class="text-purple-400">const</span> body = <span class="text-purple-400">await</span> request.text()
  
  <span class="text-slate-500">// Verify signature</span>
  <span class="text-purple-400">const</span> expectedSignature = <span class="text-yellow-300">createHmac</span>(<span class="text-green-400">'sha256'</span>, process.env.WEBHOOK_SECRET)
    .<span class="text-yellow-300">update</span>(body)
    .<span class="text-yellow-300">digest</span>(<span class="text-green-400">'hex'</span>)
  
  <span class="text-purple-400">if</span> (signature !== expectedSignature) {
    <span class="text-purple-400">return</span> <span class="text-purple-400">new</span> <span class="text-yellow-300">Response</span>(<span class="text-green-400">'Invalid signature'</span>, { status: <span class="text-yellow-400">401</span> })
  }
  
  <span class="text-purple-400">const</span> event = JSON.<span class="text-yellow-300">parse</span>(body)
  
  <span class="text-slate-500">// Handle event</span>
  <span class="text-purple-400">switch</span> (event.event) {
    <span class="text-purple-400">case</span> <span class="text-green-400">'document.generated'</span>:
      <span class="text-slate-500">// Send email notification</span>
      <span class="text-purple-400">await</span> <span class="text-yellow-300">sendEmail</span>(event.data)
      <span class="text-purple-400">break</span>
    <span class="text-purple-400">case</span> <span class="text-green-400">'checkout.completed'</span>:
      <span class="text-slate-500">// Update user credits</span>
      <span class="text-purple-400">await</span> <span class="text-yellow-300">updateCredits</span>(event.data.userId, event.data.credits)
      <span class="text-purple-400">break</span>
  }
  
  <span class="text-purple-400">return</span> <span class="text-purple-400">new</span> <span class="text-yellow-300">Response</span>(JSON.<span class="text-yellow-300">stringify</span>({ success: <span class="text-purple-400">true</span> }))
}</pre>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-3">2. Configure in Dashboard</h3>
            <p class="text-slate-300 mb-3">
              Add your webhook URL in the Secret PDF dashboard under Settings → Webhooks
            </p>
            <div class="bg-slate-950/50 rounded-xl p-4">
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-slate-400">URL:</span>
                  <code class="text-blue-400">https://yourdomain.com/api/webhooks/secret-pdf</code>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-slate-400">Events:</span>
                  <span class="text-slate-300">document.*, template.*, checkout.*</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-3">3. Test Your Webhook</h3>
            <p class="text-slate-300">
              Use the "Send Test Event" button in the dashboard to verify your endpoint is working correctly
            </p>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Webhook Best Practices</h2>
        <div class="space-y-4 text-slate-300">
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Always Verify Signatures:</strong> Use the <code class="text-blue-400 bg-slate-950/50 px-2 py-1 rounded">X-Secret-PDF-Signature</code> header to verify webhook authenticity
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Respond Quickly:</strong> Return a 200 response immediately and process the event asynchronously
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Handle Duplicates:</strong> Webhooks may be sent multiple times. Use the event ID to detect and ignore duplicates
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Use HTTPS:</strong> Always use HTTPS endpoints to ensure webhook data is encrypted in transit
            </p>
          </div>
          <div class="flex gap-3">
            <span class="text-blue-400 text-xl">•</span>
            <p>
              <strong class="text-white">Implement Retry Logic:</strong> If your endpoint fails, Secret PDF will retry with exponential backoff
            </p>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
