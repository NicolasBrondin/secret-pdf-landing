<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 px-6 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-blue-700 text-sm font-semibold">Loved by developers</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Developers
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          See what our early adopters are saying about our PDF API
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="group flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-amber-400">
              <svg 
                v-for="i in testimonial.rating" 
                :key="i" 
                class="w-5 h-5 fill-current" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <p class="flex-1 text-gray-600 mb-6 leading-relaxed">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mr-4 shadow-md" :class="testimonial.author.avatarColor">
              {{ testimonial.author.initials }}
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.author.name }}</h4>
              <p class="text-gray-500 text-sm">{{ testimonial.author.title }}, {{ testimonial.author.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="group relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Icon -->
          <div 
            class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
            :class="[
              index === 0 ? 'bg-blue-100 text-blue-600' : '',
              index === 1 ? 'bg-emerald-100 text-emerald-600' : '',
              index === 2 ? 'bg-teal-100 text-teal-600' : '',
              index === 3 ? 'bg-indigo-100 text-indigo-600' : ''
            ]"
          >
            <svg v-if="index === 0" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <svg v-else-if="index === 1" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else-if="index === 2" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1" v-html="stat.value"></div>
          <div 
            class="text-sm font-semibold"
            :class="[
              index === 0 ? 'text-blue-600' : '',
              index === 1 ? 'text-emerald-600' : '',
              index === 2 ? 'text-teal-600' : '',
              index === 3 ? 'text-indigo-600' : ''
            ]"
          >{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Testimonial data interface
interface Testimonial {
  quote: string
  author: {
    name: string
    title: string
    company: string
    initials: string
    avatarColor: string
  }
  rating: number
}

// Stats data interface
interface Stat {
  value: string
  label: string
}

// Testimonials data array
const testimonials: Testimonial[] = [
  {
    quote: "This PDF API saved us weeks of development time. The security features and compliance certifications gave us confidence to handle sensitive financial documents.",
    author: {
      name: "Nader E.",
      title: "Founder & CTO",
      company: "NeuralSpark",
      initials: "NE",
      avatarColor: "bg-blue-400"
    },
    rating: 5
  },
  {
    quote: "The API is incredibly fast and reliable. We generate thousands of invoices daily and haven't had a single downtime issue. The Tailwind CSS support is a game-changer!",
    author: {
      name: "Nicolas B.",
      title: "CEO",
      company: "Code-Garage",
      initials: "NB",
      avatarColor: "bg-green-500"
    },
    rating: 5
  },
  {
    quote: "Integration was seamless! We had our sales report generation up and running in less than a day. The GDPR compliance features are exactly what we needed for our critical clients.",
    author: {
      name: "Steve H.",
      title: "CTO",
      company: "Nicolas Brondin-Bernard",
      initials: "SH",
      avatarColor: "bg-blue-400"
    },
    rating: 5
  }
]

// Stats data array
const stats: Stat[] = [
  {
    value: "<2 secs.",
    label: "PDF generation"
  },
  {
    value: "99.9%",
    label: "Uptime"
  },
  {
    value: "0g CO₂",
    label: "Carbon neutral"
  },
  {
    value: "24/7",
    label: "Support"
  }
]
</script>
