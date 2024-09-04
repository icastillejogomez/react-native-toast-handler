import { ToastPosition } from './ToastPosition';
import { ToastSwipeDirection } from './ToastSwipeDirection';

export type ToastProps = {
  /**
   * You can use this field to identify the toast in the ToastProvider listeners
   */
  name?: string;

  /**
   * Status of the toast
   */
  status: string;

  /**
   * Optional title to be displayed
   */
  title?: string;

  /**
   * Message to be displayed
   */
  message: string;

  /**
   * Extra data to be passed to the toast
   */
  extraData?: Record<string, unknown>;

  /**
   * If true, the toast will be closed when tapped
   */
  closeOnTap?: boolean;

  /**
   * Time to live in seconds. This is the max available time to display the toast. (In seconds)
   */
  ttl?: number;

  /**
   * Time to be displayed in seconds
   */
  duration?: number;

  /**
   * If true, renderToast function will pass the onClose handler to
   * allow the custom toast component to request its own close
   */
  passCloseHandler?: boolean;

  /**
   * Callback when the toast is pressed
   */
  onPress?: () => void;

  /**
   * Callback when the toast is long pressed
   */
  onLongPress?: () => void;

  /**
   * Callback when the toast is closed
   */
  onClose?: () => void;

  /**
   * Direction from which the toast will enter
   */
  enteringDirection?: ToastSwipeDirection;

  /**
   * Swipe direction to dismiss toast.
   */
  swipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];

  /**
   * Position of the toast
   */
  position?: ToastPosition;

  /**
   * Offset from the bottom of the screen (counting safe area wrapper)
   */
  bottomOffset?: number;

  /**
   * Offset from the top of the screen (counting safe area wrapper)
   */
  topOffset?: number;
};
