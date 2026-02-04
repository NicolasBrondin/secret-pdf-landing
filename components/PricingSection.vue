<template>
  <!-- Pricing Section -->
  <section id="pricing" class="bg-gradient-to-b from-white via-slate-50/50 to-white py-24 px-6 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-5 py-2.5 mb-6 border border-blue-200/50">
          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-blue-700 text-sm font-semibold">Transparent Pricing</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Start free, <span class="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">scale as you grow</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          No hidden fees. No monthly commitments. Pay only for what you use.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="flex flex-col lg:flex-row items-stretch lg:items-start justify-center gap-6 max-w-5xl mx-auto">
        <!-- Starter Plan -->
        <div class="w-full lg:flex-1 lg:max-w-sm bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Starter</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-gray-900">Free</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">Perfect for testing and small projects</p>
          </div>

          <div class="border-t border-gray-100 my-6"></div>

          <div class="space-y-3 flex-1">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">What you'll get</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">10 PDF generations/month</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">TailwindCSS templates</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">Any JavaScript library</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">Unlimited test PDFs (watermarked)</span>
              </li>
            </ul>
          </div>

          <button 
            @click="$emit('openWaitlist')"
            class="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all mt-6"
          >
            Start for Free
          </button>
        </div>

        <!-- Pro Plan - Highlighted -->
        <div class="w-full lg:flex-1 lg:max-w-sm bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl p-6 shadow-xl shadow-blue-400/25 hover:shadow-blue-400/40 transition-all duration-300 relative flex flex-col">
          <!-- Light shade top-right -->
          <div class="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <!-- Popular badge -->
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-sm opacity-70"></div>
              <span class="relative bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 text-yellow-900 px-5 py-1.5 rounded-full text-xs font-bold shadow-lg inline-flex items-center gap-1.5 border border-yellow-300/50">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Most Popular
              </span>
            </div>
          </div>

          <div class="relative mt-2">
            <h3 class="text-lg font-semibold text-white mb-1">Pro</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-white">$0.01</span>
              <span class="text-blue-200">/credit</span>
            </div>
            <p class="text-sm text-blue-200 mt-2">For production workloads at scale</p>
          </div>

          <div class="border-t border-white/20 my-6"></div>

          <div class="space-y-3 flex-1 relative">
            <p class="text-xs font-semibold text-blue-300 uppercase tracking-wider">What you'll get</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">All Starter features, plus:</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">Unlimited PDF generations</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">Your own storage (S3, SFTP...)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">AI-generated templates</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">Priority support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-white">99.9% uptime SLA</span>
              </li>
            </ul>
          </div>

          <button 
            @click="$emit('openWaitlist')"
            class="relative w-full bg-white hover:bg-gray-50 text-blue-700 font-semibold py-3 px-6 rounded-xl transition-all mt-6"
          >
            Get Started with Pro
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="w-full lg:flex-1 lg:max-w-sm bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Enterprise</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">For large organizations with specific needs</p>
          </div>

          <div class="border-t border-gray-100 my-6"></div>

          <div class="space-y-3 flex-1">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">What you'll get</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">All Pro features, plus:</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">Volume discounts</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">Dedicated account manager</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">Custom SLA agreements</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-gray-600">SSO & advanced security</span>
              </li>
            </ul>
          </div>

          <button 
            @click="$emit('openWaitlist')"
            class="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all mt-6"
          >
            Contact Sales
          </button>
        </div>
      </div>

      <!-- Credits Explanation -->
      <div class="max-w-4xl mx-auto mt-24">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full px-4 py-2 mb-4 border border-gray-200/50">
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-gray-600 text-sm font-medium">How it works</span>
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-3">Simple credit system</h3>
          <p class="text-gray-600 text-lg">Pay only for the resources you use. No minimums, no surprises.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Standard PDFs -->
          <div class="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-gray-200/80 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-5 mx-auto shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-center">
                <h4 class="text-lg font-bold text-gray-900 mb-2">Standard PDFs</h4>
                <div class="inline-flex items-baseline gap-1 mb-3">
                  <span class="text-4xl font-bold text-emerald-600">1</span>
                  <span class="text-emerald-600 font-medium">credit</span>
                </div>
                <p class="text-sm text-gray-500">For PDFs under 2MB</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                  <span class="text-xs text-gray-400">≈ $0.01 per PDF</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Large PDFs -->
          <div class="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl mb-5 mx-auto shadow-lg shadow-blue-400/30 group-hover:scale-110 group-hover:shadow-blue-400/40 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="text-center">
                <h4 class="text-lg font-bold text-gray-900 mb-2">Large PDFs</h4>
                <div class="inline-flex items-baseline gap-1 mb-3">
                  <span class="text-4xl font-bold text-blue-500">2</span>
                  <span class="text-blue-500 font-medium">credits</span>
                </div>
                <p class="text-sm text-gray-500">For PDFs above 2MB</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                  <span class="text-xs text-gray-400">≈ $0.02 per PDF</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Editable PDFs -->
          <div class="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl mb-5 mx-auto shadow-lg shadow-blue-400/30 group-hover:scale-110 group-hover:shadow-blue-400/40 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
              <div class="text-center">
                <h4 class="text-lg font-bold text-gray-900 mb-2">Editable PDFs</h4>
                <div class="inline-flex items-baseline gap-1 mb-3">
                  <span class="text-4xl font-bold text-blue-500">3</span>
                  <span class="text-blue-500 font-medium">credits</span>
                </div>
                <p class="text-sm text-gray-500">Fill-in forms & signatures</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                  <span class="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Volume discount hint -->
        <div class="mt-10 text-center">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 border border-blue-200/50">
            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="text-gray-700 font-medium">Need high volume? <a href="#" @click.prevent="$emit('openWaitlist')" class="text-blue-500 hover:text-blue-700 underline underline-offset-2">Contact us</a> for custom enterprise pricing</span>
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
