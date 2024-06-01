import ArticleItems from "../../JSON/ArticleMessages";
import ContentfulImage from "@/lib/contentful-image";
import style from "../../style/modules/_articles.module.scss";
import ArticleModuleLarge from "./ArticleModuleLarge";

import { draftMode } from "next/headers";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";

function HeroPost({
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
    <ArticleModuleLarge
      title={title}
      date={date}
      excerpt={excerpt}
      cover={coverImage.url}
      url={slug}
    />
  );
}

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
    <div className="max-h-max flex flex-col">
      <ContentfulImage
        objectFit="cover"
        layout="intrinsic"
        src={coverImage.url}
        height={235}
        width={419}
        priority
      />
      <div className="mt-2 p-2">
        <h3 className="text-base font-bold">{title}</h3>
        <div className="flex justify-between flex-wrap flex-row mt-2">
          <small className="flex content-center">{date}</small>
          <a
            className="whitespace-nowrap text-base text-blue-500 m-0 mr-0"
            href={`/posts/${slug}`}
            >
            阅读全文
          </a>
        </div>
      </div>
    </div>
  );
}

export default async function ArticleModule() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1, 5);
  return (
    <div className={style["current--news--section--container"]}>
      <h2 className="text-2xl font-bold mb-4">加拿大温州同乡总会</h2>
      <div className={style["article--flex--container"]}>
        {/* <ArticleModuleLarge /> */}
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}

        <div className={[style["news--flex"], style["news--small"]].join(" ")}>
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
    </div>
  );
}
