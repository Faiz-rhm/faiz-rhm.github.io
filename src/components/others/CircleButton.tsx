import React from "react";
import { Button } from "@mantine/core";

interface CircularButtonProps {
  label?: string; // Optional text inside the button
  icon?: React.ReactNode; // Icon to display inside the button
  borderColor?: string; // Border color
  backgroundColor?: string; // Background color
  size?: string; // Diameter of the button
  onClick?: () => void; // Click handler
}

const CircularButton: React.FC<CircularButtonProps> = ({
  label = "",
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
        fontSize: "16px", // Adjust text size
        fontWeight: "600",
        color: "#FFFFFF", // Text color
        fontFamily: "Manrope",
        padding: "0", // Remove padding for proper centering
        cursor: "pointer", // Pointer cursor for clickable button
      }}
    >
      {icon ? icon : label} {/* Display icon if provided, otherwise label */}
    </Button>
  );
};

export default CircularButton;
