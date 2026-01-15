<template>
  <!-- PDF Preview Mockup -->
  <div class="relative z-20 flex flex-col items-center mt-42 px-6 pb-20 bg-gradient-to-b from-slate-50 to-white main-section">
    <!-- Template Preview -->
     <div class="relative w-full max-w-md -mt-64">
    <div class="relative z-20 bg-gradient-to-br from-violet-50 to-indigo-50 p-8 rounded-2xl shadow-2xl w-full transform rotate-2 border border-violet-100">
      <!-- Security Badge -->
      <div class="absolute -top-4 -right-4 z-30">
        <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
      </div>
      
      <!-- Logo Placeholder -->
      <div class="text-center mb-6">
        <div class="inline-block px-8 py-3 bg-gradient-to-r from-violet-200 to-indigo-200 text-violet-700 font-bold text-lg rounded-xl">
          YOUR LOGO
        </div>
      </div>
      
      <!-- Form Fields -->
      <div class="space-y-4">
        <div class="h-6 bg-gradient-to-r from-violet-200/60 to-indigo-200/60 rounded-lg"></div>
        <div class="h-4 bg-violet-200/50 rounded-lg w-3/4"></div>
        <div class="h-4 bg-indigo-200/50 rounded-lg w-full"></div>
        <div class="h-4 bg-violet-200/50 rounded-lg w-2/3"></div>
        <div class="h-20 bg-gradient-to-br from-violet-200/40 to-indigo-200/40 rounded-xl"></div>
      </div>
      <div class="space-y-4 mt-4">
        <div class="h-6 bg-gradient-to-r from-indigo-200/60 to-violet-200/60 rounded-lg"></div>
        <div class="h-4 bg-indigo-200/50 rounded-lg w-3/4"></div>
        <div class="h-4 bg-violet-200/50 rounded-lg w-full"></div>
        <div class="h-4 bg-indigo-200/50 rounded-lg w-2/3"></div>
      </div>

      <!-- CTA Button -->
      <div class="mt-8 text-center">
        <button 
          @click="$emit('openWaitlist')"
          class="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
        >
          Try me !
        </button>
      </div>
    </div>
    <img src="@/assets/img/icons/monkey.svg" class="monkey-swing absolute z-10 top-2/3 left-full w-32 -translate-x-2" style="transform-origin: top left;" alt=""/>
</div>

    <!-- PDF Examples Buttons -->
    <div class="mt-16 mb-8">
      <p class="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">Explore Templates</p>
      <div class="flex flex-wrap justify-center gap-6">
        <!-- Invoice -->
        <button 
          class="group relative bg-gradient-to-br from-white to-violet-50/50 hover:from-violet-50 hover:to-indigo-50 border border-gray-200/80 hover:border-violet-300 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-violet-200/50 overflow-hidden"
          @click="openPdfExample('invoice')"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block text-gray-900 font-semibold group-hover:text-violet-700 transition-colors">Invoice</span>
              <span class="block text-gray-500 text-sm">Professional billing</span>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </button>

        <!-- Certificate -->
        <button 
          class="group relative bg-gradient-to-br from-white to-emerald-50/50 hover:from-emerald-50 hover:to-teal-50 border border-gray-200/80 hover:border-emerald-300 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-emerald-200/50 overflow-hidden"
          @click="openPdfExample('certificate')"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block text-gray-900 font-semibold group-hover:text-emerald-700 transition-colors">Certificate</span>
              <span class="block text-gray-500 text-sm">Awards & diplomas</span>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </button>

        <!-- Report -->
        <button 
          class="group relative bg-gradient-to-br from-white to-amber-50/50 hover:from-amber-50 hover:to-orange-50 border border-gray-200/80 hover:border-amber-300 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-amber-200/50 overflow-hidden"
          @click="openPdfExample('report')"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block text-gray-900 font-semibold group-hover:text-amber-700 transition-colors">Report</span>
              <span class="block text-gray-500 text-sm">Data visualization</span>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </button>
      </div>
    </div>

    <!-- Code Template Notes -->
    <div class="absolute z-30 -top-32 left-1/8 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/code.svg" class="h-5" alt=""/>
        </div>
        <span class="text-sm font-medium">Generate your pdf with one API call</span>
      </div>
    </div>

    <div class="absolute z-30 top-8 right-1/8 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/tailwindcss.svg" class="h-4" alt=""/>
        </div>
        <span class="text-sm font-medium">Code your template with Tailwind</span>
      </div>
    </div>

    <div class="absolute z-30 top-36 left-1/5 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/unlock.svg" class="h-5" alt=""/>
        </div>
        <span class="text-sm font-medium">Keep your customer's data private</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define emits
defineEmits<{
  openWaitlist: []
}>()

// Function to open PDF examples
const openPdfExample = (type: string) => {
  // You can replace these URLs with actual PDF examples
  const pdfUrls = {
    invoice: '/examples/invoice.pdf',
    certificate: '/examples/certificate.pdf', 
    report: '/examples/report.pdf'
  }
  
  // Open the PDF in a new tab
  window.open(pdfUrls[type as keyof typeof pdfUrls], '_blank')
}
</script>

<style scoped>
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

.monkey-swing {
  animation: swing 2s ease-in-out 5 forwards;
}

@keyframes swing {
  0%, 100% {
    transform: translateX(-0.5rem) rotate(16deg);
  }
  50% {
    transform: translateX(-0.5rem) rotate(0deg);
  }
}


</style>