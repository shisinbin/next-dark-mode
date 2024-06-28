import React from 'react';
import Link from 'next/link';

import ThemedBody from '@/components/ThemedBody';
import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ThemedBody>
        <header className='site-header'>
          <Link href=''>Some Website</Link>
          <DarkLightToggle />
        </header>
        {children}
      </ThemedBody>
    </html>
  );
}

export default RootLayout;
