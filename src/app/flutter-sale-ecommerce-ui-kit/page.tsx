'use client';

import Head from 'next/head';
import { Footer } from "@/components/footer/Footer";
import { Container, Image, Space } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function ShopPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "FlutterShop – E-commerce App Kit",
    description: "A powerful Flutter e-commerce UI template with 70+ minimal screens, light/dark themes, and clean reusable code.",
    operatingSystem: "Android, iOS",
    applicationCategory: "ShoppingApplication",
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      url: "https://faizrhm1.gumroad.com/l/wgqcy"
    },
    image: "https://yourdomain.com/images/shop/shop_1.png"
  };

  return (
    <>
      <Head>
        <title>FlutterShop – E-commerce UI Kit for Flutter</title>
        <meta
          name="description"
          content="A premium Flutter UI kit for building beautiful and functional e-commerce apps. Includes 70+ screens, clean code, and light/dark themes."
        />
        <meta property="og:title" content="FlutterShop – E-commerce UI Kit for Flutter" />
        <meta
          property="og:description"
          content="Build your next e-commerce app faster with our customizable FlutterShop UI kit. Optimized for Android and iOS."
        />
        <meta property="og:image" content="https://yourdomain.com/images/shop/shop_1.png" />
        <meta property="og:url" content="https://yourdomain.com/shop" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/shop" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="The most powerful e-commerce kit"
        subheading="App Development"
        altText="Flutter Shop Hero Section"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/shop/shop_1.png'} alt={'FlutterShop UI'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="FlutterShop is a premium E-commerce UI kit that you can use to build various e-commerce apps using Flutter that works on both Android & iOS."
        subheading="FlutterShop: Premium Flutter template"
        altText="FlutterShop UI"
        description="This kit contains 70+ nicely crafted minimal screens that cover everything you need for your shop app."
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/shop/shop_2.png'} alt={'FlutterShop Light Theme'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="FlutterShop is designed in a beautiful light and dark theme and we have optimized each and every object according to the theme!"
        subheading="Light & Dark theme"
        altText="FlutterShop Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/shop/shop_3.png'} alt={'FlutterShop Product Screens'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="FlutterShop premium e-commerce UI kit is recommended for developers, managers, and owners. No need to worry about the frontend—just connect to your backend and you're ready. Ideal for redesigns and Flutter transitions."
        subheading="Effortless Integration"
        altText="FlutterShop Integration"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/shop/shop_5.png'} alt={'FlutterShop Cart and Product UI'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="We created a theme for FlutterShop to make designs consistent and user-friendly. All design decisions are centralized and easy to follow."
        subheading="Fully customizable"
        altText="FlutterShop Custom Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/shop/shop_6.png'} alt={'FlutterShop Reusable Components'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="At FlutterShop, we follow Flutter's best practices. Our modular, reusable components make it easy to customize and scale your app."
        subheading="Clean & reusable code"
        altText="FlutterShop Code Best Practices"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/shop/shop_4.png'} alt={'FlutterShop Complete Solution'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="The result"
        heading="Accelerate e-commerce development with FlutterShop"
        description="70+ nicely crafted minimal screens that cover everything you need for your shop app."
        altText="FlutterShop Outcome"
      />

      <Space h={50} />
      <AppPreviewBottomCard
        title="Get the Flutter Shop App Now"
        sourceCodeUrl={'https://faizrhm.lemonsqueezy.com/buy/7f81b517-cfca-4b44-a8c4-6dc8d0f5e7d7'}
        previewUrl={'https://faiz-rhm.github.io/shop_complete/'}
      />

      <CustomDivider />
      <Space h={20} />
      <Footer />
      <Space h={50} />
    </>
  );
}
