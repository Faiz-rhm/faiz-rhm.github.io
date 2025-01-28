import React from "react";
import { Box, Image } from "@mantine/core";
import Link from "next/link";

interface StoreButtonsProps {
  appleUrl: string;
  googlePlayUrl: string;
}

const StoreButtons: React.FC<StoreButtonsProps> = ({ appleUrl, googlePlayUrl }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "left", // Center the images
        alignItems: "left",
        gap: "20px", // Space between the images
      }}
    >
      {/* Apple Store */}
      <Link
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
      </Link>

      {/* Google Play Store */}
      <Link
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
      </Link>
    </Box>
  );
};

export default StoreButtons;
