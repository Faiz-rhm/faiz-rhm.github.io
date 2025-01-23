'use client';

import { Footer } from "@/components/footer/Footer";
import { Box } from '@mantine/core';
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import MarketCard from "../../components/others/MarketCard";
import MarketData from "@/data/market.json";

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
          padding: "16px",
        }}
      >
        {MarketData.market.map((product) => (
          <MarketCard
            key={product.id}
            image={product.cover}
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
