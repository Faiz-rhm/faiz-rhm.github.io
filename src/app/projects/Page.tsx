'use client'

import { Footer } from "@/components/footer/Footer";
import { Space } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import ProjectCard from "../../components/others/ProjectCard";
import ProjectData from "@/data/project.json";
import React from "react";

export default function Projects() {
  return (
    <>
      <Space h={50} />

      <HeroSection
        heading="Explore the projects I've worked on, from concept to completion"
        subheading="🎉 Things I've Built "
        altText="Faiz Rhm"
      />

      <Space h={70} />

      {ProjectData.projects.map((product, index) => (
        <React.Fragment key={product.id}>
           <ProjectCard
            key={product.id}
            slug={product.slug} // Esnsure `product.id` is passed
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

          <Space h={20} />

          {index < ProjectData.projects.length - 1 && <CustomDivider />}

          <Space h={20} />
        </React.Fragment>
      ))}

      <Space h={20} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
