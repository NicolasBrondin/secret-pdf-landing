<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

interface Props {
  title: string
  description: string
  code: string
}

const props = defineProps<Props>()
const codeRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (codeRef.value) {
    codeRef.value.textContent = props.code
    hljs.highlightElement(codeRef.value)
  }
})
</script>

<template>
  <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-6">
    <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
    <p class="text-slate-400 mb-4">{{ description }}</p>
    <div class="bg-slate-950/50 rounded-xl p-4 overflow-x-auto">
      <pre><code ref="codeRef" class="hljs language-javascript text-sm block"></code></pre>
    </div>
  </div>
</template>

<style scoped>
code.hljs {
  background: transparent;
  padding: 0;
}
</style>
