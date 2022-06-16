import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Stack } from "@chakra-ui/react";

import Card from "./Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ items }) => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {items.slice(2, 8).map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card name={item.name} price={item.price} img={item.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Stack
        direction={{ base: "row", md: "row" }}
        align={"center"}
        justify={"center"}
        marginBottom="4rem"
      ></Stack>
    </div>
  );
};

export default Slider;
