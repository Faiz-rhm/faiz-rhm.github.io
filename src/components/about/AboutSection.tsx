import { Container, Flex, Box, Text, Button } from "@mantine/core";

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
  // Split buttons into two rows (2 buttons per row)
  const topRow = buttons.slice(0, 2);
  const bottomRow = buttons.slice(2, 4);

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
              fontFamily: "Caveat",
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
              background: "linear-gradient(to right, #F5F5F5, #8F8F8F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {description}
          </Text>

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
              </Button>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutSection;
