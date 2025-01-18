'use client'

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import ProjectCard from "../../components/others/ProjectCard";

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

      <ProjectCard
        chipText="FLUTTER"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient."
        buttonLabel="FULL CASE STUDY"
        cards={[
          {
            image:
              "/images/project.png",
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
              "/images/project.png",
          },
        ]}
        swapColumns={true}
      />

      <CustomDivider/>

      <ProjectCard
        chipText="FLUTTER"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient."
        buttonLabel="FULL CASE STUDY"
        cards={[
          {
            image:
              "/images/project.png",
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
              "/images/project.png",
          },
        ]}
        swapColumns={true}
      />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
