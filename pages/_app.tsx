import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// AWS Applied

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
