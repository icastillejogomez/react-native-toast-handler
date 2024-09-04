import { GestureResponderEvent } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export type RenderToastProps = {
  /**
   * Status of the toast. This is the strign you pass to the showToast function
   */
  status: string;

  /**
   * Optional title to be displayed. This is the string you pass to the showToast function. If you need to pass more data use the extraData prop
   */
  title?: string;

  /**
   * Message to be displayed. This is the string you pass to the showToast function. If you need to pass more data use the extraData prop
   */
  message: string;

  /**
   * Extra data to be passed to the toast. Useful to pass more data to the renderToast function
   */
  extraData: Record<string, unknown>;

  /**
   * Max width of the toast. This is the max available width to display the toast. Is calculated base on the ToastProvider parent width (usually the screen width)
   * and the marginHorizontal prop of the toast (or de default value if not provided in the ToastProvider)
   *
   * You will use this value when you content is too small to expand itself to reach the full width of the wrapper to force the width of the toast like:
   * ```
   * <View style={[styles.toastCard, { width: maxWidth }]}>
   *   <Text>{message}</Text>
   * </View>
   * ```
   */
  maxWidth: number;

  /**
   * Method to manually close the toast. The toast could be closed by tapping on it, swiping it or by a timeout. All this cases are handle by the ToastManager and the ToastGestureHandler
   * components which are inside the library code. In case you want to render a close button in the toast or other solution where you need to close the toast manually, you can use this method.
   */
  onClose?: (event?: GestureResponderEvent) => void;

  /**
   * This is a reanimated shared value that could be used to control the progress of the toast. Really useful when you want to display a timeout bar in the toast.
   * It starts at 0 and ends at 1.
   */
  progressToBeClosed: SharedValue<number>;
};

export type RenderToast = (props: RenderToastProps) => JSX.Element;
