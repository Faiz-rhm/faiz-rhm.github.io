'use client'

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
import { Space } from '@mantine/core';
import React from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter(); // Hook for navigation

  const handleNavigation = (slug: string) => {
    router.push(
      `/projects/${slug}`
    );
  };

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
        heading="Enterprise Flutter Development Services"
        subheading="Delivering Scalable Cross-Platform Mobile Solutions for Global Businesses"
        imageSrc="/images/fr.png"
        altText="Faiz Rhm - Professional Flutter Developer"
      />

      <Space h={80} />

      <Reviews />

      <CustomDivider/>

      <Space h={30} />

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Experienced Flutter developer specializing in enterprise-grade cross-platform mobile applications. Proven track record of delivering high-performance iOS and Android applications for clients across finance, healthcare, e-commerce, and education sectors. Leveraging Flutter and React Native to create scalable, maintainable solutions that drive business growth."
        buttons={buttons}
      />

      <Space h={30} />

      <CustomDivider/>

      <Space h={30} />

      <CenteredSection
        text="Here you can find a list of selected projects that I’ve recently worked on"
        buttons={sections}
      />

      <Space h={50} />

      <CustomDivider/>

      <Space h={20} />

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
            onClick={() => handleNavigation(product.slug)}
          />

          <Space h={20} />

          {index < 1 && <CustomDivider />}

          <Space h={20} />
        </React.Fragment>
      ))}

      <Space h={100} />

      <ProductCarousel products={Market.market} />

      <Space h={70} />

      <BottomSection/>

      <Space h={70} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
