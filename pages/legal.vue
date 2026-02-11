<script setup lang="ts">
useHead({
  title: 'Legal Mentions - Secret PDF',
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header Navigation -->
    <header class="bg-slate-900 text-white py-4">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-xl font-bold hover:text-blue-400 transition-colors">
            ← Back to Secret
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose prose-lg max-w-none">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Legal Mentions</h1>
        
        <div class="space-y-8 text-gray-700">
          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p><strong>Company Name:</strong> Nicolas Brondin-Bernard</p>
              <p><strong>Service:</strong> Secret - PDF Generation Service</p>
              <p><strong>Website:</strong> <a href="https://www.secretpdf.io" class="text-blue-500 hover:text-blue-800">https://www.secretpdf.io</a></p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
            <p>
              Secret is a developer-friendly PDF generation service that provides GDPR & HIPAA compliant 
              PDF creation through our API. We specialize in generating sensitive documents such as invoices, 
              paysheets, and other confidential materials while ensuring complete privacy and security.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on this website are 
              the exclusive property of Nicolas Brondin-Bernard or their respective owners. Any reproduction, 
              distribution, or unauthorized use is strictly prohibited without prior written consent.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Hosting Information</h2>
            <p>
              This website is hosted on secure infrastructure with industry-standard security measures. 
              All data transmission is encrypted using SSL/TLS protocols.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
              Nicolas Brondin-Bernard provides this service "as is" without any express or implied warranties. 
              We shall not be liable for any direct, indirect, incidental, or consequential damages 
              arising from the use of our service.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Applicable Law</h2>
            <p>
              These legal mentions and the use of our service are governed by applicable laws. 
              Any disputes shall be resolved in accordance with the jurisdiction where Nicolas Brondin-Bernard is established.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p>
              For any questions regarding these legal mentions or our service, please contact us through 
              our official website at <a href="https://www.secretpdf.io" class="text-blue-500 hover:text-blue-800">secretpdf.io</a>.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Updates</h2>
            <p>
              These legal mentions may be updated from time to time. The current version is effective 
              as of November 2025. Users are encouraged to review this page periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
.prose h1,
.prose h2 {
  color: #1f2937;
}

.prose a {
  color: #2563eb;
  text-decoration: none;
}

.prose a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>
