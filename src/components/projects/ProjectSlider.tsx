'use client';

import Slider from 'react-slick';
import { Image } from '@mantine/core';

interface ProjectSliderProps {
  images: string[];
  projectName: string;
}

export default function ProjectSlider({ images, projectName }: ProjectSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      style={{
        flex: '1',
        maxWidth: '500px',
        minWidth: '470px',
        height: '520px',
        backgroundColor: 'rgba(35, 35, 35, 0.5)',
        borderRadius: '32px',
        padding: '20px 50px',
      }}
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`${projectName} - Image ${index + 1}`}
              style={{
                height: '450px',
                width: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
