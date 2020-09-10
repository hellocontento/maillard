import React, { useContext } from "react";
import { ToastContext, ToastProvider } from "./ToastProvider";

function Maillard() {
  const [toasts, dispatch] = useContext(ToastContext);

  return (
    <ul className="...">
      {toasts.map((toast) => <li id={toast.id} key={toast.id} dispatch={dispatch} onClick={toast.cta}>Notif</li>)}
    </ul>
  )
}

export { ToastContext, ToastProvider };
export default Maillard;