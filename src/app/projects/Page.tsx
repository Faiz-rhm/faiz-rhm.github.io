'use client'

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import ProjectCard from "../../components/others/ProjectCard";
import ProjectData from "@/data/project.json";
import React from "react";

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

      {ProjectData.projects.map((product, index) => (
        <React.Fragment key={product.id}>
           <ProjectCard
            key={product.id}
            id={product.id} // Ensure `product.id` is passed
            chipText={product.tag}
            description={product.description}
            buttonLabel="FULL CASE STUDY"
            cards={[
              {
                image: product.cover,
              },
            ]}
            swapColumns={index % 2 !== 0}
          />

          <Box pb={20} />

          {index < ProjectData.projects.length - 1 && <CustomDivider />}

          <Box pb={20} />
        </React.Fragment>
      ))}

      <Box pb={20} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
