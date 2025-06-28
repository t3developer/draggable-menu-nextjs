import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const blMelody = localFont({
  src: [
    {
      path: "../public/fonts/BLMelody-Medium.woff2",
      style: 'normal'
    },
  ],
  variable: "--font-blMelody",
});