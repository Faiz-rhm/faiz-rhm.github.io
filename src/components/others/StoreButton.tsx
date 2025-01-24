import React from "react";
import { Box, Image } from "@mantine/core";

interface StoreButtonsProps {
  appleUrl: string;
  googlePlayUrl: string;
}

const StoreButtons: React.FC<StoreButtonsProps> = ({ appleUrl, googlePlayUrl }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center", // Center the images
        alignItems: "center",
        gap: "20px", // Space between the images
      }}
    >
      {/* Apple Store */}
      <a
        href={appleUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/apple.png"
          alt="Apple Store"
          style={{
            width: "auto",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer", // Indicate it's clickable
          }}
          className="zoom-image"
        />
      </a>

      {/* Google Play Store */}
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/googleplay.png"
          alt="Google Play"
          style={{
            width: "auto",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer", // Indicate it's clickable
          }}
          className="zoom-image"
        />
      </a>
    </Box>
  );
};

export default StoreButtons;
