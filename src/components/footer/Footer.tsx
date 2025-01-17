import { IconBrandInstagram, IconBrandX, IconBrandYoutube, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <Container
      className={classes.inner}
      size="xl"
      style={{
        display: "flex",
        flexDirection: "row", // Horizontal alignment
        alignItems: "center", // Vertically align items
        justifyContent: "space-between", // Distribute items across the line
        textAlign: "center",
        gap: "16px", // Optional gap if needed
      }}
    >
      {/* Logo */}
      <Image
        alt="logo"
        src="/images/logo.png"
        style={{ width: "5%", height: "5%" }}
      />

      {/* Links */}
      <Group
        gap={8} // Space between buttons
        style={{
          display: "flex",
          justifyContent: "flex-end", // Align to the right
          alignItems: "center", // Align icons vertically
        }}
      >
        <ActionIcon
          size="lg"
          variant="filled"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
            borderRadius: "12px", // Circular button
            padding: "8px", // Inner padding for consistent size
            height: "40px",
            width: "48px"
          }}
        >
          <IconBrandLinkedin size={18} stroke={1.5} color="#FFFFFF" />
        </ActionIcon>
        <ActionIcon
          size="lg"
          variant="filled"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
            borderRadius: "12px", // Circular button
            padding: "8px", // Inner padding for consistent size
            height: "40px",
            width: "48px"
          }}
        >
          <IconBrandGithub size={18} stroke={1.5} color="#FFFFFF" />
        </ActionIcon>
        <ActionIcon
          size="lg"
          variant="filled"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
            borderRadius: "12px", // Circular button
            padding: "8px", // Inner padding for consistent size
            height: "40px",
            width: "48px"
          }}
        >
          <IconBrandX size={18} stroke={1.5} color="#FFFFFF" />
        </ActionIcon>
        <ActionIcon
          size="lg"
          variant="filled"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
            borderRadius: "12px", // Circular button
            padding: "8px", // Inner padding for consistent size
            height: "40px",
            width: "48px"
          }}
        >
          <IconBrandYoutube size={18} stroke={1.5} color="#FFFFFF" />
        </ActionIcon>
        <ActionIcon
          size="lg"
          variant="filled"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with 10% opacity
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border color with 20% opacity
            borderRadius: "12px", // Circular button
            padding: "8px", // Inner padding for consistent size
            height: "40px",
            width: "48px"
          }}
        >
          <IconBrandInstagram size={18} stroke={1.5} color="#FFFFFF" />
        </ActionIcon>
      </Group>


    </Container>

  );
}