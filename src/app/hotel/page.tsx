'use client'

import { Footer } from "@/components/footer/Footer";
import { Box, Container} from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function Projects() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Hotel Booking App"
        subheading="App Development"
        altText="Fluter Shop"
      />

      <Box pb={50} />

      <Container size="xl">
        <img
          src={'/images/hotel/hotel_1.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Box pb={50} />

      <HeaderLabel
        subheading="Hotel Booking: Premium Flutter template"
        heading="Welcome, the ultimate hotel booking app with stunning light theme."
        description="Every detail is optimized for a seamless and stylish experience, making your bookings effortless and enjoyable."
        altText="Fluter Shop"
      />

      <Box pb={50} />

      <Container size="xl">
        <img
          src={'/images/hotel/hotel_2.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Box pb={50} />

      <HeaderLabel
        subheading="Effortless Integrations"
        heading="Our premium hotel booking app is designed for developers, managers, and business owners seeking a seamless solution. With our app, there’s no need to worry about frontend development—everything is ready for you. Simply connect it to your backend, and you’re good to go!"
        description="It’s also perfect for those looking to redesign their existing app or transition to Flutter with a modern, premium design. Every screen is thoughtfully crafted to support both light and dark themes, ensuring a consistent and visually stunning experience for all users."
        altText="Fluter Shop"
      />

      <Box pb={50} />

      <Container size="xl">
        <img
          src={'/images/hotel/hotel_3.png'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Box pb={50} />

      <HeaderLabel
        subheading="Clean & reusable code"
        heading="We adhere to the best practices recommended by the Flutter team. Our code is built with small, reusable components, making it effortless to customize and create screens with the features you need."
        description="This approach ensures flexibility, maintainability, and scalability for all your hotel booking projects."
        altText="Fluter Shop"
      />

      <Box pb={50} />

      <Container size="xl">
        <img
          src={'/images/hotel/hotel_4.jpg'}
          alt={'Hotel Booking App'}
        />
      </Container>

      <Box pb={50} />

      <HeaderLabel
        subheading="The result"
        heading="Hotel booking solution designed to accelerate app development with a fully functional, customizable Flutter template. It streamlines the development process, allowing developers to focus on creating exceptional user experiences and driving business growth."
        description="45+ nicely crafted minimal screens that cover everything you need for your shop app."
        altText="Fluter Shop"
      />

      <Box pb={50} />

      <AppPreviewBottomCard
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/rbwog'}
        previewUrl={'https://faiz-rhm.github.io/hotel_complete/'}
      />

      <Box pb={20} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
