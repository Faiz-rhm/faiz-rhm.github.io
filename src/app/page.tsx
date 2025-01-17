'use client'

import { FooterCentered } from "../components/footer/FooterCentered";
import { Box,} from '@mantine/core';
import { BannerAnimation } from '@/components/banner/BannerAnimation';
import HeroSection from "../components/hero/HeroSection";

export default function Home() {
  const images = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
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
          <BannerAnimation images={images} speed={5000} />
      </Box>



      <FooterCentered/>
    </>
  );
}
