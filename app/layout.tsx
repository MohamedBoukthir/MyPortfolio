import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/Providers/LenisProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider"; 

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false
})

export const metadata: Metadata = {
  title: "Mohamed Boukthir",
  description: "Building the future with creativity and caffeine. Join me on this exciting digital journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "bg-white text-black antialiased dark:bg-black dark:text-white",
          fontSans.variable
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            <Navbar/>
              <LenisProvider>
                <main>
                  {children}
                </main>
              </LenisProvider>
            <Footer/>
          </ThemeProvider>       
      </body>
    </html>
  );
}
