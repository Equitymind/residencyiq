import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: 'ResidencyIQ | Residency Tracking for Multi-State Living',
  description: 'Track residency, organize domicile evidence, and monitor behavioral continuity when living, working, or traveling across multiple states.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
