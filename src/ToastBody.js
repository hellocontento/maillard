import React from "react";

function ToastBody({ id, dispatch }) {
  return (
    <div onClick={() => dispatch({ type: 'REMOVE', payload: {id} })}>
      Ping!
    </div>
  )
}

export default ToastBody;