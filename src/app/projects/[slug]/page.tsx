'use client';

import Slider from 'react-slick';
import { useParams } from 'next/navigation';
import ProjectData from '@/data/project.json';
import { Footer } from '@/components/footer/Footer';
import StoreButtons from '@/components/others/StoreButton';
import CustomDivider from '@/components/others/CustomDivider';
import { Text, Container, Divider, Image, Space } from '@mantine/core';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = ProjectData.projects.find((project) => project.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Faiz Rhm',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} - Flutter App Development Case Study | Faiz Rhm`,
    description: project.description.substring(0, 160),
    keywords: `Flutter development, ${project.tag}, mobile app development, ${project.name}, case study`,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.images[0]],
      url: `https://faizrhm.dev/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.description.substring(0, 160),
      images: [project.images[0]],
    },
  };
}

export default function ProjectsDetails() {
  const params = useParams();
  const slug = params?.slug;
  const project = ProjectData.projects.find((project) => project.slug === slug);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!project) {
    return (
      <Container size="xl">
        <Text style={{ color: '#E0E0E0', textAlign: 'center' }}>Project not found</Text>
      </Container>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.images[0],
    datePublished: project.completed,
    url: `https://faizrhm.dev/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Faiz Rhm',
      jobTitle: 'Flutter Developer & Mobile App Consultant',
      url: 'https://faizrhm.dev',
    },
    ...(project.appStore && {
      isBasedOn: {
        '@type': 'MobileApplication',
        name: project.name,
        operatingSystem: 'iOS & Android',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: 'Free',
        },
      },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Space h={100} />
      <Container size="xl">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {/* Left image carousel */}
          <div
            style={{
              flex: '1',
              maxWidth: '500px',
              minWidth: '470px',
              height: '520px',
              backgroundColor: 'rgba(35, 35, 35, 0.5)',
              borderRadius: '32px',
              padding: '20px 50px',
            }}
          >
            <Slider {...settings}>
              {project.images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    style={{
                      height: '450px',
                      width: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Right content */}
          <div style={{ flex: '1', maxWidth: '750px', minWidth: '400px', padding: '0 20px' }}>
            <Text
              style={{
                fontSize: '32px',
                fontWeight: '400',
                fontFamily: 'Manrope',
                background: 'linear-gradient(#F5F5F5, #8F8F8F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.2',
              }}
            >
              {project.name}
            </Text>

            <Space h={15} />
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px', color: '#E0E0E0' }}>
              {project.description}
            </p>

            <Space h={25} />
            <p style={{ color: '#818181', fontSize: '16px', fontWeight: '500', marginBottom: '5px' }}>
              {project.completed}
            </p>

            <Divider
              my="sm"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: 0,
              }}
            />

            {project.project_restriction && (
              <p style={{ fontSize: '16px', color: '#E0E0E0', marginBottom: '30px' }}>
                {project.project_restriction}
              </p>
            )}

            <Space h={25} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px', color: '#FFFFFF' }}>
              What I did
            </h2>

            <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
              {project.points.map((point, index) => (
                <li key={index} style={{ position: 'relative', color: '#E0E0E0', marginBottom: '10px' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      color: '#818181',
                      fontSize: '16px',
                    }}
                  >
                    ●
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Space h={50} />
            {project.appStore && (
              <StoreButtons appleUrl={project.appStore} googlePlayUrl={project.appStore} />
            )}
          </div>
        </div>
      </Container>

      <Space h={100} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
