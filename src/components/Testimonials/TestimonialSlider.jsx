import { useEffect, useRef, useState } from "react";

import testimonials from "../../store/testimonials.json";
import Slide from "./Slide";
import Link from "../ui/Link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const swiperElRef = useRef(null);

  return (
    <div className="pt-4 lg:pt-28 lg:mt-2 mx-4 lg:mx-0">
      <h2 className="text-center text-dark-blue text-3xl font-Be-Vietnam-Pro font-bold lg:text-[2.3rem]">
        {testimonials.title}
      </h2>

      {testimonials && testimonials.items && (
        <Swiper
          ref={swiperElRef}
          modules={[Pagination]}
          slidesPerView={"auto"}
          centerInsufficientSlides={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            1024: {
              spaceBetween: 30,
              pagination: false,
            },
          }}
        >
          {testimonials.items.map((item, index) => {
            return (
              <SwiperSlide className="max-w-[33.75rem]" key={index}>
                <Slide {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div className="pt-10 text-center lg:pt-2">
        <Link title="Get Started" href="#" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
