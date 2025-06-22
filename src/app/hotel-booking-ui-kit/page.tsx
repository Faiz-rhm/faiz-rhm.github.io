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
    name: "Hotel Booking App",
    description: "A premium Flutter template for hotel booking apps with a light and dark theme, reusable components, and seamless integration.",
    operatingSystem: "Android, iOS",
    applicationCategory: "TravelApplication",
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      url: "https://faizrhm1.gumroad.com/l/rbwog"
    },
    image: "https://yourdomain.com/images/hotel/hotel_1.png"
  };

  return (
    <>
      <Head>
        <title>Hotel Booking App – Premium Flutter UI Kit</title>
        <meta
          name="description"
          content="Explore our hotel booking Flutter app template – beautifully designed, highly customizable, and ready to integrate."
        />
        <meta property="og:title" content="Hotel Booking App – Premium Flutter UI Kit" />
        <meta
          property="og:description"
          content="45+ minimal screens, light and dark theme, built for modern mobile booking experiences. Get the source today."
        />
        <meta property="og:image" content="https://yourdomain.com/images/hotel/hotel_1.png" />
        <meta property="og:url" content="https://yourdomain.com/hotel" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/hotel" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="Hotel Booking App"
        subheading="App Development"
        altText="Flutter Hotel Booking Template"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/hotel/hotel_1.png'} alt={'Hotel Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Hotel Booking: Premium Flutter template"
        heading="Welcome, the ultimate hotel booking app with stunning light theme."
        description="Every detail is optimized for a seamless and stylish experience, making your bookings effortless and enjoyable."
        altText="Flutter Hotel UI"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/hotel/hotel_2.png'} alt={'Hotel Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Effortless Integrations"
        heading="Seamless solution for developers and business owners."
        description="Connect to your backend with ease. Ideal for redesigns or Flutter transitions—supports both light and dark themes."
        altText="Flutter Hotel Integration"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/hotel/hotel_3.png'} alt={'Hotel Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Clean & Reusable Code"
        heading="Built with Flutter’s best practices."
        description="Small, reusable components. Ideal for scaling and maintaining hotel apps efficiently."
        altText="Flutter Hotel Template Code Quality"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/hotel/hotel_4.jpg'} alt={'Hotel Booking App'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="The Result"
        heading="Accelerate development with 45+ minimal screens."
        description="A customizable template to help developers focus on UX while leveraging prebuilt premium UI."
        altText="Hotel Booking Flutter Result"
      />

      <Space h={50} />

      <AppPreviewBottomCard
        title="Get the Hotel Booking App"
        sourceCodeUrl="https://faizrhm.lemonsqueezy.com/buy/a908cf50-826b-4f07-ae30-f7bcbd4fafa7"
        previewUrl="https://faiz-rhm.github.io/hotel_complete/"
      />

      <Space h={20} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
