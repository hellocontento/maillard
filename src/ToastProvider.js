import React, { useReducer } from "react";
import toastReducer from "./reducer";

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const reducer = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={reducer}>
      {children}
    </ToastContext.Provider>
  );
}