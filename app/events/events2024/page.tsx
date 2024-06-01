import NewsLayout from "../../components/layouts/NewsLayout";
// import ArticleMessages from "../../components/JSON/Articles/info/InfoMasterMessages";
import React, { useState, useEffect } from "react";
import CoverImage from "../../cover-image";
import Avatar from "../../avatar";
import { MoreStories51 } from "../../more-stories";

import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import Paginate from "../../components/article/PaginateItems";
import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../JSON/MenuItems";
// import { useLocation } from 'react-router-dom';
import Link from "next/link";
import style from "@/app/style/modules/_nav.module.scss";
import ArticleListItem from "@/app/components/article/ArticleListItem";

const category = "信息资讯";

export const renderSwitch = (params) => {
  // const router = useLocation();
  // if (!params) {
  //   return "";
  // }
  const keys = Object.keys(params);
  const value = params[keys[0]];

  switch (keys[0]) {
    case "info":
      return (
        <div>
          {value.map((obj, index) => (
            <div className={style["menu--item--container"]}>
              <Link href={obj.url}>
                <span
                  key={index}
                  // className={location.pathname == `${obj.url}` ? "subactive" : ""}
                >
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

export default async function Information({ ArticleItems }) {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  const morePosts = allPosts.slice(0);
  return (
    <NewsLayout>
      <div className="row-start-1 col-span-8">
        <h3 className="text-2xl">{category}</h3>

        <MoreStories51 morePosts={morePosts} />
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
