'use client'

import CustomDivider from "../../components/others/CustomDivider";
import { Footer } from "@/components/footer/Footer";
import { Box } from "@mantine/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarketDetails from "../../components/others/MarketDetails";

const imageList = [
  "/images/market/spotify_1.png",
  "/images/market/spotify_2.png",
  "/images/market/spotify_3.png",
  "/images/market/spotify_4.png",
  "/images/market/spotify_5.png",
];

export default function Projects() {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (in ms)
  };

  const chips = ["Flutter", "React", "Node.js", "GraphQL"];

  return (
    <>
      <Box pb={100} />

      <MarketDetails
        settings={settings}
        imageList={imageList}
        title="Your Heading Here"
        description="Your description goes here. Add as much text as needed to explain the content related to the image on the left. You can style it further as per your requirements."
        chips={chips} // Pass the chips list
        buttonUrl={''}
      />

      <Box pb={100} />

      <CustomDivider/>

      <Footer/>

      <Box pb={50} />
    </>
  );
}
