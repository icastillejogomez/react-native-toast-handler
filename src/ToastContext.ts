import { createContext } from 'react';
import { initialState } from './initialState';
import { ToastContextProps } from './types/ToastContextProps';

export const ToastContext = createContext<ToastContextProps>({
  state: initialState,
  dispatch: () => null,
});
