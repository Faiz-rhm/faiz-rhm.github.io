'use client';

import { Container, SimpleGrid, Space } from '@mantine/core';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCard from '@/components/services/ServiceCard';
import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import ServicesData from '@/data/services.json';

export default function ServicesPage() {

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ServicesData.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Person',
          name: 'Faiz Rhm',
          url: 'https://faizrhm.dev',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Space h={50} />

      <ServicesHero />

      <Space h={60} />

      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing="xl"
          style={{ marginBottom: '80px' }}
        >
          {ServicesData.services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              keyPoints={service.keyPoints}
              icon={service.icon}
            />
          ))}
        </SimpleGrid>
      </Container>

      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
