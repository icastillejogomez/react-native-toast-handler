/**
 * This is the method used to close the toast. The possible values are:
 *
 * - timeout: The toast was closed automatically after a certain amount of time by the ToastManager.
 * - tap: The toast was closed by tapping on it.
 * - swipe: The toast was closed by swiping it.
 * - manual: The toast was closed manually with the renderToast onClose prop.
 */
export type ToastCloseMethod = 'timeout' | 'tap' | 'swipe' | 'manual';
