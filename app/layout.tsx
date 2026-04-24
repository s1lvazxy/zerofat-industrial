import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { SitePolish } from "../components/ui/site-polish";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ZeroFat – Máquinas de Desengordurar Industriais",
  description:
    "Máquinas de desengordurar de alta performance para indústria metalomecânica, automóvel e alimentar. Eficiência máxima, consumo mínimo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <SitePolish />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
