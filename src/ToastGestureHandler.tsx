import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { Insets, StyleSheet, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  BaseAnimationBuilder,
  SlideInDown,
  SlideInUp,
  useAnimatedRef,
  useAnimatedStyle,
  runOnJS,
  SharedValue,
} from 'react-native-reanimated';
import { RenderToast, ToastInternalProps, ToastOrientation, ToastPosition, ToastSwipeDirection } from './types';
import { ToastWrapper } from './ToastWrapper';
import { getAllowedToastOrientations } from './utils';

const MIN_VELOCITY_TO_TRIGGER_CLOSE = 700;

export type ToastGestureHandlerProps = {
  onClose: () => void;
  renderToast: RenderToast;
  hitSlop?: number | Insets;
  activeToast: ToastInternalProps;
  progressToBeClosed: SharedValue<number>;
  defaultBottomOffset: number;
  defaultTopOffset: number;
  defaultCloseOnTap?: boolean;
  defaultPosition?: ToastPosition;
  defaultSwipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];
  defaultPassCloseHandler?: boolean;
};

export type ToastGestureHandlerRef = {
  closeActiveToast: () => void;
};

const ToastGestureHandler = forwardRef<ToastGestureHandlerRef, ToastGestureHandlerProps>((props, ref) => {
  // Destructure props
  const {
    renderToast,
    onClose,
    hitSlop,
    activeToast,
    progressToBeClosed,
    defaultBottomOffset,
    defaultTopOffset,
    defaultCloseOnTap,
    defaultPosition,
    defaultSwipeDirection,
    defaultPassCloseHandler,
  } = props;

  // Declare hooks
  const activeSwipeOrientation = useSharedValue<ToastOrientation>('vertical');
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const toastWrapperRef = useAnimatedRef<View>();
  const [toastDimensions, setToastDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const bottomOffset = useMemo(
    () => activeToast?.bottomOffset ?? defaultBottomOffset,
    [activeToast, defaultBottomOffset],
  );
  const topOffset = useMemo(() => activeToast?.topOffset ?? defaultTopOffset, [activeToast, defaultTopOffset]);

  const allowedSwipeDirections: ToastSwipeDirection[] = useMemo(() => {
    if (!activeToast) {
      if (!defaultSwipeDirection) return [];
      if (!Array.isArray(defaultSwipeDirection)) return [defaultSwipeDirection];
      if (defaultSwipeDirection.length === 0) return [];
      return defaultSwipeDirection;
    }
    if (Array.isArray(activeToast.swipeDirection)) {
      return activeToast.swipeDirection.length ? activeToast.swipeDirection : [];
    }

    return activeToast.swipeDirection ? [activeToast.swipeDirection] : [];
  }, [defaultSwipeDirection, activeToast]);

  const position: ToastPosition = useMemo(
    () => activeToast.position ?? defaultPosition ?? 'top',
    [defaultPosition, activeToast],
  );

  const entering: BaseAnimationBuilder = useMemo(() => {
    switch (position) {
      case 'top':
        return SlideInUp.duration(300).easing(Easing.linear);
      case 'bottom':
        return SlideInDown.duration(300).easing(Easing.linear);
      default:
        return SlideInDown.duration(300).easing(Easing.linear);
    }
  }, [position]);

  const absoluteInsets = useMemo(() => {
    switch (position) {
      case 'top':
        return { top: topOffset };
      case 'bottom':
        return { bottom: bottomOffset };
    }
  }, [topOffset, bottomOffset, position]);

  const handleAnimatedClose = useCallback(
    (swipeDirection?: ToastSwipeDirection) => {
      const selectedSwipeDirection = swipeDirection ?? allowedSwipeDirections.at(0);

      if (!selectedSwipeDirection) {
        if (position === 'top') {
          translateY.value = withTiming(
            5 * (-topOffset - toastDimensions.height),
            {
              duration: 300,
              easing: Easing.linear,
            },
            () => {
              runOnJS(onClose)();
            },
          );
        } else {
          translateY.value = withTiming(
            10 * (bottomOffset + toastDimensions.height),
            {
              duration: 300,
              easing: Easing.linear,
            },
            () => {
              runOnJS(onClose)();
            },
          );
        }
        return;
      }

      if (['up', 'down'].includes(selectedSwipeDirection)) {
        const to =
          selectedSwipeDirection === 'up'
            ? 5 * (-topOffset - toastDimensions.height)
            : 5 * (bottomOffset + toastDimensions.height);
        translateY.value = withTiming(
          to,
          {
            duration: 300,
            easing: Easing.linear,
          },
          () => {
            runOnJS(onClose)();
          },
        );
      } else {
        const to =
          selectedSwipeDirection === 'left'
            ? 10 * (-topOffset - toastDimensions.width)
            : 10 * (bottomOffset + toastDimensions.width);
        translateX.value = withTiming(
          to,
          {
            duration: 300,
            easing: Easing.linear,
          },
          () => {
            runOnJS(onClose)();
          },
        );
      }
    },
    [toastDimensions, bottomOffset, topOffset, translateY, translateX, onClose, allowedSwipeDirections, position],
  );

  const pan = Gesture.Pan()
    .onStart(({ translationX, translationY }) => {
      // Determine the direction of the swipe
      const allowedOrientation = getAllowedToastOrientations(allowedSwipeDirections);
      if (allowedOrientation === 'both') {
        activeSwipeOrientation.value = Math.abs(translationX) > Math.abs(translationY) ? 'horizontal' : 'vertical';
      } else if (allowedOrientation === 'vertical') {
        activeSwipeOrientation.value = 'vertical';
      } else {
        activeSwipeOrientation.value = 'horizontal';
      }
    })
    .onUpdate((event) => {
      // Based on the orientation and the allowd swipe directions, move the toast

      if (activeSwipeOrientation.value === 'vertical') {
        if (allowedSwipeDirections.includes('up') && allowedSwipeDirections.includes('down')) {
          translateY.value = event.translationY;
        } else if (allowedSwipeDirections.includes('up')) {
          translateY.value = Math.min(0, event.translationY);
        } else if (allowedSwipeDirections.includes('down')) {
          translateY.value = Math.max(0, event.translationY);
        }
      } else if (activeSwipeOrientation.value === 'horizontal') {
        if (allowedSwipeDirections.includes('left') && allowedSwipeDirections.includes('right')) {
          translateX.value = event.translationX;
        } else if (allowedSwipeDirections.includes('left')) {
          translateX.value = Math.min(0, event.translationX);
        } else if (allowedSwipeDirections.includes('right')) {
          translateX.value = Math.max(0, event.translationX);
        }
      }
    })
    .onEnd((event) => {
      if (allowedSwipeDirections.length === 0) {
        return;
      }

      // Get swipe direction
      const direction: ToastSwipeDirection =
        activeSwipeOrientation.value === 'horizontal'
          ? event.translationX > 0
            ? 'right'
            : 'left'
          : event.translationY > 0
            ? 'down'
            : 'up';

      const velocity = activeSwipeOrientation.value === 'horizontal' ? event.velocityX : event.velocityY;
      if (Math.abs(velocity) > MIN_VELOCITY_TO_TRIGGER_CLOSE) {
        handleAnimatedClose(direction);
        return;
      }

      const distance =
        activeSwipeOrientation.value === 'vertical' ? Math.abs(event.translationY) : Math.abs(event.translationX);
      const distanceTrigger = activeSwipeOrientation.value === 'vertical' ? 50 : 150;
      if (distance > distanceTrigger) {
        handleAnimatedClose(direction);
        return;
      }

      translateY.value = withTiming(0, {
        duration: 350,
        easing: Easing.linear,
      });

      translateX.value = withTiming(0, {
        duration: 350,
        easing: Easing.linear,
      });
    })
    .runOnJS(true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { translateX: translateX.value }],
  }));

  useEffect(() => {
    toastWrapperRef.current?.measure((_, __, width, height) => {
      setToastDimensions({ width, height });
    });
  }, [toastWrapperRef, setToastDimensions]);

  useImperativeHandle(ref, () => ({
    closeActiveToast: (): void => {
      handleAnimatedClose();
    },
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        ref={toastWrapperRef}
        style={[styles.container, absoluteInsets, animatedStyle]}
        entering={entering}
      >
        <ToastWrapper
          toast={activeToast}
          hitSlop={hitSlop}
          closeOnTap={activeToast.closeOnTap ?? defaultCloseOnTap ?? false}
          passCloseHandler={activeToast.passCloseHandler ?? defaultPassCloseHandler ?? false}
          onClose={handleAnimatedClose}
          renderToast={renderToast}
          progressToBeClosed={progressToBeClosed}
        />
      </Animated.View>
    </GestureDetector>
  );
});
ToastGestureHandler.displayName = 'ToastGestureHandler';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 999,
    maxWidth: '90%',
  },
});

export { ToastGestureHandler };
