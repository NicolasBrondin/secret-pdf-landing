<script setup lang="ts">
// No imports needed for this simple landing page
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
    <!-- Header -->
    <header class="flex items-center justify-between px-6 py-4 relative z-10">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo.svg" class="h-10"  />
      </div>
      
      <!-- Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Product</a>
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Resources</a>
      </nav>
      
      <!-- Sign In -->
      <div>
        <a href="#" class="text-gray-300 hover:text-white transition-colors">Sign in</a>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative">
      <!-- Background Wave -->
      <div class="absolute bottom-0 left-0 w-full">
        
      </div>

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

      <!-- PDF Preview Mockup -->
      <div class="relative z-20 flex flex-col items-center mt-42 px-6 bg-white main-section">
          

          <!-- Template Preview -->
          <div class="relative bg-green-100 p-8 rounded-lg shadow-2xl w-full max-w-md transform rotate-2 -mt-64">
            <!-- Security Badge -->
          <div class="absolute -top-4 -right-4 z-30">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
          </div>
            <!-- Logo Placeholder -->
            <div class="text-center mb-6">
              <div class="inline-block px-8 py-3 bg-green-200 text-green-700 font-bold text-lg rounded">
                YOUR LOGO
              </div>
            </div>
            
            <!-- Form Fields -->
            <div class="space-y-4">
              <div class="h-6 bg-green-200 rounded"></div>
              <div class="h-4 bg-green-200 rounded w-3/4"></div>
              <div class="h-4 bg-green-200 rounded w-full"></div>
              <div class="h-4 bg-green-200 rounded w-2/3"></div>
              <div class="h-20 bg-green-200 rounded"></div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8 text-center">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg">
                Try me !
              </button>
            </div>
          </div>

          <!-- Code Template Note -->
          <div class="absolute -bottom-8 -right-8 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
            <div class="flex items-center space-x-2 text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="text-sm">Code your template with Tailwind</span>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
.main-section::before {
  content: "";
  position: absolute;
  top: -200px;
  left: 50%;
  width: 150%;
  transform: translateX(-50%);
  height: 400px;
  background: white;
  border-radius: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
