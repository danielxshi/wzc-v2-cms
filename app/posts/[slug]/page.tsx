import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import style from "../../style/modules/_articles.module.scss";
import style2 from "@/app/style/modules/_nav.module.scss";
import MoreStories from "../../more-stories";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";
import Link from "next/link";
import MenuItems from "@/app/JSON/MenuItems";
import SideNews from "@/app/components/organisms/SideNews";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const category = "信息资讯";

const renderSwitch = (params) => {
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
            <div className={style2["menu--item--container"]}>
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

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const posts = await getAllPosts(isEnabled);
  const mainPost = posts.find((post) => post.slug === params.slug)!;
  const additionalPosts = posts.filter((post) => post.slug !== params.slug);

  return (
    <div className="container mx-auto px-5">
      <div>
        <div className={style["article--detail--page"]}>
          <div className="grid--container">
            <ArticleDetailSection
              category={mainPost.category?.["category"]}
              subCategory={mainPost.category?.["sub"]}
              articleTitle={mainPost.title}
            >
              <div className={style["article--content--item"]}>
                <Markdown content={mainPost.content} />
              </div>
            </ArticleDetailSection>

            <SideNews category={category}>
              <ul>
                {MenuItems.SideNavMenuItems.map((items, index) => {
                  return <div key={index}>{renderSwitch(items)}</div>;
                })}
              </ul>
            </SideNews>
          </div>
        </div>
      </div>
      {/* <MoreStories morePosts={additionalPosts} /> */}
    </div>
  );
}
