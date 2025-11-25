import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeaderMenu } from "@/components/header/HeaderMenu";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "@/components/analytics/CookieConsent";

const geistSans = Geist({
  variable: "--font-Manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-Caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flutter Development Services | Enterprise Mobile App Development - Faiz Rhm",
  description: "Professional Flutter developer delivering scalable cross-platform mobile applications. Specializing in iOS/Android app development for enterprise clients worldwide. View portfolio & case studies.",
  keywords: "Flutter developer, mobile app development, cross-platform development, Flutter development services, iOS development, Android development, enterprise mobile apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        {/* Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://faizrhm.dev/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flutter Development Services | Enterprise Mobile App Development - Faiz Rhm" />
        <meta property="og:description" content="Professional Flutter developer delivering scalable cross-platform mobile applications. Specializing in iOS/Android app development for enterprise clients worldwide." />
        <meta property="og:image" content="https://faizrhm.dev/preview.png" />
        <meta property="og:url" content="https://faizrhm.dev/" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flutter Development Services - Faiz Rhm" />
        <meta name="twitter:description" content="Professional Flutter developer specializing in enterprise-grade cross-platform mobile applications for iOS and Android." />
        <meta name="twitter:image" content="https://faizrhm.dev/preview.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider defaultColorScheme="dark">
          <HeaderMenu />
          {children}
          <CookieConsent />
        </MantineProvider>
        <GoogleAnalytics gaId="G-TLM95WV9VN" />
      </body>
    </html>
  );
}
