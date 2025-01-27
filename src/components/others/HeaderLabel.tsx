import React from "react";
import { Container, Flex, Box, Text, Image, Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface HeaderLabelProps {
  heading: string; // The main heading
  subheading: string; // The subheading text
  description?: string;
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

          <Space h={20} />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "#E0E0E0",
            }}
          >
            {heading}
          </p>

          <Space h={16} />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "#E0E0E0",
            }}
          >
            {description}
          </p>
        </Box>

        {/* Right Side - Image (conditionally rendered) */}
        {imageSrc && (
          <Box
            // w={{ base: "100%", md: "150" }}
            style={{
              flex: "0 0 auto",
              minWidth: isMobile ? "100%" : "150px", // Full width on mobile
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end", // Center on mobile
            }}
          >
            <Image
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
