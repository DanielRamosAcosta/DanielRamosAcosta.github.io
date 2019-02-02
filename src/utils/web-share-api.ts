interface ShareDataTitle {
  /**
   * The title of the document being shared. May be ignored by the target.
   */
  title?: string
  /**
   * Arbitrary text that forms the body of the message being shared.
   */
  text?: string
  /**
   * A URL string referring to a resource being shared.
   */
  url?: string
}

interface ShareDataURL extends ShareDataTitle {
  url: string
}

interface ShareDataText extends ShareDataTitle {
  text: string
}

type ShareData = ShareDataText | ShareDataURL

interface WebShareAPINavigator extends Navigator {
  /**
   * This method allows you easily trigger the native Android share dialog,
   * passing either a URL or text to share. This is an important API as it gives
   * your end-users user control of how and where the data is shared.
   * To use the Web Share API:
   *   - you must be served over HTTPS
   *   - you can only invoke the API in response to a user action, such as a
   *     click (e.g., you can't call `navigator.share` as part of the page load)
   *   - you can also share any URL, not just URLs under your website's current
   *     scope: and you may also share `text` without a URL
   *   - you should feature-detect it in case it's not available on your users'
   *     platform (e.g., via `navigator.share !== undefined`)
   *
   * Spec: https://wicg.github.io/web-share/#dom-navigator-share
   */
  share: (data: ShareData) => Promise<void>
}

export function browserSupportsWebShareAPI(
  navigator: WebShareAPINavigator | Navigator,
): navigator is WebShareAPINavigator {
  return 'share' in navigator
}
