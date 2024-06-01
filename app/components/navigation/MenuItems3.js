"use client";
import style from "../../style/modules/_nav.module.scss";
import MenuMessages from "../../JSON/MenuItems";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

const renderSwitch = (params) => {
  const router = usePathname();
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];
  const test = params[keys[1]];

  switch (keys[0]) {
    case "menu":
      return (
        <div className="menu--container">
          {value.map((item, index) => (
            <div key={index} className="dropdown">
              <Link
                className={
                  { router } == `${item.url}` ||
                  { router } == `${item.p1}` ||
                  { router } == `${item.p2}` ||
                  { router } == `${item.p3}` ||
                  { router } == `${item.p4}` ||
                  { router } == `${item.p5}` ||
                  { router } == `${item.p6}`
                    ? "active"
                    : ""
                }
                href={item.url}
              >
                {item.title}
              </Link>
              <ul className="dropdown-content">
                {item.submenu.map((item2, index2) => {
                  return (
                    <Link className="whitespace-nowrap" href={item2.url}>
                      {/* key={index2} */}
                      {/* className= */}
                      {{ router } == `${item2.url}` ? "superactive" : ""}
                      {item2.subtitle}
                    </Link>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      );

    default:
      return "";
  }
};

export default function MenuItems3(props) {
  return (
    <>
      {MenuMessages.NavMenuItems2.map((items, index) => {
        return (
          <div className={[style["menu--content--item"]].join(" ")} key={index}>
            {renderSwitch(items)}
          </div>
        );
      })}
    </>
  );
}
