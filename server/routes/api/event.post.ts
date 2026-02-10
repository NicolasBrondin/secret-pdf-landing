export default defineEventHandler(async (event) => {
  // Proxies /api/event -> https://plausible.io/api/event
  const body = await readRawBody(event) // keep original payload
    console.log('[PLAUSIBLE] Proxying event with body:', body?.toString());
  const res = await fetch('https://plausible.io/api/event', {
    method: 'POST',
    headers: {
      'content-type': getHeader(event, 'content-type') || 'application/json',
      'user-agent': getHeader(event, 'user-agent') || '',
      // Forward IP info (optional but helpful)
      'x-forwarded-for': getHeader(event, 'x-forwarded-for') || getRequestIP(event) || '',
      'x-forwarded-proto': getHeader(event, 'x-forwarded-proto') || 'https',
    },
    body,
  })

  // Plausible often responds 202 for accepted events
  setResponseStatus(event, res.status)
  return await res.text().catch(() => '')
})