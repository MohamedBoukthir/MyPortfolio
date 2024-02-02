import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/Providers/LenisProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import og from "@/public/og.jpeg";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedboukthir.vercel.app/"),
  title: "Mohamed Boukthir | Portfolio",
  description:
    "Building the future with creativity and caffeine. Join me on this exciting digital journey.",
  openGraph: {
    title: "Mohamed Boukthir | Portfolio",
    description: "Building the future with creativity and caffeine. Join me on this exciting digital journey.",
    url: "https://mohamedboukthir.vercel.app/",
    siteName: "mohamedboukthir.vercel.app",
    type: "website",
    images: [
      {
        url: og.src,
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mohamedboukthir.vercel.app/",
  },
  category: "programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white text-black antialiased dark:bg-black dark:text-white",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
