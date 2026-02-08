import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });

export const metadata: Metadata = {
  title: 'Finguard Landing Variants',
  description: 'High-end fintech marketing pages',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} antialiased`}>{children}</body>
    </html>
  );
}
