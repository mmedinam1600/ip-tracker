
import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: "Agency FB", sans-serif;
  }

  body {
    background-color: ${ props => props.theme.backgroundColor.secondary };
    color: ${ ({theme}) => theme.colors.primary };
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${ ({theme}) => theme.colors.primary };
  }
  
`;

export default GlobalStyles;