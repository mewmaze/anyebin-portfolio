import "./globals.css";

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
