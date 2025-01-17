'use client'

import { FooterCentered } from "../components/footer/FooterCentered";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import Reviews from "../components/others/Review";
import { Box, Button, Container, Flex, Text } from '@mantine/core';
import Chip from "../components/others/Chip";
import CustomCard from "@/components/card/CustomCard";
import ProjectCard from "../components/others/ProjectCard";
import CircleButton from "../components/others/CircleButton";
import CircularButton from "../components/others/CircleButton";
import MarketTitle from "../components/others/MarketTitle";

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
      <Box pb={100} />

      <HeroSection
        heading="Helping Digital founders Craft unique, Empathic Applications"
        subheading="🤟Hello, I am Faiz Rhm, "
        imageSrc="/images/logo.png"
        altText="Faiz Rhm"
      />

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

      <ProjectCard
        chipText="FLUTTER"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient."
        buttonLabel="FULL CASE STUDY"
        cards={[
          {
            image:
              "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
          },
        ]}
      />

      <CustomDivider/>

      <ProjectCard
        chipText="FLUTTER"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient."
        buttonLabel="FULL CASE STUDY"
        cards={[
          {
            image:
              "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
          },
        ]}
        swapColumns={true}
      />

      <Box pb={100} />

      <MarketTitle />

      <CustomDivider/>










      <FooterCentered/>
    </>
  );
}
