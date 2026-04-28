import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";

// Note: We removed the import of Header from here

const harmond = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-harmond",
  display: "swap",
});

const nohemi = Inter({
  subsets: ["latin"],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hinal Prabhu | Product Owner & BA",
  description: "Product Strategist and Business Analyst Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${harmond.variable} ${nohemi.variable} dark`} suppressHydrationWarning>
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          <NoiseOverlay />
          <CustomCursor />
          
          {/* We removed <Header /> from here to stop the double header */}
          <main>{children}</main>
          
        </LenisProvider>
      </body>
    </html>
  );
}