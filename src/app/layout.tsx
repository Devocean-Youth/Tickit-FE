import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tickit - 행사 티켓 플랫폼',
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
        <main>{children}</main>
      </body>
    </html>
  );
} 