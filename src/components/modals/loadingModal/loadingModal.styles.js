import styled, { css } from 'styled-components';

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
