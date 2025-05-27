'use client'

import { Footer } from "@/components/footer/Footer";
import { Container, Image, Space} from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function ShopPage() {
  return (
    <>
      <Space h={50} />

      <HeroSection
        heading="The most powerful e-commerce kit"
        subheading="App Development"
        altText="Fluter Shop"
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_1.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="FlutterShop is a premium E-commerce UI kit that you can use to build various e-commerce apps using Flutter that works on both Android & iOS."
        subheading="FlutterShop: Premium Flutter template"
        altText="Fluter Shop"
        description="This kit contains 70+ nicely crafted minimal screens that cover everything you need for your shop app."
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_2.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="FlutterShop is designed in a beautiful light and dark theme and we have optimized each and every object according to the theme!"
        subheading="Light & Dark theme"
        altText="Fluter Shop"
        description=""
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_3.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="FlutterShop premium e-commerce UI kit is recommended for developers, managers, and owners. No need you worry about the frontend FlutterShop covers everything for you, just need to connect it with the backend. Also recommended for those who want to redesign their shop app or shift to flutter with premium design. All of the screens support both light & dark themes."
        subheading="Effortless Integration"
        altText="Fluter Shop"
        description=""
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_5.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="We created a them for FlutterShop to help them make consistent and user-friendly designs. This them is useful for developers and other team members because it brings all design decisions into one organized place, making it easier to understand the reasons behind them."
        subheading="Fully customizable"
        altText="Fluter Shop"
        description=""
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_6.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        heading="At FlutterShop, we follow to the best practices recommended by the Flutter team. Our code is designed in small, reusable components, allowing you to easily build and customize your screens with the exact features you need. This approach not only enhances flexibility but also ensures that your projects are maintainable and scalable."
        subheading="Clean & reusable code"
        altText="Fluter Shop"
        description=""
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/shop/shop_4.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="The result"
        heading="FlutterShop is a powerful e-commerce solution designed to accelerate app development by providing a fully functional, customizable Flutter template. It significantly reduces development time, enabling developers to focus on enhancing user experience and business growth."
        description="70+ nicely crafted minimal screens that cover everything you need for your shop app."
        altText="Fluter Shop"
      />

      <Space h={50} />

      <AppPreviewBottomCard
        title="Get the Flutter Shop App Now"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/wgqcy'}
        previewUrl={'https://faiz-rhm.github.io/shop_complete/'}
      />

      <CustomDivider/>

      <Space h={20} />


      <Space h={20} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
