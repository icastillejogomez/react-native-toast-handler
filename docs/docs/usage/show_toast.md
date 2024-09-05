---
id: docs-usage-show-toast
title: Show toasts in React Native Toast Handler
sidebar_position: 4
sidebar_label: Show toasts
slug: /usage/show-toast
---

# How to show a toast

## Show a toast in React Native Toast Handler

As you already see in previous pages, to display a toast you need to call the `showToast` function from the [useToast](/docs/hooks/useToast) hook.

:::info
Take into account that inside React Native Toast Handler is a queue system. This means that if you call the `showToast` function multiple times and the library will handle the processing of the toasts in the queue.
:::

## Examples

### Show a toast at the bottom of the screen which can be closed by tapping on it and swiping it down

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    position: 'bottom',
    closeOnTap: true,
    swipeDirection: "down",
  });
}, [showToast])

...
```

### Show a toast at the top of the screen which can be closed only swiping it to the right or left

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    position: 'top',
    closeOnTap: false,
    swipeDirection: ['right', 'left'],
  });
}, [showToast])

...
```

### Show a toast which can not be closed manually with a duration

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    position: 'top',
    closeOnTap: false,
    swipeDirection: [],
    duration: 3, // <- Duration in seconds
  });
}, [showToast])

...
```


### Push a toast into the queue with a TTL (Time To Live)

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    ttl: 10, // <- Time to live in seconds
  });
}, [showToast])

...
```