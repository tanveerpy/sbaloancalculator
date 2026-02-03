import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SBA 7(a) Loan Calculator - Free Payment & DSCR Analysis",
  description: "Calculate your SBA 7(a) loan payments, check DSCR pre-qualification, estimate guaranty fees, and compare rates. Free calculator with industry templates & expert guidance.",
  keywords: ["SBA 7(a) loan calculator", "SBA loan calculator", "DSCR calculator", "small business loan calculator", "SBA payment calculator", "guaranty fee calculator", "business financing calculator", "SBA 7a calculator"],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL('https://tanveerpy.github.io/sbaloancalculator'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SBA 7(a) Loan Calculator - Free Payment & DSCR Analysis",
    description: "Calculate SBA loan payments in seconds. Check DSCR pre-qualification, estimate fees, and get expert guidance on small business financing.",
    type: "website",
    url: 'https://tanveerpy.github.io/sbaloancalculator',
    siteName: "SBA Loan Calculator",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: "SBA 7(a) Loan Calculator - Free Tool",
    description: "Calculate SBA loan payments, DSCR, and fees instantly. Get pre-qualified for small business financing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Organization Schema - Site-wide SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SBA Loan Calculator",
              "url": "https://tanveerpy.github.io/sbaloancalculator",
              "logo": "https://tanveerpy.github.io/sbaloancalculator/logo.png",
              "description": "Free SBA 7(a) loan calculator with DSCR analysis and expert financing guidance for small businesses",
              "founder": {
                "@type": "Person",
                "name": "Michael Chen",
                "jobTitle": "CPA, Small Business Finance Specialist"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@sbaloancalculator.com",
                "contactType": "Customer Service"
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SBA Loan Calculator",
              "url": "https://tanveerpy.github.io/sbaloancalculator",
              "description": "Calculate SBA 7(a) loan payments, DSCR ratios, guaranty fees, and total financing costs",
              "publisher": {
                "@type": "Organization",
                "name": "SBA Loan Calculator"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
