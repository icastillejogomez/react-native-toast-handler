import { Insets } from 'react-native';
import { RenderToast } from './RenderToast';
import { ToastPosition } from './ToastPosition';
import { ToastProps } from './ToastProps';
import { ToastSwipeDirection } from './ToastSwipeDirection';
import { ToastCloseMethod } from './ToastCloseMethod';

export type ToastManagerProps = {
  renderToast: RenderToast;
  defaultBottomOffset: number;
  defaultTopOffset: number;
  defaultMarginHorizontal?: number;
  hitSlop?: number | Insets;
  defaultPassCloseHandler?: boolean;
  defaultCloseOnTap?: boolean;
  defaultPosition?: ToastPosition;
  defaultSwipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];

  onShow?: (toast: ToastProps) => void;
  onClose?: (toast: ToastProps, method: ToastCloseMethod) => void;
};
