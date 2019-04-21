export function fixVerticalSpaceForBrowser() {
  const userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    document.documentElement.style.setProperty('--spacer-height', '50px')
  }
}
