'use client';

import { useState } from 'react';
import { Container, SimpleGrid, Space } from '@mantine/core';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCard from '@/components/services/ServiceCard';
import CalendarModal from '@/components/calendar/CalendarModal';
import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import ServicesData from '@/data/services.json';

export default function ServicesPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

      <ServicesHero onScheduleClick={() => setIsCalendarOpen(true)} />

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
              ctaText={service.ctaText}
              ctaAction={service.ctaAction as 'modal' | 'projects' | 'market'}
              icon={service.icon}
              onScheduleClick={() => setIsCalendarOpen(true)}
            />
          ))}
        </SimpleGrid>
      </Container>

      <CustomDivider />
      <Footer />
      <Space h={50} />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </>
  );
}
