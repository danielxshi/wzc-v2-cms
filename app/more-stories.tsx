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
  }
}

// Info > Canada

function HeroPost3({
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
  if (category["sub"] === "cdn") {
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
  }
}

// Info > China

function HeroPost31({
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
  if (category["sub"] === "china") {
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
  }
}
// Info > Canada

function HeroPost4({
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
  if (category["category"] === "events") {
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
  }
}

// Events > 2023

function HeroPost5({
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
  if (category["sub"] === "2023") {
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
  }
}

// Events > 2023

function HeroPost51({
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
  if (category["sub"] === "2024") {
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
  }
}

function HeroPost6({
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
  if (category["sub"] === "2022") {
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
  }
}

function HeroPost7({
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
  if (category["sub"] === "2021") {
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
  }
}

function HeroPost8({
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
  if (category["sub"] === "2020") {
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
  }
}

function HeroPost9({
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
  if (category["sub"] === "2019") {
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
  }
}

function HeroPost10({
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
  if (category["sub"] === "art") {
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
  }
}

function HeroPost11({
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
  if (category["sub"] === "art") {
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
  }
}
function HeroPost12({
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
  if (category["category"] === "culture") {
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
  }
}


function HeroPost13({
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
  if (category["category"] === "events") {
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

// Info > Canada
export function MoreStories3({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost3
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


// Info > China
export function MoreStories31({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost31
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

// Info > Events
export function MoreStories4({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost4
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

// Info > Events 2023
export function MoreStories5({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost5
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


// Info > Events 2023
export function MoreStories51({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost51
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

// Info > Events 2022
export function MoreStories6({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost6
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

// Info > Events 2021
export function MoreStories7({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost7
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

// Info > Events 2020
export function MoreStories8({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost8
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

// Info > Events 2019
export function MoreStories9({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost9
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

// Culture > art
export function MoreStories10({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost10
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
// Culture > wenzhou
export function MoreStories11({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost11
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

// Culture 
export function MoreStories12({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost12
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


// Events 
export function MoreStories13({ morePosts }: { morePosts: any[] }) {
  return (
    <>
      {morePosts.map((post) => (
        <HeroPost13
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
