import CurrentNewsItem from "./CurrentNewsItem";
import ArticleItems from "../../JSON/ArticleMessages";

import { draftMode } from "next/headers";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import ContentfulImage from "@/lib/contentful-image";

function Post({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <CurrentNewsItem
      title={title}
      date={date}
      src={coverImage.url}
      URL={`/article/${slug}`}
    ></CurrentNewsItem>
  );
}

export default async function CurrentNews() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(5, 10);
  return (
    <div className="col-start-9 row-start-1 col-span-4 current--news--module">
      <h2 className="text-2xl font-bold mb-4">加拿大新闻</h2>
      <div>
        {morePosts.map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
