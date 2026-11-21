import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import "./hero.css";
import "./sections.css";
import "./stats.css";
import "./features.css";
import "./pages.css";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const head = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-head",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arjunta.com"),
  title: { default: "Arjunta — Full-Service Digital Marketing Agency", template: "%s" },
  description:
    "Arjunta is a full-service digital marketing agency for brands in the USA, UK, Canada, Australia and UAE — SEO, Google Ads, social media, paid social, content, web design, email marketing and lead generation.",
  openGraph: {
    title: "Arjunta — Full-Service Digital Marketing Agency",
    description: "One partner. Every channel. Measurable growth.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0e0d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${head.variable}`}>
      <body>
        <Effects />
        <Nav />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
