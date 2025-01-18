import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex } from "@mantine/core";
import MarketCard from "./MarketCard";
import MarketTitle from "./MarketTitle"; // Import MarketTitle component
import CustomDivider from "./CustomDivider"; // Import CustomDivider component
import CircularButton from "@/components/others/CircleButton"; // Ensure CircularButton is available
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

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

  const scrollPrev = () => {
    if (embla) embla.scrollPrev();
  };

  const scrollNext = () => {
    if (embla) embla.scrollNext();
  };

  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Add Title and Divider */}
      <MarketTitle  scrollNext={scrollNext} scrollPrev={scrollPrev}/>

      <CustomDivider />

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
            <MarketCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
