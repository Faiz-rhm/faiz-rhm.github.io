import React from "react";
import { AspectRatio, Card, Container, Image, SimpleGrid } from "@mantine/core";

interface CustomCardProps {
  image: string;
  height?: string; // Default height
  width?: string; // Default width
  backgroundColor?: string; // Background color
  borderColor?: string; // Border color
}

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  height = "380px",
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
        height: "auto", // Automatically adjust height for responsiveness
        maxWidth: width, // Restrict width to the specified value
        backgroundColor,
        border: `1px solid ${borderColor}`,
        overflow: "hidden",
        borderRadius: "24px",
      }}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image
          src={image}
          alt="Custom Card"
          style={{
            borderRadius: "24px",
            objectFit: "cover",
          }}
        />
      </AspectRatio>
    </Card>
  );
};

export default CustomCard;
