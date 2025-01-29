import React, { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const Photo = styled.img`
  width: 100%; /* Fully responsive to parent container */
  height: 100%; /* Fully responsive to parent container */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 16px; /* Rounded corners for the image */
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
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
  { id: "1", image: "/images/review/baran.png" },
  { id: "2", image: "/images/review/sport.png" },
  { id: "3", image: "/images/review/onboarding.png" },
  { id: "4", image: "/images/review/spotify.png" },
  { id: "5", image: "/images/review/hotel.png" },
  { id: "6", image: "/images/review/food.png" },
  { id: "7", image: "/images/review/crypto.png" },
  { id: "8", image: "/images/review/sale.png" },
  { id: "9", image: "/images/review/movie.png" },
  { id: "10", image: "/images/review/weena.png" },
  { id: "11", image: "/images/review/jobs.png" },
  { id: "12", image: "/images/review/wagi.png" },
];

const Reviews = () => {
  const [responsiveStyles, setResponsiveStyles] = useState({
    width: 550,
    height: 550,
    padding: 32,
  });

  // Update styles based on screen size
  const updateResponsiveStyles = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      setResponsiveStyles({ width: 550, height: 550, padding: 32 });
    } else if (screenWidth > 768) {
      setResponsiveStyles({ width: 400, height: 400, padding: 24 });
    } else if (screenWidth > 480) {
      setResponsiveStyles({ width: 300, height: 300, padding: 16 });
    } else {
      setResponsiveStyles({ width: 200, height: 200, padding: 8 });
    }
  };

  useEffect(() => {
    // Initialize responsive styles on mount
    updateResponsiveStyles();
    // Listen for resize events

    if(typeof window !== 'undefined'){
      window.addEventListener("resize", updateResponsiveStyles);
    }

    return () => {
      // Cleanup event listener on unmount
      if(typeof window !== 'undefined'){
        window.removeEventListener("resize", updateResponsiveStyles);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", minHeight: "300px" }}>
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
              key={id}
              style={{
                marginLeft: "7px",
                marginRight: "25px",
                height: responsiveStyles.height + "px",
                width: responsiveStyles.width + "px",
                backgroundColor: "rgba(35, 35, 35, 0.5)", // Background for the container
                borderRadius: "32px", // Rounded corners for the container
                overflow: "hidden", // Ensures the image doesn't overflow the container
                padding: responsiveStyles.padding + "px",
                boxSizing: "border-box", // Ensure proper sizing
              }}
            >
              <Photo src={image} alt={`Image ${id}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
