import React, { FC, useCallback } from 'react';
import { StyleSheet, Pressable, Insets, GestureResponderEvent } from 'react-native';
import { RenderToast, ToastInternalProps } from './types';
import { SharedValue } from 'react-native-reanimated';

export type ToastWrapperProps = {
  toast: ToastInternalProps;
  hitSlop?: number | Insets;
  closeOnTap: boolean;
  passCloseHandler: boolean;
  onClose: () => void;
  renderToast: RenderToast;
  progressToBeClosed: SharedValue<number>;
};

const ToastWrapper: FC<ToastWrapperProps> = (props) => {
  // Destructure props
  const { toast, closeOnTap, passCloseHandler, onClose, renderToast, progressToBeClosed, hitSlop } = props;

  // Declare hooks
  const handlePress = useCallback(() => {
    console.log('handlePress');
    toast.onPress?.();
    if (closeOnTap) onClose();
  }, [toast, closeOnTap, onClose]);

  const handleLongPress = useCallback(() => {
    toast.onLongPress?.();
  }, [toast]);

  const handleClose = useCallback(
    (event?: GestureResponderEvent) => {
      console.log('handlePressClose', event);
      event?.stopPropagation();
      onClose();
    },
    [onClose],
  );

  return (
    <Pressable hitSlop={hitSlop} style={styles.container} onPress={handlePress} onLongPress={handleLongPress}>
      {renderToast({
        status: toast.status,
        title: toast.title,
        onClose: passCloseHandler ? handleClose : undefined,
        extraData: toast.extraData ?? {},
        message: toast.message,
        progressToBeClosed,
      })}
    </Pressable>
  );
};
ToastWrapper.displayName = 'ToastWrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { ToastWrapper };
