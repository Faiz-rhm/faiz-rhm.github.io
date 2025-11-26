'use client';

import { Suspense } from 'react';
import ProductCarousel from "../components/others/ProductCarousel";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import BottomSection from "../components/others/BottomSection";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import ProjectCard from "../components/others/ProjectCard";
import { Footer } from "../components/footer/Footer";
import Reviews from "../components/others/Review";
import ProjectData from "@/data/project.json";
import Market from "@/data/market.json";
import ServicesData from "@/data/services.json";
import { Space, Container, SimpleGrid, Title, Text } from '@mantine/core';
import React from "react";
import { ReviewsSkeleton } from "@/components/skeletons/ReviewsSkeleton";
import { CarouselSkeleton } from "@/components/skeletons/CarouselSkeleton";
import { ProjectsSkeleton } from "@/components/skeletons/ProjectsSkeleton";
import ServiceCard from "@/components/services/ServiceCard";

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

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faiz Rhm',
    jobTitle: 'Flutter Developer & Mobile App Consultant',
    url: 'https://faizrhm.dev',
    sameAs: [
      'https://www.linkedin.com/in/faiz-rhm/',
      'https://github.com/Faiz-rhm',
      'https://twitter.com/faiz_rhm',
      'https://www.instagram.com/faiz.rhm/',
      'https://medium.com/@Faiz_Rhm',
    ],
    knowsAbout: ['Flutter', 'React Native', 'Mobile Development', 'iOS Development', 'Android Development', 'Cross-Platform Development'],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Flutter Development Services',
    provider: {
      '@type': 'Person',
      name: 'Faiz Rhm',
    },
    areaServed: 'Worldwide',
    serviceType: ['Mobile App Development', 'Flutter Development', 'Cross-Platform Development', 'UI/UX Design', 'App Modernization'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Space h={50} />

      <HeroSection
        heading="Empowering digital founders to create thoughtful, impactful applications."
        subheading="🤟 Hello, I am Faiz Rhm, "
        imageSrc="/images/fr.png"
        altText="Faiz Rhm - Professional Flutter Developer"
      />

      <Space h={80} />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>

      <CustomDivider/>

      <Space h={30} />

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create scalable, maintainable solutions that drive business growth."
        buttons={buttons}
      />

      <Space h={30} />

      <CustomDivider/>

      <Space h={30} />

      <CenteredSection
        text="Here you can find a list of selected projects that I've recently worked on"
        buttons={sections}
      />

      <Space h={50} />

      <CustomDivider/>

      <Space h={20} />

      <Suspense fallback={<ProjectsSkeleton />}>
        {ProjectData.projects.slice(0, 2).map((product, index) => (
          <React.Fragment key={product.slug}>
            <ProjectCard
              key={product.slug}
              slug={product.slug}
              chipText={product.tag}
              description={product.description}
              buttonLabel="FULL CASE STUDY"
              cards={[
                {
                  image: product.cover,
                },
              ]}
              swapColumns={index % 2 !== 0}
            />

            <Space h={20} />

            {index < 1 && <CustomDivider />}

            <Space h={20} />
          </React.Fragment>
        ))}
      </Suspense>

      <Space h={100} />

      <Suspense fallback={<CarouselSkeleton />}>
        <ProductCarousel products={Market.market} />
      </Suspense>

      <Space h={70} />

      {/* Services Section */}
      <Container size="xl" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <Title
          order={2}
          style={{
            fontSize: '48px',
            fontWeight: '600',
            fontFamily: 'Manrope',
            background: 'linear-gradient(#F5F5F5, #8F8F8F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
          }}
        >
          What We Do Best
        </Title>
        <Text
          size="xl"
          style={{
            color: '#E0E0E0',
            maxWidth: '700px',
            margin: '0 auto 60px',
            lineHeight: 1.6,
          }}
        >
          From concept to launch, we build digital products that drive results
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {ServicesData.services.map(service => (
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

      <Space h={70} />

      <BottomSection/>

      <Space h={70} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
