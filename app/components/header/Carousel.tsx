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
        {LandingMenuItems.Carousel.map((item, index) => {
          return (
            <SplideSlide key={index} className=" w-full block h-[50vh]">
              <ContentfulImage
                objectFit="cover"
                layout="fill"
                // src={item.image}
                // src={require(`${item.image}`)}
                src={require(`@/app/public${item.src}`)}
                // src={test}
                // alt={item.alt}
                priority
              />
              <div className="flex w-full h-full align-bottom text-center z-100 justify-center">
                <p className="carousel-text text-6xl z-[1000] bottom-0 mt-auto mb-16 h-fit text-white">
                  {item.text}
                </p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      {/* <div className={style["overlay"]}></div> */}
    </section>
  );
}
