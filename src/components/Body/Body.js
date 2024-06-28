'use client';
import React from 'react';

import { useTheme } from '../ThemeProvider';
import { DARK_COLORS, LIGHT_COLORS } from '@/constants';

function Body({ children }) {
  const { theme } = useTheme();
  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <body data-color-theme={theme} style={{ ...themeColors }}>
      {children}
    </body>
  );
}

export default Body;
