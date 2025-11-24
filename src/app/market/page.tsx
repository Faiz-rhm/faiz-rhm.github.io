'use client';

import { Space, Container, Title, Text } from '@mantine/core';
import Market from '@/data/market.json';
import MarketCard from '@/components/others/MarketCard';
import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import { useRouter } from 'next/navigation';

export default function MarketPage() {
  const router = useRouter();

  const handleNavigation = (slug: string, repository: string, price: string) => {
    if (price === "FREE") {
      router.push(`/market/${slug}`);
    } else if (typeof window !== 'undefined') {
      window.location.href = repository;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Premium Flutter UI Kits & Templates',
            description: 'Professional, production-ready Flutter UI kits for iOS and Android applications.',
            itemListElement: Market.market
              .filter((item) => item.isVisible)
              .map((item, index) => ({
                '@type': 'Product',
                position: index + 1,
                name: item.name,
                description: item.description,
                image: item.cover,
                brand: {
                  '@type': 'Brand',
                  name: 'Faiz Rhm',
                },
                offers: {
                  '@type': 'Offer',
                  price: item.price === 'FREE' ? '0' : item.price.replace('$', ''),
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: `https://faizrhm.dev/market/${item.slug}`,
                },
              })),
          }),
        }}
      />

      <Space h={100} />

      <Container size="xl">
        <Title
          order={1}
          style={{
            fontSize: '48px',
            fontWeight: '600',
            fontFamily: 'Manrope',
            background: 'linear-gradient(#F5F5F5, #8F8F8F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Premium Flutter UI Kits & Templates
        </Title>

        <Text
          style={{
            fontSize: '18px',
            color: '#E0E0E0',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 50px',
            lineHeight: '1.6',
          }}
        >
          Professional, production-ready Flutter UI kits for iOS and Android applications.
          Save months of development time with high-quality templates for e-commerce,
          hospitality, sports, transportation, and more. Each UI kit includes dozens of
          pre-built screens, reusable components, and clean code architecture.
        </Text>

        <Space h={50} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {Market.market.filter(item => item.isVisible).map((item) => (
            <MarketCard
              key={item.id}
              image={item.cover}
              name={item.name}
              description={item.description}
              price={item.price}
              onClick={() => handleNavigation(item.slug, item.repository, item.price)}
            />
          ))}
        </div>
      </Container>

      <Space h={100} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
