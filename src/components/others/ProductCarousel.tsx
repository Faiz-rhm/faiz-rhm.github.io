import React, { useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mantine/core";
import MarketCard from "./MarketCard";
import MarketTitle from "./MarketTitle";
import CustomDivider from "./CustomDivider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

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
  const router = useRouter(); // Hook for navigation

  const handleNavigation = (id: string) => {
    router.push(
      `/market/${id}`
    );
  };

  const sliderRef = useRef<Slider>(null);

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // At screen widths <= 1200px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 992, // At screen widths <= 992px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // At screen widths <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <Box
      style={{
        position: "relative",
        margin: "0 auto",
        maxWidth: "100%", // Ensure the carousel fits the container
        padding: "20px", // Add padding around the carousel
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
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent)",
          zIndex: 2,
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "100px",
          background: "linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent)",
          zIndex: 2,
        }}
      />

      {/* Carousel */}
      <Slider {...sliderSettings} ref={sliderRef}>
        {products.map((product) => (
          <MarketCard
            image={product.cover}
            name={product.name}
            description={product.description}
            price={product.price}
            onClick={() => {
              handleNavigation(product.id);
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
