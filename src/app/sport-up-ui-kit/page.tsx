'use client';

import Head from 'next/head';
import { Space, Container, Image } from '@mantine/core';
import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import HeroSection from '@/components/others/HeroSection';
import HeaderLabel from '@/components/others/HeaderLabel';
import AppPreviewBottomCard from '@/components/others/AppPreviewBottomCard';

export default function HotelPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Sportup App – Fitness UI Kit',
    description:
      'Sportup is a customizable Flutter UI Kit with 35+ screens, ideal for fitness, hotel, and booking applications. Light & dark themes supported.',
    brand: 'Sportup',
    image: 'https://faiz-rhm.github.io/sportup_complete/cover.jpg',
    url: 'https://faiz-rhm.github.io/sportup_complete/',
    offers: {
      '@type': 'Offer',
      price: '39.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://faizrhm1.gumroad.com/l/vbnbv',
    },
    author: {
      '@type': 'Person',
      name: 'Faiz Rahman',
    },
  };

  return (
    <>
      <Head>
        <title>Sportup App – Flutter Fitness UI Kit</title>
        <meta
          name="description"
          content="Sportup is a premium Flutter UI kit featuring 35+ beautiful screens. Designed for fitness, hotel, and booking apps with light & dark modes."
        />
        <meta property="og:title" content="Sportup App – Flutter Fitness UI Kit" />
        <meta
          property="og:description"
          content="35+ polished Flutter screens crafted for fitness and business apps. Ready to plug into your backend."
        />
        <meta property="og:image" content="https://faiz-rhm.github.io/sportup_complete/cover.jpg" />
        <meta property="og:url" content="https://faiz-rhm.github.io/sportup_complete/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faiz-rhm.github.io/sportup_complete/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="Sportup App - Fitness UI Kit"
        subheading="App Development"
        altText="Flutter Sportup"
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_1.jpg'} alt={'Sportup'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="Sportup: Premium Flutter template"
        heading="Welcome, the ultimate Sportup with stunning light and dark theme."
        description="Every detail is optimized for a seamless and stylish experience, making your Sportup effortless and enjoyable."
        altText="Flutter Sportup"
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_2.jpg'} alt={'Sportup'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="Effortless Integrations"
        heading="Our premium Sportup is designed for developers, managers, and business owners seeking a seamless solution. With our app, there’s no need to worry about frontend development—everything is ready for you. Simply connect it to your backend, and you’re good to go!"
        description="It’s also perfect for those looking to redesign their existing app or transition to Flutter with a modern, premium design. Every screen is thoughtfully crafted to support both light and dark themes, ensuring a consistent and visually stunning experience for all users."
        altText="Flutter Sportup"
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_3.jpg'} alt={'Sportup'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="Clean & reusable code"
        heading="We adhere to the best practices recommended by the Flutter team. Our code is built with small, reusable components, making it effortless to customize and create screens with the features you need."
        description="This approach ensures flexibility, maintainability, and scalability for all your hotel booking projects."
        altText="Flutter Sportup"
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_4.jpg'} alt={'Sportup'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="The result"
        heading="Sportup solution designed to accelerate app development with a fully functional, customizable Flutter template. It streamlines the development process, allowing developers to focus on creating exceptional user experiences and driving business growth."
        description="35+ nicely crafted minimal screens that cover everything you need for your hotel app."
        altText="Flutter Sportup"
      />

      <Space h={50} />
      <AppPreviewBottomCard
        title="Get the Sportup App"
        sourceCodeUrl={'https://faizrhm.lemonsqueezy.com/buy/38bddd23-5bae-41d0-90e3-dc62303fae77'}
        previewUrl={'https://faiz-rhm.github.io/sportup_complete/'}
      />

      <Space h={20} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
