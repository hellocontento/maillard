import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import icons from './icons.svg';

const StyledToast = styled.div`
  background-color: rgb(51, 51, 51);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(51, 51, 51, .25);
  box-sizing: border-box;
  max-width: 408px;
  min-width: 236px;
  padding: 10px 16px;
  margin: 8px 0 0;
  cursor: pointer;
  transition: opacity .08s;
  display: flex;
  flex-direction: row;
  opacity: ${(props) => (props.hovered ? '.7' : '1')};
`;
const ToastContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: 36px;
  flex: 1;
`;
const ToastIcon = styled.i`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin: 0 10px 0 0;
  background-image: url("${(props) => (props.bgImg)}");
  background-position: ${(props) => ((props.icon === 'error') ? 'left' : 'right')};
`;
const ToastContent = styled.p`
  color: #ffffff;
  margin: 0;
`;
const ToastButton = styled.button`
  color: #ffffff;
  opacity: .60;
  margin: 0 0 0 16px;
  padding: 6px 16px;
  letter-spacing: -0.32px;
  font-weight: 700;
  line-height: 1;
  background-color: transparent;
  box-shadow: none;
  border: none;
  transition: .1s;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    background-color: rgba(235, 235, 245, 0.13);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff;
  }
`;

function Toast({
  id,
  dispatch,
  type,
  text,
  button,
}) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch({ type: 'REMOVE', payload: { id } });
    }, 10000);

    return () => clearTimeout(t);
  }, []);

  const removeToast = () => dispatch({
    type: 'REMOVE',
    payload: { id },
  });

  const handleButtonClick = (e) => {
    e.preventDefault();
    button.action();
    removeToast();
  };

  return (
    <StyledToast hovered={isHovered}>
      <ToastContainer
        onClick={removeToast}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {type !== 'info' && <ToastIcon icon={type} bgImg={icons} />}
        <ToastContent>
          { text }
        </ToastContent>
      </ToastContainer>
      {button && (
        <ToastButton onClick={handleButtonClick}>
          { button.label }
        </ToastButton>
      )}
    </StyledToast>
  );
}

export default Toast;
