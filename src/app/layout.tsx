import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Craft Renovate | 東京のリノベーション・リフォーム専門",
    template: "%s | Craft Renovate",
  },
  description:
    "東京のリノベーション・リフォーム専門会社。マンション・戸建て・オフィスの施工実績多数。理想の空間をカタチにします。",
  keywords: ["リノベーション", "リフォーム", "東京", "マンション", "戸建て"],
  openGraph: {
    title: "Craft Renovate",
    description: "東京のリノベーション・リフォーム専門会社",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
