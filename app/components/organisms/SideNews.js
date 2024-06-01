import React from "react";
import CurrentNews from "../article/CurrentNewsModule";
import SideNav from "../navigation/SideNav";

export default function SideNews(props) {
  return (
    <div className="flex flex-column col-start-9 row-start-1 col-span-4 flex-col">
      <CurrentNews />
      <SideNav category={props.category}>{props.children}</SideNav>
    </div>
  );
}
