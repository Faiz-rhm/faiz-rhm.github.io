'use client'

import { useParams } from "next/navigation";
import { Footer } from "@/components/footer/Footer";
import { Container, Space, Text } from "@mantine/core";
import MarketData from "@/data/market.json";

import MarketDetails from "../../../components/others/MarketDetails";
import CustomDivider from "../../../components/others/CustomDivider";

export default function MarketDetailsPage() {
  const params = useParams();
  const slug = params?.slug;

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (in ms)
  };

  const market = MarketData.market.find((market) => market.slug === slug);

  if (!market) {
    return (
      <Container size="xl">
        <Text style={{ color: '#E0E0E0', textAlign: 'center' }}>Product not found</Text>
      </Container>
    );
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: market.name,
    description: market.description,
    image: market.cover,
    brand: {
      '@type': 'Brand',
      name: 'Faiz Rhm',
    },
    offers: {
      '@type': 'Offer',
      price: market.price === 'FREE' ? '0' : market.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://faizrhm.dev/market/${market.slug}`,
    },
    category: 'Software > Mobile Apps > UI Kits',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Space h={100} />

      <MarketDetails
        settings={settings}
        imageList={market.images}
        title= {market.name}
        description= {market.description}
        chips={market.tags} // Pass the chips list
        buttonUrl={market.repository}
      />

      <Space h={100} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
