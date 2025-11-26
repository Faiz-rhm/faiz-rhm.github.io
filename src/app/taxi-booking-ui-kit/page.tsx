'use client';

import Head from 'next/head';
import { Footer } from "@/components/footer/Footer";
import { Space, Container, Image } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function TaxiBookingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Taxi Booking Passenger - Premium Flutter UI Kit",
    description: "Complete Flutter UI kit for taxi and ride-sharing applications with 50+ screens for iOS and Android. Build Uber-like apps with real-time tracking, fare calculation, driver matching, and payment integration. Production-ready Flutter components that reduce development time by 70%. Premium taxi booking template for modern ride-hailing apps.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://faizrhm1.gumroad.com/l/mhsymb"
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
    image: "https://faizrhm.dev/images/taxi/taxi_1.png",
    featureList: "50+ screens, Real-time tracking, Fare calculation, Driver matching, Payment integration, Ride history, User profiles, Maps integration, Push notifications, Light & Dark mode, iOS & Android support, Clean reusable code"
  };

  return (
    <>
      <Head>
        <title>Taxi Booking Flutter UI Kit | 50+ Screens | Real-Time Tracking | iOS & Android | $149</title>
        <meta
          name="description"
          content="Complete Flutter taxi booking UI kit with 50+ screens for iOS & Android. Build Uber-like ride-sharing apps with real-time tracking, fare calculation, driver matching, and payment integration. Production-ready Flutter components reduce development time by 70%. Premium template at $149."
        />
        <meta name="keywords" content="Flutter taxi app, ride sharing UI kit, Flutter Uber clone, taxi booking template, Flutter UI components, iOS Android taxi app, Flutter ride hailing, real-time tracking UI, Flutter driver app, taxi passenger app template" />
        <meta property="og:title" content="Taxi Booking Flutter UI Kit | 50+ Screens | Real-Time Tracking | iOS & Android" />
        <meta
          property="og:description"
          content="Build Uber-like ride-sharing apps faster with 50+ premium Flutter screens. Includes real-time tracking, fare calculation, driver matching, and payment integration for iOS & Android."
        />
        <meta property="og:image" content="https://faizrhm.dev/images/taxi/taxi_1.png" />
        <meta property="og:url" content="https://faizrhm.dev/taxi-booking-ui-kit" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faizrhm.dev/taxi-booking-ui-kit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="Taxi Booking Passenger App"
        subheading="App Development"
        altText="Taxi Booking UI Kit"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/taxi/taxi_1.png'} alt={'Taxi Booking Passenger App UI'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="A premium Flutter template for taxi and ride-sharing apps with a stunning light theme, reusable components, and seamless integration."
        subheading="Taxi Booking: Premium Flutter Template"
        altText="Taxi Booking UI"
        description="This kit includes 50+ beautifully designed screens for real-time tracking, fare calculation, driver matching, ride history, and user profiles—everything you need for a complete ride-hailing experience."
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/taxi/taxi_2.png'} alt={'Taxi App Real-Time Tracking'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="Taxi Booking is designed with both light and dark themes, optimized for a modern and polished user experience."
        subheading="Light & Dark Theme"
        altText="Taxi Booking Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/taxi/taxi_3.png'} alt={'Taxi Booking Screens'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="This premium Flutter taxi booking UI kit is ideal for developers, managers, and business owners. Simply connect to your backend and launch quickly—perfect for building Uber-like apps or transitioning to Flutter."
        subheading="Effortless Integration"
        altText="Taxi Booking Integration"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/taxi/taxi_4.png'} alt={'Taxi Booking Features'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="The Taxi Booking kit features a consistent, user-friendly design system. All design decisions are centralized for easy customization and scalability."
        subheading="Fully Customizable"
        altText="Taxi Booking Custom Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/taxi/taxi_1.png'} alt={'Taxi Booking Payment Features'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="Taxi Booking follows Flutter best practices with modular, reusable components that make customization and scaling effortless."
        subheading="Clean & Reusable Code"
        altText="Taxi Booking Code Best Practices"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/taxi/taxi_2.png'} alt={'Taxi Booking Complete Solution'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="The Result"
        heading="Accelerate ride-sharing app development"
        description="50+ premium screens covering real-time tracking, fare calculation, driver matching, and payment integration—everything you need for a complete taxi booking app. Reduce development time by 70%."
        altText="Taxi Booking Outcome"
      />

      <Space h={50} />
      <AppPreviewBottomCard
        title="Get the Taxi Booking UI Kit Now"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/mhsymb'}
        previewUrl={'https://faiz-rhm.github.io/taxi_passenger_complete/'}
      />

      <CustomDivider />
      <Space h={20} />
      <Footer />
      <Space h={50} />
    </>
  );
}
