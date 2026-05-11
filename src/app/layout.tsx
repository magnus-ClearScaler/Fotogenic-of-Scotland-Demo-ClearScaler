import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fotogenic-of-scotland-demo.vercel.app"),
  title: {
    default:
      "Fotogenic of Scotland. Fine art wedding & lifestyle photography, Scotland",
    template: "%s · Fotogenic of Scotland",
  },
  description:
    "Soulful and vibrant wedding photography & film by Fotogenic of Scotland. Glasgow & Edinburgh studio. Documentary fine art coverage across Scotland, the Highlands & Islands, and destination weddings worldwide.",
  keywords: [
    "Glasgow wedding photographer",
    "Edinburgh wedding photographer",
    "Scotland wedding photography",
    "Highlands wedding photographer",
    "fine art wedding photography",
    "documentary wedding photographer Scotland",
    "wedding films Scotland",
    "Mount Stuart wedding",
    "Dumfries House wedding",
    "destination wedding photographer",
  ],
  openGraph: {
    title: "Fotogenic of Scotland. Wedding & lifestyle photography",
    description:
      "Documentary, light-filled wedding photography & films across Scotland. 19 years, 700+ weddings, published in Vogue, Condé Nast Traveler, Marie Claire and Elle.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${inter.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
