---
id: docs-usage-toast-events
title: React Native Toast Handler toast events
sidebar_position: 9
sidebar_label: Events
slug: /usage/toast-events
---

# Toast events

## Introduction 
As you're going to see in the Analytics section, you have some ways to track the toasts activity. In the Analytics section you will see how to track toasts events from the root [ToastProvider](/docs/reference/components/toast-provider) component. Here, we explain how to track toasts events from the place you imperatively show them.

## Toast events

To listen for toast events, you have to pass a callback for some [showToast](/docs/hooks/useToast) function:

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    //highlight-next-line
    // listen for toast events here
  });
}, [showToast])

...
```

## onShow

The `onShow` callback is called when the toast is shown on the screen. Just before the entering animation starts.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    onShow: () => {
      // highlight-next-line
      console.log('Toast is showing');
    },
  });
}, [showToast])
...
```

:::note
In next versions of React Native Toast Handler, the `onShow` callback will be called when the entering animation finishes.
:::

## onPress

The `onPress` callback is called when the toast is pressed. Even if `closeOnTap` is set to `false`.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    onPress: () => {
      // highlight-next-line
      console.log('Toast is pressed');
    },
  });
}, [showToast])

...
```

## onLongPress

Like `onPress`, the `onLongPress` callback is called when the toast is long pressed. Even if `closeOnTap` is set to `false`.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    onLongPress: () => {
      // highlight-next-line
      console.log('Toast is long pressed');
    },
  });
}, [showToast])

...
```

## onClose

Like the `onShow` callback, the `onClose` callback is called when the toast is closed. The event is fired just after the exiting animation ends.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    onClose: (method) => {
      // highlight-next-line
      console.log('Toast is closed: ' + method);
    },
  });
}, [showToast])

...
```

## onRemove

As you've read in the [Remove toast](/docs/usage/remove-toast) page, the toast is removed from the queue when it is not shown anymore. The `onRemove` callback is called when the toast is removed from the queue.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    onRemove: () => {
      // highlight-next-line
      console.log('Toast is removed from the queue');
    },
  });
}, [showToast])

...
```

:::note
This event is only triggered when the toast is manually removed from the queue and not when the TTL expires.
:::