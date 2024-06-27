'use client';
import React from 'react';
import Cookies from 'js-cookie';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

const ThemeContext = React.createContext();

function ThemeProvider({ initialTheme = 'light', children }) {
  const [theme, setTheme] = React.useState(initialTheme);

  const applyThemeToDom = (nextTheme) => {
    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyThemeToDom(nextTheme);

    Cookies.set('color-theme', nextTheme, {
      expires: 1000,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
