'use client';

import Head from 'next/head';
import { Footer } from "@/components/footer/Footer";
import { Space, Container, Image } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function HotelPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hotel Booking - Premium Flutter UI Kit",
    description: "Professional Flutter UI kit for hotel booking applications with 40+ screens for iOS and Android. Includes hotel search, room selection, booking management, user profiles, maps integration, date pickers, and payment flows. Production-ready Flutter components for hospitality app development.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://faizrhm1.gumroad.com/l/rbwog"
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
    image: "https://faizrhm.dev/images/hotel/hotel_1.png",
    featureList: "40+ screens, Light & Dark mode, Hotel search, Room selection, Booking management, User profiles, Maps integration, Date pickers, Payment flows, iOS & Android support"
  };

  return (
    <>
      <Head>
        <title>Hotel Booking Flutter UI Kit | 40+ Screens | iOS & Android | $99</title>
        <meta
          name="description"
          content="Professional Flutter hotel booking UI kit with 40+ screens for iOS & Android. Build hospitality apps faster with hotel search, room selection, booking management, and payment integration. Production-ready Flutter template at $99."
        />
        <meta name="keywords" content="Flutter hotel booking, hotel app UI kit, Flutter travel app, booking app template, Flutter UI components, iOS Android hotel app, Flutter hospitality, accommodation booking UI, Flutter reservation system" />
        <meta property="og:title" content="Hotel Booking Flutter UI Kit | 40+ Screens | iOS & Android" />
        <meta
          property="og:description"
          content="Build hotel booking apps faster with 40+ premium Flutter screens. Includes search, room selection, booking management, and payment integration for iOS & Android."
        />
        <meta property="og:image" content="https://faizrhm.dev/images/hotel/hotel_1.png" />
        <meta property="og:url" content="https://faizrhm.dev/hotel-booking-ui-kit" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faizrhm.dev/hotel-booking-ui-kit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="Hotel Booking App"
        subheading="App Development"
        altText="Hotel Booking UI Kit"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/hotel/hotel_1.png'} alt={'Hotel Booking App UI'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="A premium Flutter template for hotel booking apps with a light and dark theme, reusable components, and seamless integration."
        subheading="Hotel Booking: Premium Flutter Template"
        altText="Hotel Booking UI"
        description="This kit includes 40+ beautifully designed screens for hotel search, room details, bookings, and user profiles—everything you need for a complete hotel booking experience."
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/hotel/hotel_2.png'} alt={'Hotel App Light Theme'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="Hotel Booking is designed with both light and dark themes, optimized for a modern and polished user experience."
        subheading="Light & Dark Theme"
        altText="Hotel Booking Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/hotel/hotel_3.png'} alt={'Hotel Search Screens'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="Hotel Booking follows Flutter best practices with modular, reusable components that make customization and scaling effortless."
        subheading="Clean & Reusable Code"
        altText="Hotel Booking Code Best Practices"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/hotel/hotel_4.jpg'} alt={'Hotel Complete Solution'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="The Result"
        heading="Accelerate hotel booking app development"
        description="40+ premium screens covering hotel search, booking, and management—everything you need for a complete hospitality app."
        altText="Hotel Booking Outcome"
      />

      <Space h={50} />
      <AppPreviewBottomCard
        title="Get the Hotel Booking UI Kit Now"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/rbwog'}
        previewUrl={'https://faiz-rhm.github.io/hotel_complete/'}
      />

      <CustomDivider />
      <Space h={20} />
      <Footer />
      <Space h={50} />
    </>
  );
}
