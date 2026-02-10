export default defineEventHandler(async (event) => {
  // Proxies /js/script.js -> https://plausible.io/js/script.js
  const res = await fetch('https://plausible.io/js/pa-lUPIywEyKlhMbb153OOrC.js', {
    headers: {
      // Keep it simple; you can forward UA if you want
      'user-agent': getHeader(event, 'user-agent') || '',
    },
  })

  setHeader(event, 'content-type', res.headers.get('content-type') || 'application/javascript')
  // Optional: cache a bit (CDN-friendly)
  setHeader(event, 'cache-control', 'public, max-age=3600, s-maxage=86400')

  return await res.text()
})