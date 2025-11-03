<template>
  <!-- Footer -->
  <footer class="bg-slate-900 text-gray-300 py-8 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4">
        <!-- Links -->
        <div class="flex justify-center space-x-6 text-sm">
          <a 
            href="https://stats.uptimerobot.com/uZikoSsSBB" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-white transition-colors duration-200 flex items-center space-x-1"
          >
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Status</span>
          </a>
          <router-link to="/privacy" class="hover:text-white transition-colors duration-200">Privacy Policy</router-link>
          <router-link to="/legal" class="hover:text-white transition-colors duration-200">Legal Mentions</router-link>
        </div>
        
        <!-- Copyright -->
        <p class="text-sm">
          © {{ new Date().getFullYear() }} - Secret. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>