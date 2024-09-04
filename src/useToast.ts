import { useCallback, useContext, useRef } from 'react';
import { ToastActionsKind, ToastId, ToastProps } from './types';
import { ToastContext } from './ToastContext';

type ShowToast = (toast: ToastProps) => number;

export type UseToast = () => {
  showToast: ShowToast;
  removeToast: (id: ToastId) => void;
};

export const useToast: UseToast = () => {
  const nextId = useRef(0);
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { dispatch, onPush, onRemove, state } = context;

  const showToast = useCallback(
    (toast: ToastProps) => {
      const id = ++nextId.current;
      dispatch({
        type: ToastActionsKind.PUSH,
        payload: {
          toast: {
            ...toast,
            id,
            createdAt: new Date(),
          },
        },
      });

      onPush?.(toast);

      return id;
    },
    [dispatch, onPush],
  );

  const removeToast = useCallback(() => {
    const toast = state.queue.find((t) => t.id === nextId.current);

    if (!toast) {
      return;
    }

    dispatch({
      type: ToastActionsKind.REMOVE,
      payload: {
        id: nextId.current,
      },
    });

    onRemove?.(toast);
  }, [dispatch, onRemove, state]);

  return {
    showToast,
    removeToast,
  };
};
