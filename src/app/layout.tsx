import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOTO - The Ultimate Drinking Game App",
  description:
    "SOTO is the ultimate drinking game app to spice up your pre-drinks with friends",
  keywords:
    "drinking game, party game, app, alcohol, pre-drinks, truth or dare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-auto animated-bg`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
