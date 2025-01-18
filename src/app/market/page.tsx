'use client'

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import ProjectCard from "../../components/others/ProjectCard";

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
];

export default function Market() {
  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Explore premium and free resources crafted to elevate your projects"
        subheading="🎁 Some of paid & freebies of my resources"
        altText="Faiz Rhm"
      />

      <CustomDivider/>


      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
