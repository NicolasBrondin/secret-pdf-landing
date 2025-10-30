<template>
  <!-- FAQ Section -->
  <section id="faq" class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
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
          class="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <span class="text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </span>
            <svg 
              :class="{ 'rotate-180': isFaqOpen(index) }" 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div 
            v-show="isFaqOpen(index)"
            class="px-6 pb-4 pt-2 text-gray-600 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- CTA at bottom -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6">Ready to get started with our PDF API?</p>
        <button 
          @click="$emit('openWaitlist')"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
        >
          Join the Waitlist
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
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