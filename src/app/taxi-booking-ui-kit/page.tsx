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
    "@type": "MobileApplication",
    name: "Taxi Booking App",
    description: "A premium Flutter template for Taxi booking - passenger App, reusable components, and seamless integration.",
    operatingSystem: "Android, iOS",
    applicationCategory: "TravelApplication",
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      url: "https://faizrhm1.gumroad.com/l/mhsymb"
    },
    image: "https://yourdomain.com/images/hotel/hotel_1.png"
  };

  return (
    <>
      <Head>
        <title>Hotel Booking App – Premium Flutter UI Kit</title>
        <meta
          name="description"
          content="Explore our taxi booking Flutter app template – beautifully designed, highly customizable, and ready to integrate."
        />
        <meta property="og:title" content="Taxi Booking App – Premium Flutter UI Kit" />
        <meta
          property="og:description"
          content="40+ minimal screens, built for modern mobile booking experiences. Get the source today."
        />
        <meta property="og:image" content="https://yourdomain.com/images/hotel/hotel_1.png" />
        <meta property="og:url" content="https://yourdomain.com/hotel" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/hotel" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="Taxi Booking App"
        subheading="App Development"
        altText="Flutter Taxi Booking Template"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/taxi/taxi_1.png'} alt={'Hotel Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Taxi Booking: Premium Flutter template"
        heading="Welcome, the ultimate taxi booking app with stunning light theme."
        description="Every detail is optimized for a seamless and stylish experience, making your bookings effortless and enjoyable."
        altText="Flutter Taxi UI"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/taxi/taxi_2.png'} alt={'Taxi Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Effortless Integrations"
        heading="Seamless solution for developers and business owners."
        description="Connect to your backend with ease. Ideal for redesigns or Flutter transitions—supports both light and dark themes."
        altText="Flutter Taxi Integration"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/taxi/taxi_3.png'} alt={'Taxi Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Clean & Reusable Code"
        heading="Built with Flutter’s best practices."
        description="Small, reusable components. Ideal for scaling and maintaining taxi booking apps efficiently."
        altText="Flutter Taxi Template Code Quality"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/taxi/taxi_4.png'} alt={'Taxi Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="The Result"
        heading="Accelerate development with 45+ minimal screens."
        description="A customizable template to help developers focus on UX while leveraging prebuilt premium UI."
        altText="Taxi Booking Flutter Result"
      />

      <Space h={50} />

      <AppPreviewBottomCard
        title="Get the Taxi Booking App"
        sourceCodeUrl="https://faizrhm1.gumroad.com/l/mhsymb"
        previewUrl="https://faiz-rhm.github.io/taxi_passenger_complete/"
      />

      <Space h={20} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
