import React, { FC, PropsWithChildren, useCallback, useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToastContext } from './ToastContext';
import { ToastActionsKind, ToastManagerProps } from './types';
import { ToastGestureHandler, ToastGestureHandlerRef } from './ToastGestureHandler';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { ToastCloseMethod } from './types/ToastCloseMethod';

const ToastManager: FC<PropsWithChildren<ToastManagerProps>> = (props) => {
  // Destructure props
  const {
    children,
    hitSlop,
    defaultBottomOffset,
    defaultTopOffset,
    defaultPosition,
    defaultMarginHorizontal,
    defaultSwipeDirection,
    defaultPassCloseHandler,
    defaultCloseOnTap,
    renderToast,
    onShow: onAnalyticsShow,
    onClose: onAnalyticsClose,
  } = props;

  // Declare hooks
  const { state, dispatch } = useContext(ToastContext);
  const { activeToast, queue } = state;
  const progressToBeClosed = useSharedValue(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastGestureHandlerRef = useRef<ToastGestureHandlerRef>(null);

  // Declare callbacks
  const closeActiveToast = useCallback(
    (method: ToastCloseMethod) => {
      if (activeToast) {
        progressToBeClosed.value = 0;
        dispatch({ type: ToastActionsKind.CLEAN_ACTIVE_TOAST });
        activeToast.onClose?.(method);
        onAnalyticsClose?.(activeToast, method);
      }
    },
    [dispatch, onAnalyticsClose, progressToBeClosed, activeToast],
  );

  // Request for next toast
  useEffect(() => {
    if (!activeToast && queue.length > 0) {
      dispatch({ type: ToastActionsKind.NEXT }); // <- Request for next toast
    }
  }, [dispatch, queue, activeToast]);

  // Emit onShow event when toast is active
  useEffect(() => {
    if (activeToast) {
      onAnalyticsShow?.(activeToast);
      activeToast.onShow?.();
    }
  }, [onAnalyticsShow, activeToast]);

  // Active toast duration timeout
  useEffect(() => {
    if (activeToast && activeToast.duration) {
      progressToBeClosed.value = withTiming(1, { duration: activeToast.duration * 1000 });

      timeoutRef.current = setTimeout(() => {
        toastGestureHandlerRef.current?.closeActiveToast('timeout'); // <- This are going to call closeActiveToast()
      }, activeToast.duration * 1000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [toastGestureHandlerRef, progressToBeClosed, activeToast, closeActiveToast]);

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      {children}
      {activeToast && (
        <ToastGestureHandler
          ref={toastGestureHandlerRef}
          activeToast={activeToast}
          renderToast={renderToast}
          progressToBeClosed={progressToBeClosed}
          onClose={closeActiveToast}
          defaultMarginHorizontal={defaultMarginHorizontal ?? 16}
          hitSlop={hitSlop}
          defaultBottomOffset={defaultBottomOffset}
          defaultTopOffset={defaultTopOffset}
          defaultCloseOnTap={defaultCloseOnTap}
          defaultPosition={defaultPosition}
          defaultSwipeDirection={defaultSwipeDirection}
          defaultPassCloseHandler={defaultPassCloseHandler}
        />
      )}
    </View>
  );
};
ToastManager.displayName = 'ToastManager';

const styles = StyleSheet.create({
  container: {},
});

export { ToastManager };
