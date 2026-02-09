<template>
  <!-- PDF Preview Mockup -->
  <div class="relative z-20 flex flex-col items-center mt-42 px-6 pb-20 bg-gradient-to-b from-slate-50 to-white main-section">
    <!-- Template Preview -->
     <div class="relative w-full max-w-sm -mt-64">
    <div 
      ref="pdfCard"
      class="group relative z-20 bg-white p-8 rounded-sm shadow-2xl w-full aspect-[1/1.414] transform hover:rotate-0 rotate-2 border border-gray-200 transition-all duration-500 hover:scale-[1.02] flex flex-col"
      :class="{ 'animate-build': isVisible }"
    >
      
      <!-- Security Badge -->
      <div class="absolute -top-4 -right-4 z-30">
        <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/30">
          <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
      </div>
      
      <!-- Logo Placeholder -->
      <div class="relative text-center mb-5">
        <div class="inline-block px-8 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-bold text-base rounded-lg border border-blue-200/50">
          YOUR LOGO
        </div>
      </div>
      
      <!-- Form Fields - building one by one -->
      <div class="relative space-y-2.5 flex-1">
        <div class="h-5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded"></div>
        <div class="h-3 bg-blue-200 rounded" style="width: 75%"></div>
        <div class="h-3 bg-indigo-200 rounded" style="width: 100%"></div>
        <div class="h-3 bg-blue-200 rounded" style="width: 66%"></div>
        <div class="h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mt-3 build-item" style="--delay: 0s"></div>
        
        <div class="h-5 bg-gradient-to-r from-indigo-200 to-blue-200 rounded mt-4 build-line" style="--delay: 0.1s"></div>
        <div class="h-3 bg-indigo-200 rounded build-line" style="--delay: 0.2s; --width: 75%"></div>
        <div class="h-3 bg-blue-200 rounded build-line" style="--delay: 0.3s; --width: 100%"></div>
        <div class="h-3 bg-indigo-200 rounded build-line" style="--delay: 0.4s; --width: 66%"></div>
        
        <div class="h-5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded mt-4 build-line" style="--delay: 0.5s"></div>
        <div class="h-3 bg-blue-200 rounded build-line" style="--delay: 0.6s; --width: 80%"></div>
        <div class="h-3 bg-indigo-200 rounded build-line" style="--delay: 0.7s; --width: 90%"></div>
      </div>

      <!-- CTA Button -->
      <div ref="tryMeButton" class="relative mt-5 text-center build-item" style="--delay: 1.1s">
        <a 
          href="https://app.secretpdf.io"
          class="relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 hover:scale-105 overflow-hidden group/btn"
        >
          <span class="relative z-10">Try me !</span>
          <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
      </a>
      </div>
    </div>
    
    <!-- Code typing animation - replaces monkey -->
    <div v-if="isVisible" class="code-typing absolute z-30 -bottom-16 left-full -translate-y-1/2 -ml-8 bg-slate-900 rounded-lg shadow-2xl p-4 w-72 hidden lg:block border border-slate-700/50 animate-build">
      <div class="flex items-center gap-1.5 mb-3">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="ml-2 text-slate-500 text-xs font-mono">generate.ts</span>
      </div>
      <div class="font-mono text-xs leading-relaxed">
        <div class="code-line" :class="{ 'animate-build': isVisible }" style="--delay: 0s">
          <span class="text-purple-400">const</span> <span class="text-blue-300">pdf</span> <span class="text-white">=</span> <span class="text-purple-400">await</span>
        </div>
        <div class="code-line" :class="{ 'animate-build': isVisible }" style="--delay: 0.3s">
          <span class="text-yellow-300 ml-3">SecretPDF</span><span class="text-white">.</span><span class="text-green-400">generate</span><span class="text-white">(</span><span class="text-white">{</span>
        </div>
        <div class="code-line" :class="{ 'animate-build': isVisible }" style="--delay: 0.6s">
          <span class="text-blue-300 ml-6">template</span><span class="text-white">:</span> <span class="text-amber-300">"invoice"</span><span class="text-white">,</span>
        </div>
        <div class="code-line" :class="{ 'animate-build': isVisible }" style="--delay: 0.9s">
          <span class="text-blue-300 ml-6">data</span><span class="text-white">:</span> <span class="text-orange-300">invoiceData</span>
        </div>
        <div class="code-line" :class="{ 'animate-build': isVisible }" style="--delay: 1.2s">
          <span class="text-white ml-3">}</span><span class="text-white">);</span>
        </div>
        <div class="code-line flex items-center" :class="{ 'animate-build': isVisible }" style="--delay: 1.5s">
          <span class="text-slate-500">//</span> <span class="text-slate-500 ml-1">✓ PDF ready!</span>
          <span class="typing-cursor ml-1"></span>
        </div>
      </div>
    </div>
</div>

    <!-- PDF Examples Buttons -->
    <div class="mt-16 mb-8">
      <p class="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">Explore Templates</p>
      <div class="flex flex-wrap justify-center gap-6">
        <!-- Invoice -->
        <button 
          class="group relative bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50 hover:to-indigo-50 border border-gray-200/80 hover:border-blue-300 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-200/50 overflow-hidden"
          @click="openPdfExample('invoice')"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/30 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block text-gray-900 font-semibold group-hover:text-blue-700 transition-colors">Invoice</span>
              <span class="block text-gray-500 text-sm">Professional billing</span>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div class="absolute z-30 -top-32 left-1/4 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs hidden md:block">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/code.svg" class="h-5" alt=""/>
        </div>
        <span class="text-sm font-medium">Generate your pdf with one API call</span>
      </div>
    </div>

    <div class="absolute z-30 top-8 right-1/4 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs hidden md:block">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/tailwindcss.svg" class="h-4" alt=""/>
        </div>
        <span class="text-sm font-medium">Code your template with Tailwind</span>
      </div>
    </div>

    <div class="absolute z-30 top-36 left-1/4 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-xl max-w-xs hidden md:block">
      <div class="flex items-center space-x-3 text-gray-700">
        <div class="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/img/icons/unlock.svg" class="h-5" alt=""/>
        </div>
        <span class="text-sm font-medium">Keep your customer's data private</span>
      </div>
    </div>
    
    <!-- Mobile-only bubbles - positioned below document -->
    <div class="flex flex-wrap justify-center gap-3 mt-8 md:hidden">
      <div class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-xl p-3 shadow-lg">
        <div class="flex items-center space-x-2 text-gray-700">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
            <img src="@/assets/img/icons/code.svg" class="h-4" alt=""/>
          </div>
          <span class="text-xs font-medium">One API call</span>
        </div>
      </div>
      <div class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-xl p-3 shadow-lg">
        <div class="flex items-center space-x-2 text-gray-700">
          <div class="w-8 h-8 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-lg flex items-center justify-center">
            <img src="@/assets/img/icons/tailwindcss.svg" class="h-3" alt=""/>
          </div>
          <span class="text-xs font-medium">Tailwind CSS</span>
        </div>
      </div>
      <div class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-xl p-3 shadow-lg">
        <div class="flex items-center space-x-2 text-gray-700">
          <div class="w-8 h-8 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center">
            <img src="@/assets/img/icons/unlock.svg" class="h-4" alt=""/>
          </div>
          <span class="text-xs font-medium">Data privacy</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define emits
defineEmits<{
  openWaitlist: []
}>()

// Visibility tracking
const pdfCard = ref<HTMLElement | null>(null)
const tryMeButton = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Observe the "Try me" button - trigger animation when it becomes visible
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )
  
  if (tryMeButton.value) {
    observer.observe(tryMeButton.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})

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

/* Code typing animation */
.code-typing {
  animation: slideIn 0.6s ease-out forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.code-line {
  opacity: 0;
  animation: typeLine 0.4s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes typeLine {
  0% {
    opacity: 0;
    transform: translateX(-5px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.typing-cursor {
  display: inline-block;
  width: 6px;
  height: 12px;
  background: #60a5fa;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Build item animation - hidden by default */
.build-item {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

/* Only animate when parent has animate-build class */
.animate-build .build-item {
  animation: buildFadeIn 0.5s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes buildFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Build line animation - hidden by default */
.build-line {
  width: 0;
  opacity: 0;
}

/* Only animate when parent has animate-build class */
.animate-build .build-line {
  animation: buildLine 0.4s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes buildLine {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: var(--width, 100%);
    opacity: 1;
  }
}
</style>
