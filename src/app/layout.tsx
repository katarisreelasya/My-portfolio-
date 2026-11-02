import type { Metadata, Viewport } from "next";
import { Unbounded, Lexend } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const display = Unbounded({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display", display: "swap" });
const body = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} | SDET & Full-Stack Developer`,
  description:
    "Portfolio of Sree Lasya Katari, Software Test Engineer at Cognizant specialising in automation testing, API validation, database testing and full-stack development.",
  keywords: ["SDET", "Software Development Engineer in Test", "Selenium", "PyTest", "API Testing", "Software Test Engineer", "Full-Stack Developer", "Hyderabad"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | SDET`,
    description: "Software Development Engineer in Test building scalable software and reliable quality through automation, API validation and engineering excellence.",
    type: "website",
    url: profile.url,
  },
  twitter: { card: "summary_large_image", title: `${profile.name} | SDET` },
};

export const viewport: Viewport = { themeColor: "#050A14", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  email: profile.email,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
