<template>
  <div class="max-w-3xl mx-auto">
    <!-- Privacy assurance banner -->
    <div class="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
      <svg class="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
      <p class="text-sm text-emerald-800">
        <strong>100% private.</strong> Your PDF is processed entirely inside this browser tab using
        <a href="https://www.npmjs.com/package/@secretpdf/pdf-anonymizer" target="_blank" rel="noopener noreferrer" class="underline hover:text-emerald-900">@secretpdf/pdf-anonymizer</a>.
        It is never uploaded, transmitted, or stored &mdash; not by us, not by anyone.
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
      <!-- Error banner -->
      <div v-if="error" class="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
        <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <div class="text-sm text-red-800">
          <p class="font-medium">Something went wrong</p>
          <p>{{ error }}</p>
        </div>
      </div>

      <!-- Result view -->
      <div v-if="result" class="space-y-6">
        <div class="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div class="text-sm text-blue-900">
            <p class="font-medium">Done &mdash; {{ result.replacements }} value{{ result.replacements === 1 ? '' : 's' }} redacted</p>
            <p class="text-blue-700">Scanned {{ result.streamsScanned }} content stream{{ result.streamsScanned === 1 ? '' : 's' }}, changed {{ result.streamsChanged }}.</p>
          </div>
        </div>

        <div v-if="result.warnings.length" class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p class="text-sm font-medium text-amber-800 mb-1">Warnings</p>
          <ul class="text-sm text-amber-700 list-disc list-inside space-y-0.5">
            <li v-for="(warning, i) in result.warnings" :key="i">{{ warning }}</li>
          </ul>
        </div>

        <div class="rounded-xl border border-gray-200 overflow-hidden bg-gray-100">
          <iframe :src="result.url" :title="result.filename" class="w-full h-[70vh]"></iframe>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a
            :href="result.url"
            :download="result.filename"
            class="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40"
            @click="trackEvent('Anonymizer Download')"
          >
            Download anonymized PDF
          </a>
          <button
            type="button"
            class="flex-1 text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
            @click="reset"
          >
            Anonymize another PDF
          </button>
        </div>
      </div>

      <!-- Setup / upload view -->
      <div v-else class="space-y-8">
        <!-- Dropzone -->
        <div v-if="!file">
          <div
            class="relative rounded-xl border-2 border-dashed transition-colors duration-200 px-6 py-14 text-center cursor-pointer"
            :class="isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
            @click="fileInput?.click()"
          >
            <input
              ref="fileInput"
              type="file"
              accept="application/pdf,.pdf"
              class="hidden"
              @change="handleFileSelect"
            />
            <div class="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/30">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3"/>
              </svg>
            </div>
            <p class="text-gray-900 font-semibold">Drag & drop a PDF here</p>
            <p class="text-gray-500 text-sm mt-1">or click to browse &mdash; nothing leaves your device</p>
          </div>
        </div>

        <!-- Selected file -->
        <div v-else class="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-gray-900 font-medium truncate">{{ file.name }}</p>
              <p class="text-gray-500 text-sm">{{ formatFileSize(file.size) }}</p>
            </div>
          </div>
          <button type="button" class="text-gray-400 hover:text-gray-700 p-2 flex-shrink-0" aria-label="Remove file" @click="reset">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <template v-if="file">
          <!-- Built-in detectors -->
          <div>
            <h3 class="text-gray-900 font-semibold mb-1">Built-in detectors</h3>
            <p class="text-gray-500 text-sm mb-4">Automatically find and mask common PII patterns. Matching happens locally, nothing is sent anywhere.</p>
            <div class="grid sm:grid-cols-2 gap-3">
              <label
                v-for="plugin in PLUGINS"
                :key="plugin.id"
                class="flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors"
                :class="selectedPlugins[plugin.id] ? 'border-blue-300 bg-blue-50/60' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input type="checkbox" v-model="selectedPlugins[plugin.id]" class="mt-1 accent-blue-600" />
                <span>
                  <span class="block text-sm font-medium text-gray-900">{{ plugin.label }}</span>
                  <span class="block text-xs text-gray-500">{{ plugin.description }}</span>
                </span>
              </label>
            </div>
          </div>

          <!-- Custom pairs -->
          <div>
            <h3 class="text-gray-900 font-semibold mb-1">Additional values to redact</h3>
            <p class="text-gray-500 text-sm mb-4">Exact text to find (e.g. a name, an account number) and what to replace it with.</p>
            <div class="space-y-2">
              <div v-for="(pair, index) in customPairs" :key="index" class="flex flex-col sm:flex-row gap-2">
                <input
                  v-model="pair.find"
                  type="text"
                  placeholder="Text to find, e.g. John Doe"
                  class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <input
                  v-model="pair.replace"
                  type="text"
                  placeholder="Replace with (optional, defaults to REDACTED)"
                  class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  type="button"
                  class="text-gray-400 hover:text-red-600 px-2 flex-shrink-0 self-center"
                  aria-label="Remove row"
                  @click="removePair(index)"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
              @click="addPair"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Add another value
            </button>
          </div>

          <!-- Redact overlay -->
          <label class="flex items-start gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-50">
            <input type="checkbox" v-model="shouldRedact" class="mt-1 accent-blue-600" />
            <span>
              <span class="block text-sm font-medium text-gray-900">Draw a black box over redacted text</span>
              <span class="block text-xs text-gray-500">Adds a visual redaction rectangle on top of the replaced text, in addition to the real text replacement underneath.</span>
            </span>
          </label>

          <!-- Process button -->
          <button
            type="button"
            :disabled="isProcessing"
            class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 flex items-center justify-center gap-2"
            @click="processFile"
          >
            <svg v-if="isProcessing" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            {{ isProcessing ? 'Processing in your browser…' : 'Process PDF' }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeUnmount } from 'vue'
import { anonymizePdf, loadPluginRules, bytesToBlob, type PluginsConfig } from '@secretpdf/pdf-anonymizer'

const { trackEvent } = usePlausible()

const PLUGINS = [
  { id: 'email-addresses', label: 'Email addresses', description: 'john.doe@example.com → XXXX.XXX@XXXXXXX.XXX', default: true },
  { id: 'us-phonenumbers', label: 'US phone numbers', description: '(123) 456-7890 → (XXX) XXX-XXXX', default: true },
  { id: 'dates', label: 'Dates', description: 'January 5, 2024 → XXXXXXX X, XXXX', default: true },
  { id: 'urls', label: 'URLs', description: 'https://example.com → XXXXX://XXXXXXX.XXX', default: true },
  { id: 'gender-age', label: 'Gender & age', description: 'Male(65) → XXXX(XX)', default: false },
  { id: 'us-names', label: 'US names', description: 'John Smith → XXXX XXXXX (may over-match common words)', default: false },
] as const

const fileInput = ref<HTMLInputElement | null>(null)
const file = ref<File | null>(null)
const isDragging = ref(false)
const isProcessing = ref(false)
const error = ref<string | null>(null)

const selectedPlugins = reactive<Record<string, boolean>>(
  Object.fromEntries(PLUGINS.map((p) => [p.id, p.default]))
)

const customPairs = ref<{ find: string; replace: string }[]>([{ find: '', replace: '' }])
const shouldRedact = ref(false)

interface ToolResult {
  url: string
  filename: string
  replacements: number
  streamsScanned: number
  streamsChanged: number
  warnings: string[]
}

const result = ref<ToolResult | null>(null)

function addPair() {
  customPairs.value.push({ find: '', replace: '' })
}

function removePair(index: number) {
  customPairs.value.splice(index, 1)
  if (customPairs.value.length === 0) {
    customPairs.value.push({ find: '', replace: '' })
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function setFile(candidate: File | undefined | null) {
  if (!candidate) return
  const isPdf = candidate.type === 'application/pdf' || candidate.name.toLowerCase().endsWith('.pdf')
  if (!isPdf) {
    error.value = 'Please select a PDF file.'
    return
  }
  error.value = null
  file.value = candidate
  trackEvent('Anonymizer File Selected')
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  setFile(target.files?.[0])
}

function handleDrop(e: DragEvent) {
  isDragging.value = false
  setFile(e.dataTransfer?.files?.[0])
}

function revokeResultUrl() {
  if (result.value) {
    URL.revokeObjectURL(result.value.url)
  }
}

function reset() {
  revokeResultUrl()
  file.value = null
  result.value = null
  error.value = null
  isProcessing.value = false
  customPairs.value = [{ find: '', replace: '' }]
  if (fileInput.value) fileInput.value.value = ''
}

async function processFile() {
  if (!file.value || isProcessing.value) return

  error.value = null
  isProcessing.value = true

  try {
    const pluginsConfig: PluginsConfig = {}
    for (const plugin of PLUGINS) {
      pluginsConfig[plugin.id] = { enabled: !!selectedPlugins[plugin.id] }
    }
    const pluginRules = loadPluginRules(pluginsConfig)

    const pairs: Record<string, string> = {}
    for (const pair of customPairs.value) {
      const find = pair.find.trim()
      if (!find) continue
      pairs[find] = pair.replace.trim() || 'REDACTED'
    }

    const anonymized = await anonymizePdf(file.value, pairs, {
      shouldRedact: shouldRedact.value,
      pluginRules,
    })

    const blob = bytesToBlob(anonymized.bytes)
    const url = URL.createObjectURL(blob)
    const baseName = file.value.name.replace(/\.pdf$/i, '')

    result.value = {
      url,
      filename: `${baseName}-anonymized.pdf`,
      replacements: anonymized.replacements,
      streamsScanned: anonymized.streamsScanned,
      streamsChanged: anonymized.streamsChanged,
      warnings: anonymized.warnings,
    }

    trackEvent('Anonymizer Processed', { replacements: anonymized.replacements })
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong while processing this PDF.'
    trackEvent('Anonymizer Error')
  } finally {
    isProcessing.value = false
  }
}

onBeforeUnmount(() => {
  revokeResultUrl()
})
</script>
