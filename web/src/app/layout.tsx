import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    template: "%s | SSAG Tecnologia",
    default: "SSAG Tecnologia | Engenharia de Software e Gestão Governada",
  },
  description: "ERP, automação e geração industrial de sistemas com rastreabilidade e governança.",
  openGraph: {
    title: "SSAG Tecnologia",
    description: "Engenharia de Software e Gestão Governada",
    url: "https://ssagtecnologia.com",
    siteName: "SSAG Tecnologia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSAG Tecnologia",
    description: "Engenharia de Software e Gestão Governada",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-bg-light text-text`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
