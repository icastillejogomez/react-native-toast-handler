import { Reducer } from 'react';
import { ToastAction, ToastActionsKind, ToastState } from './types';

export const reducer: Reducer<ToastState, ToastAction> = (state, action) => {
  switch (action.type) {
    case ToastActionsKind.PUSH:
      return {
        ...state,
        queue: [...state.queue, action.payload.toast],
      };
    case ToastActionsKind.REMOVE: {
      const newQueue = state.queue.filter((toast) => toast.id !== action.payload.id);
      return {
        ...state,
        queue: [...newQueue],
      };
    }
    case ToastActionsKind.NEXT: {
      const nextToast = state.queue.shift();
      return {
        ...state,
        activeToast: nextToast ?? null,
        queue: [...state.queue],
      };
    }
    case ToastActionsKind.CLEAN_ACTIVE_TOAST: {
      return {
        ...state,
        queue: [...state.queue],
        activeToast: null,
      };
    }
    default:
      return state;
  }
};
