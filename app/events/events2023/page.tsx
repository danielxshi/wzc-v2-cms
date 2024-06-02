import NewsLayout from "../../components/layouts/NewsLayout";
import React from "react";
import { MoreStories5 } from "../../more-stories";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../JSON/MenuItems";
import Link from "next/link";
import style from "@/app/style/modules/_nav.module.scss";

const category = "信息资讯";

const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = params[keys[0]];
  switch (keys[0]) {
    case "info":
      return (
        <div>
          {value.map((obj, index) => (
            <div className={style["menu--item--container"]}>
              <Link href={obj.url}>
                <span key={index}>
                  {obj.subtitle}
                </span>
              </Link>
            </div>
          ))}
        </div>
      );
    default:
      return "";
  }
};

export default async function Information({}) {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  return (
    <NewsLayout>
      <div className="row-start-1 col-span-8">
        <h3 className="text-2xl">{category}</h3>

        <MoreStories5 morePosts={allPosts} />
      </div>

      <SideNews category={category}>
        <ul>
          {MenuItems.SideNavMenuItems.map((items, index) => {
            return <div key={index}>{renderSwitch(items)}</div>;
          })}
        </ul>
      </SideNews>
    </NewsLayout>
  );
}
