import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-droid",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyn-resume-website.vercel.app"),
  title: "Celal Yasin Nari | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure. Portfolio, projects, experience, and YouTube content.",
  openGraph: {
    title: "Celal Yasin Nari | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure.",
    url: "https://cyn-resume-website.vercel.app",
    siteName: "Celal Yasin Nari",
    locale: "en_US",
    type: "website",
    images: [{ url: "/img/g1.png", width: 800, height: 800, alt: "Celal Yasin Nari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celal Yasin Nari | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure.",
    images: ["/img/g1.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSerif.variable}`}>{children}</body>
    </html>
  );
}
