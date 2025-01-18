'use client';

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import MarketCard from "../../components/others/MarketCard";

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
    name: "Product 3",
    description: "This is a brief description of product 3.",
    image: "/images/project.png",
    price: "$150",
  },
  {
    id: "4",
    name: "Product 4",
    description: "This is a brief description of product 4.",
    image: "/images/project.png",
    price: "$180",
  },
  {
    id: "5",
    name: "Product 5",
    description: "This is a brief description of product 5.",
    image: "/images/project.png",
    price: "$250",
  },
  {
    id: "6",
    name: "Product 6",
    description: "This is a brief description of product 6.",
    image: "/images/project.png",
    price: "$300",
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

      <Box pb={70} />

      {/* Product List */}
      <Box
        style={{
          display: "grid", // Use grid layout
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // 3 items per row with responsive fallback
          gap: "24px", // Space between cards
          justifyContent: "center",
          margin: "0 auto", // Center the container
          maxWidth: "1200px", // Restrict max width
        }}
      >
        {products.map((product) => (
          <MarketCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </Box>

      <Box pb={50} />

      <CustomDivider />

      <Footer />

      <Box pb={50} />
    </>
  );
}
