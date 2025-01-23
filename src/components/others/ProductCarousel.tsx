import React, { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Flex } from "@mantine/core";
import MarketCard from "./MarketCard";
import MarketTitle from "./MarketTitle";
import CustomDivider from "./CustomDivider";
import useEmblaCarousel from "embla-carousel-react";

interface Market {
  id: string;
  name: string;
  description: string;
  repository: string;
  cover: string;
  images: string[];
  price: string;
  tags: string[];
}

interface ProductCarouselProps {
  products: Market[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })]
  );

  // Scroll actions
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev(); // Access the Embla API to scroll to the previous slide
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext(); // Access the Embla API to scroll to the next slide
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
      <MarketTitle scrollNext={scrollNext} scrollPrev={scrollPrev} />
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

    <Box pb={10} />

      {/* Carousel */}
      <Box ref={emblaRef} style={{ overflow: "hidden" }}>
        <Flex
          className="embla__container"
          style={{
            display: "flex",
            userSelect: "none",
            gap: "16px",
            paddingRight: "16px",
            paddingLeft: "16px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {products.map((product) => (
            <MarketCard
              key={product.id}
              image={product.cover}
              name={product.name}
              description={product.description}
              price={product.price}
              onClick={() => {
                if (product.price === "FREE") {
                  window.location.href = "/market_details";
                } else {
                  window.location.href = product.repository;
                }
              }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
