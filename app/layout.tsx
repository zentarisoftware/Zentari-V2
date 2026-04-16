import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "./Components/Providers/SmoothScroll";
import FramerPreloader from "./Components/Providers/FramerPreloader";
import "./globals.css";
import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zentari Software",
  description: "Zentari Software is a software development company that provides custom software development services to businesses.",
  metadataBase: new URL("https://zentariph.com"),
  openGraph: {
    title: "Zentari Software",
    description:
      "Zentari Software is a software development company that provides custom software development services to businesses.",
    url: "https://zentariph.com",
    siteName: "Zentari Software",
    images: [
      {
        url: "/icon.png",
        alt: "Zentari Software icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentari Software",
    description:
      "Zentari Software is a software development company that provides custom software development services to businesses.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FramerPreloader>
          <Nav />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </FramerPreloader>
        <Analytics />
      </body>
    </html>
  );
}
