import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  a {
  text-decoration: none;
  transition-duration: 0.5s;
}
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #eee;
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    height: 100%;
    min-width: 1260px;
  }
  button, input, textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;