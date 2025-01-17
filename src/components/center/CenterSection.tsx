import { Flex, Text, Button } from "@mantine/core";

interface CenteredSectionProps {
  text: string; // The main text to display
  buttons: { label: string; href?: string }[]; // Array of button data
}

const CenteredSection: React.FC<CenteredSectionProps> = ({ text, buttons }) => {
  return (
    <Flex
      direction="column" // Stack text and buttons vertically
      align="center" // Center items horizontally
      justify="center" // Center items vertically (if needed)
      style={{ gap: "24px", marginTop: "16px", textAlign: "center" }} // Add spacing and center text
    >
      {/* Centered Text */}
      <Text
        style={{
          fontSize: "32px",
          fontWeight: "400",
          fontFamily: "Manrope",
          background: "linear-gradient(to right, #F5F5F5, #8F8F8F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginRight: "650px",
          marginLeft: "650px",
        }}
      >
        {text}
      </Text>

      {/* Buttons */}
      <Flex align="center" justify="center" style={{ gap: "16px" }}>
        {buttons.map(({ label, href }, index) => (
          <Button
            key={index}
            variant="default"
            component="a"
            href={href}
            style={{
              background: href ? "#171717" : "#FFFFFF", // Light or dark background based on href
              border: href ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
              height: "45px",
              borderRadius: "12px",
              color: href ? "#FFFFFF" : "#000000", // Black text for light button, white for dark
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
    </Flex>
  );
};

export default CenteredSection;
