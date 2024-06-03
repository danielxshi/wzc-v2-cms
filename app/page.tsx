"use client";
import style from "./style/modules/_landing.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuItems from "./JSON/LandingMenuItems";
import Carousel from "react-bootstrap/Carousel";
import buttonStyle from "../styles/modules/_button.module.scss";
import ImageWithFallback from "./components/ImageWithFallBack";
import ContentfulImage from "@/lib/contentful-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";
import logo from "@/app/public/images/logos/white-logo.png";
import test from "@/app/public/images/wzc4-mob-nav4.webp";
import car1 from "../app/public/images/pexels-james-wheeler-2782485.jpg";
import LandingMenuItems from "./JSON/LandingMenuItems";

const content = [
  {
    name: "text",
    page: 0,
    image: car1,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",

    page: 1,
    image: car1,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 2,
    image: car1,
    textOne: "text",
    textTwo: "text",
  },
];

function LandingDesktop() {
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
            <SplideSlide key={index} className="min-h-screen w-full h-screen">
              {/* <ContentfulImage
                className="d-block w-100 h-100"
                src={require(`@/app/public${item.src}`)}
                // fallbackSrc={item.fallback}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                priority
              /> */}
              <ContentfulImage
                objectFit="cover"
                layout="fill"
                // src={item.image}
                // src={require(`${item.image}`)}
                src={require(`@/app/public${item.src}`)}
                // src={test}
                // alt={item.alt}
                priority
                className={style["logo"]}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <div className={style["overlay"]}></div>

      <div className={style["logo--container--wrapper"]}>
        <div className={style["logo--container"]}>
          <ContentfulImage
            objectFit="contain"
            layout="fill"
            src={logo}
            priority
            className={style["logo"]}
          />
        </div>
      </div>

      <div className={[style["topbar"], [" hidden"]].join(" md:flex")}>
        <ul>
          {MenuItems.LandingTopBar.map((item, index) => {
            return (
              <div
                key={index}
                className={[style["topbar--item--container"], [" flex"]].join(
                  " "
                )}
              >
                <span>{item.title} :</span>
                <div className={style["item--container"]}>
                  <li className="text--shadow">{item.item}</li>
                  <li className="text--shadow">{item.item2}</li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>

      <div
        className={[
          style["content"],
          [
            " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full",
          ],
        ].join(" ")}
      >
        <div className={style["primary-nav--wrapper"]}>
          <div
            className={[style["header--wrapper"], [" flex flex-col"]].join(" ")}
          >
            <h1 className="text-6xl">加拿大温州同乡总会</h1>
            <span className="text--shadow text-center w-full mt-4 text-3xl">
              团结、互助、携手、共进
            </span>
          </div>

          <nav className="mt-4 md:flex h-[50vh] top-0 absolute w-screen hidden">
            <ul
              className={[
                style["menu"],
                [" justify-around flex flex-wrap w-full mt-auto mb-32"],
              ].join(" ")}
            >
              {MenuItems.MenuItems.map((item, index) => {
                return (
                  <li className="">
                    <Link className="text-4xl " href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

function LandingNav() {
  return (
    <section className={[style[""], [" max-h-max md:hidden block"]].join(" ")}>
      <ul
        className={[
          style["gallery"],
          style["gallery__content--flow"],
          ["flex"],
        ].join(" ")}
      >
        {MenuItems.MenuItems.map((item, index) => {
          return (
            <Link className="" href={item.link}>
              <figure className="" key={index}>
                <ContentfulImage
                  objectFit="cover"
                  layout="fill"
                  src={require(`@/app/public${item.src}`)}
                  // src={test}
                  alt={item.alt}
                  priority
                  className={style["logo"]}
                />
                <div className={style["layer"]}></div>

                <figcaption
                  className="absolute block z-10 text-white font-bold  text-shadow"
                  role="presentation"
                >
                  <span className="title title--primary text-xl text-shadow">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default function Landing() {
  return (
    <div className={style["landing--main"]}>
      <LandingDesktop />
      <LandingNav />
    </div>
  );
}
