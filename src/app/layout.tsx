import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "안예빈 | 포트폴리오",
  description: "React와 Next.js를 활용한 프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 font-sans">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
