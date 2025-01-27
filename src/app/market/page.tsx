'use client';

import MarketData from "@/data/market.json";
import { useRouter } from "next/navigation";
import { Container, Space } from '@mantine/core';
import { Footer } from "@/components/footer/Footer";
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import MarketCard from "../../components/others/MarketCard";

export default function Market() {
  const router = useRouter(); // Hook for navigation

  const handleNavigation = (id: string) => {
    router.push(
      `/market/${id}`
    );
  };

  return (
    <>
      <Space h={50} />

      <HeroSection
        heading="Explore premium and free resources crafted to elevate your projects"
        subheading="🎁 Some of paid & freebies of my resources"
        altText="Market"
      />

      <Space h={70} />

      {/* Product List */}
      <Container size="xl">
        <Space h={16}

          style={{
            display: "grid", // Use grid layout
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // 3 items per row with responsive fallback
            gap: "24px", // Space between cards
            justifyContent: "center",
            margin: "0 auto", // Center the container
            padding: "16px",
          }}
        >
          {MarketData.market.map((product) => (
            product.isVisible && ( // Check if product.isVisible is true
              <MarketCard
                key={product.id}
                image={product.cover}
                name={product.name}
                description={product.description}
                price={product.price}
                width="100%" // Set width to 100% for all cards
                onClick={() => {
                  if (product.price === "FREE") {
                    handleNavigation(product.id);
                  } else {
                    window.location.href = product.repository;
                  }
                }}
              />
            )
          ))}
        </Space>
      </Container>

      <Space h={50} />

      <CustomDivider />

      <Footer />

      <Space h={50} />
    </>
  );
}
