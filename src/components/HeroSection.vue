<template>
  <main class="relative pt-16 pb-24 ">
    <div class="relative z-10 px-6 py-20 text-center w-full max-w-6xl mx-auto">
      <!-- Announcement Badge -->
      <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
        </span>
        <span class="text-sm text-blue-200">Now in public beta</span>
      </div>

      <!-- Main Heading -->
      <h1 class="flex flex-col  font-bold mb-6 leading-tight tracking-tight">
        <span class="text-5xl md:text-7xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Just. Generate. PDFs.</span>
        <span class="text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">One api call. Zero hassle.</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-tight">
        Generate invoices, paysheets, and any complex documents using one easy API.
      </p>
      
      <!-- HTML → PDF Badge -->
      <div class="inline-flex items-center gap-4 mb-10 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
        <span class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg">HTML</span>
        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
        <span class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg">PDF</span>
      </div>

      <!-- Compliance Badges -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <div class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-emerald-300 text-sm font-medium">GDPR Compliant</span>
        </div>
        <div class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-emerald-300 text-sm font-medium">HIPAA Ready</span>
        </div>
        <div class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-emerald-300 text-sm font-medium">Carbon-neutral</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>
