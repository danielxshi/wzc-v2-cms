import NewsLayout from "../../components/layouts/NewsLayout";
import { MoreStories51 } from "../../more-stories";

import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../JSON/MenuItems";
import Link from "next/link";
import style from "@/app/style/modules/_nav.module.scss";

const category = "信息资讯";

// TODO: interface needed
const renderSwitch = (params: any) => {
  const keys = Object.keys(params);
  const value = params[keys[0]];

  switch (keys[0]) {
    case "info":
      return (
        <div>
          {value.map((obj: any, index: number) => (
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
  console.log(allPosts);
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
