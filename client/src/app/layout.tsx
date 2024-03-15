import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import Providers from "./providers";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cab Booking App",
  description: "Assigment for Scaler Internship Program 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-zinc-100 border max-w-screen-2xl mx-auto`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
