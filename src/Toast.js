import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import icons from './icons.svg';

const StyledToast = styled.div`
  background-color: rgb(51, 51, 51);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(51, 51, 51, .25);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  margin-top: 8px;
  max-width: 408px;
  min-width: 236px;
  opacity: ${(props) => (props.hovered ? '.75' : '1')};
  padding: 10px 16px;
  transition: opacity .1s;
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
  color: white;
  margin: 0;
`;
const ToastButton = styled.button`
  background-color: rgba(235, 235, 245, 0);
  border-radius: 4px;
  border: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: -.32px;
  line-height: 1;
  margin-left: 16px;
  opacity: .6;
  outline: none;
  padding: 6px 16px;
  transition: .1s;
  &:hover {
    opacity: 1;
    background-color: rgba(235, 235, 245, 0.13);
  }
  &:focus {
    box-shadow: 0 0 0 2px white;
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
