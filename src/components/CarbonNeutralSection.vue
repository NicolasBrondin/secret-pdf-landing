<script setup lang="ts">
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <!-- Bold Statement -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <svg class="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        We Are <span class="text-emerald-400">Carbon Neutral</span>
      </h2>
      
      <p class="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
        Protecting your documents while protecting our planet. Every PDF you generate with us has zero carbon footprint.
      </p>

      <!-- Carbon Badge -->
      <div class="inline-flex items-center gap-3 bg-emerald-950/50 border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
        <svg class="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span class="text-emerald-300 font-semibold">100% Carbon Offset Certified</span>
      </div>

      <!-- Disclaimer -->
      <p class="text-sm text-emerald-300/70 max-w-xl mx-auto">
        We compensate our carbon emissions by purchasing verified carbon credits. 
        <a 
          href="/impact_report.pdf" 
          target="_blank"
          class="underline hover:text-emerald-200 transition-colors"
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
