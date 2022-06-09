import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Toast from "./Toast";
import { ToastContext } from "./ToastProvider";

const StyledToaster = styled.div`
  position: fixed;
  z-index: 999;

  ${(props) => {
    switch (props.options.position) {
      case "bottom-center":
        return css`
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom-right":
        return css`
          bottom: 24px;
          right: 24px;
        `;
      default:
        return css`
          bottom: 24px;
          left: 24px;
        `;
    }
  }}

  & > * {
    background-color: ${(props) => props.options.bgColor ?? "rgb(51, 51, 51)"};
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
