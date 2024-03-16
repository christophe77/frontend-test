'use client';
import { Source_Sans_3 } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const sourceSans = Source_Sans_3({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: sourceSans.style.fontFamily,
  },
});

export default theme;