import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";
import style from "../../style/modules/_articles.module.scss";

import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../JSON/MenuItems";
// import { useRouter } from "next/router";
import style2 from "../../style/modules/_nav.module.scss";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

// temp category
const category = "信息资讯";

// export const renderSwitch2 = (params) => {
//   // const router = useRouter();
//   if (!params) {
//     return "";
//   }
//   // const keys = Object.keys(params);
//   // const value = params[keys[0]];

//   switch (params) {
//     case "information":
//       return (
//         <ul>
//           {MenuItems.InfoSideNav.map((item, index) => {
//             return (
//               <div className={style2["menu--item--container"]}>
//                 <Link href={item.url}>{item.subtitle}</Link>
//               </div>
//             );
//           })}
//         </ul>
//       );

//     case "event":
//       return (
//         <ul>
//           {MenuItems.EventSideNav.map((item, index) => {
//             return (
//               <div className={style2["menu--item--container"]}>
//                 <Link href={item.url}>{item.subtitle}</Link>
//               </div>
//             );
//           })}
//         </ul>
//       );

//     case "CulturalPark":
//       return (
//         <ul>
//           {MenuItems.CultureSideNav.map((item, index) => {
//             return (
//               <div className={style2["menu--item--container"]}>
//                 <Link href={item.url}>{item.subtitle}</Link>
//               </div>
//             );
//           })}
//         </ul>
//       );

//     default:
//       return "";
//   }
// };

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      {/* <article>
        <h1 className="mb-12 mt-36 uppercase text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-4xl md:leading-none lg:text-7xl">
          {post.title}
        </h1>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" /> */}

      <div>
        <div className={style["article--detail--page"]}>
          <div className="grid--container">
            <ArticleDetailSection
              // categoryClass={currentItem.categoryClass}
              // subCategoryClass={currentItem.subCategoryClass}
              category={post.category["category"]}
              // parentDirectory={currentItem.parentDirectory}
              subCategory={post.category["sub"]}
              articleTitle={post.title}
              // subDirectory={currentItem.subDirectory}
            >
              <div className={style["article--content--item"]}>
                <Markdown content={post.content} />
              </div>
            </ArticleDetailSection>
            {/* <CurrentNews /> */}
            {/* <SideNews category={category}>
              {renderSwitch2(currentItem.categoryClass)}
            </SideNews> */}
          </div>
        </div>
      </div>
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
