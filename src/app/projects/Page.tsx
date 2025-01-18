'use client'

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";

export default function Projects() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Creating Unforgettable Digital Impressions"
        subheading="🤟 My Works "
        altText="Faiz Rhm"
      />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
