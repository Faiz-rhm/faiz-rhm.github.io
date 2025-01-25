'use client'

import { Footer } from "@/components/footer/Footer";
import { Box} from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function Shop() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="The most powerful e-commerce kit"
        subheading="App Development"
        altText="Fluter Shop"
      />

      <Box pb={70} />

      <HeaderLabel
        heading="FlutterShop is designed in a beautiful light and dark theme and we have optimized each and every object according to the theme!"
        subheading="App Development"
        altText="Fluter Shop"
        description=""
      />

      <Box pb={50} />

      <HeaderLabel
        heading="FlutterShop is a premium E-commerce UI kit that you can use to build various e-commerce apps using Flutter that works on both Android & iOS.

        This kit contains 100+ nicely crafted minimal screens that cover everything you need for your shop app."
        subheading="FlutterShop: Premium Flutter template"
        altText="Fluter Shop"
        description=""
      />

      <Box pb={50} />

      <HeaderLabel
        heading="FlutterShop is designed in a beautiful light and dark theme and we have optimized each and every object according to the theme!"
        subheading="Light & Dark theme"
        altText="Fluter Shop"
        description=""
      />

      <Box pb={50} />

      <HeaderLabel
        heading="FlutterShop premium e-commerce UI kit is recommended for developers, managers, and owners. No need you worry about the frontend FlutterShop covers everything for you, just need to connect it with the backend. Also recommended for those who want to redesign their shop app or shift to flutter with premium design. All of the screens support both light & dark themes."
        subheading="Clean & reusable code"
        altText="Fluter Shop"
        description=""
      />

      <Box pb={50} />

      <HeaderLabel
        heading="At FlutterShop, we follow to the best practices recommended by the Flutter team. Our code is designed in small, reusable components, allowing you to easily build and customize your screens with the exact features you need. This approach not only enhances flexibility but also ensures that your Shop are maintainable and scalable."
        subheading="Effortless Integration"
        altText="Fluter Shop"
        description=""
      />

      <Box pb={50} />

      <HeaderLabel
        heading="We created a them for FlutterShop to help them make consistent and user-friendly designs. This them is useful for developers and other team members because it brings all design decisions into one organized place, making it easier to understand the reasons behind them."
        subheading="Fully customizable"
        altText="Fluter Shop"
        description=""
      />


      <Box pb={20} />

      <AppPreviewBottomCard
        title="Get the Hotel Booking App"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/rbwog'}
        previewUrl={'https://faiz-rhm.github.io/hotel_complete/'}
      />

      <CustomDivider/>

      <Box pb={20} />


      <Box pb={20} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
