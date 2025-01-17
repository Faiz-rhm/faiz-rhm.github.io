import { Flex, Text, Button, Image } from "@mantine/core";

interface ButtonWithImage {
  label: string; // Button label text
  href?: string; // Optional link
  image?: string; // Optional image
}

interface CenteredSectionProps {
  text: string; // The main text to display
  buttons: ButtonWithImage[]; // Array of buttons with optional images
}

const CenteredSection: React.FC<CenteredSectionProps> = ({ text, buttons }) => {
  return (
    <Flex
      direction="column" // Stack text and buttons vertically
      align="center" // Center items horizontally
      justify="center" // Center items vertically
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
          display: "inline-block", // Important for gradient text to work properly
          maxWidth: "700px", // Restrict text width
        }}
      >
        {text}
      </Text>


      {/* Buttons */}
      <Flex align="center" justify="center" style={{ gap: "16px" }}>
        {buttons.map(({ label, href, image }, index) => (
          <Button
            key={index}
            variant="default"
            component="a"
            href={href}
            style={{
              background: image ? "#FFFFFF" : "#171717",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              height: "45px",
              borderRadius: "12px",
              color: image ? "#171717" : "#FFFFFF",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 16px", // Add horizontal padding
            }}
          >
            {/* Optional Image */}
            {image && (
              <img
                src={image}
                alt={label}
                style={{
                  width: "24px", // Set explicit width
                  height: "24px", // Set explicit height
                  objectFit: "contain", // Maintain aspect ratio
                  borderRadius: "4px", // Optional: Rounded corners
                }}
              />
            )}
            {label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default CenteredSection;
