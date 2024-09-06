---
id: docs-usage-animating-timeout
title: How to animate the timeout of a toast in React Native Toast Handler
sidebar_position: 10
sidebar_label: Animating timeout
slug: /usage/animating_timeout
---

# Animating timeout in custom toast layouts

Like we talk in the [Close toasts](/docs/usage/close-toast) page, you can configure the toast to close by swiping it in a specific direction (or directions) or with a timeout based on the duration property. Maybe you want to let the user know that the toast will expire in 5 seconds. In this case, you can use the `progressToBeClosed` property to create whatever animation you want based on your design principles.

<div className="two-columns">
  <img src="/img/gifs/close-toasts/timeout/ios.gif" width="100%" height="auto" />
  <img src="/img/gifs/close-toasts/timeout/android.gif" width="100%" height="auto" />
</div>

The `progressToBeClosed` property is a [Reanimated](https://github.com/software-mansion/react-native-reanimated) shared value that you can use to create whatever animation you want. The value is between 0 and 1, where 0 means the the timeout is at the beginning and 1 means that the timeout is at the end and the toast is going to be closed automatically.

```jsx
import React, { FC } from 'react';
import type { RenderToastProps } from 'react-native-toast-handler';

export type TimeoutToastProps = RenderToastProps & {};

const TimeoutToast: FC<TimeoutToastProps> = ({ title, message, progressToBeClosed }) => {
  // highlight-start
  const widthP = useDerivedValue(() => {
    return withSpring(`${interpolate(progressToBeClosed.value, [0, 1], [0, 100], Extrapolation.CLAMP)}%`);
  });
  // highlight-end

  // highlight-start
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthP.value,
    };
  });
    // highlight-end

  return (
    <View style={[styles.card]}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.header}>{title && <Text style={styles.title}>{title}</Text>}</View>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={styles.progressBarWrapper}>
          // highlight-next-line
          <Animated.View style={[styles.progressBar, animatedStyle]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({...});

export { TimeoutToast };
```

