
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/navbar";
import Hero from "@/Components/Hero";
import NewCollections from "@/Components/Newcollections.";
import WinterCollection from "@/Components/wintercollection";
import WinterEssentials from "@/Components/winterEssentials";
import CategorySection from "@/Components/categorysection";
import Gendercollecion from "@/Components/Gendercollection";
import BestSellers from "@/Components/BestSellers";
import LayeringBasic from "@/Components/Layeringbasic";
import Footer from "@/Components/footer";
import TopBar from "@/Components/topbar/page";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "./context/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <CartProvider>
            <TopBar />
            <Navbar />
            {children}
            <Hero />
            <NewCollections />
            <WinterCollection />
            <Gendercollecion />
            <BestSellers />
            <WinterEssentials />
            <CategorySection />
            <LayeringBasic />
            <Footer />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
