<script setup lang="ts">
const route = useRoute()

const navItems = [
  {
    title: 'Get started',
    icon: '📚',
    link: '/docs',
  },
  {
    title: 'Authentication',
    icon: '🔐',
    link: '/docs/authentication',
  },
  {
    title: 'Documents',
    icon: '📄',
    link: '/docs/documents',
  },
  {
    title: 'Templates',
    icon: '📝',
    link: '/docs/templates',
  },
  
  /*{
    title: 'API Keys',
    icon: '🔑',
    link: '/docs/api-keys',
  },{
    title: 'Storage',
    icon: '💾',
    link: '/docs/storage',
  },
  {
    title: 'Webhooks',
    icon: '🔗',
    link: '/docs/webhooks',
  },*/
]

const isActive = (link: string) => {
  return route.path === link
}
</script>

<template>
  <aside class="lg:sticky lg:top-32 h-fit">
    <nav class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
      <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
        Documentation
      </h2>
      <ul class="space-y-1">
        <li v-for="item in navItems" :key="item.link">
          <NuxtLink
            :to="item.link"
            :class="[
              'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all',
              isActive(item.link)
                ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            ]"
          >
            <span class="text-xl">{{ item.icon }}</span>
            <span class="font-medium">{{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
