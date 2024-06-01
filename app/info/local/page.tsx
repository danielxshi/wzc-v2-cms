import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../JSON/Articles/info/LocalMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateLocalSponsorItems";
import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../JSON/MenuItems";
// import { useRouter } from "next/router";
import Link from "next/link";
import style from "../../style/modules/_nav.module.scss";
import ArticleListItem, {
  LocalItem,
} from "@/app/components/article/ArticleListItem";

const category = "当地生活信息";

const renderSwitch = (params) => {
  //   const router = useRouter();
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];

  switch (keys[0]) {
    case "info":
      return (
        <div>
          {value.map((obj, index) => (
            <div className={style["menu--item--container"]}>
              <Link href={obj.url}>
                {/* <a
                  key={index}
                  className={router.pathname == `${obj.url}` ? "subactive" : ""}
                > */}
                {obj.subtitle}
                {/* </a> */}
              </Link>
            </div>
          ))}
        </div>
      );

    default:
      return "";
  }
};
function Local() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const response = ArticleMessages.LocalListMessages;
  //     setData(response);
  //   }, []);

  return (
    <NewsLayout>
      <div className="row-start-1 col-span-8">
        <h3 className="text-2xl">{category}</h3>
        <div>
          {ArticleMessages.LocalListMessages.map((currentItems) => {
            return (
              <div className="image">
                <LocalItem
                  category={category}
                  title={currentItems.article.title}
                  date={currentItems.article.date}
                  imgSRC={currentItems.article.imageURL}
                  URL={currentItems.article.link}
                ></LocalItem>
              </div>
            );
          })}{" "}
        </div>
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

export default Local;
