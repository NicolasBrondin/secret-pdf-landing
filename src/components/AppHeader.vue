<template>
  <header class="flex items-center justify-between px-6 py-4 relative z-10">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <img src="@/assets/logo.svg" class="h-10" alt="" />
    </div>
    
    <!-- Navigation -->
    <nav class="hidden md:flex items-center space-x-8">
      <a href="#product" class="text-gray-300 hover:text-white transition-colors">Product</a>
      <a href="#pricing" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
      <a href="#faq" class="text-gray-300 hover:text-white transition-colors">FAQ</a>
    </nav>
    
    <!-- Join Waitlist Button -->
    <div>
      <button 
        @click="$emit('openWaitlist')"
        class="text-gray-300 hover:text-white transition-colors"
      >
        Join the waitlist
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
// Define emits
defineEmits<{
  openWaitlist: []
}>()
</script>