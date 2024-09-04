import { ToastInternalProps } from './ToastInternalProps';

export type ToastState = {
  queue: ToastInternalProps[];
  activeToast: ToastInternalProps | null;
};
