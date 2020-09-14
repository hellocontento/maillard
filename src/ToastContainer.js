import React, { useContext } from "react";
import ToastBody from "./ToastBody";
import { ToastContext } from "./ToastProvider";
import styled from 'styled-components';

const StyledContainer = styled.div`
  bottom: 24px;
  left: 24px;
  position: fixed;
  z-index: 999;
`;

function ToastContainer() {
  const [toasts, dispatch] = useContext(ToastContext);

  return (
    <StyledContainer>
      {toasts.map(toast => <ToastBody text={toast.text} id={toast.id} key={toast.id} dispatch={dispatch} />)}
    </StyledContainer>
  );
}

export default ToastContainer;