import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import DarkLightToggle from '@/components/DarkLightToggle';
import ThemeProvider from '@/components/ThemeProvider';

import './styles.css';

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang='en' data-color-theme={theme} style={themeColors}>
      <body>
        <ThemeProvider initialTheme={theme}>
          <header className='site-header'>
            <Link href=''>Some Website</Link>
            <DarkLightToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
