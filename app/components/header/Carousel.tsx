"use client";
import ContentfulImage from "@/lib/contentful-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";
import LandingMenuItems from "@/app/JSON/LandingMenuItems";

export default function Carousel() {
  return (
    <section>
      <Splide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        options={{
          type: LOOP,
          autoplay: true,
          rewind: true,
          easing: "linear",
          autoScroll: {
            speed: 6000,
            pauseOnHover: true,
            pauseOnFocus: false,
          },
        }}
      >
        {LandingMenuItems.LandingCarousel.map((item, index) => {
          return (
            <SplideSlide key={index} className="min-h-screen w-full">
              <ContentfulImage
                className="d-block w-100 h-100"
                src={require(`@/app/public${item.src}`)}
                fallbackSrc={item.fallback}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </SplideSlide>
          );
        })}
      </Splide>
      {/* <div className={style["overlay"]}></div> */}
    </section>
  );
}
