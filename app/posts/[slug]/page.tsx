import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";
import style from "../../style/modules/_articles.module.scss";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

// temp category
const category = "信息资讯";

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
      <div>
        <div className={style["article--detail--page"]}>
          <div className="grid--container">
            <ArticleDetailSection
              category={post.category["category"]}
              subCategory={post.category["sub"]}
              articleTitle={post.title}
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
