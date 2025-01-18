import React from "react";
import { Container, Flex, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CircularButton from "@/components/others/CircleButton";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

interface MarketTitleProps {
  scrollNext: () => void;
  scrollPrev: () => void;
}

const MarketTitle: React.FC<MarketTitleProps> = ({ scrollNext, scrollPrev }) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Define mobile breakpoint

  return (
    <Container size="xl">
      <Flex
        align={isMobile ? "center" : "flex-end"} // Center items vertically on mobile
        justify={isMobile ? "center" : "space-between"} // Center items horizontally on mobile
        direction={isMobile ? "column" : "row"} // Stack items vertically on mobile
        style={{ gap: isMobile ? "24px" : "32px" }} // Adjust gap based on screen size
      >
        {/* Left Side - Text Content */}
        <Box
          style={{
            flex: isMobile ? "0 1 auto" : "1 1 auto",
            minWidth: "300px",
            textAlign: isMobile ? "center" : "left", // Center-align text on mobile
          }}
        >
          <Text
            style={{
              color: "#818181",
              fontSize: "32px",
              fontWeight: "400",
              fontFamily: "Caveat",
              marginBottom: isMobile ? "8px" : "0", // Add spacing below the title on mobile
            }}
          >
            🎁 Some of paid & freebies of my resources
          </Text>

          <Text
            style={{
              fontSize: "32px",
              fontWeight: "400",
              fontFamily: "Manrope",
              background: "linear-gradient(#F5F5F5, #8F8F8F)", // Gradient for text
              WebkitBackgroundClip: "text", // Clips background to text
              backgroundClip: "text", // Ensures compatibility
              WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
              width: isMobile ? "100%" : "600px", // Adjust width on mobile
              margin: isMobile ? "0 auto" : "0", // Center text block on mobile
            }}
          >
            Here you can find a list of selected projects that I’ve recently worked on
          </Text>
        </Box>

        {/* Right Side - Buttons */}
        <Box
          style={{
            flex: isMobile ? "0 1 auto" : "0 0 auto",
            minWidth: isMobile ? "100%" : "150px",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start", // Center buttons on mobile
          }}
        >
          <Flex
            align="center"
            justify="center"
            style={{
              gap: "16px", // Space between the buttons
              flexWrap: isMobile ? "wrap" : "nowrap", // Allow wrapping on mobile
            }}
          >
            <CircularButton
              icon={<IconArrowNarrowLeft size={18} stroke={1.5} />}
              borderColor="#303030"
              size="60px"
              onClick={scrollPrev} // Trigger the passed scrollPrev function
            />
            <CircularButton
              icon={<IconArrowNarrowRight size={18} stroke={1.5} />}
              borderColor="#ADA9A9"
              size="60px"
              onClick={scrollNext} // Trigger the passed scrollNext function
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default MarketTitle;
