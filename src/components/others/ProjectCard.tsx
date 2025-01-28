'use client'

import React from "react";
import Chip from "@/components/others/Chip";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import CustomCard from "@/components/card/CustomCard";
import { Container, Flex, Box, Text, Button, Space } from "@mantine/core";

interface ProjectCardProps {
  slug: string; // Make sure `id` is defined as a string
  chipText: string;
  description: string;
  buttonLabel: string;
  cards: {
    image: string;
    height?: string;
    width?: string;
    backgroundColor?: string;
    borderColor?: string;
  }[];
  swapColumns?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  chipText,
  description,
  buttonLabel,
  cards,
  swapColumns = false, // Default is no swapping
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const router = useRouter(); // Hook for navigation

  const handleNavigation = () => {
    router.push(
      `/projects/${slug}`
    );
  };

  return (
    <Container size="xl">
      <Flex
        align="stretch"
        direction={isMobile ? "column" : "row"} // Stack content on mobile
        justify="space-between"
        style={{ gap: "32px" }}
      >
        {/* Render Left and Right Columns Dynamically */}
        {!swapColumns && (
          <>
            {/* Left Side - Text, Chip, and Button */}
            <Box
              style={{
                flex: isMobile ? "0 1 auto" : "1 1 50%",
                maxWidth: isMobile ? "100%" : "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Chip */}
              <Box>
                <Chip text={chipText} />
              </Box>

              <Space h={50} />

              {/* Text and Button */}
              <Box>
                <Text
                  style={{
                    fontSize: "32px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                    background: "linear-gradient(#F5F5F5, #8F8F8F)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "20px",
                    lineHeight: "1.2", // Adjust line height for better readability
                    display: "-webkit-box",  // Corrected display property for multi-line clamping
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Limit to 3 lines
                    overflow: "hidden", // Hide overflow text
                    textOverflow: "ellipsis", // Optional: adds ellipsis (...) when text is truncated
                  }}
                >
                  {description}
                </Text>

                <Button
                  variant="default"
                  onClick={handleNavigation} // Add navigation handler

                  style={{
                    background: "#FFFFFF",
                    height: "45px",
                    borderRadius: "12px",
                    color: "#000000",
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {buttonLabel}
                </Button>
              </Box>
            </Box>

            {/* Right Side - Custom Cards */}
            <Box
              style={{
                flex: isMobile ? "0 1 auto" : "1 1 50%",
                maxWidth: isMobile ? "100%" : "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cards.map((card, index) => (
                <CustomCard
                  key={index}
                  image={card.image}
                  height={isMobile ? "auto" : "380px"}
                  width={isMobile ? "100%" : "618px"}
                  backgroundColor="rgba(35, 35, 35, 0.5)"
                  borderColor="rgba(255, 255, 255, 0.1)"
                />
              ))}
            </Box>
          </>
        )}

        {swapColumns && (
          <>
            {/* Swapped Columns */}
            {/* Right Side - Custom Cards */}
            <Box
              style={{
                flex: isMobile ? "0 1 auto" : "1 1 50%",
                maxWidth: isMobile ? "100%" : "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cards.map((card, index) => (
                <CustomCard
                  key={index}
                  image={card.image}
                  height={isMobile ? "auto" : "380px"}
                  width={isMobile ? "100%" : "618px"}
                  backgroundColor="rgba(35, 35, 35, 0.5)"
                  borderColor="rgba(255, 255, 255, 0.1)"
                />
              ))}
            </Box>

            {/* Left Side - Text, Chip, and Button */}
            <Box
              style={{
                flex: isMobile ? "0 1 auto" : "1 1 50%",
                maxWidth: isMobile ? "100%" : "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Chip */}
              <Box>
                <Chip text={chipText} />
              </Box>

              <Space h={50} />

              {/* Text and Button */}
              <Box>
                <Text
                  style={{
                    fontSize: "32px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                    background: "linear-gradient(#F5F5F5, #8F8F8F)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "20px",
                    lineHeight: "1.2", // Adjust line height for better readability
                    display: "-webkit-box",  // Corrected display property for multi-line clamping
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Limit to 3 lines
                    overflow: "hidden", // Hide overflow text
                    textOverflow: "ellipsis", // Optional: adds ellipsis (...) when text is truncated
                  }}
                >
                  {description}
                </Text>


                <Button
                  variant="default"
                  onClick={handleNavigation} // Add navigation handler
                  style={{
                    background: "#FFFFFF",
                    height: "45px",
                    borderRadius: "12px",
                    color: "#000000",
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {buttonLabel}
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default ProjectCard;
