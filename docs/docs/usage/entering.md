---
id: docs-usage-entering
title: Entering animations in React Native Toast Handler
sidebar_position: 5
sidebar_label: Entering animation
slug: /usage/entering
---

# Configure how toats enter in your application

:::danger
At this moment, is not possible to disable the entering animation. In all scenearios the toast are going to enter in the screen moving from the outside.
:::

## How to configure the entering animation

In the [`showToast`](/docs/hooks/useToast) function you can configure the [`enteringDirection`](/docs/reference/types/toast-entering-direction) of the toast.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    // highlight-next-line
    enteringDirection: 'up', // <- Configure the entering direction
  });
}, [showToast])

...
```

:::note
If you don't specify any `enteringDirection` in the `showToast` function, the toast will enter from the top when the toast is positioned at the top of the screen, and from the bottom when the toast is positioned at the bottom of the screen. You can not configure a default entering direction.
:::

## Examples

### Bottom toast entering from the left

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    // highlight-start
    position: 'bottom',
    enteringDirection: 'left',
    // highlight-end
  });
}, [showToast])

...
```