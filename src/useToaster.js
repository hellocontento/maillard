import { useContext } from "react";
import { ToastContext } from './ToastProvider';

const useToaster = (
  style = "info",
  text = "Ping!",
  button = null,
) => {
  const [, dispatch] = useContext(ToastContext);

  const addToast = () => {
    dispatch({
      type: 'ADD',
      payload: {
        id: +new Date,
        style,
        text,
        button
      }
    })
  }

  return addToast;
}

export default useToaster;