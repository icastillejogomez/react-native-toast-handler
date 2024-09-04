import { Insets } from 'react-native';
import { RenderToast } from './RenderToast';
import { ToastPosition } from './ToastPosition';
import { ToastProps } from './ToastProps';
import { ToastSwipeDirection } from './ToastSwipeDirection';
import { ToastCloseMethod } from './ToastCloseMethod';

export type ToastContextProviderProps = {
  renderToast: RenderToast;
  defaultBottomOffset: number;
  defaultTopOffset: number;
  hitSlop?: number | Insets;
  defaultPassCloseHandler?: boolean;
  defaultCloseOnTap?: boolean;
  defaultPosition?: ToastPosition;
  defaultMarginHorizontal?: number;
  defaultSwipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];

  onPush?: (toast: ToastProps) => void;
  onShow?: (toast: ToastProps) => void;
  onClose?: (toast: ToastProps, method: ToastCloseMethod) => void;
  onRemove?: (toast: ToastProps) => void;
};
