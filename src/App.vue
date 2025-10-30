<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PDFPreview from './components/PDFPreview.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FAQSection from './components/FAQSection.vue'
import AppFooter from './components/AppFooter.vue'
import WaitlistModal from './components/WaitlistModal.vue'

// Popup state
const showWaitlistPopup = ref(false)

// Functions
const openWaitlistPopup = () => {
  showWaitlistPopup.value = true
}
</script>

<template>
  <div id="product" class="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
    <!-- Header -->
    <AppHeader @open-waitlist="openWaitlistPopup" />

    <!-- Hero Section -->
    <HeroSection />

    <!-- PDF Preview -->
    <PDFPreview @open-waitlist="openWaitlistPopup" />
  </div>

  <!-- Pricing Section -->
  <PricingSection @open-waitlist="openWaitlistPopup" />

  <!-- Testimonials Section -->
  <TestimonialsSection />

  <!-- FAQ Section -->
  <FAQSection @open-waitlist="openWaitlistPopup" />

  <!-- Footer -->
  <AppFooter />

  <!-- Waitlist Modal -->
  <WaitlistModal v-model="showWaitlistPopup" />
</template>

<style scoped>
/* Custom styles if needed */
</style>