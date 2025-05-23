import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeaderMenu } from "@/components/header/HeaderMenu";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-Manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-Caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faiz Rhm – Flutter UI Kits & Developer Tools",
  description: "Explore premium Flutter UI kits, open-source components, and developer tools by Faiz Rhm.",
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
        <meta name="keywords" content="Flutter UI Kit, UI Components, Mobile UI, Developer Templates, Open Source, Faiz Rhm, Flutter Templates" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Faiz Rhm – Flutter UI Kits & Developer Tools" />
        <meta property="og:description" content="Explore premium Flutter UI kits, open-source components, and developer tools by Faiz Rhm." />
        <meta property="og:image" content="https://faizrhm.dev/preview.png" />
        <meta property="og:url" content="https://faizrhm.dev/" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faiz Rhm – Flutter UI Kits" />
        <meta name="twitter:description" content="Discover reusable Flutter UI components, templates and tools." />
        <meta name="twitter:image" content="https://faizrhm.dev/preview.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider defaultColorScheme="dark">
          <HeaderMenu />
          {children}
        </MantineProvider>
        <GoogleAnalytics gaId="G-TLM95WV9VN" />
      </body>
    </html>
  );
}
