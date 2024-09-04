import { GestureResponderEvent } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export type RenderToastProps = {
  status: string;
  title?: string;
  message: string;
  extraData: Record<string, unknown>;

  onPress?: () => void;
  onClose?: (event?: GestureResponderEvent) => void;

  /**
   * This is a reanimated shared value that could be used to control the progress of the toast.
   * It starts at 0 and ends at 1.
   */
  progressToBeClosed: SharedValue<number>;
};

export type RenderToast = (props: RenderToastProps) => JSX.Element;
