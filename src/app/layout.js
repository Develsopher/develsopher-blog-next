import './globals.css';
import { cn } from '@/src/utils/style';
import { Roboto, Noto_Sans_KR } from 'next/font/google';
import Header from '@/src/components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import siteMetadata from '../utils/siteMetaData';
import Script from 'next/script';

const ScrollToTop = dynamic(() => import('@/src/components/ScrollToTop'), {
  ssr: false,
});

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--font-ns',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-rb',
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={cn(
          notoSansKr.variable,
          roboto.variable,
          'flex h-screen w-screen flex-col bg-light font-ns dark:bg-primary',
        )}
      >
        <Header />
        <main className="flex flex-1 flex-col overflow-y-scroll">
          <section>{children}</section>
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
