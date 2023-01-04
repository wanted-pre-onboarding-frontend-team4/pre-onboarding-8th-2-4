import styled, { css } from 'styled-components'

export const Wrapper = styled.div(
  (props) => css`
    min-height: 100vh;
    min-width: 100vw;
    position: absolute;
    visibility: ${props.visibility || 'hidden'};
    background-color: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
  `
)

export const Contents = styled.div``
