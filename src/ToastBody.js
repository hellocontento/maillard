import React, { useEffect, useContext } from "react";
import { ToastContext } from "./ToastProvider";

function ToastBody({ id, dispatch, style, text, button }) {
  useEffect(() => {
    const t = setTimeout(() => {
      dispatch({ type: 'REMOVE', payload: { id }})
    }, 3000);
    
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ backgroundColor: '#00f2', padding: '8px'}} onClick={() => dispatch({ type: 'REMOVE', payload: { id } })}>
      <div>
        {id}: {text}
      </div>
    </div>
  )
}

export default ToastBody;