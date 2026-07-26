import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hakan Yasin | Senior Full-Stack Developer & UI/UX Designer Portfolio',
  description: 'Modern web uygulamaları, yüksek performanslı SaaS mimarileri, mobil deneyimler ve tasarımlar sunan profesyonel portföy web uygulaması.',
  keywords: ['Portfolio', 'Full-Stack Developer', 'UI/UX Designer', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Galeri', 'Hakkımda'],
  authors: [{ name: 'Hakan Yasin' }],
  openGraph: {
    title: 'Hakan Yasin | Portföy Web Uygulaması',
    description: 'Yaratıcı fikirleri yüksek kaliteli dijital deneyimlere dönüştürülen portföy web uygulaması.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="bg-background text-primary antialiased min-h-screen selection:bg-blue-600/40 selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
