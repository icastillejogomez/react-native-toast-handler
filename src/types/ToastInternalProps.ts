import { ToastProps } from './ToastProps';

export type ToastInternalProps = ToastProps & {
  id: number;
  createdAt: Date;
};
