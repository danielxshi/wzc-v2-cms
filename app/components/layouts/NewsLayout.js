import React from "react";
import Carousel from "../header/Carousel";
import CurrentNews from "../article/CurrentNewsModule";
import SideNav from "../navigation/SideNav";

export default function NewsLayout(props) {
  return (
    <>
      <Carousel />
      <div className="grid--container mobile--column--reverse">
        {props.children}
        {/* temp */}
      </div>
    </>
  );
}
