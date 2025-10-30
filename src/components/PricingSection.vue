<template>
  <!-- Pricing Section -->
  <section id="pricing" class="bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="flex items-start gap-8 max-w-4xl mx-auto">
        <!-- Starter Plan -->
        <div class="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-0">Starter</h3>
            <p class="text-gray-600 mb-6">Perfect for small projects and testing</p>
            <div class="flex items-baseline justify-center">
              <span class="text-4xl font-bold text-gray-900">Free</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">10 PDF generations/month</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">Craft your own templates with TailwindCSS</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">Use any JavaScript library you want (Charts, Maps, etc.)</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">API Access</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">Unlimited test pdfs (watermarked)</span>
            </li>
          </ul>

          <button 
            @click="$emit('openWaitlist')"
            class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>

        <!-- Pro Plan -->
        <div class="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-yellow-400 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>

          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-0">Pro</h3>
            <p class="text-blue-100 mb-6">For production</p>
            <div class="flex items-baseline justify-center">
              <span class="text-4xl font-bold text-white">$0,01</span>
              <span class="text-blue-100 ml-2">/ credit</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">Unlimited generations/month</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">Store documents on your own server (S3, sftp,...)</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">AI-generated templates (beta)</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">Editable pdfs (soon)</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">Priority support</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white">99.9% uptime SLA</span>
            </li>
          </ul>

          <button 
            @click="$emit('openWaitlist')"
            class="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      <!-- Credits Explanation -->
      <div class="max-w-3xl mx-auto mt-16 mb-12">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">How Credits Work</h3>
          <p class="text-gray-600">Transparent pricing based on your usage and file complexity</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Standard PDFs -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-center">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Standard PDFs</h4>
              <div class="text-2xl font-bold text-green-600 mb-2">1 Credit</div>
              <p class="text-sm text-gray-600">For PDF generation under 2MB</p>
            </div>
          </div>

          <!-- Large PDFs -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="text-center">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Large PDFs</h4>
              <div class="text-2xl font-bold text-blue-600 mb-2">2 Credits</div>
              <p class="text-sm text-gray-600">For PDF generation above 2MB</p>
            </div>
          </div>

          <!-- Editable PDFs -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div class="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </div>
            <div class="text-center">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Editable PDFs</h4>
              <div class="text-2xl font-bold text-purple-600 mb-2">3 Credits</div>
              <p class="text-sm text-gray-600">For advanced PDF features (coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Define emits
defineEmits<{
  openWaitlist: []
}>()
</script>