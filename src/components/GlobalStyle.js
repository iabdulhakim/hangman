import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  /* Umumiy box-sizing, margin va paddinglar uchun stillar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 /* Body uchun line height, shrift, text qalinligi va orqa fon rasmi uchun stil */
  body {
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    font-family: "Mouse Memoirs", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: url(bg.png) no-repeat center/cover;
  
  }

  /* Rasm, video, canvas va iconlar uchun stil */

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  /* Root yaratish */

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyle;
