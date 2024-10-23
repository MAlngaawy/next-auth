import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../../globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
// import '@mantine/modals/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Link, routing } from '@/i18n/routing';
import SwitchLangBtn from '../../Components/Btns/SwitchLangBtn';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <MantineProvider>
            <Notifications />
            <SwitchLangBtn />

            <Link
              className="w-full my-4 mx-auto text-3xl block text-center text-blue-500 hover:underline"
              href={'/'}
            >
              HomePage
            </Link>

            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
