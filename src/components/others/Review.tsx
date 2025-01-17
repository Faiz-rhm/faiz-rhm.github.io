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
  { id: "1", image: "/images/logo.png" },
  { id: "2", image: "/images/logo.png" },
  { id: "3", image: "/images/logo.png" },
  { id: "4", image: "/images/logo.png" },
  { id: "5", image: "/images/logo.png" },
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
          <Photo
            src={image}
            alt={`Image ${id}`}
            key={`marquee-image-${id}-reverse`}
            style={{
              marginLeft: "7px",
              marginRight: "80px",
              height: "500px", // Adjust height inline if needed
            }}
          />
        ))}
      </Marquee>
    </div>
  </div>
);

export default Reviews;
