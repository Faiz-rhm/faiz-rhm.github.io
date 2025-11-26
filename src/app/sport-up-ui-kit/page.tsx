'use client';

import Head from 'next/head';
import { Footer } from "@/components/footer/Footer";
import { Space, Container, Image } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function SportUpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SportUp & Fitness - Premium Flutter UI Kit",
    description: "Modern Flutter UI kit designed for sports and fitness applications with 45+ screens for iOS and Android. Build engaging workout tracking, sports news, and fitness community apps. Includes activity tracking, social features, statistics dashboards, and light/dark themes. Production-ready Flutter templates for the sports industry.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://faizrhm1.gumroad.com/l/vbnbv"
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
    image: "https://faizrhm.dev/images/sports/sportup_1.jpg",
    featureList: "45+ screens, Light & Dark mode, Activity tracking, Social features, Statistics dashboards, Workout tracking, Sports news, Fitness community, iOS & Android support, Clean reusable code"
  };

  return (
    <>
      <Head>
        <title>SportUp & Fitness Flutter UI Kit | 45+ Screens | iOS & Android | $99</title>
        <meta
          name="description"
          content="Modern Flutter UI kit for sports and fitness apps with 45+ screens for iOS & Android. Build workout tracking, sports news, and fitness community apps faster. Includes activity tracking, social features, and statistics dashboards. Production-ready Flutter template at $99."
        />
        <meta name="keywords" content="Flutter fitness app, sports UI kit, Flutter workout tracker, fitness app template, Flutter UI components, iOS Android fitness app, Flutter sports, activity tracking UI, Flutter health app, fitness community template" />
        <meta property="og:title" content="SportUp & Fitness Flutter UI Kit | 45+ Screens | iOS & Android" />
        <meta
          property="og:description"
          content="Build sports and fitness apps faster with 45+ premium Flutter screens. Includes activity tracking, social features, and statistics dashboards for iOS & Android."
        />
        <meta property="og:image" content="https://faizrhm.dev/images/sports/sportup_1.jpg" />
        <meta property="og:url" content="https://faizrhm.dev/sport-up-ui-kit" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faizrhm.dev/sport-up-ui-kit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Space h={50} />

      <HeroSection
        heading="SportUp & Fitness App"
        subheading="App Development"
        altText="SportUp Fitness UI Kit"
      />

      <Space h={50} />

      <Container size="xl">
        <Image src={'/images/sports/sportup_1.jpg'} alt={'SportUp Fitness App UI'} />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="A premium Flutter template for sports and fitness apps with a stunning light and dark theme, reusable components, and seamless integration."
        subheading="SportUp: Premium Flutter Template"
        altText="SportUp Fitness UI"
        description="This kit includes 45+ beautifully designed screens for activity tracking, sports news, fitness communities, and user profiles—everything you need for a complete sports and fitness experience."
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_2.jpg'} alt={'SportUp App Light Theme'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="SportUp is designed with both light and dark themes, optimized for a modern and polished user experience."
        subheading="Light & Dark Theme"
        altText="SportUp Fitness Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_3.jpg'} alt={'SportUp Activity Screens'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="This premium Flutter sports UI kit is ideal for developers, managers, and business owners. Simply connect to your backend and launch quickly—perfect for redesigns or Flutter transitions."
        subheading="Effortless Integration"
        altText="SportUp Integration"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_4.jpg'} alt={'SportUp Features UI'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="The SportUp kit features a consistent, user-friendly design system. All design decisions are centralized for easy customization and scalability."
        subheading="Fully Customizable"
        altText="SportUp Custom Theme"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_1.jpg'} alt={'SportUp Statistics Features'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        heading="SportUp follows Flutter best practices with modular, reusable components that make customization and scaling effortless."
        subheading="Clean & Reusable Code"
        altText="SportUp Code Best Practices"
        description=""
      />

      <Space h={50} />
      <Container size="xl">
        <Image src={'/images/sports/sportup_2.jpg'} alt={'SportUp Complete Solution'} />
      </Container>

      <Space h={50} />
      <HeaderLabel
        subheading="The Result"
        heading="Accelerate sports and fitness app development"
        description="45+ premium screens covering activity tracking, sports news, and fitness communities—everything you need for a complete sports app."
        altText="SportUp Outcome"
      />

      <Space h={50} />
      <AppPreviewBottomCard
        title="Get the SportUp & Fitness UI Kit Now"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/vbnbv'}
        previewUrl={'https://faiz-rhm.github.io/sportup_complete/'}
      />

      <CustomDivider />
      <Space h={20} />
      <Footer />
      <Space h={50} />
    </>
  );
}
