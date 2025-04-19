'use client'

import { Footer } from "@/components/footer/Footer";
import { Space, Container, Image} from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import HeaderLabel from "../../components/others/HeaderLabel";
import AppPreviewBottomCard from "../../components/others/AppPreviewBottomCard";

export default function HotelPage() {
  return (
    <>
      <Space h={50} />

      <HeroSection
        heading="Sportup App - Fitness UI Kit"
        subheading="App Development"
        altText="Fluter Sportup"
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/sports/sportup_1.jpg'}
          alt={'Sportup'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Sportup: Premium Flutter template"
        heading="Welcome, the ultimate Sportup with stunning light and dark theme."
        description="Every detail is optimized for a seamless and stylish experience, making your Sportup effortless and enjoyable."
        altText="Fluter Sportup"
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/sports/sportup_2.jpg'}
          alt={'Sportup'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Effortless Integrations"
        heading="Our premium Sportup is designed for developers, managers, and business owners seeking a seamless solution. With our app, there’s no need to worry about frontend development—everything is ready for you. Simply connect it to your backend, and you’re good to go!"
        description="It’s also perfect for those looking to redesign their existing app or transition to Flutter with a modern, premium design. Every screen is thoughtfully crafted to support both light and dark themes, ensuring a consistent and visually stunning experience for all users."
        altText="Fluter Sportup"
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/sports/sportup_3.jpg'}
          alt={'Sportup'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="Clean & reusable code"
        heading="We adhere to the best practices recommended by the Flutter team. Our code is built with small, reusable components, making it effortless to customize and create screens with the features you need."
        description="This approach ensures flexibility, maintainability, and scalability for all your hotel booking projects."
        altText="Fluter Sportup"
      />

      <Space h={50} />

      <Container size="xl">
        <Image
          src={'/images/sports/sportup_4.jpg'}
          alt={'Sportup'}
        />
      </Container>

      <Space h={50} />

      <HeaderLabel
        subheading="The result"
        heading="Sportup solution designed to accelerate app development with a fully functional, customizable Flutter template. It streamlines the development process, allowing developers to focus on creating exceptional user experiences and driving business growth."
        description="35+ nicely crafted minimal screens that cover everything you need for your hotel app."
        altText="Fluter Sportup"
      />

      <Space h={50} />

      <AppPreviewBottomCard
        title="Get the Sportup"
        sourceCodeUrl={'https://faizrhm1.gumroad.com/l/vbnbv'}
        previewUrl={'https://faiz-rhm.github.io/sportup_complete/'}
      />

      <Space h={20} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
