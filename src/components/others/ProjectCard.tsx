'use client'

import React from "react";
import Chip from "@/components/others/Chip";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import CustomCard from "@/components/card/CustomCard";
import { Container, Flex, Box, Text, Button } from "@mantine/core";

interface ProjectCardProps {
  id: string;
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
  swapColumns?: boolean; // New prop to swap text and card
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  chipText,
  description,
  buttonLabel,
  cards,
  swapColumns = false, // Default is no swapping
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log("id:", id);

  const router = useRouter(); // Hook for navigation

  const handleNavigation = () => {
    router.push(
      `/projects/2`
    ); // Navigate to '/project_details'
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
