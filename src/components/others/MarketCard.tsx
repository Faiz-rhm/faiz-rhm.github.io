import React from "react";
import { Box, Image, Text } from "@mantine/core";

interface MarketCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onClick?: () => void; // Optional onClick event for navigation
}

const MarketCard: React.FC<MarketCardProps> = ({ image, name, description, price, onClick }) => {
  return (
    <Box
      onClick={onClick} // Handle click events for navigation
      style={{
        flex: "0 0 400px",
        height: "500px",
        position: "relative",
        textAlign: "center",
        backgroundColor: "rgba(35, 35, 35, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer", // Indicate clickable element
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth hover effect
      }}
      className="market-card"
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "75%",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "8px",
          backgroundColor: "rgba(35, 35, 35, 0.5)",
        }}
      >
        {/* Price Tag */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            backgroundColor: "rgba(170,255,61,0.2)",
            color: "#D9D9D9",
            padding: "4px 8px",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "8px",
            zIndex: 2,
          }}
        >
          ${price}
        </div>

        {/* Image with Zoom Effect */}
        <div
          style={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            borderRadius: "12px",
          }}
        >
          <Image
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease", // Smooth zoom transition
            }}
            className="zoom-image"
          />
        </div>
      </div>

      {/* Content Below the Image */}
      <Box style={{ flex: "1", paddingTop: "8px", textAlign: "left" }}>
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#F5F5F5",
            marginBottom: "8px",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: "16px",
            color: "rgba(245, 245, 245, 0.7)",
            marginBottom: "8px",
            fontWeight: "400",
          }}
        >
          {description}
        </Text>
      </Box>

      {/* Global Hover and Zoom CSS */}
      <style jsx global>{`
        .zoom-image:hover {
          transform: scale(1.2); /* Zoom on hover */
        }
        .market-card:hover {
          transform: translateY(-5px); /* Slight lift effect on hover */
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
        }
      `}</style>
    </Box>
  );
};

export default MarketCard;
