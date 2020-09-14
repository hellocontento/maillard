import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledToastBody = styled.div`
  background-color: #333333;
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(51, 51, 51, 0.25);
  box-sizing: border-box;
  max-width: 408px;
  padding: 10px 16px;
  margin: 8px 0 0;
  cursor: pointer;
  transition: opacity .08s;
  display: flex;
  flex-direction: row;

  ${props => props.hovered ? 'opacity: .78;' : 'opacity: 1'}
`;
const ToastContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: 36px;
`;
const ToastIcon = styled.i`
  width: 24px;
  height: 24px;
  background-color: #00b376;
  border-radius: 12px;
  margin: 0 10px 0 0;
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

function ToastBody({ id, dispatch, style, text, button }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch({ type: 'REMOVE', payload: { id }})
    }, 10000);
    
    return () => clearTimeout(t);
  }, []);

  return (
    <StyledToastBody hovered={isHovered}>
      <ToastContainer 
        onClick={() => dispatch({ type: 'REMOVE', payload: { id } })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ToastIcon></ToastIcon>
        <ToastContent>
          { text }
        </ToastContent>
      </ToastContainer>
      <ToastButton>
        Undo
      </ToastButton>
    </StyledToastBody>
  )
}

export default ToastBody;