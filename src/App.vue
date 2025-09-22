<script setup lang="ts">
import { ref } from 'vue'

// Popup state
const showWaitlistPopup = ref(false)

// Functions
const openWaitlistPopup = () => {
  showWaitlistPopup.value = true
}

const closeWaitlistPopup = () => {
  showWaitlistPopup.value = false
}
</script>

<template>
  <div id="product" class="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
    <!-- Header -->
    <header class="flex items-center justify-between px-6 py-4 relative z-10">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo.svg" class="h-10"  />
      </div>
      
      <!-- Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#product" class="text-gray-300 hover:text-white transition-colors">Product</a>
        <a href="#pricing" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <!--<a href="#" class="text-gray-300 hover:text-white transition-colors">Resources</a>-->
      </nav>
      
      <!-- Sign In -->
      <div>
        <button @click="openWaitlistPopup" class="text-gray-300 hover:text-white transition-colors">Join the waitlist</button>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative">
      <!-- Background Wave -->
      <div class="absolute bottom-0 left-0 w-full">
        
      </div>

      <div class="relative z-10 px-6 py-20 text-center w-full max-w-6xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Create PDFs with no one looking.
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Generate invoices, paysheets, and sensitive documents using one easy API.
        </p>
        
        <!-- HTML → PDF Badge -->
        <div class="inline-flex items-center space-x-3 mb-8">
          <span class="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">HTML</span>
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
          <span class="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">PDF</span>
        </div>

        <!-- Compliance Badge -->
        <div class="flex items-center justify-center space-x-2 mb-8">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-gray-300">GDPR & HIPAA/SOC2 compliant</span>
        </div>
      </div>

      <!-- PDF Preview Mockup -->
      <div class="relative z-20 flex flex-col items-center mt-42 px-6 bg-white main-section">
          

          <!-- Template Preview -->
          <div class="relative bg-green-100 p-8 rounded-lg shadow-2xl w-full max-w-md transform rotate-2 -mt-64">
            <!-- Security Badge -->
            <div class="absolute -top-4 -right-4 z-30">
              <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
            <!-- Logo Placeholder -->
            <div class="text-center mb-6">
              <div class="inline-block px-8 py-3 bg-green-200 text-green-700 font-bold text-lg rounded">
                YOUR LOGO
              </div>
            </div>
            
            <!-- Form Fields -->
            <div class="space-y-4">
              <div class="h-6 bg-green-200 rounded"></div>
              <div class="h-4 bg-green-200 rounded w-3/4"></div>
              <div class="h-4 bg-green-200 rounded w-full"></div>
              <div class="h-4 bg-green-200 rounded w-2/3"></div>
              <div class="h-20 bg-green-200 rounded"></div>
            </div>
            <div class="space-y-4">
              <div class="h-6 bg-green-200 rounded"></div>
              <div class="h-4 bg-green-200 rounded w-3/4"></div>
              <div class="h-4 bg-green-200 rounded w-full"></div>
              <div class="h-4 bg-green-200 rounded w-2/3"></div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8 text-center">
              <button 
                @click="openWaitlistPopup"
                class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
              >
                Try me !
              </button>
            </div>
          </div>

          <!-- Code Template Note -->
          <div class="absolute -top-32 left-1/8 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
            <div class="flex items-center space-x-2 text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="text-sm">Code your template with Tailwind</span>
            </div>
          </div>

          <!-- Code Template Note -->
          <div class="absolute top-8 right-1/8 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
            <div class="flex items-center space-x-2 text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="text-sm">Generate your pdf with one API call</span>
            </div>
          </div>

          <!-- Code Template Note -->
          <div class="absolute top-36 left-1/5 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg max-w-xs">
            <div class="flex items-center space-x-2 text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="text-sm">Keep your customer's data private</span>
            </div>
          </div>

      </div>
      
    </main>

    <!-- Pricing Section -->
    <section id="pricing" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Starter Plan -->
          <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p class="text-gray-600 mb-6">Perfect for small projects and testing</p>
              <div class="flex items-baseline justify-center">
                <span class="text-4xl font-bold text-gray-900">$19</span>
                <span class="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">1,000 PDF generations/month</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Basic templates</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Email support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">99.9% uptime SLA</span>
              </li>
            </ul>

            <button 
              @click="openWaitlistPopup"
              class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>

          <!-- Pro Plan -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative">
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-yellow-400 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Pro</h3>
              <p class="text-blue-100 mb-6">For growing businesses and teams</p>
              <div class="flex items-baseline justify-center">
                <span class="text-4xl font-bold text-white">$49</span>
                <span class="text-blue-100 ml-2">/month</span>
              </div>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white">10,000 PDF generations/month</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white">Premium templates</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white">Priority support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white">Custom branding</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white">Advanced analytics</span>
              </li>
            </ul>

            <button 
              @click="openWaitlistPopup"
              class="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="text-center mt-12">
          <p class="text-gray-600 mb-4">
            Need more? <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">Contact us</a> for enterprise pricing.
          </p>
          <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              30-day free trial
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Cancel anytime
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              No setup fees
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Waitlist Popup Modal -->
    <div 
      v-if="showWaitlistPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closeWaitlistPopup"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <!-- Close button -->
        <button 
          @click="closeWaitlistPopup"
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
  </div>
</template>

<style scoped>
/* Custom styles if needed */
.main-section::before {
  content: "";
  position: absolute;
  top: -200px;
  left: 50%;
  width: 150%;
  transform: translateX(-50%);
  height: 400px;
  background: white;
  border-radius: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
