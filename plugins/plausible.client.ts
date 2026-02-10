export default defineNuxtPlugin(() => {
  const router = useRouter()

  const track = () => {
    // plausible is added by the script tag
    console.log('[PLAUSIBLE] Tracking pageview for', window.location.pathname);
    console.log('[PLAUSIBLE] Current plausible object:', (window as any).plausible);
    ;(window as any).plausible?.('pageview')
  }

  // first page
  //track()

  // next pages
  //router.afterEach(() => track())
})