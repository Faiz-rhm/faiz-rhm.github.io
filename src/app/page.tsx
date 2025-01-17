'use client'

import { FooterCentered } from "../components/footer/FooterCentered";
import { Box, Button, Container, Divider, Flex, Text} from '@mantine/core';
import { BannerAnimation } from '@/components/banner/BannerAnimation';
import HeroSection from "../components/others/HeroSection";
import AboutSection from "../components/others/AboutSection";
import CenteredSection from "../components/others/CenterSection";

const buttons = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@FaizRhm" },
  { label: "X", href: "https://twitter.com/faiz_rhm" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/faiz.rhm/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/faiz-rhm/" },
  { label: "MEDIUM", href: "https://medium.com/@Faiz_Rhm" },
];

const sections = [
  { label: "BUY ME A COFFEE", href: "/buy-me-a-coffee", image: "/images/coffee.png" },
  { label: "ALL PROJECTS", href: "/projects" },
];

export default function Home() {
  const images = [
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  return (
    <>
      <Box pb={100} />

      <HeroSection
        heading="Helping Digital founders Craft unique, Empathic Applications"
        subheading="🤟Hello, I am Chris, a Flutter developer based in Dubai Emirate"
        imageSrc="/images/logo.png"
        altText="Chris"
      />

      <Box>
          <BannerAnimation images={images} speed={5000}  imageHeight={600} />
      </Box>

      <Container size="xl">
        <Divider
          size="xl" // Length of the divider
          my="xl" // Margin above and below
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
            margin: "30px auto 30px", // Center the divider horizontally
          }}
        />
      </Container>

      <Box pb={30} />

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create & deploy high-quality cross-platform applications."
        buttons={buttons}
      />

      <Box pb={30} />

      <Container size="xl">
        <Divider
          size="xl" // Length of the divider
          my="xl" // Margin above and below
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
          }}
        />
      </Container>

      <Box pb={30} />

      <CenteredSection
        text="Here you can find a list of selected projects that I’ve recently worked on"
        buttons={sections}
      />

      <Box pb={50} />

      <Container size="xl">
        <Divider
          size="xl" // Length of the divider
          my="xl" // Margin above and below
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
          }}
        />
      </Container>






      <FooterCentered/>
    </>
  );
}
