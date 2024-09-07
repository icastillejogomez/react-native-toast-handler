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

As you already read in the [Show toast page](/usage/show-toast), you can configure the toast to close by swiping it in a specific direction (or directions). In this example we've configured the iOS application to allow swiping the toast to the left and to the right and the Android one to allow swiping it up.

```jsx
const SwipeScreen = () => {
  const { showToast } = useToast();

  const handlePress = useCallback(() => {
    showToast({
      title: '🚀 Toast with timeout',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      status: 'info',
      closeOnTap: false,
      position: 'top',
      swipeDirection: Platform.OS === 'ios' ? ['left', 'right'] : 'up',
    });
  }, [showToast]);

  return (
    <View style={styles.container}>
      <Button title="Show toast" onPress={handlePress} />
    </View>
  );
};
```

:::note
In this example we've disabled the `closeOnTap` prop to avoid closing the toast by tapping on it.
:::

<div className="two-columns">
  <img src="/img/gifs/close-toasts/swipe/ios.gif" width="100%" height="auto" />
  <img src="/img/gifs/close-toasts/swipe/android.gif" width="100%" height="auto" />
</div>

:::note
As you can see, there is a needed threshold to trigger the swipe to close.
:::

:::danger
At this moment, you can't configure the swipe threshold in the swipe gesture.
:::

## Manually

To close the toast manually from the toast itselft, you need to check the `onClose` handler prop. This prop is optional because it could be disabled with the `passCloseHandler` flag in the [showToast](/docs/hooks/useToast) function or by the `defaultPassCloseHandler` default value in the [ToastProvider](/docs/usage/default-values) component.

```jsx
import React, { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { RenderToastProps } from 'react-native-toast-handler';

export type DefaultToastProps = RenderToastProps;

export const DefaultToast: FC<DefaultToastProps> = ({ message, onClose }) => {
  return (
    <View style={styles.card}>
      <Text>{message}</Text>
      {onClose &&
        <Button title="Close" onPress={onClose} />
      }
    </View>
  );
};
```