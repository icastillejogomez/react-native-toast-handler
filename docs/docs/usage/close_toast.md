---
id: docs-usage-close-toast
title: Close toasts in React Native Toast Handler
sidebar_position: 7
sidebar_label: Close toasts
slug: /usage/close-toast
---

# Ways to close a Toast

There are four ways to close a toast in React Native Toast Handler: tapping (pressing) on it, with a timeout based on the duration property. Swiping it, and manually from the toast with the onClose handler. We're going to see how to configure all of them.

:::info
You can check a executable apps with these examples in the [examples folder](https://github.com/icastillejogomez/react-native-toast-handler/tree/develop/examples/closing-toasts) of the repository.
:::

## Tap on it

To close a toast tapping on it, you need to have the `defaultCloseOnTap` prop set to `true` in the [ToastProvider](/docs/reference/components/toast-provider) component or activating the `closeOnTap` flag in the [showToast](/docs/hooks/useToast) function.

<div className="two-columns">
  <img src="/img/gifs/close-toasts/on-tap/ios.gif" width="100%" height="auto" />
  <img src="/img/gifs/close-toasts/on-tap/android.gif" width="100%" height="auto" />
</div>


## With a timeout

To close a toast with a timeout, you need to specify the `duration` prop in the [showToast](/docs/hooks/useToast) function. To ilustrate this, we're going to use the `progressToBeClosed`. If you want to read more about this props see the [Animating timeout page](/usage/animating_timeout).

<div className="two-columns">
  <img src="/img/gifs/close-toasts/timeout/ios.gif" width="100%" height="auto" />
  <img src="/img/gifs/close-toasts/timeout/android.gif" width="100%" height="auto" />
</div>

## Swiping it

## Manually
