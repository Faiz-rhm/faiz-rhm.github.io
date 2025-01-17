import React from "react";
import { Button } from "@mantine/core";

interface CircularButtonProps {
  icon?: React.ReactNode; // Icon to display inside the button
  borderColor?: string; // Border color
  backgroundColor?: string; // Background color
  size?: string; // Diameter of the button
  onClick?: () => void; // Click handler
}

const CircularButton: React.FC<CircularButtonProps> = ({
  icon,
  borderColor = "rgba(255, 255, 255, 0.2)",
  backgroundColor = "transparent",
  size = "60px", // Default size (diameter)
  onClick,
}) => {
  return (
    <Button
      variant="default"
      onClick={onClick}
      style={{
        width: size,
        height: size,
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "50%", // Makes the button circular
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0", // Remove padding for proper centering
        cursor: "pointer", // Pointer cursor for clickable button
      }}
    >
      {icon} {/* Display icon inside the button */}
    </Button>
  );
};

export default CircularButton;
