import './globals.css';
import localFont from 'next/font/local';
import Header from './components/Header';

const myFont = localFont({ src: './assets/wotfard-regular-webfont.woff2' });

export const metadata = {
  title: 'Clarity Creator',
  description:
    'Gain clarity through visualization techniques and written expression',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
