import { useContext } from 'react';
import { ToastContext } from './ToastProvider';

const useToaster = () => {
  const [, dispatch] = useContext(ToastContext);

  const addToast = (text = 'Ping!', type = 'info', button = null) => {
    dispatch({
      type: 'ADD',
      payload: {
        id: +new Date(),
        type,
        text,
        button,
      },
    });
  };

  return addToast;
};

export default useToaster;
