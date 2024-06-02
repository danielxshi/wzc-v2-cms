import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import style from "../../style/modules/_articles.module.scss";
import MoreStories from "../../more-stories";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// TODO: interface needed for props
export default async function PostPage(
    { params, }: { params: { slug: string } }
) {
  const { isEnabled } = draftMode();
  const posts = await getAllPosts(isEnabled);
  const mainPost = posts.find(post => post.slug === params.slug);
  const additionalPosts = posts.filter(post => post.slug !== params.slug);

  return (
    <div className="container mx-auto px-5">
      <div>
        <div className={style["article--detail--page"]}>
          <div className="grid--container">
            <ArticleDetailSection
              category={mainPost?.category?.["category"]}
              subCategory={mainPost?.category?.["sub"]}
              articleTitle={mainPost?.title}
            >
              <div className={style["article--content--item"]}>
                <Markdown content={mainPost?.content} />
              </div>
            </ArticleDetailSection>
          </div>
        </div>
      </div>
      <MoreStories morePosts={additionalPosts} />
    </div>
  );
}
