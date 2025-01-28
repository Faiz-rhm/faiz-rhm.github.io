import React from "react";
import { Container, Flex, Text, Button, Group, ActionIcon } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

const BottomSection = () => {
  return (
    <Container
      size="xl"
      style={{
        position: "relative",
        padding: "0",
        overflow: "hidden",
        margin: "0 auto",
        backgroundImage: `url('/images/background.png')`, // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px", // Optional rounded corners
        height: "600px", // Adjust height as needed
      }}
    >
      {/* Centered Content */}
      <Flex
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: 10,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
          padding: "20px",
          flexDirection: "column", // Stack text and buttons vertically
        }}
      >
        {/* Text */}
        <Text
          style={{
            fontSize: "64px",
            fontWeight: "400",
            fontFamily: "Manrope",
            background: "linear-gradient(#F5F5F5, #8F8F8F)", // Gradient from red to blue
            WebkitBackgroundClip: "text", // Clips background to text
            backgroundClip: "text", // Ensures compatibility
            WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
            maxWidth: "1000px", // Limit text width
            marginBottom: "24px", // Space between text and buttons
            lineHeight: "1.2", // Adjust line height for better readability
          }}
        >
          Create an exceptional Flutter & React Native apps & webapps
        </Text>

        {/* Buttons */}
        <Group style={{ gap: "16px" }}>
          <Button
            variant="default"
            onClick={() => {
              window.open('mailto:faiz199011@gmail.com', '_blank');
            }}
            style={{
              background: '#FFFFFF',
              height: '45px',
              borderRadius: '12px',
              color: '#000000',
              fontFamily: 'Manrope',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            SAY “HELLO!”
          </Button>

          <Button
            variant="default"
            onClick={() => {
              window.open('cv/cv.pdf', '_blank'); // Replace 'cv.pdf' with the actual file name in your public folder
            }}
            style={{
              background: '#171717',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              height: '45px',
              borderRadius: '12px',
              color: '#FFFFFF',
              fontFamily: 'Manrope',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            RESUME
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconDownload size={18} stroke={1.5} />
            </ActionIcon>
          </Button>
        </Group>
      </Flex>
    </Container>
  );
};

export default BottomSection;
