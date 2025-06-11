import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Point Break Legal - IP & Legal Services",
  description:
    "Expert legal services specialising in intellectual property, copyright law, trademarks, and IP management. Professional legal consultation and representation.",
  keywords:
    "legal services, intellectual property, copyright law, trademarks, IP management, legal consultation",
  authors: [{ name: "Point Break Legal" }],
  creator: "Point Break Legal",
  publisher: "Point Break Legal",
  metadataBase: new URL("https://pointbreaklegal.com"),
  openGraph: {
    title: "Point Break Legal - IP & Legal Services",
    description:
      "Expert legal services specializing in intellectual property, copyright law, trademarks, and IP management.",
    type: "website",
    locale: "en_US",
    siteName: "Point Break Legal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point Break Legal - IP & Legal Services",
    description:
      "Expert legal services specializing in intellectual property, copyright law, trademarks, and IP management.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${lato.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
