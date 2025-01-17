import React from "react";

interface ChipProps {
  text: string; // The string to display inside the chip
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div
      style={{
        display: "inline-block", // Makes the chip behave like a button
        background: "#171717",
        height: "45px",
        borderRadius: "12px",
        color: "#FFFFFF",
        fontFamily: "Manrope",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "45px", // Centers the text vertically
        padding: "0 16px", // Adds horizontal padding
        textAlign: "center",
        userSelect: "none", // Prevents text selection
        cursor: "default", // Indicates the chip is not clickable
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for style
        border: "1px solid rgba(255, 255, 255, 0.2)", // White border with 20% opacity
      }}
    >
      {text}
    </div>
  );
};

export default Chip;
