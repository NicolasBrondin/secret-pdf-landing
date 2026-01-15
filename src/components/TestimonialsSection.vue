<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
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
          class="flex flex-col bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
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
          <p class="flex-1 text-gray-600 mb-6 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" :class="testimonial.author.avatarColor">
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
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
        >
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2" v-html="stat.value"></div>
          <div class="text-gray-600">{{ stat.label }}</div>
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
      avatarColor: "bg-blue-500"
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
      company: "The49",
      initials: "SH",
      avatarColor: "bg-purple-500"
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