<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import PDFPreview from '../components/PDFPreview.vue'
import CarbonNeutralSection from '../components/CarbonNeutralSection.vue'
import PricingSection from '../components/PricingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import FAQSection from '../components/FAQSection.vue'
import AppFooter from '../components/AppFooter.vue'
import WaitlistModal from '../components/WaitlistModal.vue'

// Popup state
const showWaitlistPopup = ref(false)

// Mouse glow effect
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// Functions
const openWaitlistPopup = () => {
  showWaitlistPopup.value = true
}
</script>

<template>
  <div id="product" class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden relative" @mousemove="handleMouseMove">
    <!-- Grid pattern background with hover glow -->
    <div class="grid-background absolute inset-0 pointer-events-none"></div>
    
    <!-- Mouse glow effect -->
    <div 
      class="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
      :style="{
        left: mouseX - 300 + 'px',
        top: mouseY - 300 + 'px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
      }"
    ></div>
    
    <!-- Radial gradient overlay for depth -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <!-- Header -->
    <AppHeader @open-waitlist="openWaitlistPopup" />

    <!-- Hero Section -->
    <HeroSection />

    <!-- PDF Preview -->
    <PDFPreview @open-waitlist="openWaitlistPopup" />
  </div>

  <!-- Carbon Neutral Section -->
  <CarbonNeutralSection />

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
/* Grid pattern background with hover glow */
.grid-background {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}
</style>
