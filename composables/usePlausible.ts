type PlausibleProps = Record<string, string | number | boolean>

export function usePlausible() {
  const trackEvent = (
    eventName: string,
    props?: Record<string, any>,
    interactive = false
  ) => {
    if (process.server) return

    const plausible = (window as any).plausible
    if (!plausible) return


    plausible(eventName, {
      props,
      interactive,
    })
  }

  return { trackEvent }
}