import { useContext } from "react";
import { ToastContext } from './ToastProvider';

const useToaster = () => {
  const [,dispatch] = useContext(ToastContext);

  const addToast = () => {
    dispatch({
      type: 'ADD',
      payload: {
        id: +new Date,
      }
    })
  }

  return addToast;
}

export default useToaster;