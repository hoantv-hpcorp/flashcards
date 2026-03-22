import type { Metadata } from "next";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mindful Scholar",
  description: "Deep learning flashcard app",
};

import { ClerkProvider, SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <ClerkProvider>
      <html lang="en" className={`${lexend.variable} ${plusJakartaSans.variable}`}>
        <body>
          <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderBottom: '1px solid #eaeaea' }}>
            {!userId ? (
              <SignInButton />
            ) : (
              <UserButton />
            )}
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
