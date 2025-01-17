import React from "react";
import { Container, Divider } from "@mantine/core";

interface CustomDividerProps {
  size?: string; // Optional size prop for the divider
  margin?: string; // Optional margin prop
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  size = "xl",
  margin = "30px auto 30px",
}) => {
  return (
    <Container size="xl">
      <Divider
        size={size}
        my="xl"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
          margin, // Center the divider horizontally
        }}
      />
    </Container>
  );
};

export default CustomDivider;
