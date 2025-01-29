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
  title: "Faiz Rhm",
  description: "Hello, I am Faiz Rhm",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider defaultColorScheme="dark">
          <HeaderMenu />
          {children}
        </MantineProvider>
      </body>
      <GoogleAnalytics gaId="G-TLM95WV9VN" />
    </html>
  );
}
