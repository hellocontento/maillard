import React, { useContext } from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { ToastContext } from './ToastProvider';

const StyledToaster = styled.div`
  position: fixed;
  z-index: 999;
  ${(props) => (props.options.yPos ?? 'bottom')}: 24px;
  ${(props) => (props.options.xPos ?? 'left')}: 24px;
  & > * {
    background-color: ${(props) => (props.options.bgColor ?? 'rgb(51, 51, 51)')};
  }
`;

function Toaster({ options = {} }) {
  const [toasts, dispatch] = useContext(ToastContext);

  return (
    <StyledToaster options={options}>
      {toasts.map((toast) => (
        <Toast
          text={toast.text}
          id={toast.id}
          key={toast.id}
          type={toast.type}
          button={toast.button}
          timeout={options.timeout}
          dispatch={dispatch}
        />
      ))}
    </StyledToaster>
  );
}

export default Toaster;
