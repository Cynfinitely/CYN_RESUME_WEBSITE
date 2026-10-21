import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { skillCategories } from "@/data/skills";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f0e4c2",
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  alternates: { canonical: "/" },
  title: "Celal Yasin Nari | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure. Portfolio, projects, experience, and YouTube content.",
  openGraph: {
    title: "Celal Yasin Nari | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure.",
    url: profile.siteUrl,
    siteName: "Celal Yasin Nari",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/img/g1.png", width: 500, height: 500, alt: "Celal Yasin Nari" },
    ],
  },
  twitter: {
    card: "summary",
    title: "Celal Yasin Nari | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer in Helsinki building scalable products with Next.js and Azure.",
    images: ["/img/g1.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Celal Yasin Nari",
  jobTitle: profile.roles[0],
  url: profile.siteUrl,
  image: `${profile.siteUrl}/img/g1.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Helsinki",
    addressCountry: "FI",
  },
  worksFor: { "@type": "Organization", name: "Northfina" },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
  sameAs: [socials.github, socials.linkedin, socials.youtube, socials.medium],
  knowsAbout: skillCategories.flatMap(category => category.skills),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSerif.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape "<" so data can never close the script tag early
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
