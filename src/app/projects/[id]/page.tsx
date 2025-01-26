'use client';

import Slider from "react-slick";
import { useParams } from 'next/navigation';
import ProjectData from '@/data/project.json';
import { Footer } from '@/components/footer/Footer';
import StoreButtons from '../../../components/others/StoreButton';
import CustomDivider from '../../../components/others/CustomDivider';
import { Text, Box, Container, Image, Divider } from '@mantine/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsDetails() {
  const params = useParams();
  const id = params?.id;

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (in ms)
  };

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
              flex: "1",
              maxWidth: "500px",
              minWidth: "470px",
              height: "520px", // Consistent height for responsiveness
              backgroundColor: "rgba(35, 35, 35, 0.5)",
              borderRadius: "32px",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
            }}
          >
            <Slider {...settings}>
              {project.images.map((src, index) => (
                <div key={index} style={{ width: "550", height: "300" }}>
                  <img
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    style={{
                      height: "450px",
                      width: "100%",
                      objectFit: "contain", // Fill container without distortion
                      display: "block", // Prevents inline spacing issues
                      // display: "flex", // Use flexbox to align children
                      justifyContent: "center", // Horizontally center the image
                      alignItems: "center", // Vertically center the image
                    }}
                  />
                </div>
              ))}
            </Slider>
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
                marginTop: '18px',
                marginBottom: '18px',
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
