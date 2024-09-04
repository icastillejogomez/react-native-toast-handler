import React, { FC, PropsWithChildren, useReducer } from 'react';

import { ToastContext } from './ToastContext';
import { ToastManager } from './ToastManager';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { ToastContextProviderProps } from './types';

export type ToastProviderProps = PropsWithChildren<ToastContextProviderProps>;

const ToastProvider: FC<ToastProviderProps> = ({ children, onPush, onRemove, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToastContext.Provider value={{ state, dispatch, onPush, onRemove }}>
      <ToastManager {...props}>{children}</ToastManager>
    </ToastContext.Provider>
  );
};
ToastProvider.displayName = 'ToastProvider';

export { ToastProvider };
