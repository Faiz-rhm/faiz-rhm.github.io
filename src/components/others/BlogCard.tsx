'use client'

import React from "react";
import { Box, Text, Button, Badge, Group, Card } from "@mantine/core";
import { calculateReadingTime } from "@/lib/mediumRss";

interface BlogCardProps {
  title: string;
  description: string;
  thumbnail: string;
  categories: string[];
  pubDate: string;
  content: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  thumbnail,
  categories,
  pubDate,
  content,
  onClick,
}) => {
  // Format the date
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const readingTime = calculateReadingTime(content);

  return (
    <Card
      shadow="sm"
      padding="0"
      radius="16px"
      style={{
        backgroundColor: "rgba(35, 35, 35, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={onClick}
    >
      {/* Article Image */}
      <Box
        style={{
          width: "100%",
          height: "240px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </Box>

      {/* Card Content */}
      <Box
        p="24px"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Category Badges */}
        <Group gap="8px" mb={20}>
          {categories.slice(0, 2).map((category, index) => (
            <Badge
              key={index}
              variant="light"
              size="sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#FFFFFF",
                fontFamily: "Manrope",
                fontSize: "11px",
                fontWeight: "500",
                textTransform: "uppercase",
                padding: "10px 8px",
                borderRadius: "6px",
              }}
            >
              {category}
            </Badge>
          ))}
        </Group>

        {/* Title */}
        <Text
          mb={16}
          style={{
            fontSize: "22px",
            fontWeight: "600",
            fontFamily: "Manrope",
            color: "#FFFFFF",
            lineHeight: "1.3",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "58px",
          }}
        >
          {title}
        </Text>

        {/* Description */}
        <Text
          mb={20}
          style={{
            fontSize: "15px",
            fontWeight: "400",
            fontFamily: "Manrope",
            color: "#B0B0B0",
            lineHeight: "1.5",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            flex: 1,
          }}
        >
          {description}
        </Text>

        {/* Metadata and Button */}
        <Box
          mt="auto"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Metadata */}
          <Text
            style={{
              fontSize: "13px",
              fontWeight: "400",
              fontFamily: "Manrope",
              color: "#8F8F8F",
            }}
          >
            {formattedDate} • {readingTime}
          </Text>

          {/* Read Button */}
          <Button
            variant="default"
            fullWidth
            style={{
              background: "#FFFFFF",
              height: "42px",
              borderRadius: "10px",
              color: "#000000",
              fontFamily: "Manrope",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            READ ARTICLE
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
