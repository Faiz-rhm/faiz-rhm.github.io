'use client';

import { useParams } from 'next/navigation';
import ProjectData from '@/data/project.json';
import { Footer } from '@/components/footer/Footer';
import StoreButtons from '../../../components/others/StoreButton';
import CustomDivider from '../../../components/others/CustomDivider';
import { Text, Box, Container, Image, Divider } from '@mantine/core';

export default function ProjectsDetails() {
  const params = useParams();
  const id = params?.id;

  // Find the project using the ID
  const project = ProjectData.projects.find((project) => project.id === id);

  if (!project) {
    return (
      <Container size="xl">
        <Text style={{ color: '#E0E0E0', textAlign: 'center' }}>Project not found</Text>
      </Container>
    );
  }

  return (
    <>
      <Box pb={100} />

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
          {/* Left Image with Background */}
          <div
            style={{
              flex: '1',
              maxWidth: '550px',
              minWidth: '470px',
              backgroundColor: 'rgba(35, 35, 35, 0.5)',
              borderRadius: '32px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <Image
              src={project.cover}
              alt={project.name}
              style={{
                width: '100%',
                objectFit: 'contain',
                borderRadius: '24px',
                transition: 'transform 0.3s ease',
              }}
              className="zoom-image"
            />
          </div>

          {/* Right Text */}
          <div
            style={{
              flex: '1',
              maxWidth: '750px',
              minWidth: '300px',
              padding: '0 20px',
            }}
          >
            {/* Title */}
            <Text
              style={{
                fontSize: '32px',
                fontWeight: '400',
                fontFamily: 'Manrope',
                background: 'linear-gradient(#F5F5F5, #8F8F8F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.2',
              }}
            >
              {project.name}
            </Text>

            <Box pb={15} />

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '30px',
                color: '#E0E0E0',
              }}
            >
              {project.description}
            </p>

            <Box pb={25} />

            {/* Completed Date */}
            <p
              style={{
                color: '#818181',
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '10px',
                lineHeight: '0',
              }}
            >
              Completed in: 2024
            </p>

            <Divider
              my="xl"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: '20px',
                marginBottom: '20px',
              }}
            />

            {/* NDA Note */}
            <p
              style={{
                fontSize: '16px',
                color: '#E0E0E0',
                marginBottom: '30px',
                lineHeight: '0',
              }}
            >
              The project is under NDA and can’t fully disclose details.
            </p>

            <Box pb={25} />

            {/* What I Did */}
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#FFFFFF',
              }}
            >
              What I did
            </h2>

            <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
              <li style={{ position: 'relative', color: '#E0E0E0' }}>
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
                Created main features like video recording, editing, and sharing
              </li>
              <li style={{ position: 'relative', color: '#E0E0E0' }}>
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
                Created UI kit and reusable widgets that are used across the app
              </li>
              <li style={{ position: 'relative', color: '#E0E0E0' }}>
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
                Implemented coding standards and best practices within the Flutter codebase
              </li>
            </ul>

            <Box pb={100} />

            <StoreButtons
              appleUrl="https://www.apple.com/app-store/"
              googlePlayUrl="https://play.google.com/store"
            />
          </div>
        </div>
      </Container>

      <Box pb={100} />

      <CustomDivider />

      <Footer />

      <Box pb={50} />
    </>
  );
}
