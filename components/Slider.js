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

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <Stack
        direction={{ base: "row", md: "row" }}
        align={"center"}
        justify={"center"}
        marginBottom="4rem"
      >
        <Button
          rounded={"full"}
          bg={"#FB574C"}
          color={"white"}
          _hover={{
            bg: "#FB574C",
          }}
          width={"185px"}
        >
          <b>Shop now</b>
        </Button>
      </Stack>
    </div>
  );
};

export default Slider;
