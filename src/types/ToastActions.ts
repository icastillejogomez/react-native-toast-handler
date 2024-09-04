import { ToastActionsKind } from './ToastActionsKind';
import { ToastInternalProps } from './ToastInternalProps';

export interface PushAction {
  type: ToastActionsKind.PUSH;
  payload: {
    toast: ToastInternalProps;
  };
}

export interface RemoveAction {
  type: ToastActionsKind.REMOVE;
  payload: {
    id: ToastInternalProps['id'];
  };
}

export interface NextAction {
  type: ToastActionsKind.NEXT;
}

export interface CleanActiveToastAction {
  type: ToastActionsKind.CLEAN_ACTIVE_TOAST;
}

export type ToastAction = PushAction | RemoveAction | NextAction | CleanActiveToastAction;
