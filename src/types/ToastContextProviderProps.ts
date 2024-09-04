import { Insets } from 'react-native';
import { RenderToast } from './RenderToast';
import { ToastPosition } from './ToastPosition';
import { ToastProps } from './ToastProps';
import { ToastSwipeDirection } from './ToastSwipeDirection';

export type ToastContextProviderProps = {
  renderToast: RenderToast;
  defaultBottomOffset: number;
  defaultTopOffset: number;
  hitSlop?: number | Insets;
  defaultPassCloseHandler?: boolean;
  defaultCloseOnTap?: boolean;
  defaultPosition?: ToastPosition;
  defaultSwipeDirection?: ToastSwipeDirection | ToastSwipeDirection[];

  onPush?: (toast: ToastProps) => void;
  onShow?: (toast: ToastProps) => void;
  onClose?: (toast: ToastProps) => void;
};
