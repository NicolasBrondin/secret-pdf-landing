import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LegalMentions from '../pages/LegalMentions.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/legal',
    name: 'LegalMentions',
    component: LegalMentions,
    meta: {
      title: 'Legal Mentions - Secret'
    }
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy - Secret'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  /*scrollBehavior(_to, _from, savedPosition) {
    // If user navigated with back/forward buttons, restore scroll position
    
    
    // For new navigation, scroll to top with smooth behavior
    return { 
      top: 0, 
      left: 0,
      behavior: 'smooth' 
    }
  }*/
})

// Update document title and ensure scroll to top
router.beforeEach((to, _from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  next()
})

// Additional scroll to top after route change (fallback)
router.afterEach(() => {
  // Use nextTick to ensure DOM is updated
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, 100)
})

export default router