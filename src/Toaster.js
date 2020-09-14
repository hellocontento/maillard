import React, { useContext } from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { ToastContext } from './ToastProvider';

const StyledContainer = styled.div`
  bottom: 24px;
  left: 24px;
  position: fixed;
  z-index: 999;
`;

function Toaster() {
  const [toasts, dispatch] = useContext(ToastContext);

  return (
    <StyledContainer>
      {toasts.map((toast) => (
        <Toast
          text={toast.text}
          id={toast.id}
          key={toast.id}
          type={toast.type}
          button={toast.button}
          dispatch={dispatch}
        />
      ))}
    </StyledContainer>
  );
}

export default Toaster;
