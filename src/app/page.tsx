'use client'

import ProductCarousel from "../components/others/ProductCarousel";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import BottomSection from "../components/others/BottomSection";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import ProjectCard from "../components/others/ProjectCard";
import { Footer } from "../components/footer/Footer";
import Reviews from "../components/others/Review";
import ProjectData from "@/data/project.json";
import Market from "@/data/market.json";
import { Box } from '@mantine/core';
import React from "react";

const buttons = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@FaizRhm" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/faiz.rhm/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/faiz-rhm/" },
  { label: "MEDIUM", href: "https://medium.com/@Faiz_Rhm" },
  { label: "X", href: "https://twitter.com/faiz_rhm" },
];

const sections = [
  { label: "BUY ME A COFFEE", href: "https://ko-fi.com/faizrhm", image: "/images/coffee.png" },
  { label: "ALL PROJECTS", href: "/projects" },
];


export default function Home() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Helping Digital founders Craft unique, Empathic Applications"
        subheading="🤟 Hello, I am Faiz Rhm, "
        imageSrc="/images/fr.png"
        altText="Faiz Rhm"
      />

      <Box pb={80} />

      <Reviews />

      <CustomDivider/>

      <Box pb={30} />

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create & deploy high-quality cross-platform applications."
        buttons={buttons}
      />

      <Box pb={30} />

      <CustomDivider/>

      <Box pb={30} />

      <CenteredSection
        text="Here you can find a list of selected projects that I’ve recently worked on"
        buttons={sections}
      />

      <Box pb={50} />

      <CustomDivider/>

      <Box pb={20} />

      {ProjectData.projects.slice(0, 2).map((product, index) => (
        <React.Fragment key={product.id}>
          <ProjectCard
            id={product.id}
            chipText={product.tag}
            description={product.description}
            buttonLabel="FULL CASE STUDY"
            cards={[
              {
                image: product.cover,
              },
            ]}
            swapColumns={index % 2 !== 0} // Alternate columns for every other project
          />

          <Box pb={20} />

          {index < 1 && <CustomDivider />}

          <Box pb={20} />
        </React.Fragment>
      ))}

      <Box pb={100} />

      <ProductCarousel products={Market.market} />

      <Box pb={70} />

      <BottomSection/>

      <Box pb={70} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
