import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    width : 100%;
    height: 100%;
  }

  body{
    font-size: 16px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    width : 100%;
    height: 100%;
  }
  
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyles;
