<template>
  <!-- Footer -->
  <footer class="bg-slate-950 text-gray-400 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo & Copyright -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg"></div>
          <span class="text-white font-semibold">Secret</span>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <a 
            href="https://stats.uptimerobot.com/uZikoSsSBB" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>Status</span>
          </a>
          <router-link to="/blog" class="hover:text-white transition-colors duration-200">Blog</router-link>
          <router-link to="/privacy" class="hover:text-white transition-colors duration-200">Privacy</router-link>
          <router-link to="/legal" class="hover:text-white transition-colors duration-200">Legal</router-link>
        </div>
        
        <!-- Copyright -->
        <p class="text-sm">
          © {{ new Date().getFullYear() }} Secret. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>