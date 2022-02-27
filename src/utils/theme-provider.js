import {createContext, useContext} from 'react';

const ThemeContext = createContext();

export default ThemeContext;

export const useTheme = () => {
  return useContext(ThemeContext);
};
