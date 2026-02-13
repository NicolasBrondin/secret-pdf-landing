<script setup lang="ts">
const props = defineProps<{
  modelValue: 'reference' | 'sdk'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: 'reference' | 'sdk']
}>()
</script>

<template>
  <div class="mb-8 flex gap-2"><button
      @click="emit('update:modelValue', 'sdk')"
      :class="[
        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
        props.modelValue === 'sdk'
          ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
          : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-300 hover:border-slate-600'
      ]"
    >
      💻 NodeJS
    </button>
    <button
      @click="emit('update:modelValue', 'reference')"
      :class="[
        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
        props.modelValue === 'reference'
          ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
          : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-300 hover:border-slate-600'
      ]"
    >
      🌍 API Endpoints
    </button>
    
  </div>
</template>
