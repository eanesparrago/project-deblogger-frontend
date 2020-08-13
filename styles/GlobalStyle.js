import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 16px;
  }
  
  body {
    font-size: 19px;
    font-family: ${theme.font.sansSerif};
    overflow-y: scroll;
    color: ${(p) => p.theme.color.grey[800]}
  }

  a:focus, button:focus {
    outline: 1px solid black !important;
  }
 
  .srOnly {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
`;
