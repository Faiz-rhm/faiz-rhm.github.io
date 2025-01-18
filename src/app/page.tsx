'use client'

import ProductCarousel from "../components/others/ProductCarousel";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import BottomSection from "../components/others/BottomSection";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import ProjectCard from "../components/others/ProjectCard";
import MarketTitle from "../components/others/MarketTitle";
import { Footer } from "../components/footer/Footer";
import Reviews from "../components/others/Review";
import { Box } from '@mantine/core';

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

const products = [
  {
    id: "1",
    name: "Product 1",
    description: "This is a brief description of product 1.",
    image: "/images/project.png",
    price: "$100",
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is a brief description of product 2.",
    image: "/images/project.png",
    price: "$200",
  },
  {
    id: "3",
    name: "Product 1",
    description: "This is a brief description of product 1.",
    image: "/images/project.png",
    price: "$100",
  },
  {
    id: "4",
    name: "Product 2",
    description: "This is a brief description of product 2.",
    image: "/images/project.png",
    price: "$200",
  },
  {
    id: "5",
    name: "Product 1",
    description: "This is a brief description of product 1.",
    image: "/images/project.png",
    price: "$100",
  },
  {
    id: "6",
    name: "Product 2",
    description: "This is a brief description of product 2.",
    image: "/images/project.png",
    price: "$200",
  },
  {
    id: "7",
    name: "Product 1",
    description: "This is a brief description of product 1.",
    image: "/images/project.png",
    price: "$100",
  },
  {
    id: "8",
    name: "Product 2",
    description: "This is a brief description of product 2.",
    image: "/images/project.png",
    price: "$200",
  },
  {
    id: "9",
    name: "Product 1",
    description: "This is a brief description of product 1.",
    image: "/images/project.png",
    price: "$100",
  },
  {
    id: "10",
    name: "Product 2",
    description: "This is a brief description of product 2.",
    image: "/images/project.png",
    price: "$200",
  },
];

export default function Home() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Helping Digital founders Craft unique, Empathic Applications"
        subheading="🤟Hello, I am Faiz Rhm, "
        imageSrc="/images/logo.png"
        altText="Faiz Rhm"
      />

      <Box pb={50} />

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

      <Box pb={100} />

      <MarketTitle />

      <CustomDivider/>

      <ProductCarousel products={products} />

      <Box pb={100} />

      <BottomSection/>

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
