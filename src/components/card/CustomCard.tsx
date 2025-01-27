import React from "react";
import { AspectRatio, Card, Image } from "@mantine/core";

interface CustomCardProps {
  image: string;
  height?: string; // Default heights
  width?: string; // Default width
  backgroundColor?: string; // Background color
  borderColor?: string; // Border color
}

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  width = "618px",
  backgroundColor = "rgba(35, 35, 35, 0.5)",
  borderColor = "rgba(255, 255, 255, 0.1)",
}) => {
  return (
    <Card
      p="md"
      radius="md"
      component="a"
      style={{
        maxWidth: width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
        overflow: "hidden",
        borderRadius: "24px",
        position: "relative",
      }}
    >
      <AspectRatio ratio={1920 / 1080}>
        <div
          style={{
            overflow: "hidden", // Ensures the image stays within the container
            borderRadius: "24px", // Ensures rounded corners
            height: "100%",
            width: "100%",
            position: "relative", // Needed for hover effect
          }}
        >
          <Image
            src={image}
            alt="Custom Card"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "24px",
              transition: "transform 0.3s ease", // Smooth zoom effect
            }}
            className="zoom-image"
          />
        </div>
      </AspectRatio>

      <style>
        {`
          .zoom-image:hover {
            transform: scale(1.2); /* Zoom in */
          }
        `}
      </style>
    </Card>
  );
};

export default CustomCard;
