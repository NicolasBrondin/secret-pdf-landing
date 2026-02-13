<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)

interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
}

interface Response {
  status: number
  description: string
  schema?: string
}

interface Props {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  title: string
  description: string
  parameters?: Parameter[]
  requestBody?: string
  responses?: Response[]
  codeExample?: string
}

const props = defineProps<Props>()

const methodColors = {
  GET: 'bg-green-500/10 text-green-400 border-green-500/30',
  POST: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  PUT: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  DELETE: 'bg-red-500/10 text-red-400 border-red-500/30'
}

const showCode = ref(false)
const codeRef = ref<HTMLElement | null>(null)
const requestBodyRef = ref<HTMLElement | null>(null)
const responseRefs = ref<(HTMLElement | null)[]>([])

const highlightCode = () => {
  if (codeRef.value && props.codeExample) {
    codeRef.value.textContent = props.codeExample
    hljs.highlightElement(codeRef.value)
  }
}

const highlightRequestBody = () => {
  if (requestBodyRef.value && props.requestBody) {
    requestBodyRef.value.textContent = props.requestBody
    hljs.highlightElement(requestBodyRef.value)
  }
}

const highlightResponses = () => {
  if (props.responses) {
    props.responses.forEach((response, index) => {
      if (response.schema && responseRefs.value[index]) {
        responseRefs.value[index]!.textContent = response.schema
        hljs.highlightElement(responseRefs.value[index]!)
      }
    })
  }
}

watch(showCode, (newVal) => {
  if (newVal) {
    nextTick(() => {
      highlightCode()
    })
  }
})

onMounted(() => {
  highlightRequestBody()
  highlightResponses()
  if (showCode.value) {
    highlightCode()
  }
})
</script>

<template>
  <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-6">
    <!-- Header -->
    <div class="mb-6">
      <div class="flex items-center gap-3 mb-3">
        <span
          class="px-3 py-1 rounded-lg font-mono text-sm font-bold border"
          :class="methodColors[method]"
        >
          {{ method }}
        </span>
        <code class="text-slate-300 font-mono text-sm bg-slate-950/50 px-3 py-1 rounded-lg flex-1">
          {{ path }}
        </code>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-slate-400">{{ description }}</p>
    </div>

    <!-- Parameters -->
    <div v-if="parameters && parameters.length > 0" class="mb-6">
      <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Parameters</h4>
      <div class="bg-slate-950/50 rounded-xl overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-slate-900/50">
            <tr>
              <th class="text-left px-4 py-3 text-slate-400 font-semibold">Name</th>
              <th class="text-left px-4 py-3 text-slate-400 font-semibold">Type</th>
              <th class="text-left px-4 py-3 text-slate-400 font-semibold">Required</th>
              <th class="text-left px-4 py-3 text-slate-400 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="param in parameters"
              :key="param.name"
              class="border-t border-slate-800"
            >
              <td class="px-4 py-3 font-mono text-blue-400">{{ param.name }}</td>
              <td class="px-4 py-3 font-mono text-purple-400">{{ param.type }}</td>
              <td class="px-4 py-3">
                <span
                  v-if="param.required"
                  class="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs"
                >
                  Required
                </span>
                <span v-else class="text-slate-500">Optional</span>
              </td>
              <td class="px-4 py-3 text-slate-300">{{ param.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Request Body -->
    <div v-if="requestBody" class="mb-6">
      <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Request Body</h4>
      <div class="bg-slate-950/50 rounded-xl p-4">
        <pre><code ref="requestBodyRef" class="hljs language-json text-sm overflow-x-auto block"></code></pre>
      </div>
    </div>

    <!-- Responses -->
    <div v-if="responses && responses.length > 0" class="mb-6">
      <h4 class="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Responses</h4>
      <div class="space-y-3">
        <div
          v-for="(response, index) in responses"
          :key="response.status"
          class="bg-slate-950/50 rounded-xl p-4"
        >
          <div class="flex items-center gap-2 mb-2">
            <span
              class="px-2 py-1 rounded font-mono text-sm font-bold"
              :class="{
                'bg-green-500/10 text-green-400': response.status >= 200 && response.status < 300,
                'bg-red-500/10 text-red-400': response.status >= 400
              }"
            >
              {{ response.status }}
            </span>
            <span class="text-slate-400">{{ response.description }}</span>
          </div>
          <pre v-if="response.schema"><code :ref="el => responseRefs[index] = el as HTMLElement | null" class="hljs language-json text-xs overflow-x-auto block"></code></pre>
        </div>
      </div>
    </div>

    <!-- Code Example Toggle -->
    <div v-if="codeExample">
      <button
        @click="showCode = !showCode"
        class="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        <span class="text-sm font-semibold">{{ showCode ? 'Hide' : 'Show' }} Code Example</span>
        <span class="transition-transform" :class="{ 'rotate-180': showCode }">▼</span>
      </button>
      <div
        v-if="showCode"
        class="mt-3 bg-slate-950/50 rounded-xl p-4 overflow-x-auto"
      >
        <pre><code ref="codeRef" class="hljs language-javascript text-sm block"></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
code.hljs {
  background: transparent;
  padding: 0;
}
</style>
