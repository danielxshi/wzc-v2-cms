import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import ArticleListItem from "./components/article/ArticleListItem";

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  category: any;
}) {
  // if (category["category"] === "info") {
  return (
    <div className="image article--list--item--border--radius">
      <ArticleListItem
        title={title}
        date={date}
        imgSRC={coverImage.url}
        textPreview={excerpt}
        URL={slug}
        category={category}
      ></ArticleListItem>
    </div>
  );
  // }
}

// Info > Association

function HeroPost2({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  category: any;
}) {
  if (category["category"] === "info") {
    return (
      <div className="image bg--primary--white article--list--item--border--radius">
        <ArticleListItem
          title={title}
          date={date}
          imgSRC={coverImage.url}
          textPreview={excerpt}
          URL={slug}
          category={category}
        ></ArticleListItem>
      </div>
    );
  }
}

// Info > Association
export function MoreStories2({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost2
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          category={post.category}
        />
      ))}
    </>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          category={post.category}
        />
      ))}
    </>
  );
}
