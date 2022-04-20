import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'OpenSans', sans-serif;
    }
    #root {
      margin: 0 auto;
    }
`
export const PINK = '#FFC5D0';
export const YELLOW = '#FFFF00';
export const TURQUOISE = '#22CAE0';
export const FUCHSIA = '#F52EC0';
export const DARK = '#222222';
export const LIGHT = '#F5F5F5';

export default GlobalStyle;
