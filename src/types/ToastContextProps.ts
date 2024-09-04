import { Dispatch } from 'react';
import { ToastState } from './ToastState';
import { ToastAction } from './ToastActions';
import { ToastProps } from './ToastProps';

export type ToastContextProps = {
  state: ToastState;
  dispatch: Dispatch<ToastAction>;

  onPush?: (toast: ToastProps) => void;
  onRemove?: (toast: ToastProps) => void;
  onShow?: (toast: ToastProps) => void;
};
