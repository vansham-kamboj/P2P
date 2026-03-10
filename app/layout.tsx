import type { Metadata } from "next";
import { Anton, Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-head"
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ping2Pay",
  description: "India's Chat-Native Crypto Layer"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${anton.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
