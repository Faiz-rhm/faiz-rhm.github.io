import React from "react";
import Chip from "./Chip"; // Import your Chip component
import Slider from "react-slick";
import { ActionIcon, Container, Button, Image, Space } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarketDetails = ({ settings, imageList, title, description, chips, buttonUrl }) => {
  return (
    <Container
      size="xl"
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Default horizontal layout
          alignItems: "flex-start",
          flexWrap: "wrap", // Wrap content for smaller screens
          gap: "20px", // Space between items
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
            {imageList.map((src, index) => (
              <div key={index} style={{ width: "550", height: "300" }}>
                <Image
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
            minWidth: '400px',
            padding: '0 20px',
          }}
        >
          {/* Title */}
          <h1
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
            {title}
          </h1>

          <Space h={20} />

          {/* Chips Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {chips.map((chip, index) => (
              <Chip key={index} text={chip} />
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#E0E0E0",
            }}
          >
            {description}
          </p>

          <Space h={50} />

          {/* Source Code Button */}
          <Button
            variant="default"
            component="a"
            href={buttonUrl || "#"} // Use the provided URL or default to "#"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security for external links
            style={{
              background: "#171717",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              height: "45px",
              borderRadius: "12px",
              color: "#FFFFFF",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "0 16px",
              maxWidth: "170px",
              marginLeft: "0", // Aligns the button to the left
            }}
          >
            Source Code
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconArrowUpRight size={18} stroke={1.5} />
            </ActionIcon>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MarketDetails;
