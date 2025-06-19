'use client';

import Head from 'next/head';
import MarketData from "@/data/market.json";
import { useRouter } from "next/navigation";
import { Box, Container } from '@mantine/core';
import { Footer } from "@/components/footer/Footer";
import CustomDivider from "../../components/others/CustomDivider";
import HeroSection from "../../components/others/HeroSection";
import MarketCard from "../../components/others/MarketCard";

export default function Market() {
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/market/${slug}`);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Market Resources",
    description: "A curated collection of premium and free resources for developers, designed to elevate your projects.",
    itemListElement: MarketData.market
      .filter((product) => product.isVisible)
      .map((product, index) => ({
        "@type": "Product",
        position: index + 1,
        name: product.name,
        description: product.description,
        image: product.cover,
        ...(product.repository && {
          url: product.repository
        }),
        ...(product.price && {
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.price === "FREE" ? 0 : product.price,
            availability: "https://schema.org/InStock"
          }
        })
      }))
  };

  return (
    <>
      <Head>
        <title>Marketplace – Premium & Free Dev Resources</title>
        <meta name="description" content="Discover premium and free UI kits, components, and templates to speed up your development." />
        <meta property="og:title" content="Marketplace – Premium & Free Dev Resources" />
        <meta property="og:description" content="Explore beautifully crafted Flutter templates and design systems to elevate your project." />
        <meta property="og:image" content="/images/cover/market-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/market" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/market" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Box pb={50} />

      <HeroSection
        heading="Explore premium and free resources crafted to elevate your projects"
        subheading="🎁 Some of paid & freebies of my resources"
        altText="Market"
      />

      <Box pb={70} />

      <Container size="xl">
        <Box
          p={16}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            justifyContent: "center",
            margin: "0 auto",
            padding: "16px",
          }}
        >
          {MarketData.market.map((product) =>
            product.isVisible && (
              <MarketCard
                key={product.id}
                image={product.cover}
                name={product.name}
                description={product.description}
                price={product.price}
                width="100%"
                onClick={() => {
                  if (product.price === "FREE") {
                    handleNavigation(product.slug);
                  } else if (typeof window !== 'undefined') {
                    window.location.href = product.repository;
                  }
                }}
              />
            )
          )}
        </Box>
      </Container>

      <Box pb={50} />
      <CustomDivider />
      <Footer />
      <Box pb={50} />
    </>
  );
}
