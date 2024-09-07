---
id: docs-analytics-detect-toast
title: How to indentify toasts in React Native Toast Handler
sidebar_position: 1
sidebar_label: Identify toasts
slug: /analytics/identify-toast
---

# How and why identify toasts?

For some companies and applications, may be necessary track how their users interact with the toast or notifications. How they close them, etc. Track all this information to understand how they use the application and how to improve it.

Tracking this data from every single part of the application where the toasts are pushed is not a good idea because it a really coupled way. For this reason, we've enable the possibility to track the toasts from the root [ToastProvider](/docs/reference/components/toast-provider) component. But, tracking the toasts from the ToastProvider could be complicated because we need a way to identify every single toast.

## How to identify toasts

To identify the toasts, you could pass a `name` property to the `showToast` function. This property will be used to identify the toast in the [onShow](/docs/reference/types/toast-events#onshow), the [onRemove](/docs/reference/types/toast-events#onremove) and [onClose](/docs/reference/types/toast-events#onclose) events.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    // highlight-next-line
    name: 'publish-screen-error-toast',
    message: error.message,
    status: 'error',
  });
}, [showToast])

...
```

:::note
The `name` property is optional.
:::
