import style from "../../style/modules/_nav.module.scss";
import React, { useState, } from "react";
import MenuItems3 from "./MenuItems3";

function DesktopMenu() {
  const [click, setClick] = useState(false);

  return (
    <div
      className={
        click
          ? [style["desktop-nav-menu-wrapper"], style["active"]].join(" ")
          : [style["desktop-nav-menu-wrapper"], style["nav-menu-wrapper"]].join(
              " "
            )
      }
    >
      <ul className={style["nav-menu"]}>  
        <MenuItems3 />
      </ul>
    </div>
  );
}

export default DesktopMenu;
