
import { createGlobalStyle } from 'styled-components';


export const DEVICE_DEFAULT_WIDTH = 1366;
// const context = 1639; // defalt context 16

export const StyleGlobal = createGlobalStyle<any>`
  html,
  body, html {
  }
  iframe:first-of-type {
    display: none;
  }
`;

