import { Insets } from 'react-native';
import { RenderToast } from './RenderToast';
import { ToastPosition } from './ToastPosition';
import { ToastProps } from './ToastProps';
import { ToastSwipeDirection } from './ToastSwipeDirection';

export type ToastManagerProps = {
  renderToast: RenderToast;
  defaultBottomOffset: number;
  defaultTopOffset: number;
  hitSlop?: number | Insets;
  defaultPassCloseHandler?: boolean;
  defaultCloseOnTap?: boolean;
  defaultPosition?: ToastPosition;
  defaultSwipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];

  onShow?: (toast: ToastProps) => void;
  onClose?: (toast: ToastProps) => void;
};
