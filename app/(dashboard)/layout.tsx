import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next-Pizza App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={''}>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
