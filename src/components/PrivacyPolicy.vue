<template>
  <div class="min-h-screen bg-white">
    <!-- Header Navigation -->
    <header class="bg-slate-900 text-white py-4">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold hover:text-blue-400 transition-colors">
            ← Back to Secret
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose prose-lg max-w-none">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div class="bg-blue-50 p-6 rounded-lg mb-8">
          <p class="text-blue-800 font-medium">
            <strong>Our Commitment:</strong> Secret is built with privacy by design. We never store, 
            log, or access your document content. Your data remains completely private.
          </p>
        </div>

        <div class="space-y-8 text-gray-700">
          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 class="text-xl font-medium text-gray-800 mb-2">1.1 Data We DO NOT Collect</h3>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li>We <strong>never</strong> store or log the content of your PDF documents</li>
              <li>We <strong>never</strong> store or log any data you send to our API</li>
              <li>We <strong>never</strong> cache your document content</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-800 mb-2">1.2 Technical Data We Collect</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Anonymized website statistics (using Plausible Analytics)</li>
              <li>API usage statistics (number of requests, response times, credits used)</li>
              <li>Error logs (without your document content)</li>
              <li>Your templates and settings</li>
              <li>Authentication tokens and API keys</li>
              <li>Billing and subscription information</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Process Your Data</h2>
            <div class="bg-green-50 p-4 rounded-lg mb-4">
              <p class="text-green-800">
                <strong>Zero-Knowledge Processing:</strong> Your documents are processed in real-time 
                and immediately discarded after PDF generation. We have no ability to access or 
                retrieve your document content after processing.
              </p>
            </div>
            
            <ul class="list-disc list-inside space-y-2">
              <li>Document processing occurs in isolated, ephemeral containers</li>
              <li>All processing memory is cleared after each request</li>
              <li>No persistent storage of document content</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
            <p class="mb-4">
              We <strong>never</strong> share, sell, or disclose your document content to third parties. 
              Since we don't store your content, we have nothing to share.
            </p>
            
            <h3 class="text-xl font-medium text-gray-800 mb-2">Limited Sharing of Non-Content Data</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Payment processing through secure payment providers</li>
              <li>Analytics for service improvement (anonymized usage patterns only)</li>
              <li>Legal compliance when required by law (limited to non-content data)</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. GDPR & HIPAA Compliance</h2>
            
            <h3 class="text-xl font-medium text-gray-800 mb-2">GDPR Compliance</h3>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li>Right to access: We provide transparency about data processing</li>
              <li>Right to deletion: Your data is automatically deleted after processing</li>
              <li>Right to portability: You retain full control of your data</li>
              <li>Data minimization: We only process data necessary for service delivery</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-800 mb-2">HIPAA Compliance</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>No storage of Protected Health Information (PHI)</li>
              <li>Secure transmission protocols</li>
              <!--<li>Business Associate Agreements available upon request</li>
              <li>Regular security assessments and audits</li>-->
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Security Measures</h2>
            <ul class="list-disc list-inside space-y-2">
              <li>TLS 1.3 encryption for all data transmission</li>
              <li>Isolated processing environments</li>
              <li>Multi-factor authentication for administrative access</li>
              <li>Regular security training for all team members</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Hosting and Third-Party Services</h2>
            
            <h3 class="text-xl font-medium text-gray-800 mb-2">Hosting Infrastructure</h3>
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <ul class="list-disc list-inside space-y-2">
                <li><strong>API Infrastructure:</strong> Microsoft Azure - Enterprise-grade security, GDPR & HIPAA compliant infrastructure</li>
                <li><strong>Website Hosting:</strong> GitHub Pages - Fast, reliable static site hosting with SSL encryption</li>
              </ul>
            </div>

            <h3 class="text-xl font-medium text-gray-800 mb-2">Third-Party Services</h3>
            <p class="mb-4">We use minimal third-party services, all carefully vetted for security and privacy:</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Payment Processing:</strong> Industry-standard payment processor (Stripe) with no payment data stored by us</li>
              <li><strong>Analytics:</strong> Privacy-focused analytics (Plausible.io) with no personal data tracking</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <ul class="list-disc list-inside space-y-2">
              <li>Request information about data processing</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request data portability for account information</li>
              <li>Lodge complaints with supervisory authorities</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Document Content:</strong> Immediately deleted after processing (never stored)</li>
                <li><strong>API Logs:</strong> Kept for 30 days maximum (without document content)</li>
                <li><strong>Account Data:</strong> Retained while account is active, deleted within 30 days of account closure</li>
                <li><strong>Billing Records:</strong> Retained as required by law (typically 7 years)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p>
              While we process data globally for performance, we ensure all transfers comply with 
              applicable data protection laws through appropriate safeguards such as Standard 
              Contractual Clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy to reflect changes in our practices or legal requirements. 
              We will notify users of material changes through our website or email notifications. 
              Continued use of our service constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="mb-2">
                <strong>Data Controller:</strong> The49 Ltd
              </p>
              <p class="mb-2">
                <strong>Contact:</strong> For privacy-related questions, please contact us at 
                <a href="mailto:intrigued@the49.com" class="text-blue-600 hover:text-blue-800">intrigued@the49.com</a>
              </p>
              <p>
                <strong>Effective Date:</strong> November 2025
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './AppFooter.vue'
</script>

<style scoped>
.prose h1,
.prose h2,
.prose h3 {
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