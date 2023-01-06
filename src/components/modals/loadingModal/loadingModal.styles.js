import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div(
  props => css`
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    visibility: ${props.visibility || 'hidden'};
    background-color: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    display: flex;
  `,
);

export const Contents = styled.div``;

export const LoadingSpinnerAnimation = keyframes`   0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }`;

export const LoadingContainer = styled.div`
  margin: 0 auto;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  background: transparent;
`;

export const LoadingPosition = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
export const Spin = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  border: 15px solid #1677ff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${LoadingSpinnerAnimation} 1s linear infinite;
  top: 50%;
  left: 50%;
`;
