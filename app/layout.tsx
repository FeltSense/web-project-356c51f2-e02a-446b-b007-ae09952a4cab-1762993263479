import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FitForce - Transform Your Body & Mind',
  description:
    'Join the ultimate fitness experience with expert trainers, cutting-edge equipment, and a community that pushes you to achieve your goals.',
  keywords: 'fitness, gym, personal training, group classes, nutrition, wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}