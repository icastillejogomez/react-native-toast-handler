import React, { FC, useCallback } from 'react';
import { StyleSheet, Insets, GestureResponderEvent } from 'react-native';
import { RenderToast, ToastInternalProps } from './types';
import { SharedValue } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ToastCloseMethod } from './types/ToastCloseMethod';

export type ToastWrapperProps = {
  toast: ToastInternalProps;
  hitSlop?: number | Insets;
  closeOnTap: boolean;
  passCloseHandler: boolean;
  maxWidth: number;
  onClose: (method: ToastCloseMethod) => void;
  renderToast: RenderToast;
  progressToBeClosed: SharedValue<number>;
};

const ToastWrapper: FC<ToastWrapperProps> = (props) => {
  // Destructure props
  const { toast, closeOnTap, passCloseHandler, maxWidth, onClose, renderToast, progressToBeClosed, hitSlop } = props;

  // Declare hooks
  const handlePress = useCallback(() => {
    toast.onPress?.();
    if (closeOnTap) onClose('tap');
  }, [toast, closeOnTap, onClose]);

  const handleLongPress = useCallback(() => {
    toast.onLongPress?.();
  }, [toast]);

  const handleClose = useCallback(
    (event?: GestureResponderEvent) => {
      event?.stopPropagation();
      onClose('manual');
    },
    [onClose],
  );

  return (
    <TouchableWithoutFeedback
      hitSlop={hitSlop}
      style={styles.container}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      {renderToast({
        status: toast.status,
        title: toast.title,
        onClose: passCloseHandler ? handleClose : undefined,
        extraData: toast.extraData ?? {},
        message: toast.message,
        maxWidth,
        progressToBeClosed,
      })}
    </TouchableWithoutFeedback>
  );
};
ToastWrapper.displayName = 'ToastWrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { ToastWrapper };
