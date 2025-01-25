'use client'

import { Footer } from "@/components/footer/Footer";
import StoreButtons from "../../components/others/StoreButton";
import CustomDivider from "../../components/others/CustomDivider";
import { Text, Box, Container, Image, Divider } from "@mantine/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

<style jsx global>{`
  ul {
    list-style: disc;
  }
  li::marker {
    color: #ffa500; /* Custom dot color */
    font-size: 18px; /* Adjust size */
  }
`}</style>

export default function ProjectsDetails() {
  return (
    <>
      <Box pb={100} />

      <Container size="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Default horizontal layout
            alignItems: "flex-start",
            flexWrap: "wrap", // Wrap content for smaller screens
            gap: "20px", // Space between items
          }}
        >
          {/* Left Image with Background */}
          <div
            style={{
              flex: "1",
              maxWidth: "550px",
              minWidth: "470px",
              backgroundColor: "rgba(35, 35, 35, 0.5)",
              borderRadius: "32px",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >

          <Image
            src="/images/project/baran.png"
            alt="Custom Card"
            style={{
              width: "100%",
              objectFit: "contain",
              borderRadius: "24px",
              transition: "transform 0.3s ease", // Smooth zoom effect
            }}
            className="zoom-image"
          />

          </div>

          {/* Right Text */}
          {/* Right Text */}
          <div
            style={{
              flex: "1",
              maxWidth: "750px",
              minWidth: "300px",
              padding: "0 20px",
            }}
          >
            {/* Title */}
            <Text
              style={{
                fontSize: "32px", // Smaller heading on mobile
                fontWeight: "400",
                fontFamily: "Manrope",
                background: "linear-gradient(#F5F5F5, #8F8F8F)", // Gradient for text
                WebkitBackgroundClip: "text", // Clips background to text
                backgroundClip: "text", // Ensures compatibility
                WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
                lineHeight: "1.2", // Adjust line height for better readability
              }}
            >
              App Name
            </Text>

            <Box pb={15} />

            {/* Description */}
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "30px",
                color: "#E0E0E0",
              }}
            >
              A video-based social media app that allows users to share their videos with friends and followers. A video-based social media app that allows users to share their videos with friends and followers.
            </p>

            <Box pb={25} />

            {/* Completed Date */}
            <p
              style={{
                color: "#818181",
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "10px",
                lineHeight: "0",
              }}
            >
              Completed in: 2024
            </p>

            <Divider
              my="xl"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.2)", // White color with 50% opacity
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />

            {/* NDA Note */}
            <p
              style={{
                fontSize: "16px",
                color: "#E0E0E0",
                marginBottom: "30px",
                lineHeight: "0",
              }}
            >
              The project is under NDA and can’t fully disclose details.
            </p>

            <Box pb={25} />

            {/* What I Did */}
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#FFFFFF",
              }}
            >
              What I did
            </h2>

            <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
              <li style={{ position: "relative", color: "#E0E0E0" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-20px",
                    color: "#818181", // Dot color
                    fontSize: "16px",
                  }}
                >
                  ●
                </span>
                Created main features like video recording, editing, and sharing
              </li>
              <li style={{ position: "relative", color: "#E0E0E0" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-20px",
                    color: "#818181", // Dot color (different for this one)
                    fontSize: "16px",
                  }}
                >
                  ●
                </span>
                Created UI kit and reusable widgets that are used across the app
              </li>
              <li style={{ position: "relative", color: "#E0E0E0" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-20px",
                    color: "#818181", // Dot color (different for this one)
                    fontSize: "16px",
                  }}
                >
                  ●
                </span>
                Created UI kit and reusable widgets that are used across the app
              </li>
            </ul>

            <Box pb={100} />

            <StoreButtons
              appleUrl="https://www.apple.com/app-store/"
              googlePlayUrl="https://play.google.com/store"
            />

          </div>

        </div>
      </Container>

      <Box pb={100} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
