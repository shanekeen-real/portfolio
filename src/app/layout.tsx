import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/clash-grotesk.css";
import "@/styles/locomotive-scroll.css";
import AppContainer from "@/components/AppContainer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shane - UI/UX Designer & Developer",
  description: "UI/UX designer and full-stack developer specializing in creating intuitive digital experiences. View my portfolio of design projects and case studies.",
  keywords: ["UI/UX Design", "Product Design", "Frontend Development", "Portfolio", "Case Studies"],
  authors: [{ name: "Shane" }],
  creator: "Shane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shane.technology",
    title: "Shane - UI/UX Designer & Developer",
    description: "UI/UX designer and full-stack developer specializing in creating intuitive digital experiences.",
    siteName: "Shane's Portfolio",
    images: [
      {
        url: "/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Shane's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane - UI/UX Designer & Developer",
    description: "UI/UX designer and full-stack developer specializing in creating intuitive digital experiences.",
    images: ["/assets/logo.webp"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <AppContainer>
            <PageTransition>
              {children}
            </PageTransition>
          </AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
