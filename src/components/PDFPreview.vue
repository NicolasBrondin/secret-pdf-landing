<template>
  <!-- PDF Preview Mockup -->
  <div class="relative z-20 flex flex-col items-center mt-42 px-6 pb-16 bg-white main-section">
    <!-- Template Preview -->
     <div class="relative w-full max-w-md -mt-64">
    <div class="relative z-20 bg-amber-100 p-8 rounded-lg shadow-2xl w-full transform rotate-2">
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
        <div class="inline-block px-8 py-3 bg-amber-200 text-green-700 font-bold text-lg rounded">
          YOUR LOGO
        </div>
      </div>
      
      <!-- Form Fields -->
      <div class="space-y-4">
        <div class="h-6 bg-amber-200 rounded opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-3/4 opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-full opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-2/3 opacity-50"></div>
        <div class="h-20 bg-amber-200 rounded opacity-50"></div>
      </div>
      <div class="space-y-4">
        <div class="h-6 bg-amber-200 rounded opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-3/4 opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-full opacity-50"></div>
        <div class="h-4 bg-amber-200 rounded w-2/3 opacity-50"></div>
      </div>

      <!-- CTA Button -->
      <div class="mt-8 text-center">
        <button 
          @click="$emit('openWaitlist')"
          class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
        >
          Try me !
        </button>
      </div>
    </div>
    <img src="@/assets/img/icons/monkey.svg" class="monkey-swing absolute z-10 top-2/3 left-full w-32 -translate-x-2" style="transform-origin: top left;"/>
</div>

    <!-- PDF Examples Buttons -->
    <div class="mt-16 mb-8">
      <h3 class="text-center text-gray-700 text-lg font-semibold mb-6">See PDF Examples</h3>
      <div class="flex flex-wrap justify-center gap-4">
        <button 
          class="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          @click="openPdfExample('invoice')"
        >
          📄 Invoice Template
        </button>
        <button 
          class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          @click="openPdfExample('certificate')"
        >
          🏆 Certificate Template
        </button>
        <button 
          class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          @click="openPdfExample('report')"
        >
          📊 Report Template
        </button>
      </div>
    </div>

    <!-- Code Template Notes -->
    <div class="absolute z-30 -top-32 left-1/8 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
      <div class="flex items-center space-x-2 text-gray-600">
        <img src="@/assets/img/icons/code.svg" class="h-5"/>
        <span class="text-sm">Generate your pdf with one API call</span>
      </div>
    </div>

    <div class="absolute z-30 top-8 right-1/8 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
      <div class="flex items-center space-x-2 text-gray-600">
        <img src="@/assets/img/icons/tailwindcss.svg" class="h-3"/>
        <span class="text-sm">Code your template with Tailwind</span>
      </div>
    </div>

    <div class="absolute z-30 top-36 left-1/5 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
      <div class="flex items-center space-x-2 text-gray-600">
        <img src="@/assets/img/icons/unlock.svg" class="h-5"/>
        <span class="text-sm">Keep your customer's data private</span>
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