import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Image, Text, Flex } from "@mantine/core";

interface Product {
  id: string;
  name: string; // Product name
  description: string; // Product description
  image: string; // Product image URL
  price: string; // Product price
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false, // Ensure consistent spacing
  });

  useEffect(() => {
    if (!embla) return;

    let autoplay: NodeJS.Timeout;
    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (embla) embla.scrollNext();
      }, 3000); // Slide every 3 seconds
    };

    const stopAutoplay = () => clearInterval(autoplay);

    startAutoplay();

    embla.on("pointerDown", stopAutoplay); // Pause autoplay on interaction
    embla.on("pointerUp", startAutoplay); // Resume autoplay after interaction

    return () => clearInterval(autoplay);
  }, [embla]);

  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Gradient Overlays */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "100px",
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)",
          zIndex: 1,
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "100px",
          background: "linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)",
          zIndex: 1,
        }}
      />

      {/* Carousel */}
      <Box ref={emblaRef} style={{ overflow: "hidden" }}>
        <Flex
          className="embla__container"
          style={{
            display: "flex",
            userSelect: "none",
            gap: "16px", // Space between slides
            paddingRight: "16px", // Add padding to the end of the carousel
            paddingLeft: "16px", // Add padding to the start of the carousel
            position: "relative",
            zIndex: 2, // Ensure content is above gradient
          }}
        >
          {products.map((product) => (
            <Box
            style={{
              flex: "0 0 400px", // Fixed width for each card
              height: "472px", // Fixed height for the card
              position: "relative",
              textAlign: "center",
              backgroundColor: "rgba(35, 35, 35, 0.5)", // Background color with 50% opacity
              border: "1px solid rgba(255, 255, 255, 0.1)", // Border with opacity
              borderRadius: "16px", // Rounded corners
              padding: "16px", // Space inside the card
              boxSizing: "border-box", // Include padding in width/height
              display: "flex", // Flex layout to stack image and content
              flexDirection: "column", // Stack image and other content vertically
            }}
          >
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "80%", // Image will occupy 80% of the card height
                borderRadius: "12px", // Matches the card border radius
                overflow: "hidden", // Ensures the image stays within the container
                marginBottom: "8px",
                backgroundColor: "rgba(35, 35, 35, 0.5)", // Background color for the div
                padding: "16px",
              }}
            >
              {/* Price Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "8px", // Distance from the top edge
                  right: "8px", // Distance from the right edge
                  backgroundColor: "rgba(170,255,61,0.2)", // Semi-transparent green background
                  color: "#D9D9D9", // Light gray text color
                  padding: "4px 8px", // Padding inside the tag
                  fontSize: "14px", // Font size of the price
                  fontWeight: "600", // Bold text for price
                  borderRadius: "8px", // Rounded corners for the price tag
                  zIndex: 2, // Ensures the price tag appears above the image
                }}
              >
                ${product.price}
              </div>

              {/* Image */}
              <Image
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%", // Full width of the parent container
                  height: "100%", // Full height of the parent container
                  objectFit: "contain", // Ensures the image scales nicely
                  borderRadius: "12px", // Matches the card border radius
                }}
              />
            </div>

            {/* Content Below the Image */}
            <Box style={{ flex: "1", paddingTop: "8px", textAlign: "left" }}>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#F5F5F5", // Text color
                  marginBottom: "8px",
                }}
              >
                {product.name}
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "rgba(245, 245, 245, 0.7)", // Dimmed text color
                  marginBottom: "8px",
                  fontWeight: "400",
                }}
              >
                {product.description}
              </Text>
            </Box>
          </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
