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
        heading="Explore the projects I've worked on, from concept to completion"
        subheading="🎉 Things I've Built "
        altText="Faiz Rhm"
      />

      <Box pb={70} />

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

      <Box pb={20} />

      <CustomDivider/>

      <Box pb={20} />

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

      <Box pb={20} />

      <CustomDivider/>

      <Box pb={20} />

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

      <Box pb={20} />

      <CustomDivider/>

      <Box pb={20} />

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

      <Box pb={20} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
