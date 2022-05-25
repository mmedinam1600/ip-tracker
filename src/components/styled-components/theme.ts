
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
    },
    backgroundColor: {
      primary: string,
      secondary: string,
      terciary: string
    }
  }
}


const lightTheme: DefaultTheme = {
  backgroundColor: {
    primary: "#B8FFF9",
    secondary: "#EFFFFD",
    terciary: "#85F4FF"
  },
  colors: {
    primary: "#000000",
    secondary: "#23272A",
  }
};

const darkTheme: DefaultTheme = {
  backgroundColor: {
    primary: "#270082",
    secondary: "#1A1A40",
    terciary: "#7A0BC0"
  },
  colors: {
    primary: "#FFFFFF",
    secondary: "#A4A4A4",
  }
};


export { lightTheme, darkTheme }