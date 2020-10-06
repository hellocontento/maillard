import { useContext, useCallback } from 'react';
import { ToastContext } from './ToastProvider';

const useToaster = () => {
  const [, dispatch] = useContext(ToastContext);

  const addToast = useCallback((text = 'Ping!', type = 'info', button = null) => {
    dispatch({
      type: 'ADD',
      payload: {
        id: +new Date(),
        type,
        text,
        button,
      },
    });
  }, []);

  return addToast;
};

export default useToaster;
