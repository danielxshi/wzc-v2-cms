import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
// import ArticleItems from "../JSON/ArticleMessages";
import style from "../../style/modules/_articles.module.scss";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";

export default function ArticleListItem({
  URL,
  imgSRC,
  title,
  textPreview,
  date,
  category
}: {
  URL?: string;
  imgSRC: string;
  title: string;
  textPreview: string;
  date: string;
  category: any;
}) {
  const image = (
    <ContentfulImage
      // alt={`Cover Image for ${title}`}
      priority
      // width={2000}
      // height={1000}
      style={{ objectFit: "contain" }}
      fill={true}
      src={imgSRC}
    />
  );
  return (
    <Link className="w-full text-black" href={`/posts/${URL}`}>
      <div
        className={[
          style["article--item--container"],
          style["article--list--item"],
        ].join(" flex")}
      >
        <div className={[style["article--list--image--container"]].join("")}>
          {image}
        </div>
        <div className="w-9/12 ml-8 mt-2 mb-2 mr-8">
          <h4 className="text-base">{title}</h4>
          <p className="mb-4">{textPreview}</p>
          <small className="">{date}</small>
          <br />
          <small>{category["category"]}</small>
        </div>
      </div>
    </Link>
  );
}
