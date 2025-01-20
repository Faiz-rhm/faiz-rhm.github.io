import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const Photo = styled.img`
  width: auto; /* Maintain aspect ratio */
  height: 400px; /* Adjust the height as needed */
  border-radius: 8px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%; /* Adjust width for the fade effect */
  pointer-events: none; /* Allow interactions with the marquee */
  z-index: 2;
`;

const LeftOverlay = styled(Overlay)`
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
`;

const RightOverlay = styled(Overlay)`
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
`;

const images = [
  { id: "1", image: "/images/preview/baran.jpg" },
  { id: "2", image: "/images/preview/onboarding.jpg" },
  { id: "3", image: "/images/preview/spotify.jpg" },
  { id: "4", image: "/images/preview/food.jpg" },
  { id: "5", image: "/images/preview/crypto.jpg" },
  { id: "7", image: "/images/preview/hotel.jpg" },
  { id: "6", image: "/images/preview/movie.jpg" },
  { id: "7", image: "/images/preview/sale.jpg" },
  { id: "7", image: "/images/preview/sport.jpg" },
];

const Reviews = () => (
  <div style={{ position: "relative", height: 600 }}>
    {/* Overlays */}
    <LeftOverlay />
    <RightOverlay />

    {/* Marquee Section */}
    <div style={{ height: "100%", overflow: "hidden" }}>
      <Marquee
        velocity={25}
        direction="rtl"
        scatterRandomly={false}
        resetAfterTries={3}
        onInit={() => console.log("Marquee initialized")}
        onFinish={() => console.log("Marquee finished")}
      >
        {images.map(({ id, image }) => (
      <div
          style={{
            marginLeft: "7px",
            marginRight: "40px",
            height: "550px", // Same as the image height
            width: "550px",
            backgroundColor: "rgba(35, 35, 35, 0.5)", // Background for the container
            borderRadius: "32px", // Rounded corners for the container
            overflow: "hidden", // Ensures the image doesn't overflow the container
            padding: "32px", // No padding so the image fits perfectly
            boxSizing: "border-box", // Ensure proper sizing
          }}
        >
          <Photo
            src={image}
            alt={`Image ${id}`}
            style={{
              width: "100%", // Make the image take full width of the container
              height: "100%", // Make the image take full height of the container
              objectFit: "cover", // Ensures the image scales properly
              borderRadius: "16px", // Rounded corners for the image
            }}
          />
        </div>

        ))}
      </Marquee>
    </div>
  </div>
);

export default Reviews;
