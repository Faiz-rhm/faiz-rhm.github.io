import { Container, Flex, Box, Text, Button, ActionIcon, Space } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

interface AboutSectionProps {
  heading: string; // Heading text (e.g., "[ ABOUT ME ]")
  description: string; // Description text
  buttons: { label: string; href?: string }[]; // Array of button objects
}

const AboutSection: React.FC<AboutSectionProps> = ({
  heading,
  description,
  buttons,
}) => {
  // Split buttons into two rows: 2 on top, 3 on bottom
  const topRow = buttons.slice(0, 2); // First 2 buttons
  const bottomRow = buttons.slice(2); // Remaining 3 buttons

  return (
    <Container size="xl">
      <Flex
        align="flex-start" // Align content to the top
        justify="space-between"
        wrap="wrap"
        style={{ gap: "32px" }} // Space between the two boxes
      >
        {/* Left Side - Heading */}
        <Box style={{ flex: "0 0 auto", minWidth: "450px" }}>
          <Text
            style={{
              color: "#F5F5F0",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            {heading}
          </Text>
        </Box>

        {/* Right Side - Description and Buttons */}
        <Box style={{ flex: 1, minWidth: "300px" }}>
        <Text
          style={{
            fontSize: "32px",
            fontWeight: "400",
            fontFamily: "Manrope",
            background: "linear-gradient(#F5F5F5, #8F8F8F)", // Gradient from red to blue
            WebkitBackgroundClip: "text", // Clips background to text
            backgroundClip: "text", // Ensures compatibility
            WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
            lineHeight: "1.2", // Adjust line height for better readability
          }}
        >
          {description}
        </Text>

        <Space h={20} />

          {/* Top Row of Buttons */}
          <Flex
            align="flex-start"
            style={{ gap: "16px", marginTop: "16px" }}
          >
            {topRow.map(({ label, href }) => (
              <Button
                key={label}
                variant="default"
                component="a"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                href={href}
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
                  gap: "10px",
                }}
              >
                {label}
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconArrowUpRight size={18} stroke={1.5} />
                </ActionIcon>
              </Button>
            ))}
          </Flex>

          {/* Bottom Row of Buttons */}
          <Flex
            align="flex-start"
            style={{ gap: "16px", marginTop: "16px" }}
          >
            {bottomRow.map(({ label, href }) => (
              <Button
                key={label}
                variant="default"
                component="a"
                href={href}
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
                  gap: "10px",
                }}
              >
                {label}
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconArrowUpRight size={18} stroke={1.5} />
                </ActionIcon>
              </Button>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutSection;
