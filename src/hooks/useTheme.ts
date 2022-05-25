import utilLocalStorage from "../utils/localStorage";
import {useState} from "react";


const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((old) => {
      utilLocalStorage.setItem('isDarkMode', !old);
      return !old;
    });
  }

  const updateTheme = () => {
    const theme = utilLocalStorage.getItem<boolean>('isDarkMode');
    if(theme !== null) {
      setIsDarkMode(theme);
    } else {
      utilLocalStorage.setItem('isDarkMode', true);
    }
  }


  return [isDarkMode, toggleTheme, updateTheme] as const;
}

export default useTheme;