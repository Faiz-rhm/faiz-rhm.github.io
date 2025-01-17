import { Container, Flex, Box, Text } from "@mantine/core";

interface HeroSectionProps {
  heading: string; // The main heading
  subheading: string; // The subheading text
  imageSrc: string; // URL of the image
  altText: string; // Alt text for the image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  imageSrc,
  altText,
}) => {
  return (
    <Container size="xl">
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        style={{ gap: "32px" }} // Space between the text and image
      >
        {/* Left Side - Text Content */}
        <Box style={{ flex: 1, minWidth: "300px" }}>
          <Text
            style={{
              color: "#F5F5F0",
              fontSize: "32px",
              fontWeight: "400",
              fontFamily: "Caveat",
            }}
          >
            {subheading}
          </Text>

          <Text
            style={{
              fontSize: "64px",
              fontWeight: "600",
              fontFamily: "Manrope",
              background: "linear-gradient(to right, #F5F5F5, #8F8F8F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {heading}
          </Text>
        </Box>

        {/* Right Side - Image */}
        <Box style={{ flex: "0 0 auto", minWidth: "150px" }}>
          <img
            src={imageSrc}
            alt={altText}
            style={{
              height: "139px",
              width: "139px",
              borderRadius: "50%", // Optional: Makes the image circular
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
