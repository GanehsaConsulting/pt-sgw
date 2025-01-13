import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButon";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT SGW Indo Logistik",
  description: "Membawa Kemudahan dalam Pengelolaan Jasa Transportasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
        <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
