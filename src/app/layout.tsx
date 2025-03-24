import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';

export const metadata: Metadata = {
  title: '한 장의 티켓에 현장을 담다-티킷',
  description: '다양한 행사를 열고 티켓을 구매할 수 있는 웹사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}