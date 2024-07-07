import type { Metadata } from "next";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

import Header from "./components/Header"

export const metadata: Metadata = {
  title: '붕스타그램',
  description: '세명컴퓨터고등학교 세붕이',
  keywords: '세붕, 세붕이, 붕스타그램, 세명, 세명컴, 세명컴퓨터, 세명컴고, 세명컴퓨터고등학교',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={metadata.keywords as string} />
      </head>
      <body>
        <div className={styles.headerWrap}>
          <Header />
        </div>
        <div className={styles.childrenWrap}>
          {children}
        </div>
      </body>
    </html>
  );
}
