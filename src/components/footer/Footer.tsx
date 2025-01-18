import React from "react";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Image } from "@mantine/core";
import classes from "./Footer.module.css";

const buttons = [
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/@FaizRhm",
    icon: <IconBrandYoutube size={18} stroke={1.5} color="#FFFFFF" />,
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/faiz.rhm/",
    icon: <IconBrandInstagram size={18} stroke={1.5} color="#FFFFFF" />,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/faiz-rhm/",
    icon: <IconBrandLinkedin size={18} stroke={1.5} color="#FFFFFF" />,
  },
  {
    label: "MEDIUM",
    href: "https://medium.com/@Faiz_Rhm",
    icon: <IconBrandMedium size={18} stroke={1.5} color="#FFFFFF" />,
  },
  {
    label: "X",
    href: "https://twitter.com/faiz_rhm",
    icon: <IconBrandX size={18} stroke={1.5} color="#FFFFFF" />,
  },
];

export function Footer() {
  return (
    <Container
      className={classes.inner}
      size="xl"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      {/* Logo */}
      <Image
        alt="logo"
        src="/images/logo.png"
        style={{
          width: "clamp(60px, 5vw, 100px)", // Ensures the logo scales between 60px and 100px
          height: "auto", // Maintains aspect ratio
        }}
      />

      {/* Social Links */}
      <Group
        gap={8}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {buttons.map((button) => (
          <ActionIcon
            key={button.label}
            size="lg"
            variant="filled"
            component="a"
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
              border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
              borderRadius: "12px",
              padding: "8px",
              height: "40px",
              width: "48px",
            }}
          >
            {button.icon}
          </ActionIcon>
        ))}
      </Group>
    </Container>
  );
}
