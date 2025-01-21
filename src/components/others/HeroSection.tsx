import React from "react";
import { Container, Flex, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Keyframe animation for rotation
const rotationAnimation = {
  animation: "spin 5s linear infinite", // Rotate continuously
};

// Define keyframes in global CSS
const globalStyles = `
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

interface HeroSectionProps {
  heading: string; // The main heading
  subheading: string; // The subheading text
  imageSrc?: string; // URL of the image (optional)
  altText?: string; // Alt text for the image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  imageSrc,
  altText = "Hero image", // Default alt text if not provided
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile breakpoint

  return (
    <Container size="xl">
      {/* Inject global keyframes */}
      <style>{globalStyles}</style>

      <Flex
        direction={isMobile ? "column" : "row"} // Stack on mobile, row on larger screens
        align="center" // Center items vertically
        justify="space-between" // Adjust space on larger screens
        wrap="nowrap"
        style={{ gap: "32px" }} // Space between the text and image
      >
        {/* Left Side - Text Content */}
        <Box
          style={{
            flex: isMobile ? "0 1 auto" : "1 1 auto", // Adjust flex for mobile
            textAlign: isMobile ? "center" : "left", // Center text on mobile
            minWidth: "300px",
          }}
        >
          <Text
            style={{
              color: "#818181",
              fontSize: isMobile ? "24px" : "32px", // Smaller text on mobile
              fontWeight: "400",
              fontFamily: "Caveat",
              marginBottom: isMobile ? "16px" : "0", // Add spacing below subheading on mobile
            }}
          >
            {subheading}
          </Text>

          <Text
            style={{
              fontSize: isMobile ? "48px" : "64px", // Smaller heading on mobile
              fontWeight: "400",
              fontFamily: "Manrope",
              background: "linear-gradient(#F5F5F5, #8F8F8F)", // Gradient for text
              WebkitBackgroundClip: "text", // Clips background to text
              backgroundClip: "text", // Ensures compatibility
              WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
              textAlign: isMobile ? "center" : "left", // Center text on mobile
              lineHeight: "1.2", // Adjust line height for better readability
            }}
          >
            {heading}
          </Text>
        </Box>

        {/* Right Side - Image (conditionally rendered) */}
        {imageSrc && (
          <Box
            style={{
              flex: "0 0 auto",
              minWidth: isMobile ? "100%" : "150px", // Full width on mobile
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end", // Center on mobile
            }}
          >
            <img
              src={imageSrc}
              alt={altText}
              style={{
                height: isMobile ? "200px" : "139px", // Larger image on mobile
                width: isMobile ? "200px" : "139px",
                borderRadius: "50%", // Makes the image circular
                ...rotationAnimation, // Add rotation animation
              }}
            />
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default HeroSection;
