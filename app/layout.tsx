import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cargosent Logistics Solutions | Specialist Freight Forwarder Shanghai",
  description:
    "Cargosent is a specialist freight forwarder established in 2017 based in Shanghai, China, offering tailored global logistics solutions across air, ocean, road, rail, warehousing, and event cargo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
