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
  description: "Calculate your SBA 7(a) loan payments, check DSCR, and get expert guidance on small business financing",
  keywords: ["SBA 7(a) loan calculator", "DSCR calculator", "small business financing", "SBA loan rates", "business loan calculator"],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL('https://tanveerpy.github.io/sbaloancalculator'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SBA 7(a) Loan Calculator - Free Payment & DSCR Analysis",
    description: "Calculate your SBA 7(a) loan payments, check DSCR, and get expert guidance on small business financing",
    type: "website",
    url: 'https://tanveerpy.github.io/sbaloancalculator',
  },
  twitter: {
    card: 'summary',
    title: "SBA 7(a) Loan Calculator - Free Payment & DSCR Analysis",
    description: "Calculate your SBA 7(a) loan payments, check DSCR, and get expert guidance on small business financing",
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
      </body>
    </html>
  );
}
