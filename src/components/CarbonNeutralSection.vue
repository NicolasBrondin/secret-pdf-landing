<script setup lang="ts">
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <!-- Icon -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="w-20 h-20 bg-emerald-500/20 backdrop-blur rounded-3xl flex items-center justify-center border border-emerald-400/30">
          <svg class="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        We Are <span class="text-emerald-400">Carbon Neutral</span>
      </h2>
      
      <p class="text-xl text-emerald-100/80 max-w-2xl mx-auto mb-10">
        Protecting your documents while protecting our planet. Every PDF you generate with us has zero carbon footprint.
      </p>

      <!-- Carbon Badge -->
      <div class="inline-flex items-center gap-3 bg-emerald-950/50 backdrop-blur border border-emerald-400/30 rounded-2xl px-6 py-4 mb-10">
        <div class="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <span class="text-emerald-200 font-semibold text-lg">100% Carbon Offset Certified</span>
      </div>

      <!-- Disclaimer -->
      <p class="text-sm text-emerald-300/60 max-w-xl mx-auto">
        We compensate our carbon emissions by purchasing verified carbon credits. 
        <a 
          href="/impact_report.pdf" 
          target="_blank"
          class="underline hover:text-emerald-200 transition-colors font-medium"
        >
          Read our Impact Report
        </a>
        to learn more about our environmental commitment.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Custom styles if needed */
</style>
