<template>
  <!-- Waitlist Popup Modal -->
  <div 
    v-if="modelValue"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
      <!-- Close button -->
      <button 
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Content -->
      <div class="text-center">
        <div class="mb-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
          <p class="text-gray-600">Be the first to know when our PDF API launches. Get early access and special pricing.</p>
        </div>

        <!-- Mailchimp Form -->
        <form 
          action="https://us6.list-manage.com/subscribe/post?u=4c2484ab599b2c5525aafd5b9&id=8f55b87981" 
          method="post" 
          target="_blank"
          class="space-y-4"
        >
          <div>
            <input 
              type="email" 
              name="EMAIL"
              required
              placeholder="Enter your email address"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900"
            />
          </div>
          
          <!-- Hidden field to prevent bot signups -->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_XXXXX_XXXXX" tabindex="-1" value="">
          </div>
          
          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Join Waitlist
          </button>
        </form>

        <p class="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props
defineProps<{
  modelValue: boolean
}>()

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Functions
const closeModal = () => {
  emit('update:modelValue', false)
}
</script>