import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Update page title according to recommendations
  title: "Guia Sono de Qualidade: Durma Melhor e Transforme Sua Vida",
  description: "Aprenda técnicas comprovadas para vencer a insônia, adormecer rápido e acordar revigorado. Adquira o guia completo Sono de Qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

