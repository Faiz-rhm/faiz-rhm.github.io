import React from "react";
import { Container, Flex, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface HeaderLabelProps {
  heading: string; // The main heading
  subheading: string; // The subheading text
  description: string;
  imageSrc?: string; // URL of the image (optional)
  altText?: string; // Alt text for the image
}

const HeaderLabel: React.FC<HeaderLabelProps> = ({
  heading,
  subheading,
  description,
  imageSrc,
  altText = "Hero image", // Default alt text if not provided
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile breakpoint

  return (
    <Container size="xl">
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
              fontSize: isMobile ? "32px" : "32px", // Smaller text on mobile
              fontWeight: "400",
              fontFamily: "Caveat",
              marginBottom: isMobile ? "16px" : "0", // Add spacing below subheading on mobile
            }}
          >
            {subheading}
          </Text>

          <Box pb={20} />

          <Text
            style={{
              fontSize: isMobile ? "16px" : "16px", // Smaller heading on mobile
              fontWeight: "400",
              fontFamily: "Manrope",
              color: "#F5F5F5", // Gradient for textzz
              textAlign: isMobile ? "center" : "left", // Center text on mobile
              lineHeight: "1.7", // Adjust line height for better readability
            }}
          >
            {heading}
          </Text>

          <Box pb={16} />

          <Text
            style={{
              fontSize: isMobile ? "16px" : "16px", // Smaller heading on mobile
              fontWeight: "400",
              fontFamily: "Manrope",
              color: "#F5F5F5", // Gradient for textzz
              textAlign: isMobile ? "center" : "left", // Center text on mobile
              lineHeight: "1.7", // Adjust line height for better readability
            }}
          >
            {description}
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
              }}
            />
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default HeaderLabel;
