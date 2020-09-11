import React, { useContext } from "react";
import ToastBody from "./ToastBody";
import { ToastContext } from "./ToastProvider";

function ToastContainer() {
  const [toasts, dispatch] = useContext(ToastContext);

  return (
    <div>
      {toasts.map(toast => <ToastBody id={toast.id} key={toast.id} dispatch={dispatch} />)}
    </div>
  );
}

export default ToastContainer;