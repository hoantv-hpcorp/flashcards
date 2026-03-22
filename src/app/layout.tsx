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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
