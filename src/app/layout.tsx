import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salehkhalifa.itslab.online"),
  title: {
    default: "Saleh Khalifa | IT Manager & Senior Network Engineer",
    template: "%s | Saleh Khalifa",
  },
  description:
    "Portfolio of Saleh Khalifa, an IT Manager & Senior Network Engineer with 18+ years of experience in network design, system administration, and cloud computing.",
  keywords: [
    "Network Engineer",
    "IT Manager",
    "Cloud Architect",
    "Saleh Khalifa",
    "Portfolio",
    "System Administrator",
    "Cybersecurity",
    "Network Security",
    "Infrastructure",
  ],
  authors: [{ name: "Saleh Khalifa" }],
  creator: "Saleh Khalifa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salehkhalifa.itslab.online",
    title: "Saleh Khalifa | IT Manager & Senior Network Engineer",
    description:
      "Senior Network Engineer & IT Manager portfolio showcasing projects, skills, and professional experience.",
    siteName: "Saleh Khalifa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saleh Khalifa | IT Manager & Senior Network Engineer",
    description:
      "Senior Network Engineer & IT Manager portfolio showcasing projects and skills.",
    creator: "@salehkhalifa", // Update with actual handle if available
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased text-slate-800 bg-[#FAFBFC]`}
      >
        <ScrollProgress />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saleh Khalifa",
              url: "https://salehkhalifa.itslab.online",
              image: "https://salehkhalifa.itslab.online/profile.png",
              sameAs: [
                "https://www.linkedin.com/in/saleh-mahmoud-01092726030/",
              ],
              jobTitle: "IT Manager & Senior Network Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description:
                "Senior Network Engineer & IT Manager with 18+ years of experience in network design, system administration, and cloud computing.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Assiut",
                addressCountry: "EG",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
