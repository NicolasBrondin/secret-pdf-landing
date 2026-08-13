<script setup lang="ts">
import { ref } from 'vue'

const { trackEvent } = usePlausible()

const openFaq = ref<number | null>(0)
const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqItems = [
  {
    question: 'Does my PDF ever leave my computer?',
    answer: 'No. The whole redaction process runs inside this browser tab using JavaScript. There is no upload, no server round-trip, and no network request involving your file at any point.',
  },
  {
    question: 'Is this tool GDPR and HIPAA compliant?',
    answer: 'Yes. Since your document and the personal data inside it are never transmitted or stored anywhere, there is no processing of personal data by us to be compliant about - the file stays entirely on your device, which is the strongest privacy posture GDPR and HIPAA both recognize.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes, completely free with no account, no signup, and no usage limits. It’s built and maintained by the team behind SecretPDF, our HTML-to-PDF API.',
  },
  {
    question: 'What kind of redaction does it perform?',
    answer: 'It performs a real binary text replacement directly inside the PDF’s content streams - the original characters are removed from the file’s bytes, not just visually covered. You can optionally also draw a black box over each redacted span for a familiar "redacted" look.',
  },
  {
    question: 'Will it catch every scanned document?',
    answer: 'It works on PDFs that contain real, selectable text. Scanned/rasterized pages (an image of text with no text layer) can’t be edited this way since there’s no text to replace - those would need OCR first.',
  },
]

useHead({
  title: 'Free PDF Anonymizer - Redact PDFs in Your Browser | Secret PDF',
  meta: [
    {
      name: 'description',
      content: 'Anonymize and redact PDFs for free, directly in your browser. Remove names, emails, phone numbers, dates and more - no upload, no signup, GDPR & HIPAA compliant.',
    },
    { property: 'og:title', content: 'Free PDF Anonymizer - Redact PDFs in Your Browser' },
    { property: 'og:description', content: 'Drag, drop, redact. Anonymize PDFs for free without ever uploading them - 100% client-side, GDPR & HIPAA compliant.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://www.secretpdf.io/open-graph/pdf-anonymizer.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Free PDF Anonymizer - Redact PDFs in Your Browser' },
    { name: 'twitter:description', content: 'Drag, drop, redact. Anonymize PDFs for free without ever uploading them - 100% client-side, GDPR & HIPAA compliant.' },
    { name: 'twitter:image', content: 'https://www.secretpdf.io/open-graph/pdf-anonymizer.jpg' },
  ],
})
</script>

<template>
  <div>
    <AppHeader light-mode />

    <main class="bg-white">
      <!-- Hero -->
      <section class="bg-gradient-to-br from-slate-50 to-gray-100 pt-40 pb-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
            <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span class="text-emerald-700 text-sm font-semibold">Free &middot; No upload &middot; Runs in your browser</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free PDF Anonymizer
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Drag, drop, and redact names, emails, phone numbers, dates and more &mdash; directly on this page.
            Your PDF is never uploaded anywhere, so it's inherently GDPR and HIPAA compliant.
          </p>
          <div class="flex flex-wrap justify-center gap-3 text-sm">
            <span class="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-gray-700 shadow-sm">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              100% free, no signup
            </span>
            <span class="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-gray-700 shadow-sm">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              No data stored or transferred
            </span>
            <span class="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-gray-700 shadow-sm">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              GDPR & HIPAA compliant
            </span>
          </div>
        </div>
      </section>

      <!-- Tool -->
      <section class="px-6 -mt-4 pb-24">
        <ClientOnly>
          <PdfAnonymizerTool />
          <template #fallback>
            <div class="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center text-gray-500">
              Loading anonymizer&hellip;
            </div>
          </template>
        </ClientOnly>
      </section>

      <!-- How it works -->
      <section class="bg-slate-50 py-20 px-6 border-t border-gray-200">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">How it works</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-400/30">1</div>
              <h3 class="font-semibold text-gray-900 mb-2">Drop your PDF</h3>
              <p class="text-gray-600 text-sm">It loads straight into your browser tab &mdash; it never touches a server.</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-400/30">2</div>
              <h3 class="font-semibold text-gray-900 mb-2">Pick what to redact</h3>
              <p class="text-gray-600 text-sm">Toggle built-in detectors for emails, phone numbers, dates, URLs and more, or add your own exact values.</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-400/30">3</div>
              <h3 class="font-semibold text-gray-900 mb-2">Preview & download</h3>
              <p class="text-gray-600 text-sm">The redacted PDF opens right on this page, ready to download &mdash; the original bytes are gone for good.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white py-24 px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
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
                <span class="font-semibold text-gray-900">{{ faq.question }}</span>
                <div
                  class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-transform"
                  :class="{ 'rotate-180': openFaq === index }"
                >
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </button>
              <div v-show="openFaq === index" class="px-6 pb-5 text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA to main product -->
      <section class="px-6 pb-24">
        <div class="max-w-4xl mx-auto text-center p-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 rounded-3xl">
          <h3 class="text-2xl font-bold text-white mb-3">Need to generate or anonymize PDFs at scale?</h3>
          <p class="text-blue-100 mb-6">Secret PDF is a developer-friendly API for generating and processing PDFs programmatically.</p>
          <NuxtLink
            to="https://app.secretpdf.io"
            class="bg-white hover:bg-gray-50 text-indigo-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg inline-flex items-center"
            @click="trackEvent('Signup Click', { location: 'pdf-anonymizer-tool' })"
          >
            Explore the API
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
