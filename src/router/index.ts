import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LegalMentions from '../pages/LegalMentions.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import BlogList from '../pages/BlogList.vue'
import BlogPost from '../pages/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogList,
    meta: {
      title: 'Blog - Secret PDF'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
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
router.afterEach((to, from) => {
  // Only scroll to top if navigating to a different page (not just anchor changes)
  if (to.path !== from.path) {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 100)
  }
});


router.isReady().then(() => {
  const params = new URLSearchParams(window.location.search)
  const redirect = params.get('redirect')
  if (redirect) {
    // clean the URL first (optional)
    const url = new URL(window.location.href)
    url.searchParams.delete('redirect')
    window.history.replaceState({}, '', url.pathname + url.hash)

    router.replace(redirect)
  }
})

export default router