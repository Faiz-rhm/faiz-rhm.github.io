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
    "@type": "SoftwareApplication",
    name: "FlutterShop – Premium Flutter E-Commerce UI Kit",
    description: "Premium Flutter e-commerce UI kit with 70+ production-ready screens for iOS and Android. Build modern shopping apps faster with light/dark themes, customizable design system, clean code, and complete feature coverage for mobile commerce applications.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://faizrhm1.gumroad.com/l/wgqcy"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1"
    },
    creator: {
      "@type": "Person",
      name: "Faiz Rhm",
      url: "https://faizrhm.dev"
    },
    image: "https://faizrhm.dev/images/shop/shop_1.png",
    featureList: "70+ screens, Light & Dark mode, Customizable design system, Clean reusable code, iOS & Android support, Shopping cart, Product listings, Checkout flows, User authentication"
  };

  return (
    <>
      <Head>
        <title>FlutterShop - Premium Flutter E-Commerce UI Kit | 70+ Screens | Android & iOS</title>
        <meta
          name="description"
          content="Premium Flutter e-commerce UI kit with 70+ screens for iOS & Android. Build shopping apps faster with light/dark themes, clean code, and customizable design system. Production-ready Flutter templates starting at $99."
        />
        <meta name="keywords" content="Flutter UI kit, e-commerce template, Flutter shopping app, mobile app UI, Flutter components, iOS Android template, Flutter marketplace, shopping cart UI, Flutter ecommerce, mobile commerce template" />
        <meta property="og:title" content="FlutterShop - Premium Flutter E-Commerce UI Kit | 70+ Screens" />
        <meta
          property="og:description"
          content="Build your next shopping app faster with FlutterShop - 70+ premium screens, light/dark mode, and production-ready Flutter code for iOS & Android."
        />
        <meta property="og:image" content="https://faizrhm.dev/images/shop/shop_1.png" />
        <meta property="og:url" content="https://faizrhm.dev/flutter-sale-ecommerce-ui-kit" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faizrhm.dev/flutter-sale-ecommerce-ui-kit" />
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
        title="Get the E-Commerce App Now"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/wgqcy'}
        previewUrl={'https://faiz-rhm.github.io/shop_complete/'}
      />

      <CustomDivider />
      <Space h={20} />
      <Footer />
      <Space h={50} />
    </>
  );
}
