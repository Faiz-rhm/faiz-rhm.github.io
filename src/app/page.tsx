'use client'

import { FooterCentered } from "../components/footer/FooterCentered";
import { Box, Button, Container, Divider, Flex, Text} from '@mantine/core';
import { BannerAnimation } from '@/components/banner/BannerAnimation';
import HeroSection from "../components/hero/HeroSection";
import { Iconly } from "react-iconly";
import AboutSection from "../components/about/AboutSection";
import CenteredSection from "../components/center/CenterSection";

const buttons = [
  { label: "YOUTUBE", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
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
      <HeroSection
        heading="Helping Digital founders Craft unique, Empathic Applications"
        subheading="🤟Hello, I am Chris, a Flutter developer based in Dubai Emirate"
        imageSrc="/logo.png"
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

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create & deploy high-quality cross-platform applications."
        buttons={buttons}
      />

      <Container size="xl">
        <Divider
          size="xl" // Length of the divider
          my="xl" // Margin above and below
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
            margin: "50px auto 100px", // Center the divider horizontally
          }}
        />
      </Container>

      <CenteredSection
        text="Here you can find a list of selected projects that I’ve recently worked on"
        buttons={sections}
      />

      <Container size="xl">
        <Divider
          size="xl" // Length of the divider
          my="xl" // Margin above and below
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
            margin: "100px auto 50px", // Center the divider horizontally
          }}
        />
      </Container>






      <FooterCentered/>
    </>
  );
}
