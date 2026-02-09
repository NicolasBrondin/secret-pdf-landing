<template>
  <!-- FAQ Section -->
  <section id="faq" class="bg-white py-24 px-6 relative">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
          <span class="text-blue-700 text-sm font-semibold">FAQ</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our PDF API.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqItems" 
          :key="index"
          class="bg-slate-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 text-left hover:bg-slate-100 focus:outline-none transition-colors flex items-center justify-between"
          >
            <span class="text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </span>
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-transform" :class="{ 'rotate-180': isFaqOpen(index) }">
              <svg 
                class="w-4 h-4 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          <div 
            v-show="isFaqOpen(index)"
            class="px-6 pb-5 text-gray-600 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- CTA at bottom -->
      <div class="text-center mt-16 p-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl">
        <h3 class="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
        <p class="text-emerald-100 mb-6">Create an account in 10 seconds and start generating PDFs !</p>
        <a 
          href="https://app.secretpdf.io"
          class="bg-white hover:bg-gray-50 text-emerald-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg inline-flex items-center"
        >
          Create an account
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// FAQ data interface
interface FAQItem {
  question: string
  answer: string
}

// FAQ data array
const faqItems: FAQItem[] = [
  {
    question: "How secure is your PDF generation service?",
    answer: "Our service is built with security at its core. We're GDPR and HIPAA/SOC2 compliant, all documents are processed in isolated environments. Your data is never stored on our servers - PDFs are generated and delivered to you directly (your storage or through HTTP response)."
  },
  {
    question: "What templating languages do you support?",
    answer: "We support standard HTML/CSS with full Tailwind CSS support. The templating engine used is Handlebars, simply add {{ key }} and we'll populate it with your data."
  },
  {
    question: "How fast is the PDF generation?",
    answer: "Most PDFs are generated in under 2 seconds. Our infrastructure is optimized for speed, ensuring low latency regardless of your location."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! You can generate up to 10 PDFs for free each month, and you can test your template generation with unlimited watermarked PDFs."
  },
  {
    question: "Can I customize the PDF output format?",
    answer: "Absolutely! You can specify page size (A4, Letter, Legal, custom), orientation (portrait/landscape), margins, headers, footers, and metadata."
  }
]

// FAQ state
const openFaqItems = ref<number[]>([])

// Define emits
defineEmits<{
  openWaitlist: []
}>()

// FAQ functions
const toggleFaq = (index: number) => {
  const currentIndex = openFaqItems.value.indexOf(index)
  if (currentIndex === -1) {
    openFaqItems.value.push(index)
  } else {
    openFaqItems.value.splice(currentIndex, 1)
  }
}

const isFaqOpen = (index: number) => {
  return openFaqItems.value.includes(index)
}
</script>
