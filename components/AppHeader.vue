<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
    <div class="max-w-7xl mx-auto">
      <div 
        class="flex items-center justify-between backdrop-blur-xl rounded-2xl px-6 py-3 border transition-all duration-300"
        :class="isLight ? 'bg-white/95 border-gray-200 shadow-sm' : 'bg-white/10 border-white/20 shadow-lg'"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img 
            :src="isLight ? logoDark : logoLight" 
            class="h-8 transition-opacity duration-300" 
            alt="Secret PDF" 
          />
        </NuxtLink>
        
        <!-- Navigation (Desktop) -->
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
          <NuxtLink 
            to="/docs" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >API Docs</NuxtLink>
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
          <NuxtLink 
            to="/blog" 
            class="px-4 py-2 rounded-lg transition-all duration-200"
            :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
          >Blog</NuxtLink>
        </nav>
        
        <!-- Desktop CTA Button -->
        <NuxtLink
          to="https://app.secretpdf.io"
          class="hidden md:flex bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 hover:scale-105 whitespace-nowrap"
          @click="trackEvent('Signup Click', { location: 'header' })"
        >
          Create an account
        </NuxtLink>

        <!-- Mobile Hamburger Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg transition-all duration-200"
          :class="isLight ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-200 hover:bg-white/10'"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="mobileMenuOpen"
          class="md:hidden mt-4 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden"
          :class="isLight ? 'bg-white/95 border-gray-200 shadow-sm' : 'bg-white/10 border-white/20 shadow-lg'"
        >
          <nav class="flex flex-col p-2">
            <a 
              href="/#product" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >Product</a>
            <a 
              href="/#pricing" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >Pricing</a>
            <NuxtLink 
              to="/docs" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >API Docs</NuxtLink>
            <a 
              href="/#testimonials" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >Testimonials</a>
            <a 
              href="/#faq" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >FAQ</a>
            <NuxtLink 
              to="/blog" 
              class="px-4 py-3 rounded-lg transition-all duration-200"
              :class="isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >Blog</NuxtLink>
            <div class="px-2 pt-2 pb-1">
              <NuxtLink
                to="https://app.secretpdf.io"
                class="flex justify-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-medium px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40"
                @click="trackEvent('Signup Click', { location: 'header-mobile' }); mobileMenuOpen = false"
              >
                Create an account
              </NuxtLink>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import logoLight from '@/assets/logo.svg'
import logoDark from '@/assets/logo-dark.svg'

const { trackEvent } = usePlausible()

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

// Mobile menu state
const mobileMenuOpen = ref(false)

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
