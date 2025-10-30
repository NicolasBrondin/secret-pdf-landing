<template>
  <main class="relative">
    <!-- Background Wave -->
    <div class="absolute bottom-0 left-0 w-full"></div>

    <div class="relative z-10 px-6 py-20 text-center w-full max-w-6xl mx-auto">
      <!-- Main Heading -->
      <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Create PDFs with no one looking.
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Generate invoices, paysheets, and sensitive documents using one easy API.
      </p>
      
      <!-- HTML → PDF Badge -->
      <div class="inline-flex items-center space-x-3 mb-8">
        <span class="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">HTML</span>
        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
        <span class="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">PDF</span>
      </div>

      <!-- Compliance Badge -->
      <div class="flex items-center justify-center space-x-2 mb-8">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        <span class="text-gray-300">GDPR & HIPAA/SOC2 compliant</span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>