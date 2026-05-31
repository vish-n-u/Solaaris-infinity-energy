import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/ThemeProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solaaris Infinity Energy | Solar Solutions for Home & Business",
  description:
    "Solaaris Infinity Energy provides rooftop solar installation, savings consultation, and government subsidy assistance for residential, commercial, and rural properties across Maharashtra.",
  keywords:
    "solar energy, rooftop solar, solar installation, PM Surya Ghar, solar subsidy, Maharashtra solar, Bhardwaj Tandel",
  openGraph: {
    title: "Solaaris Infinity Energy | Solar Solutions for Home & Business",
    description:
      "Trusted solar solutions provider. Rooftop installation, savings consultation, and government subsidy assistance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakartaSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
