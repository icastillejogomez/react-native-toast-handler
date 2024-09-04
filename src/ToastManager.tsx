import React, { FC, PropsWithChildren, useCallback, useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToastContext } from './ToastContext';
import { ToastActionsKind, ToastManagerProps } from './types';
import { ToastGestureHandler, ToastGestureHandlerRef } from './ToastGestureHandler';
import { useSharedValue, withTiming } from 'react-native-reanimated';

const ToastManager: FC<PropsWithChildren<ToastManagerProps>> = (props) => {
  // Destructure props
  const {
    children,
    hitSlop,
    defaultBottomOffset,
    defaultTopOffset,
    defaultPosition,
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
  // const [activeToast, setActiveToast] = useState<ToastInternalProps | null>(null)
  const progressToBeClosed = useSharedValue(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastGestureHandlerRef = useRef<ToastGestureHandlerRef>(null);

  const closeActiveToast = useCallback(() => {
    if (activeToast) {
      progressToBeClosed.value = 0;
      dispatch({ type: ToastActionsKind.CLEAN_ACTIVE_TOAST });
      activeToast.onClose?.();
      onAnalyticsClose?.(activeToast);
    }
  }, [dispatch, onAnalyticsClose, progressToBeClosed, activeToast]);

  // Request for next toast
  useEffect(() => {
    if (!activeToast && queue.length > 0) {
      dispatch({ type: ToastActionsKind.NEXT }); // <- Request for next toast
    }
  }, [dispatch, queue, activeToast]);

  // Emit onShow event when toast is active
  useEffect(() => {
    if (activeToast) onAnalyticsShow?.(activeToast);
  }, [onAnalyticsShow, activeToast]);

  // Active toast duration timeout
  useEffect(() => {
    if (activeToast && activeToast.duration) {
      progressToBeClosed.value = withTiming(1, { duration: activeToast.duration * 1000 });

      timeoutRef.current = setTimeout(() => {
        toastGestureHandlerRef.current?.closeActiveToast(); // <- This are going to call closeActiveToast()
      }, activeToast.duration * 1000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [toastGestureHandlerRef, progressToBeClosed, activeToast, closeActiveToast]);

  return (
    <View style={styles.container}>
      {children}
      {activeToast && (
        <ToastGestureHandler
          ref={toastGestureHandlerRef}
          activeToast={activeToast}
          renderToast={renderToast}
          progressToBeClosed={progressToBeClosed}
          onClose={closeActiveToast}
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
  container: {
    flex: 1,
  },
});

export { ToastManager };
