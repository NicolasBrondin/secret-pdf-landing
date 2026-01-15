<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
    <div class="max-w-7xl mx-auto">
      <div 
        class="flex items-center justify-between backdrop-blur-xl rounded-2xl px-6 py-3 border transition-all duration-300"
        :class="isLight ? 'bg-white/95 border-gray-200 shadow-sm' : 'bg-white/10 border-white/20 shadow-lg'"
      >
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" class="h-8" alt="Secret PDF" />
        </router-link>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <a 
            href="/#product" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >Product</a>
          <a 
            href="/#pricing" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >Pricing</a>
          <a 
            href="/#testimonials" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >Testimonials</a>
          <a 
            href="/#faq" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >FAQ</a>
          <router-link 
            to="/blog" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >Blog</router-link>
        </nav>
        
        <!-- Join Waitlist Button -->
        <button 
          @click="$emit('openWaitlist')"
          class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 hover:scale-105"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Define props
const props = defineProps<{
  lightMode?: boolean
}>()

// Define emits
defineEmits<{
  openWaitlist: []
}>()

// Scroll state
const isScrolled = ref(false)

// Computed: use light theme if lightMode prop is true OR if scrolled
const isLight = computed(() => props.lightMode || isScrolled.value)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
