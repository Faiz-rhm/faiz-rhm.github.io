'use client';

import { Suspense, useState } from 'react';
import ProductCarousel from "../components/others/ProductCarousel";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import BottomSection from "../components/others/BottomSection";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import ProjectCard from "../components/others/ProjectCard";
import { Footer } from "../components/footer/Footer";
import Reviews from "../components/others/Review";
import CalendarModal from "@/components/calendar/CalendarModal";
import ProjectData from "@/data/project.json";
import Market from "@/data/market.json";
import { Space, Button, Box, Container } from '@mantine/core';
import React from "react";
import { trackScheduleConsultation, trackCTAClick } from "@/lib/analytics";
import { ReviewsSkeleton } from "@/components/skeletons/ReviewsSkeleton";
import { CarouselSkeleton } from "@/components/skeletons/CarouselSkeleton";
import { ProjectsSkeleton } from "@/components/skeletons/ProjectsSkeleton";

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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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

      <Container size="md" style={{ textAlign: 'center', marginTop: '40px' }}>
        <Box style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            size="lg"
            onClick={() => {
              setIsCalendarOpen(true);
              trackScheduleConsultation('hero');
              trackCTAClick('Schedule Consultation', 'hero');
            }}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
            }}
          >
            Schedule Consultation
          </Button>
          <Button
            size="lg"
            component="a"
            href="/services"
            variant="outline"
            onClick={() => trackCTAClick('View Services', 'hero')}
            style={{
              borderColor: '#667eea',
              color: '#667eea',
            }}
          >
            View Services
          </Button>
        </Box>
      </Container>

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

      <BottomSection/>

      <Space h={70} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </>
  );
}
