import { Playfair_Display, Lora, Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Cartagena Fragmentada",
  description: "Descubre los fragmentos de historia y cultura de Cartagena de Indias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfairDisplay.variable} ${lora.variable} ${raleway.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[94vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
