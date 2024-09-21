import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";

const slides = [
  {
    src: "https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F122p.webp&w=1920&q=75",
    alt: "Dan Abramov",
  },
  {
    src: "https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F143p.webp&w=384&q=75",
    alt: "Dan Abramov 2",
  },
  {
    src: "https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F31p.webp&w=384&q=75",
    alt: "Dan Abramov 3",
  },
  {
    src: "https://zendine.co/_next/image/?url=https%3A%2F%2Fd3nrav7vo3lya8.cloudfront.net%2Fprofile_photos%2Fyakitori%2F2p.webp&w=384&q=75",
    alt: "Dan Abramov 4",
  },
];

const ImageSlider: React.FC = () => {
  return (
    <Flex w="calc(100vw - 32px)" height="200px">
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              borderRadius="24px"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default ImageSlider;
