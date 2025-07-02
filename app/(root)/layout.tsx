import type { Metadata } from 'next';

import { Header } from '../../shared/components/shared';

export const metadata: Metadata = {
  title: 'Next-Pizza App',
  icons: {
    icon: {
      url: '/assets/logo.png',
      href: '/assets/logo.png',
    },
  },
};

export default function HomeRootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      {children}
      {modal}
    </main>
  );
}
